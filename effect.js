document.addEventListener("DOMContentLoaded", () => {
const container = document.querySelector(".snow-container");
  if (!container) return;

const numFlakes = 3; // nombre de flocons

for(let i = 0; i < numFlakes; i++){
  const flake = document.createElement("div");
  flake.classList.add("snowflake");

  // position et taille aléatoire
  flake.style.left = Math.random() * 100 + "vw";
  flake.style.width = flake.style.height = Math.random() * 8 + 4 + "px";

  // vitesse aléatoire
  flake.style.animationDuration = Math.random() * 15 + 10 + "s";

  container.appendChild(flake);
}

// ======== MENU BURGER RESPONSIVE ========

// Récupère les éléments du DOM
const burger = document.getElementById("burger");
const nav = document.getElementById("nav");

// Vérifie que les éléments existent avant d'ajouter l'événement
if (burger && nav) {
  burger.addEventListener("click", () => {
    nav.classList.toggle("open"); // Ajoute ou retire la classe .open
  });
}
});


