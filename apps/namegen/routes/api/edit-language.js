
var Language = require('../../models/language');

async function editLanguage(request, reply) {

  var language = await Language.findOne({ _id: request.params.languageId });
  if (String(language.user) != String(request.user._id)) {
    return reply.code(400).send("Unauthorized.");
  }

  var maleName = [];
  var femaleName = [];
  var surname = [];
  var cityName = [];
  var provinceName = [];

  for (var i = 0; i < request.body.maleName.length; ++i) {
    if (request.body.maleName[i].length) {
      maleName.push(request.body.maleName[i].trim());
    }
  }
  for (var i = 0; i < request.body.femaleName.length; ++i) {
    if (request.body.femaleName[i].length) {
      femaleName.push(request.body.femaleName[i].trim());
    }
  }
  for (var i = 0; i < request.body.surname.length; ++i) {
    if (request.body.surname[i].length) {
      surname.push(request.body.surname[i].trim());
    }
  }
  for (var i = 0; i < request.body.cityName.length; ++i) {
    if (request.body.cityName[i].length) {
      cityName.push(request.body.cityName[i].trim());
    }
  }
  for (var i = 0; i < request.body.provinceName.length; ++i) {
    if (request.body.provinceName[i].length) {
      provinceName.push(request.body.provinceName[i].trim());
    }
  }

  language.name = request.body.name;
  language.description = request.body.description;
  language.seeds.maleName = maleName;
  language.seeds.femaleName = femaleName;
  language.seeds.surname = surname;
  language.seeds.cityName = cityName;
  language.seeds.provinceName = provinceName;
  await language.save();

  reply.send(200).send("Updated.");
}

module.exports = editLanguage;
