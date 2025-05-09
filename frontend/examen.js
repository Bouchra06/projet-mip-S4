document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("qcm-form");
  const resultat = document.getElementById("resultat");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Réponses correctes
    const bonnesReponses = {
      q1: "a",
      q2: "color",
      q3: "html-head-body"
    };

    let score = 0;

    for (let question in bonnesReponses) {
      const selectedInput = form.querySelector('input[name=${question}]:checked');
      const allInputs = form.querySelectorAll(input[name="${question}"]);

      allInputs.forEach(input => {
        const label = input.parentElement;
        label.classList.remove("correct", "incorrect"); // Nettoyage des classes précédentes
      });

      if (selectedInput) {
        const label = selectedInput.parentElement;
        if (selectedInput.value === bonnesReponses[question]) {
          label.classList.add("correct");
          score++;
        } else {
          label.classList.add("incorrect");
        }
      }
    }

    // Affichage du résultat à la fin
    resultat.textContent =('Votre score est : ${score}/3');
    resultat.classList.add("affiche");
  });
});

