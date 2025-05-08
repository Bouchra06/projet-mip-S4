const mongoose = require('mongoose');


const etudiantSchema = new mongoose.Schema({
  nom: String,
  email: String,
  password: String
});

module.exports = mongoose.model('Etudiant', etudiantSchema);

