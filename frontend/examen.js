document.getElementById("qcmForm").addEventListener("submit", function(event) {
  event.preventDefault(); // empêcher l'envoi du formulaire

  let score = 0;
  const total = 3;

  // Récupérer les réponses sélectionnées
  const q1 = document.querySelector('input[name="q1"]:checked');
  const q2 = document.querySelector('input[name="q2"]:checked');
  const q3 = document.querySelector('input[name="q3"]:checked');

  if (q1 && q1.value === "vrai") score++;
  if (q2 && q2.value === "vrai") score++;
  if (q3 && q3.value === "vrai") score++;

  // Afficher le résultat
  document.getElementById("resultat").textContent ='Votre score est ${score} / ${total}';
});