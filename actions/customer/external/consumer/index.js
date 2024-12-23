/*
Copyright 2022 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

const { Core } = require('@adobe/aio-sdk')
const { stringParameters, checkMissingRequestInputs } = require('../../../utils')
const { HTTP_INTERNAL_ERROR, HTTP_BAD_REQUEST, HTTP_OK } = require('../../../constants')
const Openwhisk = require('../../../openwhisk')
const { errorResponse, successResponse } = require('../../../responses')
const stateLib = require('@adobe/aio-lib-state')
const { isAPotentialInfiniteLoop, storeFingerPrint } = require('../../../infiniteLoopCircuitBreaker')

/**
 * This is the consumer of the events coming from External back-office applications related to Customer entity.
 *
 * @returns {object} returns response object with status code, request data received and response of the invoked action
 * @param {object} params - includes the env params, type and the data of the event
 */
async function main (params) {
  const logger = Core.Logger('customer-external-consumer', { level: params.LOG_LEVEL || 'info' })

  // Create a state instance
  const state = await stateLib.init()

  try {
    const openwhiskClient = new Openwhisk(params.API_HOST, params.API_AUTH)

    let response = {}
    let statusCode = HTTP_OK

    logger.info('Start processing request')
    logger.debug(`Consumer main params: ${stringParameters(params)}`)

    // check for missing request input parameters and headers
    const requiredParams = ['type', 'data']
    const errorMessage = checkMissingRequestInputs(params, requiredParams, [])

    if (errorMessage) {
      logger.error(`Invalid request parameters: ${errorMessage}`)
      return errorResponse(HTTP_BAD_REQUEST, `Invalid request parameters: ${errorMessage}`)
    }

    logger.info(`Params type: ${params.type}`)

    // Detect infinite loop and break it
    const infiniteLoopEventTypes = [
      'be-observer.customer_update'
    ]
    let infiniteLoopKey = ''
    let fingerPrintData = {}
    if (state && infiniteLoopEventTypes.includes(params.type)) {
      const emailWithoutAt = params.data.email.replace(/@/g, '')
      infiniteLoopKey = `customer_${emailWithoutAt}`
      fingerPrintData = { email: params.data.email }

      if (await isAPotentialInfiniteLoop(state, infiniteLoopKey, fingerPrintData, infiniteLoopEventTypes, params.type)) {
        logger.info(`Infinite loop break for customer ${params.data.email}`)
        return successResponse(params.type, 'event discarded to prevent infinite loop')
      }
    }

    switch (params.type) {
      case 'be-observer.contacts.batch': {
        logger.info('Invoking customer batch creation')
        const createRes = await openwhiskClient.invokeAction(
          'customer-backoffice/batch', params.data)
        response = createRes?.response?.result?.body
        statusCode = createRes?.response?.result?.statusCode
        break
      }
      case 'be-observer.customer_update': {
        logger.info('Invoking customer update')
        const updateRes = await openwhiskClient.invokeAction('customer-backoffice/updated', params.data)
        response = updateRes?.response?.result?.body
        statusCode = updateRes?.response?.result?.statusCode
        break
      }
      default:
        logger.error(`Event type not found: ${params.type}`)
        return errorResponse(HTTP_BAD_REQUEST, `This case type is not supported: |${params.type}|`)
    }

    if (!response.success) {
      logger.error(`Error response: ${response.error}`)
      return errorResponse(statusCode, response.error)
    }

    // Prepare to detect infinite loop on subsequent events
    if (state && infiniteLoopEventTypes.includes(params.type)) {
      await storeFingerPrint(state, infiniteLoopKey, fingerPrintData)
    }

    logger.info(`Successful request: ${statusCode}`)
    return successResponse(params.type, response)
  } catch (error) {
    logger.error(`Server error: ${error.message}`)
    return errorResponse(HTTP_INTERNAL_ERROR, error.message)
  }
}

exports.main = main
