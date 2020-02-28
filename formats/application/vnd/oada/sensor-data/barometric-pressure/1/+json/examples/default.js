module.exports = {
  _type: 'application/vnd.oada.sensor-data.barometric-presure.1+json',
  
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
    '1': {
      sensor: { _id: 'i02ijf2i3o23' },
      time: { units: 'unix-timestamp' },
      pressure: { units: 'Pa', },
      location: {
         latitude: -40.9384920342,
         longitude: 80.9308242934,
         altitude: 204.93084234,
      },
    },
  },

  data: {
    'lsdfj02ifjwlsdoif2j3': {
      id: 'lsdfj02ifjwlsdoif2j3',
      template: '1',
      time: { value: 1456376029.293843, },
      pressure: { value: 101325.902938, },
    },
    'd02fijflwlkflfsjkdf': {
      id: 'd02fijflwlkflfsjkdf',
      template: '1',
      time: {value: 1456376030.90398423, },
      pressure: { value: 101325.90398423, },
    },
    'k209j2o3if2jlkwdf02': {
      id: 'k209j2o3if2jlkwdf02',
      template: '1',
      time: { value: 1456376031.90398423, },
      pressure: { value: 101325.90398423, },
    },
  },

}
