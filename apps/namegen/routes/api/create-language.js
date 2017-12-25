
var Language = require('../../models/language');

async function createLanguage(request, reply) {

  var lang = new Language({
    name: "New Language",
    description: "Describe the language here.",
    user: request.user._id,
    seeds: {
      maleName: '',
      femaleName: '',
      surname: '',
      cityName: '',
      provinceName: ''
    }
  });
  await lang.save();
  reply.send(lang._id);
}

module.exports = createLanguage;
