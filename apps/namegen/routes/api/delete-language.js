
var Language = require('../../models/language');

async function deleteLanguage(request, reply) {

  var language = await Language.findOne({ _id: request.params.languageId });
  if (String(language.user) != String(request.user._id)) {
    return reply.code(400).send("Unauthorized.");
  }

  var removal = await language.remove();
  reply.send(removal);
}

module.exports = deleteLanguage;
