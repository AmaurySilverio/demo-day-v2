let cards = document.querySelectorAll(".list-group-item");
let cardsArray = Array.from(cards);
cardsArray.forEach((card) => {
  // card.addEventListener("click", showCard(card));
  card.addEventListener("click", function showCard(card) {
    console.log("ayeee", card);
    card.target.closest(".list-group-item").classList.add("clicked");

    let cardId =
      card.target.attributes.src.ownerElement.offsetParent.dataset.id;
    fetch(`/learn/getCard/${cardId}`, {
      method: "get",
    })
      .then((response) => response.json())
      .then((jsonData) => {
        console.log(jsonData);
      });
    modal.style.display = "block";
  });
});

// function retrieveCards(e) {
//   let deckId = e.target.dataset.deckid;
//   fetch(`/study/card/${deckId}`)
//     .then((response) => response.json())
//     .then((jsonData) => {
//       cardContainer.innerHTML = "";
//       jsonData.forEach((item) => {
//         cardContainer.appendChild(createCards(item.letter));
//       });
//       console.log(jsonData);
//       console.log(e.target.dataset);
//       cards = document.querySelectorAll(".cards");
//       cardsArray = Array.from(cards);
//       studyDeckModalContainer.style.display = "block";
//       cardsArray.forEach((card) => {
//         console.log(card);
//         card.classList.toggle("hideCard");
//       });
//       cardsArray[0].classList.toggle("hideCard");
//     });
//   index = 0;
//   answer.hidden = false;
//   nextCardButton.hidden = true;
// }

// Get the modal
var modal = document.getElementById("myModal");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// Profile dropdown menu functionality
const dropdownToggle = document.querySelector(".dropdown-toggle");
const dropdownMenu = document.querySelector(".dropdown-menu");

dropdownToggle.addEventListener("click", function () {
  dropdownMenu.classList.toggle("show");
});

document.addEventListener("click", function (event) {
  if (
    !dropdownToggle.contains(event.target) &&
    !dropdownMenu.contains(event.target)
  ) {
    dropdownMenu.classList.remove("show");
  }
});
