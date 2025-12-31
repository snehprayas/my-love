const slides = document.querySelectorAll(".slide");
const music = document.getElementById("bgMusic");
const heartsContainer = document.querySelector(".hearts");
const confettiContainer = document.querySelector(".confetti");
const successOverlay = document.getElementById("successOverlay");

let current = 0;

function playMusic() {
  if (music.paused) {
    music.currentTime = 38; // Starts at the romantic part
    music.play().catch(()=>{});
  }
}

function showSlide(i) {
  slides.forEach(s => s.classList.remove("active"));
  slides[i].classList.add("active");
}

document.addEventListener("click", () => {
  // Only advance slides if overlay isn't active
  if (successOverlay.style.display !== "flex") {
    playMusic();
    if (current < slides.length - 1) {
      current++;
      showSlide(current);
    }
  }
});

// YES Button Logic
document.querySelector(".yes-btn").addEventListener("click", e => {
  e.stopPropagation();
  document.getElementById("formAnswer").value = "YES ❤️";
  document.getElementById("responseForm").submit();
  
  // Show romantic success message
  successOverlay.style.display = "flex";
  celebrate();
});

// NO Button Logic
document.querySelector(".no-btn").addEventListener("click", e => {
  e.stopPropagation();
  document.getElementById("formAnswer").value = "NO";
  document.getElementById("responseForm").submit();
  alert("I'll always value your honesty 🤍");
});

// Background Icons
const icons = ["❤️","💖","✨","🌸","🤍"];
setInterval(() => {
  const h = document.createElement("span");
  h.innerHTML = icons[Math.floor(Math.random()*icons.length)];
  h.style.left = Math.random()*100 + "vw";
  h.style.fontSize = (Math.random()*16+12)+"px";
  h.style.animationDuration = (Math.random()*5+6)+"s";
  heartsContainer.appendChild(h);
  setTimeout(()=>h.remove(),8000);
}, 500);

function celebrate() {
  for (let i=0; i<50; i++) {
    const c = document.createElement("span");
    c.innerHTML = icons[Math.floor(Math.random()*icons.length)];
    c.style.left = Math.random()*100 + "vw";
    c.style.animationDuration = (Math.random()*3+3)+"s";
    confettiContainer.appendChild(c);
  }
}
