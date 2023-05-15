// create deck modal variables
let deckInput = document.querySelector(".deckInput");
let deckButton = document.querySelector(".deckButton");
let deckModalContent = document.getElementById("deckModalContent");
let deckModalContainer = document.getElementById("myModal");
let x = document.getElementsByClassName("close")[0];
//add card modal variables
let cardButton = document.querySelector(".cardButton");
let cardModalContent = document.getElementById("cardModalContent");
let cardModalContainer = document.getElementById("myModalTwo");
let xclose = document.getElementsByClassName("close")[1];
//'create deck' button variable
let btn = document.getElementById("myBtn");
// deck title variable
let addCards = document.querySelector(".addCards");
// study deck modal variables
let studyDeck = document.querySelector(".study");
let studyDeckModalContent = document.getElementById("studyDeckModalContent");
let studyDeckModalContainer = document.getElementById("myModalThree");
let studyCloseModal = document.getElementsByClassName("close")[2];

//flashcard answer button variable
let answer = document.querySelector(".flip");
let frontOfCard = document.querySelector(".frontOfCard");
let backOfCard = document.querySelector(".backOfCard");
//flashcard answer event listener
if (answer) {
  answer.addEventListener("click", showAnswer);
}
//flashcard flip/showAnswer function
function showAnswer() {
  frontOfCard.classList.toggle("hide");
  backOfCard.classList.toggle("seek");
}

//MAKE ^^^ DYNAMIC SO YOU CAN CHOOSE ANY DECK TITLE for the one below too!! querySelectorAll??

// Deck dropdown menu functionality
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

// Select the parent element that contains all the `.deckToggle` elements
// const parent = document.querySelector(".dropDownParent");

// // Add a click event listener to the parent element
// parent.addEventListener("click", function (event) {
//   // Check if the clicked element has the `.deckToggle` class
//   if (event.target.classList.contains("deckToggle")) {
//     // Toggle the `.show` class on the next sibling element
//     const dropdownMenuDeck = event.target.nextElementSibling;
//     dropdownMenuDeck.classList.toggle("show");
//   } else {
//     // If the clicked element is not a `.deckToggle` or a `.deckMenu`, hide all dropdown menus
//     const dropdownMenus = document.querySelectorAll(".deckMenu");
//     dropdownMenus.forEach(function (dropdownMenu) {
//       dropdownMenu.classList.remove("show");
//     });
//   }
// });

// function that makes deck dropdown disappears after item is clicked
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
addCards.addEventListener("click", function () {
  cardModalContainer.style.display = "block";
});
xclose.addEventListener("click", function () {
  cardModalContainer.style.display = "none";
});
//study deck modal event listeners
studyDeck.addEventListener("click", function () {
  studyDeckModalContainer.style.display = "block";
});
studyCloseModal.addEventListener("click", function () {
  studyDeckModalContainer.style.display = "none";
});
