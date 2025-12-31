const slides = document.querySelectorAll(".slide");
const music = document.getElementById("bgMusic");
const heartsBg = document.querySelector(".hearts");
const confettiContainer = document.querySelector(".confetti");

let current = 0;
let proposalTriggered = false;

function playMusic() {
  if (!music.paused) return;
  music.currentTime = 38; // Main emotional part
  music.play().catch(() => {});
}

function showSlide(index) {
  slides.forEach(s => s.classList.remove("active"));
  slides[index].classList.add("active");

  // Proposal effects
  if (slides[index].classList.contains("final") && !proposalTriggered) {
    proposalTriggered = true;
    heartExplosion();
    startConfetti();
  }
}

document.addEventListener("click", () => {
  playMusic();
  current = (current + 1) % slides.length;
  showSlide(current);
});

document.addEventListener("touchstart", () => {
  playMusic();
});

/* Floating background hearts */
const icons = ["❤️","💖","✨","🌸","🤍"];
setInterval(() => {
  const h = document.createElement("span");
  h.innerHTML = icons[Math.floor(Math.random() * icons.length)];
  h.style.left = Math.random() * 100 + "vw";
  h.style.animationDuration = (Math.random() * 4 + 7) + "s";
  h.style.fontSize = (Math.random() * 15 + 12) + "px";
  heartsBg.appendChild(h);
  setTimeout(() => h.remove(), 9000);
}, 600);

/* 💥 Heart Explosion */
function heartExplosion() {
  for (let i = 0; i < 35; i++) {
    const heart = document.createElement("span");
    heart.innerHTML = "❤️";
    heart.style.position = "absolute";
    heart.style.left = "50%";
    heart.style.top = "50%";
    heart.style.fontSize = "22px";
    heart.style.transform = `translate(-50%, -50%) rotate(${Math.random()*360}deg)`;
    heart.style.transition = "all 1.5s ease-out";
    heart.style.zIndex = 4;
    document.body.appendChild(heart);

    setTimeout(() => {
      heart.style.left = Math.random() * 100 + "vw";
      heart.style.top = Math.random() * 100 + "vh";
      heart.style.opacity = "0";
    }, 50);

    setTimeout(() => heart.remove(), 1600);
  }
}

/* 🎉 Confetti */
function startConfetti() {
  setInterval(() => {
    const c = document.createElement("span");
    c.innerHTML = "🎉";
    c.style.left = Math.random() * 100 + "vw";
    c.style.fontSize = (Math.random() * 20 + 12) + "px";
    c.style.animationDuration = (Math.random() * 3 + 4) + "s";
    confettiContainer.appendChild(c);
    setTimeout(() => c.remove(), 7000);
  }, 250);
}
