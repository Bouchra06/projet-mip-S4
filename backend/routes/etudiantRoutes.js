const express = require('express');
const router = express.Router();
const Etudiant = require('../models/etudiant');

// تسجيل طالب جديد
router.post('/register', async (req, res) => {
  const { nom, email, password } = req.body;

  try {
    const newEtudiant = new Etudiant({ nom, email, password });
    await newEtudiant.save();
    res.status(201).json({ message: 'Étudiant enregistré avec succès' });
  } catch (err) {
    res.status(500).json({ message: 'Erreur serveur' });
  }
});

module.exports = router;