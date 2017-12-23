
var fs = require('fs-extra');
var path = require('path');

module.exports = function(lang, seed) {

  var data = fs.readFileSync(path.join(__dirname, lang, `${seed}.txt`)).toString();
  var seedList = data.split(/\r?\n/);
  var seedNames = [];

  for (var i = 0; i < seedList.length; ++i) {
    if (seedList[i].length > 0) {
      seedNames.push(seedList[i]);
    }
  }

  return seedNames;
};
