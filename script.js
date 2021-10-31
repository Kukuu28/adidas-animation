let scrollSmooth = () => {
  let text = document.getElementsByTagName("p")[0];
  let imgThree = document.querySelector(".imgThree");
  let position = text.getBoundingClientRect().top;
  let positionTwo = imgThree.getBoundingClientRect().top;

  let screen = window.innerHeight / 1.3;
  console.log(screen);
  if (position < screen) {
    text.classList.add("appear");
  }
  if (positionTwo < screen) {
    imgThree.classList.add("appear");
  }
};
window.addEventListener("scroll", scrollSmooth);

let container = document.querySelector(".container");
let card = document.querySelector(".card");
let sneakerOne = document.querySelector(".imgOne");
let sneakerTwo = document.querySelector(".imgTwo");
let sneaker = document.querySelector(".background");
let info = document.querySelector(".info");
let infoTwo = document.querySelector(".infoTwo");

let button = document.querySelector(".SneakerButton");

card.addEventListener("mousemove", (e) => {
  let xaxis = (window.innerWidth / 2 - e.pageX) / 25;
  let yaxis = (window.innerHeight / 2 - e.pageY) / 25;

  card.style.transform = `rotateY(${yaxis}deg) rotateX(${xaxis}deg)`;
});

card.addEventListener("mouseleave", (e) => {
  card.style.transition = "all 0.5s ease";
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;
  info.style.transform = "translateZ(0px)";
  infoTwo.style.transform = "translateZ(0px)";

  button.style.transform = "translateZ(0px)";
  info.style.transition = "all 0.5s ease";
  infoTwo.style.transition = "all 0.5s ease";

  button.style.transition = "all 0.5s ease";
});

card.addEventListener("mouseenter", (e) => {
  card.style.transition = "none";
  info.style.transform = "translateZ(80px)";
  infoTwo.style.transform = "translateZ(80px)";

  button.style.transform = "translateZ(80px)";
});

let texts = ["Fly To The Moon With adidas"];
let count = 0;
let index = 0;
let current = "";
let letter = "";

function type() {
  if (count === texts.length) {
    count = 0;
  }
  current = texts[count];
  letter = current.slice(0, index++);
  document.querySelector(".selecter").textContent = letter;
  if (letter.length === current.length) {
    count++;
    index = 0;
  }
  setTimeout(type, 400);
}
type();
