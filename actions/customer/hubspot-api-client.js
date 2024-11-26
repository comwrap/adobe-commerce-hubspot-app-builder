const hubspot = require('@hubspot/api-client');

async function createContact(token, data) {
    const hubspotClient = new hubspot.Client({"accessToken": `${token}`});

    const properties = data
    const SimplePublicObjectInputForCreate = { associations: [], properties };

    return await hubspotClient.crm.contacts.basicApi.create(SimplePublicObjectInputForCreate);
}

async function updateContact(token, data, contactId) {
    const hubspotClient = new hubspot.Client({"accessToken": `${token}`})
    const properties = data

    const SimplePublicObjectInput = { properties }

    return await hubspotClient.crm.contacts.basicApi.update(contactId, SimplePublicObjectInput)
}

async function createCompany(token, data) {
    const hubspotClient = new hubspot.Client({"accessToken": `${token}`});

    const properties = data
    const SimplePublicObjectInputForCreate = { associations: [], properties };

    return await hubspotClient.crm.companies.basicApi.create(SimplePublicObjectInputForCreate);
}

async function updateCompany(token, data, contactId) {
    const hubspotClient = new hubspot.Client({"accessToken": `${token}`})
    const properties = data

    const SimplePublicObjectInput = { properties }

    return await hubspotClient.crm.companies.basicApi.update(contactId, SimplePublicObjectInput)
}

async function getContactsPage(token, limit, after) {
    const hubspotClient = new hubspot.Client({"accessToken": `${token}`});

    return await hubspotClient.crm.contacts.basicApi.getPage(
        limit,   // Number of records per page
        after   // Cursor for pagination
    );
}

async function getContactAddressProperties(token, contactId) {
    const hubspotClient = new hubspot.Client({"accessToken": `${token}`});

    const properties = [
        "address",
        "city",
        "state",
        "zip",
        "country"
    ];

    return await hubspotClient.crm.contacts.basicApi.getById(contactId, properties);
}

async function getCompanyByExternalId(token, externalId) {
    const hubspotClient = new hubspot.Client({"accessToken": `${token}`});

    const properties = [
        "id"
    ];

    return await hubspotClient.crm.companies.searchApi.doSearch({
        "filterGroups": [
            {
                "filters": [
                    {
                        "propertyName": "external_company_id",
                        "operator": "CONTAINS_TOKEN",
                        "value": externalId
                    }
                ]
            }
        ]
    })
}

module.exports = {
    createContact,
    getContactsPage,
    updateContact,
    getContactAddressProperties,
    createCompany,
    updateCompany,
    getCompanyByExternalId
}
