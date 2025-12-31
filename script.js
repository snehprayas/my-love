const slides = document.querySelectorAll(".slide");
const music = document.getElementById("bgMusic");
const hearts = document.querySelector(".hearts");
const confetti = document.querySelector(".confetti");

let current = 0;

function playMusic() {
  if (!music.paused) return;
  music.currentTime = 38;
  music.play().catch(()=>{});
}

function showSlide(i) {
  slides.forEach(s => s.classList.remove("active"));
  slides[i].classList.add("active");
}

document.addEventListener("click", () => {
  playMusic();
  if (current < slides.length - 1) {
    current++;
    showSlide(current);
  }
});

/* Floating background hearts */
const icons = ["❤️","💖","✨","🌸","🤍"];
setInterval(() => {
  const h = document.createElement("span");
  h.innerHTML = icons[Math.floor(Math.random()*icons.length)];
  h.style.left = Math.random()*100 + "vw";
  h.style.fontSize = (Math.random()*16+12)+"px";
  h.style.animationDuration = (Math.random()*5+6)+"s";
  hearts.appendChild(h);
  setTimeout(()=>h.remove(),9000);
},600);

/* YES */
document.querySelector(".yes-btn").addEventListener("click", e => {
  e.stopPropagation();
  document.getElementById("formAnswer").value = "YES ❤️";
  document.getElementById("responseForm").submit();
  celebrate();
});

/* NO */
document.querySelector(".no-btn").addEventListener("click", e => {
  e.stopPropagation();
  document.getElementById("formAnswer").value = "NO";
  document.getElementById("responseForm").submit();
  alert("Thank you for being honest 🤍");
});

/* Celebration */
function celebrate() {
  for (let i=0;i<40;i++) {
    const c = document.createElement("span");
    c.innerHTML = "💖";
    c.style.left = Math.random()*100 + "vw";
    c.style.fontSize = (Math.random()*20+14)+"px";
    c.style.animationDuration = (Math.random()*3+4)+"s";
    confetti.appendChild(c);
    setTimeout(()=>c.remove(),7000);
  }
}
