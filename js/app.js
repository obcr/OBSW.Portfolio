console.log("hello world");

// Désactiver le rechargement de la page lors du défilement vers le bas sur mobile
document.addEventListener('touchmove', function(event) {
    // Vérifier si l'utilisateur fait défiler vers le bas
    if (event.touches[0].clientY < 0) {
      event.preventDefault(); // Empêcher le comportement par défaut du défilement
    }
  }, { passive: false });


  // Vérifier si l'API Fullscreen est prise en charge par le navigateur
if (document.documentElement.requestFullscreen) {
    // Écouteur d'événement pour détecter le touchmove vers le bas
    document.addEventListener('touchmove', function(event) {
      // Vérifier si le mouvement est vers le bas
      if (event.touches[0].clientY > window.innerHeight) {
        // Demander le mode plein écran
        document.documentElement.requestFullscreen();
      }
    });
  }