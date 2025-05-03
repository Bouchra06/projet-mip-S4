document.getElementById('examForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const uuid = crypto.randomUUID();
    const baseUrl = 'https://examens.univ.edu/examens/';
    const link = baseUrl + uuid;
  
    document.getElementById('link').href = link;
    document.getElementById('link').textContent = link;
    document.getElementById('result').classList.remove('hidden');
  
    // Optionnel : vous pourriez envoyer les données au serveur ici
  });
  