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
// Img Scroll effect
// $(document).ready(function () {
//   var images = $(".horizontal-scroll img");

//   images.hover(
//     function () {
//       $(this).css("animation-play-state", "paused");
//     },
//     function () {
//       $(this).css("animation-play-state", "running");
//     }
//   );
// });

// Doesn't work

// $(document).ready(function() {
//   var images = $(".horizontal-scroll img");
//   var containerWidth = $(".container").width();
//   var totalWidth = 0;

//   // Clone and append the images
//   images.clone().appendTo(".horizontal-scroll");

//   // Calculate the total width of the images
//   images.each(function() {
//     totalWidth += $(this).outerWidth(true);
//   });

//   // Set the width of the container to accommodate the duplicated images
//   $(".horizontal-scroll").width(totalWidth * 2);

//   function scrollImages() {
//     $(".horizontal-scroll").animate({ "margin-left": -totalWidth }, 10000, "linear", function() {
//       $(".horizontal-scroll").css("margin-left", 0);
//       scrollImages();
//     });
//   }

//   scrollImages();

//   images.hover(
//     function() {
//       $(".horizontal-scroll").stop();
//     },
//     function() {
//       scrollImages();
//     }
//   );
// });
