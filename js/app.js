console.log("hello world");

// Désactiver le rechargement de la page lors du défilement vers le bas sur mobile
document.addEventListener('touchmove', function(event) {
    // Vérifier si l'utilisateur fait défiler vers le bas
    if (event.touches[0].clientY < 0) {
      event.preventDefault(); // Empêcher le comportement par défaut du défilement
    }
  }, { passive: false });