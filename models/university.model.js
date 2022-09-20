const mongoose = require('mongoose');

const { Schema } = mongoose;

const university = new Schema({
  name: String,
  short_name: String,
  code_university: String,
  address: String
});

module.exports = mongoose.model('university', university);