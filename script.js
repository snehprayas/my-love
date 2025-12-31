const slides = document.querySelectorAll(".slide");
const music = document.getElementById("bgMusic");
let current = 0;

function playMusic() {
  music.play().then(() => {
    console.log("Playing");
  }).catch(() => {
    console.log("Interact to play");
  });
}

function showSlide(index) {
  slides.forEach(slide => slide.classList.remove("active"));
  slides[index].classList.add("active");
}

document.addEventListener("click", () => {
  playMusic();
  current = (current + 1) % slides.length;
  showSlide(current);
});

document.addEventListener("touchstart", () => {
  if (music.paused) playMusic();
});

// Create variety of floating icons
const heartContainer = document.querySelector(".hearts");
const icons = ["❤️", "💖", "✨", "🌸", "🤍"];

setInterval(() => {
  const heart = document.createElement("span");
  heart.innerHTML = icons[Math.floor(Math.random() * icons.length)];
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (Math.random() * 3 + 5) + "s";
  heart.style.fontSize = (Math.random() * 15 + 12) + "px";
  heartContainer.appendChild(heart);

  setTimeout(() => heart.remove(), 8000);
}, 350);
