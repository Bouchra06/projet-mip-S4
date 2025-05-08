 const mongoose = require('mongoose');

const profSchema = new mongoose.Schema({
  nom: String,
  email: String,
  password: String
});

module.exports = mongoose.model('Prof', profSchema);


