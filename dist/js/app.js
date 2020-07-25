// immediate invoked function expression

(function () {
  const pictureList = ["pic-1", "pic-2", "pic-3", "pic-4"];

  // select both all control buttons
  const buttons = document.querySelectorAll(".btn");
  const imageDisplay = document.querySelector(".img-container");
  let counter = 0;

  buttons.forEach(function (button) {
    button.addEventListener("click", function (e) {
      // previous img
      if (button.classList.contains("btn-left")) {
        counter--;

        if (counter < 0) {
          counter = pictureList.length - 1;
        }
        imageDisplay.style.backgroundImage = `url('/dist/img/${pictureList[counter]}.jpg')`;
      }
      // next img
      if (button.classList.contains("btn-right")) {
        counter++;
        if (counter > pictureList.length - 1) {
          counter = 0;
        }
        imageDisplay.style.backgroundImage = `url('/dist/img/${pictureList[counter]}.jpg')`;
      }
      // start the slide show with play button
      if (button.classList.contains("btn-play")) {
        setInterval((e) => {
          counter++;
          if (counter > pictureList.length - 1) {
            counter = 0;
          }
          imageDisplay.style.backgroundImage = `url('/dist/img/${pictureList[counter]}.jpg')`;
        }, 3000);
      }
    });
  });
  //function for image to change dynamicly or autoplay
  document.addEventListener("DOMContentLoaded", function (e) {
    setInterval((e) => {
      counter++;
      if (counter > pictureList.length - 1) {
        counter = 0;
      }
      imageDisplay.style.backgroundImage = `url('/dist/img/${pictureList[counter]}.jpg')`;
    }, 3000);
  });
})();

// this code can be refactored
