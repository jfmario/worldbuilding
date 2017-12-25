
var Language = require('../../models/language');

async function languageInfo(request, reply) {

  var lang = await Language.findOne({ _id: request.params.languageId });
  var obj = {
    _id: lang._id,
    name: lang.name,
    description: lang.description,
    isPublic: lang.isPublic
  };

  reply.send(obj);
}

module.exports = languageInfo;
