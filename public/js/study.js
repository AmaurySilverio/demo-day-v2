// deck modal variables
let deckInput = document.querySelector(".deckInput");
let deckButton = document.querySelector(".deckButton");
let deckModalContent = document.getElementById("deckModalContent");
let deckModalContainer = document.getElementById("myModal");
let x = document.querySelectorAll(".close")[0];

//card modal variables
let cardButton = document.querySelector(".cardButton");
let cardModalContent = document.getElementById("cardModalContent");
let cardModalContainer = document.getElementById("myModalTwo");
let xclose = document.getElementsByClassName("close")[1];

//'create deck' button variable
let btn = document.getElementById("myBtn");

// deck title variable
let deck = document.querySelector(".deck");

//MAKE ^^^ DYNAMIC SO YOU CAN CHOOSE ANY DECK TITLE for the one below too!! querySelectorAll??

// Profile dropdown menu functionality
const dropdownToggleDeck = document.querySelector(".deckToggle");
const dropdownMenuDeck = document.querySelector(".deckMenu");

dropdownToggleDeck.addEventListener("click", function () {
  dropdownMenuDeck.classList.toggle("show");
});

document.addEventListener("click", function (event) {
  if (
    !dropdownToggleDeck.contains(event.target) &&
    !dropdownMenuDeck.contains(event.target)
  ) {
    dropdownMenuDeck.classList.remove("show");
  }
});

let dropdownItems = document.querySelectorAll(".dropdownDisappear");
dropdownItems.forEach(function (item) {
  item.addEventListener("click", function () {
    let dropdown = item.closest(".deckMenuDisappear");
    dropdown.classList.remove("show");
    // setTimeout(() => {
    //   if (dropdown.classList.contains("hide")) {
    //     dropdown.classList.remove("hide");
    //   }
    // }, 2000);
  });
});

//array of letters
const letters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// deck modal event listeners
btn.addEventListener("click", function () {
  deckModalContainer.style.display = "block";
});
x.addEventListener("click", function () {
  deckModalContainer.style.display = "none";
});
//card modal event listeners
deck.addEventListener("click", function () {
  cardModalContainer.style.display = "block";
});
xclose.addEventListener("click", function () {
  cardModalContainer.style.display = "none";
});
