
var Language = require('../../models/language');
var User = require('../../../auth/models/user');

async function publicLangs(request, reply) {

  var languages = await Language.find({ isPublic: true });
  var response = [];
  for (var i = 0; i < languages.length; ++i) {
    response.push({
      name: languages[i].name,
      _id: languages[i]._id
    });
  }

  reply.send(response);
}

module.exports = publicLangs;
