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

//delete deck dropdown
let deleteDeckButton = document.querySelectorAll(".deleteDeck");
let deleteDeckArray = Array.from(deleteDeckButton);
deleteDeckArray.forEach(function (deck) {
  deck.addEventListener("click", deleteDeck);
});

function deleteDeck(e) {
  let deckId = e.target.dataset.deckid;
  fetch(`/study/deletePost/${deckId}`, {
    method: "delete",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((jsonData) => {
      window.location.reload();
    });
}

//flashcard answer button variable
let answer = document.querySelector(".flip");
// let answerArray = Array.from(answer);
let frontOfCard = document.querySelectorAll(".frontOfCard");
let frontOfCardArray = Array.from(frontOfCard);
let backOfCard = document.querySelectorAll(".backOfCard");
let backOfCardArray = Array.from(backOfCard);
//flashcard answer event listener

answer.addEventListener("click", showAnswer);

//individual flashcard variable
let cards = document.querySelectorAll(".cards");
let cardsArray = Array.from(cards);
//flashcard next card button variable
let nextCardButton = document.querySelector(".nextCard");
// let nextCardButtonArray = Array.from(nextCardButton);
let nextButtonClicked = 0;

//flashcard flip/showAnswer function
function showAnswer() {
  cardsArray[index].childNodes[0].childNodes[1].classList.remove("hideCard");
  nextCardButton.hidden = false;
  answer.hidden = true;

  // console.log(cardsArray[index]);
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

  frontOfCard = document.querySelectorAll(".frontOfCard");
  frontOfCardArray = Array.from(frontOfCard);
  backOfCard = document.querySelectorAll(".backOfCard");
  backOfCardArray = Array.from(backOfCard);

  return parentLi;
}

//end of deck li variable
let endOfDeck = document.querySelector(".endOfDeck");
//next card button eventlistener

nextCardButton.addEventListener("click", nextCard);

var counter = 0;
function nextCard() {
  cardsArray[index].childNodes[0].childNodes[1].classList.remove("seekCard");
  // nextCounter++;

  cardsArray[index].classList.toggle("hideCard");
  index++;
  if (index >= cardsArray.length) {
    nextCardButton.hidden = true;
  }
  cardsArray[index].classList.remove("hideCard");
  nextCardButton.hidden = true;
  answer.hidden = false;
}

// Deck dropdown menu functionality
const dropdownToggleDeck = document.querySelectorAll(".deckToggle");
const dropdownDeckMenu = document.querySelectorAll(".deckMenu");
let dropdownDeckMenus = Array.from(dropdownDeckMenu); // deck menus
let dropdownToggleDecks = Array.from(dropdownToggleDeck); //container

dropdownToggleDecks.forEach(function (deckTitle) {
  deckTitle.addEventListener("click", function () {
    let index = dropdownToggleDecks.indexOf(deckTitle);
    dropdownDeckMenus.forEach(function (deckMenu) {
      if (
        deckMenu.classList.contains("show") &&
        deckMenu !== dropdownDeckMenus[index]
      ) {
        deckMenu.classList.remove("show");
      }
    });
    dropdownDeckMenus[index].classList.toggle("show");
    showForm();
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

// function that makes deck dropdown disappears after item is clicked
let dropdownItems = document.querySelectorAll(".dropdownDisappear");
dropdownItems.forEach(function (item) {
  item.addEventListener("click", function () {
    let dropdown = item.closest(".deckMenuDisappear");
    dropdown.classList.remove("show");
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
    });
  index = 0;
  answer.hidden = false;
  nextCardButton.hidden = true;
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
function showForm() {
  let formHidden = document.querySelector(".formHidden");
  formHidden.hidden = false;
}
