/* 
* <license header>
*/

jest.mock('node-fetch')
const fetch = require('node-fetch')
const action = require('../../onboarding/providers.js')
const ACCESS_TOKEN = 'token';

afterEach(() => {
  jest.clearAllMocks()
  jest.resetModules()
})

describe('On-boarding providers', () => {
  test('main should be defined', () => {
    expect(action.main).toBeInstanceOf(Function)
  })
  test('should create all providers', async () => {
    const commerceProviderId = 'COMMERCE_PROVIDER_ID';
    const backofficeProviderId = 'BACKOFFICE_PROVIDER_ID';

    const mockFetchGetExistingProvidersResponse = {
      ok: true,
      json: () => Promise.resolve({
          "_embedded": {
            "providers": [
              {
                "id": "string",
                "label": "string",
                "description": "string",
                "source": "string",
                "docs_url": "string",
                "publisher": "string",
                "_embedded": {
                  "eventmetadata": [
                    {
                      "description": "string",
                      "label": "string",
                      "event_code": "string",
                      "_embedded": {
                        "sample_event": {
                          "format": "string",
                          "sample_payload": "string",
                          "_links": {}
                        }
                      },
                      "_links": {
                        "rel:sample_event": {
                          "href": "string",
                          "templated": true,
                          "type": "string",
                          "deprecation": "string",
                          "name": "string",
                          "profile": "http://example.com",
                          "title": "string",
                          "hreflang": "string",
                          "seen": "string"
                        },
                        "rel:update": {
                          "href": "string",
                          "templated": true,
                          "type": "string",
                          "deprecation": "string",
                          "name": "string",
                          "profile": "http://example.com",
                          "title": "string",
                          "hreflang": "string",
                          "seen": "string"
                        },
                        "self": {
                          "href": "string",
                          "templated": true,
                          "type": "string",
                          "deprecation": "string",
                          "name": "string",
                          "profile": "http://example.com",
                          "title": "string",
                          "hreflang": "string",
                          "seen": "string"
                        }
                      }
                    }
                  ]
                },
                "_links": {
                  "rel:eventmetadata": {
                    "href": "string",
                    "templated": true,
                    "type": "string",
                    "deprecation": "string",
                    "name": "string",
                    "profile": "http://example.com",
                    "title": "string",
                    "hreflang": "string",
                    "seen": "string"
                  },
                  "rel:update": {
                    "href": "string",
                    "templated": true,
                    "type": "string",
                    "deprecation": "string",
                    "name": "string",
                    "profile": "http://example.com",
                    "title": "string",
                    "hreflang": "string",
                    "seen": "string"
                  },
                  "self": {
                    "href": "string",
                    "templated": true,
                    "type": "string",
                    "deprecation": "string",
                    "name": "string",
                    "profile": "http://example.com",
                    "title": "string",
                    "hreflang": "string",
                    "seen": "string"
                  }
                }
              }
            ]
          },
          "_links": {
            "self": {
              "href": "string",
              "templated": true,
              "type": "string",
              "deprecation": "string",
              "name": "string",
              "profile": "http://example.com",
              "title": "string",
              "hreflang": "string",
              "seen": "string"
            }
          }
      })
    }
    const mockFetchCreateCommerceProviderResponse = {
      ok: true,
      json: () => Promise.resolve({
          "id": commerceProviderId,
          "label": "Commerce Provider",
          "description": "string",
          "source": "string",
          "docs_url": "string",
          "instance_id": "AC_INSTANCE_ID",
          "publisher": "string",
          "_embedded": {
            "eventmetadata": [
              {
                "description": "string",
                "label": "string",
                "event_code": "string",
                "_embedded": {
                  "sample_event": {
                    "format": "string",
                    "sample_payload": "string",
                    "_links": {}
                  }
                },
                "_links": {
                  "rel:sample_event": {
                    "href": "string",
                    "templated": true,
                    "type": "string",
                    "deprecation": "string",
                    "name": "string",
                    "profile": "http://example.com",
                    "title": "string",
                    "hreflang": "string",
                    "seen": "string"
                  },
                  "rel:update": {
                    "href": "string",
                    "templated": true,
                    "type": "string",
                    "deprecation": "string",
                    "name": "string",
                    "profile": "http://example.com",
                    "title": "string",
                    "hreflang": "string",
                    "seen": "string"
                  },
                  "self": {
                    "href": "string",
                    "templated": true,
                    "type": "string",
                    "deprecation": "string",
                    "name": "string",
                    "profile": "http://example.com",
                    "title": "string",
                    "hreflang": "string",
                    "seen": "string"
                  }
                }
              }
            ]
          },
          "_links": {
            "rel:eventmetadata": {
              "href": "string",
              "templated": true,
              "type": "string",
              "deprecation": "string",
              "name": "string",
              "profile": "http://example.com",
              "title": "string",
              "hreflang": "string",
              "seen": "string"
            },
            "rel:update": {
              "href": "string",
              "templated": true,
              "type": "string",
              "deprecation": "string",
              "name": "string",
              "profile": "http://example.com",
              "title": "string",
              "hreflang": "string",
              "seen": "string"
            },
            "self": {
              "href": "string",
              "templated": true,
              "type": "string",
              "deprecation": "string",
              "name": "string",
              "profile": "http://example.com",
              "title": "string",
              "hreflang": "string",
              "seen": "string"
            }
          }
      })
    }
    const mockFetchCreateBackofficeProviderResponse = {
      ok: true,
      json: () => Promise.resolve({
          "id": backofficeProviderId,
          "label": "Backoffice Provider",
          "description": "string",
          "source": "string",
          "docs_url": "string",
          "instance_id": "BO_INSTANCE_ID",
          "publisher": "string",
          "_embedded": {
            "eventmetadata": [
              {
                "description": "string",
                "label": "string",
                "event_code": "string",
                "_embedded": {
                  "sample_event": {
                    "format": "string",
                    "sample_payload": "string",
                    "_links": {}
                  }
                },
                "_links": {
                  "rel:sample_event": {
                    "href": "string",
                    "templated": true,
                    "type": "string",
                    "deprecation": "string",
                    "name": "string",
                    "profile": "http://example.com",
                    "title": "string",
                    "hreflang": "string",
                    "seen": "string"
                  },
                  "rel:update": {
                    "href": "string",
                    "templated": true,
                    "type": "string",
                    "deprecation": "string",
                    "name": "string",
                    "profile": "http://example.com",
                    "title": "string",
                    "hreflang": "string",
                    "seen": "string"
                  },
                  "self": {
                    "href": "string",
                    "templated": true,
                    "type": "string",
                    "deprecation": "string",
                    "name": "string",
                    "profile": "http://example.com",
                    "title": "string",
                    "hreflang": "string",
                    "seen": "string"
                  }
                }
              }
            ]
          },
          "_links": {
            "rel:eventmetadata": {
              "href": "string",
              "templated": true,
              "type": "string",
              "deprecation": "string",
              "name": "string",
              "profile": "http://example.com",
              "title": "string",
              "hreflang": "string",
              "seen": "string"
            },
            "rel:update": {
              "href": "string",
              "templated": true,
              "type": "string",
              "deprecation": "string",
              "name": "string",
              "profile": "http://example.com",
              "title": "string",
              "hreflang": "string",
              "seen": "string"
            },
            "self": {
              "href": "string",
              "templated": true,
              "type": "string",
              "deprecation": "string",
              "name": "string",
              "profile": "http://example.com",
              "title": "string",
              "hreflang": "string",
              "seen": "string"
            }
          }
      })
    }

    fetch.mockResolvedValueOnce(mockFetchGetExistingProvidersResponse)
        .mockResolvedValueOnce(mockFetchCreateCommerceProviderResponse)
        .mockResolvedValueOnce(mockFetchCreateBackofficeProviderResponse);

    let clientRegistrations = require('../data/onboarding/providers/create_commerce_and_backoffice_providers.json');

    const response = await action.main(clientRegistrations, ACCESS_TOKEN)

    expect(response).toEqual({
      code: 200,
      success: true,
      result: [
        {
          key: 'commerce',
          id: commerceProviderId,
          instanceId: "AC_INSTANCE_ID",
          label: 'Commerce Provider'
        },
        {
          key: 'backoffice',
          id: backofficeProviderId,
          instanceId: "BO_INSTANCE_ID",
          label: 'Backoffice Provider'
        }
      ]
    })
  })
  test('should create commerce provider only', async () => {
    const commerceProviderId = 'COMMERCE_PROVIDER_ID';

    const mockFetchGetExistingProvidersResponse = {
      ok: true,
      json: () => Promise.resolve({
        "_embedded": {
          "providers": [
            {
              "id": "string",
              "label": "string",
              "description": "string",
              "source": "string",
              "docs_url": "string",
              "publisher": "string",
              "_embedded": {
                "eventmetadata": [
                  {
                    "description": "string",
                    "label": "string",
                    "event_code": "string",
                    "_embedded": {
                      "sample_event": {
                        "format": "string",
                        "sample_payload": "string",
                        "_links": {}
                      }
                    },
                    "_links": {
                      "rel:sample_event": {
                        "href": "string",
                        "templated": true,
                        "type": "string",
                        "deprecation": "string",
                        "name": "string",
                        "profile": "http://example.com",
                        "title": "string",
                        "hreflang": "string",
                        "seen": "string"
                      },
                      "rel:update": {
                        "href": "string",
                        "templated": true,
                        "type": "string",
                        "deprecation": "string",
                        "name": "string",
                        "profile": "http://example.com",
                        "title": "string",
                        "hreflang": "string",
                        "seen": "string"
                      },
                      "self": {
                        "href": "string",
                        "templated": true,
                        "type": "string",
                        "deprecation": "string",
                        "name": "string",
                        "profile": "http://example.com",
                        "title": "string",
                        "hreflang": "string",
                        "seen": "string"
                      }
                    }
                  }
                ]
              },
              "_links": {
                "rel:eventmetadata": {
                  "href": "string",
                  "templated": true,
                  "type": "string",
                  "deprecation": "string",
                  "name": "string",
                  "profile": "http://example.com",
                  "title": "string",
                  "hreflang": "string",
                  "seen": "string"
                },
                "rel:update": {
                  "href": "string",
                  "templated": true,
                  "type": "string",
                  "deprecation": "string",
                  "name": "string",
                  "profile": "http://example.com",
                  "title": "string",
                  "hreflang": "string",
                  "seen": "string"
                },
                "self": {
                  "href": "string",
                  "templated": true,
                  "type": "string",
                  "deprecation": "string",
                  "name": "string",
                  "profile": "http://example.com",
                  "title": "string",
                  "hreflang": "string",
                  "seen": "string"
                }
              }
            }
          ]
        },
        "_links": {
          "self": {
            "href": "string",
            "templated": true,
            "type": "string",
            "deprecation": "string",
            "name": "string",
            "profile": "http://example.com",
            "title": "string",
            "hreflang": "string",
            "seen": "string"
          }
        }
      })
    }
    const mockFetchCreateCommerceProviderResponse = {
      ok: true,
      json: () => Promise.resolve({
        "id": commerceProviderId,
        "label": "Commerce Provider",
        "description": "string",
        "source": "string",
        "docs_url": "string",
        "instance_id": "AC_INSTANCE_ID",
        "publisher": "string",
        "_embedded": {
          "eventmetadata": [
            {
              "description": "string",
              "label": "string",
              "event_code": "string",
              "_embedded": {
                "sample_event": {
                  "format": "string",
                  "sample_payload": "string",
                  "_links": {}
                }
              },
              "_links": {
                "rel:sample_event": {
                  "href": "string",
                  "templated": true,
                  "type": "string",
                  "deprecation": "string",
                  "name": "string",
                  "profile": "http://example.com",
                  "title": "string",
                  "hreflang": "string",
                  "seen": "string"
                },
                "rel:update": {
                  "href": "string",
                  "templated": true,
                  "type": "string",
                  "deprecation": "string",
                  "name": "string",
                  "profile": "http://example.com",
                  "title": "string",
                  "hreflang": "string",
                  "seen": "string"
                },
                "self": {
                  "href": "string",
                  "templated": true,
                  "type": "string",
                  "deprecation": "string",
                  "name": "string",
                  "profile": "http://example.com",
                  "title": "string",
                  "hreflang": "string",
                  "seen": "string"
                }
              }
            }
          ]
        },
        "_links": {
          "rel:eventmetadata": {
            "href": "string",
            "templated": true,
            "type": "string",
            "deprecation": "string",
            "name": "string",
            "profile": "http://example.com",
            "title": "string",
            "hreflang": "string",
            "seen": "string"
          },
          "rel:update": {
            "href": "string",
            "templated": true,
            "type": "string",
            "deprecation": "string",
            "name": "string",
            "profile": "http://example.com",
            "title": "string",
            "hreflang": "string",
            "seen": "string"
          },
          "self": {
            "href": "string",
            "templated": true,
            "type": "string",
            "deprecation": "string",
            "name": "string",
            "profile": "http://example.com",
            "title": "string",
            "hreflang": "string",
            "seen": "string"
          }
        }
      })
    }
    fetch.mockResolvedValueOnce(mockFetchGetExistingProvidersResponse)
        .mockResolvedValueOnce(mockFetchCreateCommerceProviderResponse);

    let clientRegistrations = require('../data/onboarding/providers/create_commerce_provider_only.json');

    const response = await action.main(clientRegistrations, ACCESS_TOKEN)

    expect(response).toEqual({
      code: 200,
      success: true,
      result: [
        {
          key: 'commerce',
          id: commerceProviderId,
          instanceId: "AC_INSTANCE_ID",
          label: 'Commerce Provider'
        }
      ]
    })
  })
  test('should create backoffice provider only', async () => {
    const backofficeProviderId = 'BACKOFFICE_PROVIDER_ID';

    const mockFetchGetExistingProvidersResponse = {
      ok: true,
      json: () => Promise.resolve({
        "_embedded": {
          "providers": [
            {
              "id": "string",
              "label": "string",
              "description": "string",
              "source": "string",
              "docs_url": "string",
              "publisher": "string",
              "_embedded": {
                "eventmetadata": [
                  {
                    "description": "string",
                    "label": "string",
                    "event_code": "string",
                    "_embedded": {
                      "sample_event": {
                        "format": "string",
                        "sample_payload": "string",
                        "_links": {}
                      }
                    },
                    "_links": {
                      "rel:sample_event": {
                        "href": "string",
                        "templated": true,
                        "type": "string",
                        "deprecation": "string",
                        "name": "string",
                        "profile": "http://example.com",
                        "title": "string",
                        "hreflang": "string",
                        "seen": "string"
                      },
                      "rel:update": {
                        "href": "string",
                        "templated": true,
                        "type": "string",
                        "deprecation": "string",
                        "name": "string",
                        "profile": "http://example.com",
                        "title": "string",
                        "hreflang": "string",
                        "seen": "string"
                      },
                      "self": {
                        "href": "string",
                        "templated": true,
                        "type": "string",
                        "deprecation": "string",
                        "name": "string",
                        "profile": "http://example.com",
                        "title": "string",
                        "hreflang": "string",
                        "seen": "string"
                      }
                    }
                  }
                ]
              },
              "_links": {
                "rel:eventmetadata": {
                  "href": "string",
                  "templated": true,
                  "type": "string",
                  "deprecation": "string",
                  "name": "string",
                  "profile": "http://example.com",
                  "title": "string",
                  "hreflang": "string",
                  "seen": "string"
                },
                "rel:update": {
                  "href": "string",
                  "templated": true,
                  "type": "string",
                  "deprecation": "string",
                  "name": "string",
                  "profile": "http://example.com",
                  "title": "string",
                  "hreflang": "string",
                  "seen": "string"
                },
                "self": {
                  "href": "string",
                  "templated": true,
                  "type": "string",
                  "deprecation": "string",
                  "name": "string",
                  "profile": "http://example.com",
                  "title": "string",
                  "hreflang": "string",
                  "seen": "string"
                }
              }
            }
          ]
        },
        "_links": {
          "self": {
            "href": "string",
            "templated": true,
            "type": "string",
            "deprecation": "string",
            "name": "string",
            "profile": "http://example.com",
            "title": "string",
            "hreflang": "string",
            "seen": "string"
          }
        }
      })
    }
    const mockFetchCreateBackofficeProviderResponse = {
      ok: true,
      json: () => Promise.resolve({
        "id": backofficeProviderId,
        "label": "Backoffice Provider",
        "description": "string",
        "source": "string",
        "docs_url": "string",
        "instance_id": "BO_INSTANCE_ID",
        "publisher": "string",
        "_embedded": {
          "eventmetadata": [
            {
              "description": "string",
              "label": "string",
              "event_code": "string",
              "_embedded": {
                "sample_event": {
                  "format": "string",
                  "sample_payload": "string",
                  "_links": {}
                }
              },
              "_links": {
                "rel:sample_event": {
                  "href": "string",
                  "templated": true,
                  "type": "string",
                  "deprecation": "string",
                  "name": "string",
                  "profile": "http://example.com",
                  "title": "string",
                  "hreflang": "string",
                  "seen": "string"
                },
                "rel:update": {
                  "href": "string",
                  "templated": true,
                  "type": "string",
                  "deprecation": "string",
                  "name": "string",
                  "profile": "http://example.com",
                  "title": "string",
                  "hreflang": "string",
                  "seen": "string"
                },
                "self": {
                  "href": "string",
                  "templated": true,
                  "type": "string",
                  "deprecation": "string",
                  "name": "string",
                  "profile": "http://example.com",
                  "title": "string",
                  "hreflang": "string",
                  "seen": "string"
                }
              }
            }
          ]
        },
        "_links": {
          "rel:eventmetadata": {
            "href": "string",
            "templated": true,
            "type": "string",
            "deprecation": "string",
            "name": "string",
            "profile": "http://example.com",
            "title": "string",
            "hreflang": "string",
            "seen": "string"
          },
          "rel:update": {
            "href": "string",
            "templated": true,
            "type": "string",
            "deprecation": "string",
            "name": "string",
            "profile": "http://example.com",
            "title": "string",
            "hreflang": "string",
            "seen": "string"
          },
          "self": {
            "href": "string",
            "templated": true,
            "type": "string",
            "deprecation": "string",
            "name": "string",
            "profile": "http://example.com",
            "title": "string",
            "hreflang": "string",
            "seen": "string"
          }
        }
      })
    }
    fetch.mockResolvedValueOnce(mockFetchGetExistingProvidersResponse)
        .mockResolvedValueOnce(mockFetchCreateBackofficeProviderResponse);

    let clientRegistrations = require('../data/onboarding/providers/create_backoffice_provider_only.json');

    const response = await action.main(clientRegistrations, ACCESS_TOKEN)

    expect(response).toEqual({
      code: 200,
      success: true,
      result: [
        {
          key: 'backoffice',
          id: backofficeProviderId,
          instanceId: "BO_INSTANCE_ID",
          label: 'Backoffice Provider'
        }
      ]
    })
  })
  test('should create not existing provider', async () => {
    const commerceProviderId = 'EXISTING_COMMERCE_PROVIDER_ID';
    const backofficeProviderId = 'BACKOFFICE_PROVIDER_ID';

    const mockFetchGetExistingProvidersResponse = {
      ok: true,
      json: () => Promise.resolve({
        "_embedded": {
          "providers": [
            {
              "id": commerceProviderId,
              "label": "Commerce Provider",
              "description": "string",
              "source": "string",
              "docs_url": "string",
              "instance_id": "AC_INSTANCE_ID",
              "publisher": "string",
              "_embedded": {
                "eventmetadata": [
                  {
                    "description": "string",
                    "label": "string",
                    "event_code": "string",
                    "_embedded": {
                      "sample_event": {
                        "format": "string",
                        "sample_payload": "string",
                        "_links": {}
                      }
                    },
                    "_links": {
                      "rel:sample_event": {
                        "href": "string",
                        "templated": true,
                        "type": "string",
                        "deprecation": "string",
                        "name": "string",
                        "profile": "http://example.com",
                        "title": "string",
                        "hreflang": "string",
                        "seen": "string"
                      },
                      "rel:update": {
                        "href": "string",
                        "templated": true,
                        "type": "string",
                        "deprecation": "string",
                        "name": "string",
                        "profile": "http://example.com",
                        "title": "string",
                        "hreflang": "string",
                        "seen": "string"
                      },
                      "self": {
                        "href": "string",
                        "templated": true,
                        "type": "string",
                        "deprecation": "string",
                        "name": "string",
                        "profile": "http://example.com",
                        "title": "string",
                        "hreflang": "string",
                        "seen": "string"
                      }
                    }
                  }
                ]
              },
              "_links": {
                "rel:eventmetadata": {
                  "href": "string",
                  "templated": true,
                  "type": "string",
                  "deprecation": "string",
                  "name": "string",
                  "profile": "http://example.com",
                  "title": "string",
                  "hreflang": "string",
                  "seen": "string"
                },
                "rel:update": {
                  "href": "string",
                  "templated": true,
                  "type": "string",
                  "deprecation": "string",
                  "name": "string",
                  "profile": "http://example.com",
                  "title": "string",
                  "hreflang": "string",
                  "seen": "string"
                },
                "self": {
                  "href": "string",
                  "templated": true,
                  "type": "string",
                  "deprecation": "string",
                  "name": "string",
                  "profile": "http://example.com",
                  "title": "string",
                  "hreflang": "string",
                  "seen": "string"
                }
              }
            }
          ]
        },
        "_links": {
          "self": {
            "href": "string",
            "templated": true,
            "type": "string",
            "deprecation": "string",
            "name": "string",
            "profile": "http://example.com",
            "title": "string",
            "hreflang": "string",
            "seen": "string"
          }
        }
      })
    }
    const mockFetchCreateBackofficeProviderResponse = {
      ok: true,
      json: () => Promise.resolve({
        "id": backofficeProviderId,
        "label": "Backoffice Provider",
        "description": "string",
        "source": "string",
        "docs_url": "string",
        "instance_id": "BO_INSTANCE_ID",
        "publisher": "string",
        "_embedded": {
          "eventmetadata": [
            {
              "description": "string",
              "label": "string",
              "event_code": "string",
              "_embedded": {
                "sample_event": {
                  "format": "string",
                  "sample_payload": "string",
                  "_links": {}
                }
              },
              "_links": {
                "rel:sample_event": {
                  "href": "string",
                  "templated": true,
                  "type": "string",
                  "deprecation": "string",
                  "name": "string",
                  "profile": "http://example.com",
                  "title": "string",
                  "hreflang": "string",
                  "seen": "string"
                },
                "rel:update": {
                  "href": "string",
                  "templated": true,
                  "type": "string",
                  "deprecation": "string",
                  "name": "string",
                  "profile": "http://example.com",
                  "title": "string",
                  "hreflang": "string",
                  "seen": "string"
                },
                "self": {
                  "href": "string",
                  "templated": true,
                  "type": "string",
                  "deprecation": "string",
                  "name": "string",
                  "profile": "http://example.com",
                  "title": "string",
                  "hreflang": "string",
                  "seen": "string"
                }
              }
            }
          ]
        },
        "_links": {
          "rel:eventmetadata": {
            "href": "string",
            "templated": true,
            "type": "string",
            "deprecation": "string",
            "name": "string",
            "profile": "http://example.com",
            "title": "string",
            "hreflang": "string",
            "seen": "string"
          },
          "rel:update": {
            "href": "string",
            "templated": true,
            "type": "string",
            "deprecation": "string",
            "name": "string",
            "profile": "http://example.com",
            "title": "string",
            "hreflang": "string",
            "seen": "string"
          },
          "self": {
            "href": "string",
            "templated": true,
            "type": "string",
            "deprecation": "string",
            "name": "string",
            "profile": "http://example.com",
            "title": "string",
            "hreflang": "string",
            "seen": "string"
          }
        }
      })
    }
    fetch.mockResolvedValueOnce(mockFetchGetExistingProvidersResponse)
        .mockResolvedValueOnce(mockFetchCreateBackofficeProviderResponse);

    let clientRegistrations = require('../data/onboarding/providers/create_commerce_and_backoffice_providers.json');

    const response = await action.main(clientRegistrations, ACCESS_TOKEN)

    expect(response).toEqual({
      code: 200,
      success: true,
      result: [
        {
          key: 'commerce',
          id: commerceProviderId,
          instanceId: "AC_INSTANCE_ID",
          label: 'Commerce Provider'
        },
        {
          key: 'backoffice',
          id: backofficeProviderId,
          instanceId: "BO_INSTANCE_ID",
          label: 'Backoffice Provider'
        }
      ]
    })
  })
  test('should return a 500 and message error when process fail', async () => {
    const fakeError = new Error('fake')
    fetch.mockRejectedValue(fakeError)
    let clientRegistrations = require('../data/onboarding/providers/create_commerce_and_backoffice_providers.json');
    const response = await action.main(clientRegistrations, ACCESS_TOKEN)
    expect(response).toEqual({
        code: 500,
      success: false,
        error: 'Unable to complete the process of creating providers: fake'

    })
  })
  test('should return a 400 and message error when process client registrations missing required params', async () => {
    let invalidClientRegistrations = require('../data/onboarding/providers/missing_entities_client_registration.json');

    const response = await action.main(invalidClientRegistrations, ACCESS_TOKEN)
    expect(response).toEqual({
      code: 400,
      success: false,
      error: "missing parameter(s) 'customer,shipment'"

    })
  })
  test('should 500 and message error when create provider fails', async () => {
    const commerceProviderId = 'COMMERCE_PROVIDER_ID';

    const mockFetchGetExistingProvidersResponse = {
      ok: true,
      json: () => Promise.resolve({
        "_embedded": {
          "providers": [
            {
              "id": "string",
              "label": "string",
              "description": "string",
              "source": "string",
              "docs_url": "string",
              "publisher": "string",
              "_embedded": {
                "eventmetadata": [
                  {
                    "description": "string",
                    "label": "string",
                    "event_code": "string",
                    "_embedded": {
                      "sample_event": {
                        "format": "string",
                        "sample_payload": "string",
                        "_links": {}
                      }
                    },
                    "_links": {
                      "rel:sample_event": {
                        "href": "string",
                        "templated": true,
                        "type": "string",
                        "deprecation": "string",
                        "name": "string",
                        "profile": "http://example.com",
                        "title": "string",
                        "hreflang": "string",
                        "seen": "string"
                      },
                      "rel:update": {
                        "href": "string",
                        "templated": true,
                        "type": "string",
                        "deprecation": "string",
                        "name": "string",
                        "profile": "http://example.com",
                        "title": "string",
                        "hreflang": "string",
                        "seen": "string"
                      },
                      "self": {
                        "href": "string",
                        "templated": true,
                        "type": "string",
                        "deprecation": "string",
                        "name": "string",
                        "profile": "http://example.com",
                        "title": "string",
                        "hreflang": "string",
                        "seen": "string"
                      }
                    }
                  }
                ]
              },
              "_links": {
                "rel:eventmetadata": {
                  "href": "string",
                  "templated": true,
                  "type": "string",
                  "deprecation": "string",
                  "name": "string",
                  "profile": "http://example.com",
                  "title": "string",
                  "hreflang": "string",
                  "seen": "string"
                },
                "rel:update": {
                  "href": "string",
                  "templated": true,
                  "type": "string",
                  "deprecation": "string",
                  "name": "string",
                  "profile": "http://example.com",
                  "title": "string",
                  "hreflang": "string",
                  "seen": "string"
                },
                "self": {
                  "href": "string",
                  "templated": true,
                  "type": "string",
                  "deprecation": "string",
                  "name": "string",
                  "profile": "http://example.com",
                  "title": "string",
                  "hreflang": "string",
                  "seen": "string"
                }
              }
            }
          ]
        },
        "_links": {
          "self": {
            "href": "string",
            "templated": true,
            "type": "string",
            "deprecation": "string",
            "name": "string",
            "profile": "http://example.com",
            "title": "string",
            "hreflang": "string",
            "seen": "string"
          }
        }
      })
    }
    const mockFetchCreateCommerceProviderResponse = {
      ok: true,
      json: () => Promise.resolve({
        "reason": "Invalid data",
        "message": "Please provide valid data"
      })
    }
    fetch.mockResolvedValueOnce(mockFetchGetExistingProvidersResponse)
        .mockResolvedValueOnce(mockFetchCreateCommerceProviderResponse);

    let clientRegistrations = require('../data/onboarding/providers/create_commerce_and_backoffice_providers.json');

    const response = await action.main(clientRegistrations, ACCESS_TOKEN)

    expect(response).toEqual({
      code: 500,
      success: false,
      error: "Unable to create provider: reason = 'Invalid data', message = 'Please provide valid data'"
    })
  })
})