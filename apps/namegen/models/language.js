
const marklar = require('marklar');
const mongoose = require('mongoose');

const User = require('../../auth/models/user');

var languageSchema = new mongoose.Schema({
  name: { type: String },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  description: String,
  isPublic: { type: Boolean, default: false },
  seeds: {
    maleName: String,
    femaleName: String,
    surname: String,
    cityName: String,
    provinceName: String
  }
});

languageSchema.methods.getAdminDisplayName = function() {
  return `[${this.user}] ${this.name}`;
};

languageSchema.methods.setUser = async function(username) {
  var user = await User.findOne({ username: username });
  this.user = user;
};

languageSchema.methods.getNames = function(type, amount) {
  var code = `${this.user.username}_${this.name}_${type}`;
  marklar.nameList[code] = this.seeds[type].split(',');
  return marklar.getNames(code, amount);
};

languageSchema.methods.getMaleNames = function(amount) {
  return this.getNames('maleName', amount);
};
languageSchema.methods.getFemaleNames = function(amount) {
  return this.getNames('femaleName', amount);
};
languageSchema.methods.getSurnames = function(amount) {
  return this.getNames('surname', amount);
};
languageSchema.methods.getCityNames = function(amount) {
  return this.getNames('cityName', amount);
};
languageSchema.methods.getProvinceNames = function(amount) {
  return this.getNames('provinceName', amount);
};
languageSchema.methods.getNameBatch = function(amount) {
  return {
    'maleNames': this.getMaleNames(amount),
    'femaleNames': this.getFemaleNames(amount),
    'surnames': this.getSurnames(amount),
    'cityNames': this.getCityNames(amount),
    'provinceNames': this.getProvinceNames(amount)
  };
};

var Language = mongoose.model('Language', languageSchema);
module.exports = Language;
