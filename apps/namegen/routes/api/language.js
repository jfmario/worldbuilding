
var Language = require('../../models/language');

async function language(request, reply) {

  var lang = await Language.findOne({ _id: request.params.languageId });
  var obj = {
    _id: lang._id,
    name: lang.name,
    description: lang.description,
    seeds: lang.seeds
  };

  reply.send(obj);
}

module.exports = language;
