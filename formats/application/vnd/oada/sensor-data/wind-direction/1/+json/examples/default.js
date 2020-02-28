module.exports = {
    _type: 'application/vnd.oada.sensor-data.wind-direction.1+json',

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
        1: {
            sensor: {
                _id: 'i02ijf2i3o23'
            },
            units: 'rad'
        }
    },
    data: {
        'lsdfj02ifjwlsdoif2j3': {
            template: '1',
            'time-start': 1456376029.293843,
            'time-end': 1456376030.293843,
            max: 1.902938,
            mean: 1.902938
        },
        'd02fijflwlkflfsjkdf': {
            template: '1',
            'time-start': 1456376030.293843,
            'time-end': 1456376031.293843,
            max: 0.902938,
            mean: 0.902938
        },
        'k209j2o3if2jlkwdf02': {
            template: '1',
            'time-start': 1456376031.293843,
            'time-end': 1456376032.293843,
            max: -1.502938,
            mean: -1.702938
        }
    }
};
