const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware pour parser le JSON
app.use(bodyParser.json());

// Connexion à MongoDB
mongoose.connect('mongodb://localhost:27017/mydb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('✅ Connecté à MongoDB');
}).catch(err => {
    console.error('❌ Erreur de connexion à MongoDB :', err);
});

// Schéma utilisateur
const userSchema = new mongoose.Schema({
    email: { type: String, required: true },
    nom: { type: String, required: true },
    prénom: { type: String, required: true },
    date_naissance: { type: Date, required: true },
    sexe: { type: String, required: true },
    établissement: { type: String, required: true },
    filière: { type: String, required: true }
});

// Modèle utilisateur
const User = mongoose.model('User', userSchema);

// Route POST pour ajouter un utilisateur
app.post('/ajouter-utilisateur', (req, res) => {
    const { email, nom, prénom, date_naissance, sexe, établissement, filière } = req.body;

    // Vérification des champs
    if (!email || !nom || !prénom || !date_naissance || !sexe || !établissement || !filière) {
        return res.status(400).json({ message: 'يرجى ملء جميع الحقول المطلوبة' });
    }

    const newUser = new User({
        email,
        nom,
        prénom,
        date_naissance,
        sexe,
        établissement,
        filière
    });

    newUser.save()
        .then(user => {
            res.status(201).json({ message: 'تم إضافة المستخدم بنجاح!', user });
        })
        .catch(err => {
            res.status(500).json({ message: 'فشل في إضافة المستخدم', error: err });
        });
});

// Route d’accueil simple
app.get('/', (req, res) => {
    res.send('Bienvenue sur le serveur Express + MongoDB');
});

// Démarrer le serveur
app.listen(PORT, () => {
    console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
