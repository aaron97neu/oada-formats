module.exports = {
  _type: 'application/vnd.oada.sensor-data.soil-moisture.1+json',
  
  indexing: [
    {
      name: 'year-index',
      source: 'oada.vocab.year-index',
      value: '2019',
    },
    { 
      name: 'day-index',
      source: 'oada.vocab.day-index',
      value: '2019-05-04',
    },
    {
      name: 'hour-index',
      source: 'oada.vocab.hour-index',
      value: '22:00',
    },
  ],

  templates: {
    // The particular type of soil moisture measurement technique should be listed with the sensor
    // rather than with the data sample?  i.e. it is a capacitive sensor?  Or would the same 
    // individual sensor have multiple modes of measurement technique?
    '1': {
      sensor: { _id: 'i02ijf2i3o23' },
      'moisture-type': 'potential',  // the possible 'moisture-type' values are defined at the dataType above
      units: 'Pa',
      depth: { // all samples below using template 1 are at depth 0.3m
        units: 'm',
        value: 0.3,
      },
      temperature: {
        units: 'Cel',
      },
    },
    '2': {
      sensor: { _id: 'f92jlkdfjow' },
      'moisture-type': 'gravimetric-content',
      units: '%',
      depth: {
        units: 'm',
        value: 0.9,
      },
    },
    '3': {
      sensor: { _id: '980239fjkdf2' },
      'moisture-type': 'volumetric-content',
      units: 'm3/m3',
      depth: {
        units: 'm',
        value: 1.2,
      },
      // Some soil moisture sensor require soil temperature as part of their measurement.
      // Can report it here like this (this example gives just units, and data samples 
      // below give multiple values over time).
      // Not all soil moisture sensors will report a soil temperature, so this is optional.
      'soil-temperature': {
        units: 'C',
      },
    },
  },

  // we could add a 'depths' key and index samples under their respective depths, but 
  // I think that's overkill and just using the depth in the templates above will be fine.
  data: {
    'lsdfj02ifjwlsdoif2j3': {
      id: 'lsdfj02ifjwlsdoif2j3',
      template: '1',
      time: 1456376029.293843, 
      value: 10.902938,
    },
    'd02fijflwlkflfsjkdf': {
      id: 'd02fijflwlkflfsjkdf',
      template: '2',
      time: 1456376030.90398423,
      value: 10.90398423,
    },
    'k209j2o3if2jlkwdf02': {
      id: 'k209j2o3if2jlkwdf02',
      template: '3',
      time: 1456376031.90398423,
      value: 10.90399323,
      'soil-temperature': { value: 30.12321 },
    },
  },

}
