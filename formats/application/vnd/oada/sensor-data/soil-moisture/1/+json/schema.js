const libvocab = require('vocabs/oada');
const {vocabToSchema,vocabToProperties,patterns,override} = libvocab;
const { oadaSchema } = require('lib/oada-schema-util.js')(libvocab);

module.exports = oadaSchema({
  _type: 'application/vnd.oada.sensor-data.soil-moisture.1+json',

  description: 'Soil moisture content',
    
  indexing: [ 'year-index', 'day-index', 'hour-index' ],

  // oadaSchema will take care of representing all these indexing schemes by adding
  // their keys to the indexing property and to the base schema properties
  properties: {
    // templates are object prototypes for data points: i.e. a full data point
    // is a merge of it's template with the data point itself.  Put things
    // like units that are repeated for most data points here.
    templates: override('templates', {
      patternProperties: {
        [patterns.indexSafePropertyNames]: override('data-point', vocabToSchema([
          'sensor', 'time', 'moisture-type', 'units', 'location', 'depth', 'soil-temperature'
        ])),
      },
    }),

    // Data holds the actual data points. If 'strict', it limits
    // the test to only these properties (no extras), but none of them become required.
    data: override('data', {
      patternProperties: {
        [patterns.indexSafePropertyNames]: override('data-point', {
          properties: vocabToProperties([
            'id', 'template', 'time', 'value?', 'temperature',
          ]), 
        }),
      },
    }),
  },
})


var refs = require('../../../../../../../refs.js');

module.exports = {
    id: refs.OADA_SENSOR_DATA_SOIL_MOISTURE_ID,
    description: 'application/vnd.oada.sensor-data.soil-moisture.1+json',

    additionalProperties: true,

    allOf: [{
        $ref: refs.OADA_SENSOR_DATA_GENERIC_ID
    },
    {
        properties: {
            dataType: {
                properties: {
                    definition: {
                        pattern: '^https\\:\\/\\/github.com/oada-formats'
                    },
                    name: {
                        pattern: '^soil-moisture$'
                    }
                }
            },
            templates: {
                patternProperties: {
                    '.': {
                        properties: {
                            units: {
                                type: 'string',
                            },
                            depth: {
                                properties: {
                                    units: {
                                        type: 'string'
                                    },
                                    value: {
                                        type: 'number'
                                    }
                                }
                            },
                            temperature: {
                                properties: {
                                    units: {
                                        type: 'string'
                                    }
                                }
                            },
                            'moisture-type': {
                                type: 'string'
                            },
                            'soil-temperature': {
                                properties: {
                                    units: {
                                        type: 'string'
                                    }
                                }
                            }
                        }
                    }
                }
            },
            data: {
                patternProperties: {
                    '.': {
                        properties: {
                            value: {
                                type: 'number'
                            },
                            'soil-temperature': {
                                properties: {
                                    value: {
                                        type: 'number'
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }]
};
