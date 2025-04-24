// Fonction pour afficher/masquer le menu hamburger
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Variables pour la gestion des images dans la modale
let currentImageIndex = 0;
let images = document.querySelectorAll(".gallery-image");

// Ouvrir la modale
function openModal() {
  const modal = document.querySelector(".modal");
  modal.classList.add("show"); // Ajoute la classe pour afficher la modale
  currentImageIndex = 0; // Réinitialiser l'index à 0
  updateModalImage(); // Mettre à jour l'image visible
}

// Fermer la modale
function closeModal() {
  const modal = document.querySelector(".modal");
  modal.classList.remove("show"); // Enlever la classe pour masquer la modale
}

// Mettre à jour l'image visible dans la modale
function updateModalImage() {
  // Cacher toutes les images
  images.forEach((img) => {
    img.style.display = "none";
  });

  // Afficher l'image courante
  if (images[currentImageIndex]) {
    images[currentImageIndex].style.display = "block";
  }
}

// Déplacer l'image suivante ou précédente
function moveImage(direction) {
  const totalImages = images.length;

  // Calculer le nouvel index
  currentImageIndex += direction;

  // Si on est à la fin, revenir au début ou à la fin selon la direction
  if (currentImageIndex < 0) {
    currentImageIndex = totalImages - 1;
  } else if (currentImageIndex >= totalImages) {
    currentImageIndex = 0;
  }

  // Mettre à jour l'image visible
  updateModalImage();
}

// Ajouter les écouteurs d'événements
document.querySelector(".close").addEventListener("click", closeModal);

// Permet de fermer la modale en cliquant à l'extérieur de la modale (zone sombre)
window.addEventListener("click", (e) => {
  const modal = document.querySelector(".modal");
  if (e.target === modal) {
    closeModal(); // Si on clique à l'extérieur, on ferme la modale
  }
});

// Ajouter les écouteurs pour les boutons de navigation (précédent/suivant)
document.querySelector(".prev-btn").addEventListener("click", () => moveImage(-1)); // Bouton précédent
document.querySelector(".next-btn").addEventListener("click", () => moveImage(1)); // Bouton suivant
