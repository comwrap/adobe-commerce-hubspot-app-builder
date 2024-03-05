/*
 * Copyright 2023 Adobe
 * All Rights Reserved.
 *
 * NOTICE: All information contained herein is, and remains
 * the property of Adobe and its suppliers, if any. The intellectual
 * and technical concepts contained herein are proprietary to Adobe
 * and its suppliers and are protected by all applicable intellectual
 * property laws, including trade secret and copyright laws.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe.
 */

const { getCommerceOauthClient } = require('../oauth1a')
const { Core } = require('@adobe/aio-sdk')
const logger = Core.Logger('commerce-consumer-api-client', 'info')

/**
 * This function call Adobe commerce rest API to create a customer
 *
 * @returns {object} - API response object
 * @param {string} baseUrl - Adobe commerce rest api base url
 * @param {string} consumerKey - Adobe commerce integration consumer key
 * @param {string} consumerSecret - Adobe commerce integration consumer secret
 * @param {string} accessToken - Adobe commerce integration access token
 * @param {string} accessTokenSecret - Adobe commerce integration access token secret
 * @param {object} data - Adobe commerce api payload
 */
async function createCustomer (baseUrl, consumerKey, consumerSecret, accessToken, accessTokenSecret, data) {
  const client = getCommerceOauthClient(
    {
      url: baseUrl,
      consumerKey,
      consumerSecret,
      accessToken,
      accessTokenSecret
    },
    logger
  )

  return await client.post(
    'customers',
    JSON.stringify(data),
    '',
    { 'Content-Type': 'application/json' }
  )
}

/**
 * This function call Adobe commerce rest API to update a customer
 *
 * @returns {object} - API response object
 * @param {string} baseUrl - Adobe commerce rest api base url
 * @param {string} consumerKey - Adobe commerce integration consumer key
 * @param {string} consumerSecret - Adobe commerce integration consumer secret
 * @param {string} accessToken - Adobe commerce integration access token
 * @param {string} accessTokenSecret - Adobe commerce integration access token secret
 * @param {object} data - Adobe commerce api payload
 */
async function updateCustomer (baseUrl, consumerKey, consumerSecret, accessToken, accessTokenSecret, data) {
  const client = getCommerceOauthClient(
    {
      url: baseUrl,
      consumerKey,
      consumerSecret,
      accessToken,
      accessTokenSecret
    },
    logger
  )
  return await client.put(
      `customers/${data.customer.id}`,
      JSON.stringify(data),
      '',
      { 'Content-Type': 'application/json' }
  )
}

/**
 * This function call Adobe commerce rest API to delete a customer
 *
 * @returns {object} - API response object
 * @param {string} baseUrl - Adobe commerce rest api base url
 * @param {string} consumerKey - Adobe commerce integration consumer key
 * @param {string} consumerSecret - Adobe commerce integration consumer secret
 * @param {string} accessToken - Adobe commerce integration access token
 * @param {string} accessTokenSecret - Adobe commerce integration access token secret
 * @param {number} id - Id
 */
async function deleteCustomer (baseUrl, consumerKey, consumerSecret, accessToken, accessTokenSecret, id) {
  const client = getCommerceOauthClient(
    {
      url: baseUrl,
      consumerKey,
      consumerSecret,
      accessToken,
      accessTokenSecret
    },
    logger
  )
  return await client.delete(`customers/${id}`)
}

module.exports = {
  createCustomer,
  updateCustomer,
  deleteCustomer
}
