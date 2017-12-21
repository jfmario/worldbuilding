
var getSeed = require('./namegen/get-seed');

module.exports = [
  {
    model: { app: 'namegen', model: 'Language' },
    fields: {
      name: 'Baurcish',
      description: "The language of Baurce.",
      isPublic: true,
      seeds: {
        surname: getSeed('baurcish', 'surname')
      }
    },
    methods: [
      { methodName: 'setUser', args: ['admin'] }
    ]
  }
];
