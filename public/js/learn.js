let cards = document.querySelectorAll(".list-group-item");
let cardsArray = Array.from(cards);
cardsArray.forEach((card) => {
  // card.addEventListener("click", showCard(card));
  card.addEventListener("click", function showCard(card) {
    console.log("ayeee", card);
    card.target.closest(".list-group-item").classList.add("clicked");

    let cardId =
      card.target.attributes.src.ownerElement.offsetParent.dataset.id;
    let selectedLetterInput = document.getElementById("selectedLetter");
    selectedLetterInput.value = cardId;

    console.log(selectedLetterInput.value);
    console.log(cardId);
    fetch(`/learn/getCard/${cardId}`, {
      method: "get",
    })
      .then((response) => response.json())
      .then((jsonData) => {
        let selectedCard = document.getElementById(jsonData.selectedLetter);
        let modalContent = document.getElementById("modal-content");
        console.log(jsonData);
        // console.log(selectedCard);
        let imgSize = document.getElementById("newImg");
        let uploadedImg = document.getElementById("uploadedImg");
        let newLetterContainer = jsonData.letterContainer[0];

        if (newLetterContainer.image) {
          // add logic here
        }
        // cardsArray.forEach((card) => {
        //   if (card.classList) {
        //   // card.classList.add("updatedCard");
        //   // card.target.closest(".list-group-item").classList.add("clicked");
        //         }
        //     });
        // console.log(newLetterContainer[0].letter);

        // DELETE        DELETE  DELETE        DELETE        DELETE  DELETE         DELETE        DELETE  DELETE

        // let deleteImgLetterInput = document.getElementById("deleteImgLetter");
        // deleteImgLetterInput.value = newLetterContainer._Id;

        let newArrLetters = jsonData.arrLetters;
        // for (let i = 0; i < newArrLetters.length; i++) {
        if (!newLetterContainer) {
          imgSize.src = `letters/${cardId}.png`;
          uploadedImg.src = "";
          console.log("undefined for real");
          let imgUploadFormInput = document.getElementById("imgUploadForm");
          imgUploadFormInput.hidden = false;

          // DELETE        DELETE  DELETE        DELETE        DELETE  DELETE         DELETE        DELETE  DELETE
          // let deleteBtnDiv = document.getElementById("deleteBtnDiv");
          // deleteBtnDiv.hidden = true;
          // if (newLetterContainer[i].letter === cardId) {
          //   return;
          // }
        }
        //  if (
        //   // newLetterContainer[i]
        //   // newArrLetters[i] === cardId &&
        //   newLetterContainer.letter === jsonData.selectedLetter
        // )
        else {
          console.log("working", newLetterContainer.letter);
          console.log(newLetterContainer.image);
          imgSize.src = `letters/${cardId}.png`;
          uploadedImg.src = `${newLetterContainer.image}`;
          let imgUploadFormInput = document.getElementById("imgUploadForm");
          imgUploadFormInput.hidden = true;
          console.log("newLetterContainer.length", newLetterContainer.image);

          let updatedCard = cardsArray.forEach((card) => {
            if (newLetterContainer.image) {
              // card.classList.add("updatedCard");
              // card.target.closest(".list-group-item").classList.add("clicked");
            }
          });
          // DELETE        DELETE  DELETE        DELETE        DELETE  DELETE         DELETE        DELETE  DELETE
          // let deleteBtnDiv = document.getElementById("deleteBtnDiv");
          // deleteBtnDiv.hidden = false;
          // if (newLetterContainer[i].letter === cardId) {
          //   return;
          // }
          // if(newLetterContainer[i]){

          // }
          // uploadedImg.src = `${newLetterContainer[i].image}`;
        }
        // }
        modal.style.display = "block";
        // modalContent.appendChild(selectedCard);
        // let deleteBtnDiv = document.getElementById("deleteBtnDiv");
        // deleteBtnDiv.hidden = false;
        // let imageUploadDiv = document.getElementById("imageUploadDiv");
        // imageUploadDiv.hidden = false;
      });
  });
});

// function checkCards(){
//   cardsArray.forEach((card) => {
//     if (card.classList) {
//       // card.classList.add("updatedCard");
//       // card.target.closest(".list-group-item").classList.add("clicked");
//     }
//   });
// }

// Get the modal
var modal = document.getElementById("myModal");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  let uploadedImg = document.getElementById("uploadedImg");
  uploadedImg.src = "";
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
