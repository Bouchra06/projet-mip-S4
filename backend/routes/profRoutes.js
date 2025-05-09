const express = require('express');
const router = express.Router();
const Prof = require('../models/prof');

// تسجيل أستاذ جديد
router.post('/register', async (req, res) => {
  const { nom, email, password } = req.body;

  try {
    const newProf = new Prof({ nom, email, password });
    await newProf.save();
    res.status(201).json({ message: 'Prof enregistré avec succès' });
  } catch (err) {
    res.status(500).json({ message: 'Erreur serveur' });
  }
});

module.exports = router;