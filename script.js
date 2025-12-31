const slides = document.querySelectorAll(".slide");
const music = document.getElementById("bgMusic");
let current = 0;

function showSlide(index) {
  slides.forEach(slide => slide.classList.remove("active"));
  slides[index].classList.add("active");
}

// Function to handle moving to the next slide
function nextSlide() {
  // Start music on the first interaction
  if (music.paused) {
    music.play().catch(e => console.log("Audio waiting for interaction"));
  }
  
  current = (current + 1) % slides.length;
  showSlide(current);
}

// Click/Tap event
document.addEventListener("click", nextSlide);

// Keyboard controls
document.addEventListener("keydown", e => {
  if (e.key === "ArrowRight") nextSlide();
  if (e.key === "ArrowLeft") {
    current = (current - 1 + slides.length) % slides.length;
    showSlide(current);
  }
});

// Floating hearts generator
const heartContainer = document.querySelector(".hearts");
setInterval(() => {
  const heart = document.createElement("span");
  heart.innerHTML = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (Math.random() * 3 + 5) + "s";
  heart.style.fontSize = (Math.random() * 10 + 15) + "px";
  heartContainer.appendChild(heart);

  setTimeout(() => heart.remove(), 8000);
}, 400);
