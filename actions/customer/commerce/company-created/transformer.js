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

/**
 * This function transform the received customer data from Adobe commerce to external back-office application
 *
 * @param {object} data - Data received from Adobe commerce
 * @returns {object} - Returns transformed data object
 */
function transformData (data) {
  return {
    name: `${data.company_name}`,
    city: `${data.city}`,
    phone: `${data.telephone}`,
    state: `${data.region_id}`,
    country: `${data.country_id}`,
    external_company_id: `${data.entity_id}`
  }
}

module.exports = {
  transformData
}
