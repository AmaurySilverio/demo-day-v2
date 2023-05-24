let button = document
  .querySelector("button")
  .addEventListener("click", filterImages);

// function filterImages() {
//   var input = document.getElementById("searchInput").value.toLowerCase();
//   var images = document.getElementsByTagName("img");

//   for (var i = 0; i < images.length; i++) {
//     var imageName = images[i].alt.toLowerCase();
//     if (imageName.indexOf(input) === -1) {
//       images[i].style.display = "none";
//     } else {
//       images[i].style.display = "block";
//     }
//   }
// }

function filterImages() {
  var input = document.getElementById("searchInput").value.toLowerCase();
  var images = document.getElementsByTagName("img");
  var gridContainer = document.getElementById("gridContainer");

  var matchingImages = 0;

  for (var i = 0; i < images.length; i++) {
    var imageName = images[i].alt.toLowerCase();
    if (imageName.indexOf(input) === -1) {
      images[i].parentNode.style.display = "none";
    } else {
      images[i].parentNode.style.display = "block";
      matchingImages++;
    }
  }

  if (matchingImages === 0) {
    gridContainer.style.display = "none";
  } else {
    gridContainer.style.display = "grid";
  }
}

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
