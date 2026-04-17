const checkbox = document.getElementById("acceptTerms");
const modal = document.getElementById("terms-modal");
const openModal = document.getElementById("openModal");
const closeModal = document.getElementById("closeModal");
const gamePlayButtons = document.querySelectorAll(".game-play-button");

// Etat initial: les conditions sont fermees.
modal.style.display = "none";
modal.setAttribute("aria-hidden", "true");

// Active / désactive le bouton jouer
checkbox.addEventListener("change", () => {
  playButton.disabled = !checkbox.checked;
});

// Ouvrir modal
openModal.addEventListener("click", () => {
  modal.style.display = "block";
  modal.setAttribute("aria-hidden", "false");
});

// Fermer modal
closeModal.addEventListener("click", () => {
  modal.style.display = "none";
  modal.setAttribute("aria-hidden", "true");
});

// Fermer avec la touche Echap
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && modal.style.display === "block") {
    modal.style.display = "none";
    modal.setAttribute("aria-hidden", "true");
  }
});

gamePlayButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (!checkbox.checked) {
      alert("Tu dois accepter les conditions avant de lancer un jeu.");
      modal.style.display = "block";
      modal.setAttribute("aria-hidden", "false");
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