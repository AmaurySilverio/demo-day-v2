// const profileBtn = document.getElementById("profile-btn");
// const profileInfo = document.getElementById("profile-info");

// profileBtn.addEventListener("click", function () {
//   if (profileInfo.style.display === "none") {
//     profileInfo.style.display = "block";
//   } else {
//     profileInfo.style.display = "none";
//   }
// });

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
