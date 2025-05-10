document.addEventListener("DOMContentLoaded", function () {
  const createBtn = document.getElementById("create-exam");
  const linkDiv = document.getElementById("generated-link");
  const questionType = document.getElementById("question-type");
  const questionForm = document.getElementById("question-form");
  const questionList = document.getElementById("question-list");

  // Création du lien d'examen
  createBtn.addEventListener("click", function () {
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const audience = document.getElementById("audience").value;

    if (title && description && audience) {
      const link = https//examen.fake/${encodeURIComponent(title.replace(/\s+/g, '-'))};
      linkDiv. innerHTML = <p>Lien généré : <a href="${link}" target="_blank">${link}</a></p>;
    } else {
      alert("Veuillez remplir tous les champs.");
    }
  });

  // Affichage du formulaire selon le type de question
  questionType.addEventListener("change", function () {
    const type = questionType.value;
    questionForm.innerHTML = ""; // reset

    if (type === "direct") {
      questionForm.innerHTML = `
        <label>Question :</label>
        <input type="text" id="question-direct">
        <button type="button" onclick="addDirectQuestion()">Ajouter</button>
      `;
    } else if (type === "qcm") {
      questionForm.innerHTML = `
        <label>Question :</label>
        <input type="text" id="question-qcm">
        <label>Réponses (séparées par des virgules, * pour la bonne) :</label>
        <input type="text" id="reponses-qcm">
        <button type="button" onclick="addQCMQuestion()">Ajouter</button>
      `;
    }
  });
});

function addDirectQuestion() {
  const question = document.getElementById("question-direct").value;
  if (question) {
    const li = document.createElement("li");
    li.textContent = ('Question directe : ${question}');
    document.getElementById("question-list").appendChild(li);
  }
}

function addQCMQuestion() {
  const question = document.getElementById("question-qcm").value;
  const reponses = document.getElementById("reponses-qcm").value;

  if (question && reponses) {
    const li = document.createElement("li");
    li.textContent = ('QCM : ${question} [${reponses}]');
    document.getElementById("question-list").appendChild(li);
  }
}