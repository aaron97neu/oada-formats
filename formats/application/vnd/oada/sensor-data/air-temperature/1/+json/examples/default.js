module.exports = {
  // Refer to vnd.oada.sensor-data.generic.1+json for details on this
  // format.
  _type: 'application/vnd.oada.sensor-data.air-temperature.1+json',

  dataType: {
    definition: 'https://github.com/oada-formats',
    name: 'air-temperature'
  },

  templates: {
    '1': {
      sensor: { _id: 'i02ijf2i3o23' },
      time: { units: 'unix-timestamp', },
      temperature: { units: 'C', },
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
      temperature: { value: 30.902938, },
    },
    'd02fijflwlkflfsjkdf': {
      id: 'd02fijflwlkflfsjkdf',
      template: '1',
      time: { value: 1456376030.90398423, },
      temperature: { value: 32.90398423, },
    },
    'a0dkfj203jwefjlkfj0293i': {
      id: 'a0dkfj203jwefjlkfj0293i',
      template: '1',
      time: { value: 1456376031.90398423, },
      temperature: { value: 31.90398423, },
    },
  },

}
