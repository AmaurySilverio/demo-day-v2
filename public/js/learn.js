let trash = document.getElementsByClassName("fa-trash-can");
let input = document.querySelector(".input");
let button = document.querySelector(".button");

input.addEventListener("input", function () {
  if (input.value.length > 1) {
    button.disabled = true;
  } else {
    button.disabled = false;
  }
});
