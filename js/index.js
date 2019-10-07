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

// Link click red and scale
const bigRed = document.querySelectorAll(".nav-link");
bigRed.forEach(elem =>
  elem.addEventListener("click", e => {
    elem.style.background = "red";
    elem.style.padding = "2.5%";
    elem.style.transform = "scale(1.3)";
    event.preventDefault(); // Prevent page from reloading
    event.stopPropagation(); // Stop propogation
  })
);

// Turn nav green
const greenHeader = document.querySelector(".main-navigation");
greenHeader.addEventListener("click", event => {
  event.target.style.background = "green";
});

const switchSides = Array.from(document.getElementsByClassName("img-content"));
switchSides.forEach(elem =>
  elem.addEventListener("dblclick", e => {
    elem.parentElement.style.flexDirection = "row-reverse";
  })
);

const newForm = document.createElement("form");
newForm.innerHTML = `Destination:<br>`;
newForm.style.fontSize = "2rem";
newForm.style.padding = "2.5%";
const newInput = document.createElement("input");
newInput.type = "text";
newInput.name = "destination";
newForm.appendChild(newInput);

// Add form on mouseover
const destination = document.querySelector(".content-destination");
destination.addEventListener("mouseover", e => {
  destination.appendChild(newForm);
});

// Scale form field up on focus
newInput.addEventListener("focus", event => {
  event.target.style.transform = "scale(2)";
  event.target.style.transition = "transform 5s";
  event.target.style.background = "limegreen";
  console.log("Focus");
});

// Scale form field down on blur
newInput.addEventListener("blur", event => {
  event.target.style.transform = "scale(0.5)";
  event.target.style.transition = "transform 5s";
  event.target.style.background = "red";
  console.log("Blur");
});

const inputText = document.createElement("h1");
newInput.addEventListener("select", event => {
  inputText.textContent = event.target.value.substring(
    event.target.selectionStart,
    event.target.selectionEnd
  );
  destination.appendChild(inputText);
});

const body = document.querySelector("body");
window.addEventListener("load", event => {
  body.style.transform = "rotate(720deg)";
  body.style.transition = "transform 2s";
});

window.addEventListener("scroll", event => {
  body.style.transform = "scale(0.5)";
});
