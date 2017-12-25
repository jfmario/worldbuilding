
var AppConfig = require('../../config');
var Language = require('../../models/language');

async function generate(request, reply) {

  var lang = await Language.findOne({ _id: request.params.languageId });
  var res = lang.getNames(request.params.type, AppConfig.DEFAULT_NAME_LIST_SIZE);
  
  reply.send(res);
}

module.exports = generate;
