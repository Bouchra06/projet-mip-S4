<<<<<<< HEAD
document.getElementById('create-exam').addEventListener('click', () => {
    const title = document.getElementById('title').value.trim();
    const description = document.getElementById('description').value.trim();
    const audience = document.getElementById('audience').value.trim();
  
    if (title && description && audience) {
      const uniqueLink = `https://exam-platform.com/exam/${Math.random().toString(36).substr(2, 8)}`;
      document.getElementById('generated-link').textContent = `Lien généré : ${uniqueLink}`;
      console.log('commit: interface création examen');
    }
  });
  
  document.getElementById('question-type').addEventListener('change', (e) => {
    const type = e.target.value;
    const container = document.getElementById('question-form');
    container.innerHTML = ''; // reset
  
    if (type === 'direct') {
      container.innerHTML = `
        <label>Énoncé :</label>
        <textarea id="enonce" required></textarea>
  
        <label>Réponse attendue :</label>
        <input type="text" id="reponse" required>
  
        <label>Tolérance (%) :</label>
        <input type="number" id="tolerance" min="0" max="100" value="10">
  
        <label>Durée (secondes) :</label>
        <input type="number" id="duration" required>
  
        <label>Note :</label>
        <input type="number" id="note" required>
  
        <button onclick="ajouterQuestionDirecte()">Ajouter question directe</button>
      `;
    } else if (type === 'qcm') {
      container.innerHTML = `
        <label>Énoncé :</label>
        <textarea id="enonce" required></textarea>
  
        <label>Options (séparées par ;)</label>
        <input type="text" id="options" placeholder="ex: réponse A;réponse B;réponse C">
  
        <label>Bonnes réponses (index, ex: 0,2)</label>
        <input type="text" id="corrects">
  
        <label>Durée (secondes) :</label>
        <input type="number" id="duration" required>
  
        <label>Note :</label>
        <input type="number" id="note" required>
  
        <button onclick="ajouterQCM()">Ajouter QCM</button>
      `;
    }
  });
  
  function ajouterQuestionDirecte() {
    const enonce = document.getElementById('enonce').value;
    const reponse = document.getElementById('reponse').value;
    const tolerance = document.getElementById('tolerance').value;
    const duration = document.getElementById('duration').value;
    const note = document.getElementById('note').value;
  
    if (enonce && reponse) {
      const item = document.createElement('li');
      item.textContent = `Directe : ${enonce} (Tolérance: ${tolerance}%)`;
      document.getElementById('question-list').appendChild(item);
      console.log('commit: ajout question directe avec tolérance');
    }
  }
  
  function ajouterQCM() {
    const enonce = document.getElementById('enonce').value;
    const options = document.getElementById('options').value.split(';');
    const corrects = document.getElementById('corrects').value.split(',').map(Number);
    const duration = document.getElementById('duration').value;
    const note = document.getElementById('note').value;
  
    if (enonce && options.length > 0) {
      const item = document.createElement('li');
      item.textContent = `QCM : ${enonce} [Bonnes réponses: ${corrects.join(', ')}]`;
      document.getElementById('question-list').appendChild(item);
      console.log('commit: ajout QCM');
    }
  }
  
=======
// Afficher un message de bienvenue lorsque la page se charge
window.onload = function() {
  alert("Bienvenue dans l'espace professeur !");
};

// Ajouter un message lorsqu'on clique sur un lien
document.addEventListener("DOMContentLoaded", function () {
  const liens = document.querySelectorAll("a");

  liens.forEach(lien => {
    lien.addEventListener("click", function (event) {
      alert("Vous avez cliqué sur : " + lien.textContent);
    });
  });
});
>>>>>>> c57b8538995d6ff4013db87965b277cc295d9d1a
