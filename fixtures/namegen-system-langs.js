
var getSeed = require('./namegen/get-seed');

module.exports = [
  {
    model: { app: 'namegen', model: 'Language' },
    fields: {
      name: 'Baurcish',
      description: "The language of Baurce.",
      isPublic: true,
      seeds: {
        maleName: getSeed('baurcish', 'maleName'),
        femaleName: getSeed('baurcish', 'femaleName'),
        surname: getSeed('baurcish', 'surname'),
        cityName: getSeed('baurcish', 'cityName'),
        provinceName: getSeed('baurcish', 'provinceName')
      }
    },
    methods: [
      { methodName: 'setUser', args: ['admin'] }
    ]
  },
  {
    model: { app: 'namegen', model: 'Language' },
    fields: {
      name: 'Rujic',
      description: "The language of Rujer.",
      isPublic: true,
      seeds: {
        maleName: getSeed('rujic', 'maleName'),
        femaleName: getSeed('rujic', 'femaleName'),
        surname: getSeed('rujic', 'maleName'),
        cityName: getSeed('rujic', 'cityName'),
        provinceName: getSeed('rujic', 'maleName') + getSeed('rujic', 'cityName')
      }
    },
    methods: [
      { methodName: 'setUser', args: ['admin'] }
    ]
  },
  {
    model: { app: 'namegen', model: 'Language' },
    fields: {
      name: 'Droissh',
      description: "The language of the Droitte.",
      isPublic: true,
      seeds: {
        maleName: getSeed('droissh', 'maleName'),
        femaleName: getSeed('droissh', 'femaleName'),
        surname: getSeed('droissh', 'maleName'),
        cityName: getSeed('droissh', 'cityName'),
        provinceName: getSeed('droissh', 'femaleName') + getSeed('droissh', 'cityName')
      }
    },
    methods: [
      { methodName: 'setUser', args: ['admin'] }
    ]
  },
  {
    model: { app: 'namegen', model: 'Language' },
    fields: {
      name: 'Paecton',
      description: "The language of Paecto.",
      isPublic: true,
      seeds: {
        maleName: getSeed('paecton', 'maleName'),
        femaleName: getSeed('paecton', 'femaleName'),
        surname: getSeed('paecton', 'maleName'),
        cityName: getSeed('paecton', 'cityName'),
        provinceName: getSeed('paecton', 'femaleName') + getSeed('paecton', 'cityName')
      }
    },
    methods: [
      { methodName: 'setUser', args: ['admin'] }
    ]
  }
];
