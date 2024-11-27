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

// eslint-disable-next-line node/no-missing-require
const validator = require('../../../../../actions/order/external/shipment-updated/validator')

describe('Given order external shipment updated validator', () => {
  describe('When method validateData is defined', () => {
    test('Then is an instance of Function', () => {
      expect(validator.validateData).toBeInstanceOf(Function)
    })
  })
  describe('When data to validate is valid', () => {
    it.each([
      [{
        data: {
          id: 9,
          orderId: 6,
          items: [{ entityId: 12, orderItemId: 7, qty: 1 }],
          tracks: [{ entityId: 13, trackNumber: 'Custom Value', title: 'Custom Title', carrierCode: 'custom' }],
          comments: [{ entityId: 14, notifyCustomer: false, comment: 'Order Shipped from API', visibleOnFront: true }],
          stockSourceCode: 'default'
        }
      }]
    ])('Then for %o,  returns successful response', (params) => {
      const SUCCESSFUL_RESPONSE = { success: true }
      expect(validator.validateData(params)).toMatchObject(SUCCESSFUL_RESPONSE)
    })
  })
  describe('When data to validate is not valid', () => {
    it.each([
      [{ data: { id: 9, orderId: 6 } }],
      [{
        data: {
          id: '9',
          orderId: '6',
          items: [{ entityId: '12', orderItemId: '7', qty: '1' }],
          tracks: [{ entityId: '13', trackNumber: 'Custom Value', title: 'Custom Title', carrierCode: 'custom' }],
          comments: [{ entityId: '14', notifyCustomer: 0, comment: 'Order Shipped from API', visibleOnFront: 1 }],
          stockSourceCode: 'default'
        }
      }] // wrong type property
    ])('Then for %o,  returns error response', (params) => {
      const UNSUCCESSFUL_RESPONSE = { success: false }
      expect(validator.validateData(params)).toMatchObject(UNSUCCESSFUL_RESPONSE)
    })
  })
})
