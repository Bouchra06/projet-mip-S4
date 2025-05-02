document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (e) {
        e.preventDefault(); // Empêche l'envoi du formulaire

        // Récupération des valeurs
     
        const nom = document.getElementById("nom").value.trim();
        const prenom = document.getElementById("prenom").value.trim();
        const email = document.getElementById("email").value.trim();
        const filiere = document.getElementById("filiere").value.trim();
        // Vérification simple
        if (!nom || !prenom ||!email|| !filiere) {
            alert("Veuillez remplir tous les champs !");
            return;
        }

        if (!validerEmail(email)) {
            alert("Adresse e-mail invalide !");
            return;
        }

        alert("Inscription réussie !");
        form.reset(); // Réinitialiser le formulaire
    });

    // Fonction pour valider l'e-mail
    function validerEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);

    }
});   