const textToSignBtn = document.querySelector(".textToSignBtn");

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

// function that changes sign video speed
function speedChange() {
  let speed = document.querySelector("#speed").value;
  if (speed == 40) {
    document.querySelector("#speedOfText").innerText = "Speed (Fastest)";
  } else if (speed > 40 && speed <= 70) {
    document.querySelector("#speedOfText").innerText = "Speed (Faster)";
  } else if (speed > 70 && speed <= 110) {
    document.querySelector("#speedOfText").innerText = "Speed (Fast)";
  } else if (speed == 120) {
    document.querySelector("#speedOfText").innerText = "Speed (Normal)";
  } else if (speed > 120 && speed <= 160) {
    document.querySelector("#speedOfText").innerText = "Speed (Slow)";
  } else if (speed > 160 && speed <= 190) {
    document.querySelector("#speedOfText").innerText = "Speed (Slower)";
  } else if (speed == 200) {
    document.querySelector("#speedOfText").innerText = "Speed (Slowest)";
  }
}
// function that translates text to asl signs, letter by letter using special asl font
const translate = () => {
  let englishText = document.querySelector("#text").value;
  let speed = document.querySelector("#speed").value;
  speed = speed * 10;
  for (let i = 0; i < englishText.length; i++) {
    setTimeout(() => {
      console.log(`${i} ${englishText[i]}  ${Date()}`);
      document.querySelector(".translatedText").innerText = englishText[i];
      setTimeout(() => {
        if (i == englishText.length - 1) {
          document.querySelector(".translatedText").innerText = "";
        }
      }, speed);
    }, speed * i);
  }
};

speedChange();
textToSignBtn.addEventListener("click", translate);
speed.addEventListener("click", speedChange);
