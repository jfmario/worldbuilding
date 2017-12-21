
var fs = require('fs-extra');
var path = require('path');

module.exports = function(lang, seed) {
  var data = fs.readFileSync(path.join(__dirname, lang, `${seed}.txt`)).toString();
  return data.split(/\r?\n/);
};
