const container = document.querySelector(".snow-container");
const numFlakes = 5; // nombre de flocons

for(let i = 0; i < numFlakes; i++){
  const flake = document.createElement("div");
  flake.classList.add("snowflake");

  // position et taille aléatoire
  flake.style.left = Math.random() * 125 + "vw";
  flake.style.width = flake.style.height = Math.random() * 8 + 4 + "px";

  // vitesse aléatoire
  flake.style.animationDuration = Math.random() * 10 + 8 + "s";

  container.appendChild(flake);
}