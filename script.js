const slides = document.querySelectorAll(".slide");
const music = document.getElementById("bgMusic");
let current = 0;

// Force music to play
function playMusic() {
  music.play().then(() => {
    console.log("Music started");
  }).catch(err => {
    console.log("Audio waiting for touch");
  });
}

function showSlide(index) {
  slides.forEach(slide => slide.classList.remove("active"));
  slides[index].classList.add("active");
}

document.addEventListener("click", () => {
  // First click starts music and moves slide
  playMusic();
  current = (current + 1) % slides.length;
  showSlide(current);
});

// Touch support for mobile
document.addEventListener("touchstart", () => {
  if (music.paused) playMusic();
});

// Floating hearts
const heartContainer = document.querySelector(".hearts");
const icons = ["❤️", "💖", "✨", "🌸"];

setInterval(() => {
  const heart = document.createElement("span");
  heart.innerHTML = icons[Math.floor(Math.random() * icons.length)];
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (Math.random() * 3 + 4) + "s";
  heart.style.fontSize = (Math.random() * 15 + 10) + "px";
  heartContainer.appendChild(heart);

  setTimeout(() => heart.remove(), 7000);
}, 300);
