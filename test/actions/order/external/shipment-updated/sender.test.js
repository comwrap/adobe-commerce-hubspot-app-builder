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

jest.mock('../../../../../actions/order/commerceShipmentApiClient')
const { updateShipment } = require('../../../../../actions/order/commerceShipmentApiClient')

const sender = require('../../../../../actions/order/external/shipment-updated/sender')

describe('Order Shipment external updated sender', () => {
  test('sendData should be defined', () => {
    expect(sender.sendData).toBeInstanceOf(Function)
  })
  test('calls update shipment', async () => {
    const params = {}
    const transformed = {}
    const preprocess = {}
    await sender.sendData(params, transformed, preprocess)
    expect(updateShipment).toHaveBeenCalled()
  })
})
