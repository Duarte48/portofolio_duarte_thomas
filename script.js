// === 1. Hamburger Menu ===
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// === 2. Sélection des éléments du modal ===
const modal         = document.getElementById('project-modal');
const titleEl       = document.getElementById('modal-title');
const descEl        = document.getElementById('modal-desc');
const gallery       = document.getElementById('modal-gallery');
const techsContainer= document.getElementById('modal-techs');

// === 3. Ouvrir le modal en fonction de la carte cliquée ===
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('click', () => {
    // 3.1 Récupère les données
    const title       = card.dataset.title;
    const description = card.dataset.description;
    const images      = JSON.parse(card.dataset.images);
    const techs       = JSON.parse(card.dataset.techs);

    // 3.2 Injecte titre & description
    titleEl.innerText = title;
    descEl.innerText  = description;

    // 3.3 Construit la galerie
    gallery.innerHTML = '';
    images.forEach(src => {
      const img = document.createElement('img');
      img.src    = src;
      img.alt    = title;
      img.className = 'w-48 h-32 object-cover rounded-lg flex-shrink-0';
      gallery.appendChild(img);
    });

    // 3.4 Construit la liste de technologies
    techsContainer.innerHTML = '';
    techs.forEach(tech => {
      const span = document.createElement('span');
      span.innerText   = tech;
      span.className   = 'bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm';
      techsContainer.appendChild(span);
    });

    // 3.5 Affiche le modal
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  });
});

// === 4. Fermer le modal ===
function closeModal() {
  modal.classList.add('hidden');
  document.body.style.overflow = '';
}

// bouton « × »
document.querySelector('#project-modal .absolute').addEventListener('click', closeModal);

// clic en dehors du contenu
window.addEventListener('click', e => {
  if (e.target === modal) closeModal();
});