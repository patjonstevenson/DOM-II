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

// Link click rotation
const bigRed = document.querySelectorAll(".nav-link");
bigRed.forEach(elem =>
  elem.addEventListener("click", e => {
    elem.style.background = "red";
    elem.style.padding = "2.5%";
    elem.style.transform = "scale(1.3)";
  })
);
