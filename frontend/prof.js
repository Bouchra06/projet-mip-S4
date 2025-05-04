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
