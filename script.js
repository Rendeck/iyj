// CARRUSEL
const track = document.querySelector(".carousel-track");
const slides = Array.from(track.children);
let index = 0;

function showSlide(i) {
  index = (i + slides.length) % slides.length;
  track.style.transform = `translateX(-${index * 100}%)`;
}

// Auto cambio cada 4 segundos
setInterval(() => showSlide(index + 1), 4000);
const heartsContainer = document.querySelector(".hearts-container");
const heartColors = ["#ff4f81", "#ff85a1", "#ff2d55", "#ff99cc", "#e91e63"];
const heartShapes = ["💖", "❤️", "💕", "💓"];

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.textContent =
    heartShapes[Math.floor(Math.random() * heartShapes.length)];

  // Posición horizontal aleatoria dentro de toda la ventana
  heart.style.left = Math.random() * 100 + "vw";
  // Posición vertical aleatoria dentro de toda la ventana (no sólo abajo)
  heart.style.top = Math.random() * 100 + "vh";

  // Tamaño aleatorio
  heart.style.fontSize = Math.random() * 25 + 15 + "px";
  // Color aleatorio
  heart.style.color =
    heartColors[Math.floor(Math.random() * heartColors.length)];

  heartsContainer.appendChild(heart);

  // Remover el corazón después de 5 segundos (duración de la animación)
  setTimeout(() => heart.remove(), 5000);
}

// Crear un corazón cada 300 ms (ajusta la frecuencia a tu gusto)
setInterval(createHeart, 300);

const btn = document.getElementById("showMsgBtn");
const modal = document.getElementById("modal");
const closeBtn = document.getElementById("closeModalBtn");

btn.addEventListener("click", () => {
  modal.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Cerrar modal al hacer clic fuera del contenido
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

// Cerrar modal con tecla ESC
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal.style.display === "flex") {
    modal.style.display = "none";
  }
});

<button id="playMusicBtn">🔊 Activar música</button>;

const music = document.getElementById("romanticMusic");
document.getElementById("playMusicBtn").addEventListener("click", () => {
  music.muted = false;
  music.play();
  document.getElementById("playMusicBtn").style.display = "none";
});
