
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
      name: 'Pavach',
      description: "The language of Pavach.",
      isPublic: true,
      seeds: {
        maleName: getSeed('pavach', 'maleName'),
        femaleName: getSeed('pavach', 'femaleName'),
        surname: getSeed('pavach', 'maleName'),
        cityName: getSeed('pavach', 'cityName'),
        provinceName: getSeed('pavach', 'maleName') + getSeed('pavach', 'cityName')
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
  },
  {
    model: { app: 'namegen', model: 'Language' },
    fields: {
      name: 'Nietis',
      description: "The language of Nietang.",
      isPublic: true,
      seeds: {
        maleName: getSeed('nietis', 'maleName'),
        femaleName: getSeed('nietis', 'maleName'),
        surname: getSeed('nietis', 'maleName'),
        cityName: getSeed('nietis', 'cityName'),
        provinceName: getSeed('nietis', 'maleName') + getSeed('nietis', 'cityName')
      }
    },
    methods: [
      { methodName: 'setUser', args: ['admin'] }
    ]
  },
  {
    model: { app: 'namegen', model: 'Language' },
    fields: {
      name: 'Asani',
      description: "The language of Asani.",
      isPublic: true,
      seeds: {
        maleName: getSeed('asani', 'maleName'),
        femaleName: getSeed('asani', 'femaleName'),
        surname: getSeed('asani', 'maleName'),
        cityName: getSeed('asani', 'cityName'),
        provinceName: getSeed('asani', 'femaleName') + getSeed('asani', 'cityName')
      }
    },
    methods: [
      { methodName: 'setUser', args: ['admin'] }
    ]
  },
  {
    model: { app: 'namegen', model: 'Language' },
    fields: {
      name: 'Denali',
      description: "The language of Denali Haran.",
      isPublic: true,
      seeds: {
        maleName: getSeed('denali', 'maleName'),
        femaleName: getSeed('denali', 'femaleName'),
        surname: getSeed('denali', 'maleName'),
        cityName: getSeed('denali', 'cityName'),
        provinceName: getSeed('denali', 'femaleName') + getSeed('denali', 'cityName')
      }
    },
    methods: [
      { methodName: 'setUser', args: ['admin'] }
    ]
  },
  {
    model: { app: 'namegen', model: 'Language' },
    fields: {
      name: 'Quarol',
      description: "The language of Fudoquara.",
      isPublic: true,
      seeds: {
        maleName: getSeed('quarol', 'maleName'),
        femaleName: getSeed('quarol', 'femaleName'),
        surname: getSeed('quarol', 'maleName'),
        cityName: getSeed('quarol', 'cityName'),
        provinceName: getSeed('quarol', 'femaleName') + getSeed('quarol', 'cityName')
      }
    },
    methods: [
      { methodName: 'setUser', args: ['admin'] }
    ]
  },
  {
    model: { app: 'namegen', model: 'Language' },
    fields: {
      name: 'Rubaghi',
      description: "The language of Rubagh and Kajut.",
      isPublic: true,
      seeds: {
        maleName: getSeed('rubaghi', 'maleName'),
        femaleName: getSeed('rubaghi', 'femaleName'),
        surname: getSeed('rubaghi', 'maleName'),
        cityName: getSeed('rubaghi', 'cityName'),
        provinceName: getSeed('rubaghi', 'femaleName') + getSeed('rubaghi', 'cityName')
      }
    },
    methods: [
      { methodName: 'setUser', args: ['admin'] }
    ]
  },
  {
    model: { app: 'namegen', model: 'Language' },
    fields: {
      name: 'Zeshnon',
      description: "The language of Adzechno, Tevlid, and Ghosa.",
      isPublic: true,
      seeds: {
        maleName: getSeed('zeshnon', 'maleName'),
        femaleName: getSeed('zeshnon', 'femaleName'),
        surname: getSeed('zeshnon', 'maleName'),
        cityName: getSeed('zeshnon', 'cityName'),
        provinceName: getSeed('zeshnon', 'femaleName') + getSeed('zeshnon', 'cityName')
      }
    },
    methods: [
      { methodName: 'setUser', args: ['admin'] }
    ]
  },
  {
    model: { app: 'namegen', model: 'Language' },
    fields: {
      name: 'Geisht',
      description: "The language of Geisnaicru.",
      isPublic: true,
      seeds: {
        maleName: getSeed('geisht', 'maleName'),
        femaleName: getSeed('geisht', 'femaleName'),
        surname: getSeed('geisht', 'maleName'),
        cityName: getSeed('geisht', 'cityName'),
        provinceName: getSeed('geisht', 'femaleName') + getSeed('geisht', 'cityName')
      }
    },
    methods: [
      { methodName: 'setUser', args: ['admin'] }
    ]
  },
  {
    model: { app: 'namegen', model: 'Language' },
    fields: {
      name: 'Rodic',
      description: "The language of ancient Rodiya.",
      isPublic: true,
      seeds: {
        maleName: getSeed('rodic', 'maleName'),
        femaleName: getSeed('rodic', 'femaleName'),
        surname: getSeed('rodic', 'maleName'),
        cityName: getSeed('rodic', 'maleName'),
        provinceName: getSeed('rodic', 'femaleName') + getSeed('rodic', 'femaleName')
      }
    },
    methods: [
      { methodName: 'setUser', args: ['admin'] }
    ]
  },
  {
    model: { app: 'namegen', model: 'Language' },
    fields: {
      name: 'Ravanpak',
      description: "The language of ancient Ravanpalos.",
      isPublic: true,
      seeds: {
        maleName: getSeed('ravanpak', 'maleName'),
        femaleName: getSeed('ravanpak', 'femaleName'),
        surname: getSeed('ravanpak', 'maleName'),
        cityName: getSeed('ravanpak', 'cityName'),
        provinceName: getSeed('ravanpak', 'femaleName') + getSeed('ravanpak', 'femaleName')
      }
    },
    methods: [
      { methodName: 'setUser', args: ['admin'] }
    ]
  },
  {
    model: { app: 'namegen', model: 'Language' },
    fields: {
      name: 'Nidric',
      description: "The language of ancient Nidor.",
      isPublic: true,
      seeds: {
        maleName: getSeed('nidric', 'maleName'),
        femaleName: getSeed('nidric', 'femaleName'),
        surname: getSeed('nidric', 'maleName'),
        cityName: getSeed('nidric', 'cityName'),
        provinceName: getSeed('nidric', 'femaleName') + getSeed('nidric', 'cityName')
      }
    },
    methods: [
      { methodName: 'setUser', args: ['admin'] }
    ]
  }
];
