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
  frontOfCard.classList.toggle("hideCard");
  backOfCard.classList.toggle("seekCard");
}
//individual flashcard variable
// let cards = document.querySelectorAll(".cards");
// let cardsArray = Array.from(cards);

// function shuffleCards(array) {
//   for (let i = array.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [array[i], array[j]] = [array[j], array[i]];
//   }
//   console.log("done", array);
// let cardsArray = document.querySelector(".cards");
//           for (let i = cardsArray.length - 1; i > 0; i--) {
//             const j = Math.floor(Math.random() * (i + 1));
//             [cardsArray[i], cardsArray[j]] = [cardsArray[j], cardsArray[i]];
// <% for (var i=0; i < cards.length; i++) { %>

// <%let randomNumber=Math.floor(Math.random() * cards.length)%>
//               <% console.log(randomNumber)%>
// <% let cardsArray=[] %>
//             <% let cardsCopy=cards %>
//               <% for (var y=0; y < cards.length; y++) { %>
//                 <% cardsArray.push(cardsCopy[y].letter) %>
//                   <%} console.log("cardsCopy",cardsCopy)%>
//                     <% for (let x=cardsArray.length - 1; x> 0; x--) { %>
//                       <% const j=Math.floor(Math.random() * (x + 1)); %>
//                         <% [cardsArray[x], cardsArray[j]]=[cardsArray[j], cardsArray[x]]; %>
//                           <% for (var i=0; i < cards.length; i++) { console.log("ejs", cards.length)%>

//                             <% } console.log(cards.length, cardsArray)%>
//}

// Deck dropdown menu functionality
const dropdownToggleDeck = document.querySelectorAll(".deckToggle");
const dropdownDeckMenu = document.querySelectorAll(".deckMenu");
let dropdownDeckMenus = Array.from(dropdownDeckMenu); // deck menus
let dropdownToggleDecks = Array.from(dropdownToggleDeck); //container

dropdownToggleDecks.forEach(function (deckTitle) {
  deckTitle.addEventListener("click", function () {
    let index = dropdownToggleDecks.indexOf(deckTitle);
    dropdownDeckMenus[index].classList.toggle("show");
  });
});

document.addEventListener("click", function (event) {
  // Check if the clicked element is a deckTitle or a child of a deckTitle
  const isDeckTitle = dropdownToggleDecks.some((deckTitle) =>
    deckTitle.contains(event.target)
  );

  if (!isDeckTitle) {
    // Hide all dropdownDeckMenus
    dropdownDeckMenus.forEach(function (deckMenu) {
      deckMenu.classList.remove("show");
    });
  }
});

// document.addEventListener("click", function (event) {
//   if (
//     !dropdownToggleDecks.contains(event.target) &&
//     !dropdownDeckMenus.contains(event.target)
//   ) {
//     dropdownDeckMenus.classList.remove("show");
//   }
// });
// let iteration = 0;
// let arrDropdownMenuDeck = Array.from(dropdownMenuDeck); // deck menus
// let dropdownToggleDecks = Array.from(dropdownToggleDeck); //container
// console.log(arrDropdownMenuDeck);
// console.log(arrDropdownMenuDeck[iteration]);

// dropdownToggleDecks.forEach(function (deckTitle) {
//   console.log(iteration);
//   deckTitle.addEventListener("click", function () {
//     if (deckTitle === dropdownToggleDecks[0]) {
//       arrDropdownMenuDeck[0].classList.toggle("show");
//     } else {
//       iteration += dropdownToggleDecks.indexOf(deckTitle);
//       console.log(iteration);
//       arrDropdownMenuDeck[iteration].classList.toggle("show");
//     }
//   });
// });
// dropdownToggleDeck.addEventListener("click", function () {
//   dropdownMenuDeck.classList.toggle("show");
// });

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
  // shuffleCards(cardsArray);
  studyDeckModalContainer.style.display = "block";
});
studyCloseModal.addEventListener("click", function () {
  studyDeckModalContainer.style.display = "none";
});
