// Ajoute une petite variation au mouvement de la fleur pour simuler une brise aléatoire
const flower = document.querySelector('.flower');

function randomWind() {
    const angle = Math.random() * 10 - 5; // Génère un angle aléatoire entre -5 et 5 degrés
    flower.style.transform = `rotate(${angle}deg)`;

    // Répète l'animation après un intervalle de temps aléatoire
    setTimeout(randomWind, Math.random() * 3000 + 2000);
}

randomWind();
