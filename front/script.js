const checkbox = document.getElementById("acceptTerms");
const modal = document.getElementById("terms-modal");
const openModal = document.getElementById("openModal");
const closeModal = document.getElementById("closeModal");
const gamePlayButtons = document.querySelectorAll(".game-play-button");

function openTermsModal() {
  modal.style.display = "block";
  modal.setAttribute("aria-hidden", "false");
}

function closeTermsModal() {
  modal.style.display = "none";
  modal.setAttribute("aria-hidden", "true");
}

// Etat initial: les conditions sont fermees.
closeTermsModal();

// Le consentement est vérifié au clic sur chaque bouton de jeu

// Le bouton "Voir les conditions" ouvre/ferme la modale
openModal.addEventListener("click", () => {
  if (modal.style.display === "block") {
    closeTermsModal();
    return;
  }

  openTermsModal();
});

// Fermer modal
closeModal.addEventListener("click", () => {
  closeTermsModal();
});

// Fermer avec la touche Echap
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && modal.style.display === "block") {
    closeTermsModal();
  }
});

gamePlayButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (!checkbox.checked) {
      alert("Tu dois accepter les conditions avant de lancer un jeu.");
      openTermsModal();
      return;
    }

    const gameNumber = button.dataset.game;
    const gameRoutes = {
      "1": "./keep-white-space/index.html",
      "2": "./space-invaders/index.html"
    };

    const targetRoute = gameRoutes[gameNumber];
    if (!targetRoute) {
      alert("Jeu indisponible pour le moment.");
      return;
    }

    window.location.href = targetRoute;
  });
});