const express = require('express');
const router = express.Router();
const Examen = require('../models/examen');

// إنشاء امتحان
router.post('/create', async (req, res) => {
  const { titre, date, questions, profId } = req.body;

  try {
    const newExamen = new Examen({ titre, date, questions, profId });
    await newExamen.save();
    res.status(201).json({ message: 'Examen créé avec succès' });
  } catch (err) {
    res.status(500).json({ message: 'Erreur serveur' });
  }
});

module.exports = router;
