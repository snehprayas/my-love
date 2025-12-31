// Floating hearts background
const heartContainer = document.querySelector(".hearts");

setInterval(() => {
  const heart = document.createElement("span");
  heart.innerHTML = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (Math.random() * 5 + 6) + "s";
  heartContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 12000);
}, 350);

const slides = document.querySelectorAll(".slide");
let current = 0;

function showSlide(index) {
  slides.forEach(slide => slide.classList.remove("active"));
  slides[index].classList.add("active");
}

document.addEventListener("click", () => {
  current = (current + 1) % slides.length;
  showSlide(current);
});

// Arrow keys
document.addEventListener("keydown", e => {
  if (e.key === "ArrowRight") {
    current = (current + 1) % slides.length;
    showSlide(current);
  }
  if (e.key === "ArrowLeft") {
    current = (current - 1 + slides.length) % slides.length;
    showSlide(current);
  }
});

// Swipe (mobile)
let startX = 0;
document.addEventListener("touchstart", e => {
  startX = e.touches[0].clientX;
});

document.addEventListener("touchend", e => {
  let endX = e.changedTouches[0].clientX;
  if (startX - endX > 50) {
    current = (current + 1) % slides.length;
    showSlide(current);
  }
});
