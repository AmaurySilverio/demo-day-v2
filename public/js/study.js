var index = 0;
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
let addCards = document.querySelectorAll(".addCards");
let addCardsArray = Array.from(addCards);
addCardsArray.forEach(function (addCardsButton) {
  addCardsButton.addEventListener("click", addCardsFunctionality);
});
// study deck modal variables
let studyDeck = document.querySelectorAll(".study");
let studyDeckArray = Array.from(studyDeck);
studyDeckArray.forEach(function (deck) {
  deck.addEventListener("click", retrieveCards);
});
let studyDeckModalContent = document.getElementById("studyDeckModalContent");
let studyDeckModalContainer = document.getElementById("myModalThree");
let studyCloseModal = document.getElementsByClassName("close")[2];

//flashcard answer button variable
let answer = document.querySelector(".flip");
// let answerArray = Array.from(answer);
let frontOfCard = document.querySelectorAll(".frontOfCard");
let frontOfCardArray = Array.from(frontOfCard);
let backOfCard = document.querySelectorAll(".backOfCard");
let backOfCardArray = Array.from(backOfCard);
//flashcard answer event listener

answer.addEventListener("click", showAnswer);

//flashcard flip/showAnswer function
function showAnswer() {
  // frontOfCardArray.forEach(function (frontCard) {
  //   frontCard.classList.toggle("hideCard");
  // });
  // console.log(cardsArray[index].childNodes[0]);
  cardsArray[index].childNodes[0].childNodes[1].classList.remove("hideCard");
  // console.log(cardsArray[index]);

  // answerArray[answerCounter].hidden = true;
  // answerCounter++;
  // console.log("answer counter:", answerCounter);
}

let cardContainer = document.querySelector(".cardContainer");
function createCards(letter) {
  let parentLi = document.createElement("li");
  parentLi.className = "list-group-item cards";
  let parentDiv = document.createElement("div");
  parentDiv.className = "row cardFormat";
  let div1 = document.createElement("div");
  div1.className = "col-md-5 frontOfCard";
  let frontCard = document.createElement("img");
  frontCard.src = `lettersFlashCardFront/${letter}.png`;
  let div2 = document.createElement("div");
  div2.className = "col-md-5 backOfCard hideCard";
  let backCard = document.createElement("img");
  backCard.src = `lettersFlashCardBack/${letter}.png`;
  let div3 = document.createElement("div");
  div3.className = "col-md-2 text-right cardFormatButtons";
  let answerBtn = document.createElement("button");
  answerBtn.className = "flip btn btn-primary rounded-pill";
  answerBtn.innerText = "Answer";
  let nextCardBtn = document.createElement("button");
  nextCardBtn.className = "nextCard btn btn-primary rounded-pill";
  nextCardBtn.innerText = "Next Card";
  div3.appendChild(nextCardBtn);
  div3.appendChild(answerBtn);
  div2.appendChild(backCard);
  div1.appendChild(frontCard);
  parentDiv.appendChild(div1);
  parentDiv.appendChild(div2);
  // parentDiv.appendChild(div3);
  parentLi.appendChild(parentDiv);

  // answer = document.querySelectorAll(".flip");
  // answerArray = Array.from(answer);
  // nextCardButton = document.querySelectorAll(".nextCard");
  // nextCardButtonArray = Array.from(nextCardButton);
  frontOfCard = document.querySelectorAll(".frontOfCard");
  frontOfCardArray = Array.from(frontOfCard);
  backOfCard = document.querySelectorAll(".backOfCard");
  backOfCardArray = Array.from(backOfCard);

  // answerArray.forEach(function (answerButton) {
  //   answerButton.addEventListener("click", () => showAnswer());
  // });

  // answerArray[answerArray.length - 1].addEventListener("click", showAnswer);

  // nextCardButtonArray.forEach(function (nextCardButton) {
  //   nextCardButton.addEventListener("click", nextCard);
  // });

  return parentLi;
}

//individual flashcard variable
let cards = document.querySelectorAll(".cards");
let cardsArray = Array.from(cards);
//flashcard next card button variable
let nextCardButton = document.querySelector(".nextCard");
// let nextCardButtonArray = Array.from(nextCardButton);
let nextButtonClicked = 0;
//end of deck li variable
let endOfDeck = document.querySelector(".endOfDeck");
//next card button eventlistener

nextCardButton.addEventListener("click", nextCard);

var counter = 0;
function nextCard() {
  // if (nextCounter === cardsArray.length) {
  //   cardsArray[nextButtonClicked].classList.toggle("hideCard");
  //   endOfDeck.hidden = false;
  // }
  cardsArray[index].childNodes[0].childNodes[1].classList.remove("seekCard");
  // nextCounter++;

  cardsArray[index].classList.toggle("hideCard");
  index++;
  // console.log("button click counter:", nextButtonClicked);
  cardsArray[index].classList.remove("hideCard");
  console.log(index);
  // else {
  //   cardsArray[nextButtonClicked].classList.toggle("hideCard");
  //   endOfDeck.hidden = false;
  // }

  // if (nextButtonClicked === cardsArray.length) {
  //   let container = document.createElement("h2");
  //   container.innerText = "Congratulations! You have finished this deck.";
  //   studyDeckModalContent.append(container);
  // }
}
// console.log(cardsArray);
// if(nextButtonClicked )

// function endOfDeck() {
//   let container = document.createElement("h2");
//   container.innerText = "Congratulations! You have finished this deck.";
//   studyDeckModalContent.append(container);
// }

// //individual flashcard variable
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

function retrieveCards(e) {
  let deckId = e.target.dataset.deckid;
  fetch(`/study/card/${deckId}`)
    .then((response) => response.json())
    .then((jsonData) => {
      cardContainer.innerHTML = "";
      jsonData.forEach((item) => {
        cardContainer.appendChild(createCards(item.letter));
      });
      console.log(jsonData);
      console.log(e.target.dataset);
      cards = document.querySelectorAll(".cards");
      cardsArray = Array.from(cards);
      studyDeckModalContainer.style.display = "block";
      cardsArray.forEach((card) => {
        console.log(card);
        card.classList.toggle("hideCard");
      });
      cardsArray[0].classList.toggle("hideCard");
      // hideCards(cardsArray);
    });
  index = 0;
}

function addCardsFunctionality() {
  cardModalContainer.style.display = "block";
}

function resetStudyModal() {
  nextButtonClicked = 0;
  cardsArray.forEach(function (card) {
    card.classList.remove("hideCard");
  });
  endOfDeck.hidden = true;
  answerCounter = 0;
  nextCounter = 1;
  answerArray[0].hidden = false;
  backOfCardArray[0].classList.remove("seekCard");
}
// deck modal event listeners
btn.addEventListener("click", function () {
  deckModalContainer.style.display = "block";
});
x.addEventListener("click", function () {
  deckModalContainer.style.display = "none";
});

xclose.addEventListener("click", function () {
  cardModalContainer.style.display = "none";
});

studyCloseModal.addEventListener("click", function () {
  studyDeckModalContainer.style.display = "none";
  // resetStudyModal();
});
console.log(cards);
