// Floating hearts
const hearts = document.querySelector(".hearts");

setInterval(() => {
  const heart = document.createElement("span");
  heart.innerHTML = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = Math.random() * 5 + 5 + "s";
  hearts.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 10000);
}, 300);

// Typing effect
const typing = document.querySelector(".typing");
const text = typing.innerText;
typing.innerText = "";
let i = 0;

function typeEffect() {
  if (i < text.length) {
    typing.innerText += text.charAt(i);
    i++;
    setTimeout(typeEffect, 40);
  }
}
typeEffect();
