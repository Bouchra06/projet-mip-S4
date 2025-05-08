

const mongoose = require('mongoose');

const examenSchema = new mongoose.Schema({
  titre: String,
  date: Date,
  questions: [String],  // لاحقاً نقدر نخليها أكثر تعقيداً
  profId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Prof'
  }
});