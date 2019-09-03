// Your code goes here

// Scaling Intro Image
const scaleUp = document.getElementById("intro-img");
scaleUp.addEventListener("mouseenter", e => {
  scaleUp.style.transform = "scale(1.3)";
  scaleUp.style.transition = "transform 0.5s";
});
const scaleDown = document.getElementById("intro-img");
scaleDown.addEventListener("mouseleave", e => {
  scaleDown.style.transform = "scale(1)";
  scaleDown.style.transition = "transform 0.5s";
});
