const slides = document.querySelectorAll(".slide");
const music = document.getElementById("bgMusic");
const successOverlay = document.getElementById("successOverlay");
const heartsContainer = document.querySelector(".hearts");

let current = 0;

function playMusic() {
  if (music.paused) {
    music.currentTime = 38; 
    music.play().catch(()=>{});
  }
}

document.addEventListener("click", () => {
  if (successOverlay.style.display !== "flex") {
    playMusic();
    if (current < slides.length - 1) {
      current++;
      slides.forEach(s => s.classList.remove("active"));
      slides[current].classList.add("active");
    }
  }
});

document.querySelector(".yes-btn").addEventListener("click", e => {
  e.stopPropagation();
  document.getElementById("formAnswer").value = "YES ❤️";
  document.getElementById("responseForm").submit();
  successOverlay.style.display = "flex";
});

document.querySelector(".no-btn").addEventListener("click", e => {
  e.stopPropagation();
  document.getElementById("formAnswer").value = "NO";
  document.getElementById("responseForm").submit();
  alert("I respect your choice 🤍");
});

const icons = ["❤️","💖","✨","🌸","🤍"];
setInterval(() => {
  const h = document.createElement("span");
  h.innerHTML = icons[Math.floor(Math.random()*icons.length)];
  h.style.left = Math.random()*100 + "vw";
  h.style.fontSize = (Math.random()*15+10)+"px";
  h.style.animationDuration = (Math.random()*3+5)+"s";
  heartsContainer.appendChild(h);
  setTimeout(()=>h.remove(),8000);
}, 500);
