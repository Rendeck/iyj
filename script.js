document.addEventListener("DOMContentLoaded", function () {
  // ---- Carrusel automático ----
  const track = document.querySelector(".carousel-track");
  const cards = document.querySelectorAll(".card");
  let index = 0;

  function moveCarousel() {
    index++;
    if (index >= cards.length) index = 0;
    track.style.transform = `translateX(-${index * 100}%)`;
  }
  setInterval(moveCarousel, 3000);

  // ---- Corazones flotantes ----
  const heartsContainer = document.querySelector(".hearts-container");
  const heartColors = ["#ff4f81", "#ff85a1", "#ff2d55", "#ff99cc", "#e91e63"];
  const heartShapes = ["💖", "❤️", "💕", "💓"];

  function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.textContent =
      heartShapes[Math.floor(Math.random() * heartShapes.length)];
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = Math.random() * 100 + "vh";
    heart.style.fontSize = Math.random() * 25 + 15 + "px";
    heart.style.color =
      heartColors[Math.floor(Math.random() * heartColors.length)];
    heartsContainer.appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
  }
  setInterval(createHeart, 300);

  // ---- Modal ----
  const btn = document.getElementById("showMsgBtn");
  const modal = document.getElementById("modal");
  const closeBtn = document.getElementById("closeModalBtn");

  btn.addEventListener("click", () => (modal.style.display = "flex"));
  closeBtn.addEventListener("click", () => (modal.style.display = "none"));
  window.addEventListener("click", (e) => {
    if (e.target === modal) modal.style.display = "none";
  });
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.style.display === "flex")
      modal.style.display = "none";
  });

  // ---- Música ----
  const music = document.getElementById("romanticMusic");
  document.getElementById("playMusicBtn").addEventListener("click", () => {
    music.muted = false;
    music.play();
    document.getElementById("playMusicBtn").style.display = "none";
  });
});

setInterval(moveCarousel, 3000); // Cambia cada 3 segundos

const heartsContainer = document.querySelector(".hearts-container");
const heartColors = ["#ff4f81", "#ff85a1", "#ff2d55", "#ff99cc", "#e91e63"];
const heartShapes = ["💖", "❤️", "💕", "💓"];

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.textContent =
    heartShapes[Math.floor(Math.random() * heartShapes.length)];
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.top = Math.random() * 100 + "vh";
  heart.style.fontSize = Math.random() * 25 + 15 + "px";
  heart.style.color =
    heartColors[Math.floor(Math.random() * heartColors.length)];
  heartsContainer.appendChild(heart);
  setTimeout(() => heart.remove(), 5000);
}

setInterval(createHeart, 300);

const btn = document.getElementById("showMsgBtn");
const modal = document.getElementById("modal");
const closeBtn = document.getElementById("closeModalBtn");

btn.addEventListener("click", () => (modal.style.display = "flex"));
closeBtn.addEventListener("click", () => (modal.style.display = "none"));
window.addEventListener("click", (e) => {
  if (e.target === modal) modal.style.display = "none";
});
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal.style.display === "flex") {
    modal.style.display = "none";
  }
});

const music = document.getElementById("romanticMusic");
document.getElementById("playMusicBtn").addEventListener("click", () => {
  music.muted = false;
  music.play();
  document.getElementById("playMusicBtn").style.display = "none";
});
