const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("MongoDB connected"))
  .catch(err => console.error("DB connection error:", err));

app.get("/", (req, res) => {
  res.send("Backend en marche !");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Serveur lancé sur http://localhost:${PORT}");
});

 const profRoutes = require('../routes/profRoutes');
 const etudiantRoutes = require('./routes/etudiantRoutes');
 const examenRoutes = require('./routes/examenRoutes');
 
 app.use('/api/prof', profRoutes);
 app.use('/api/etudiant', etudiantRoutes);
 app.use('/api/examen', examenRoutes);
 
 
