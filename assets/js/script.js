$(".slider-1").slick({
  dots: false,
  infinite: true,
  speed: 300,
  prevArrow: ".prev",
  nextArrow: ".next",
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});

let nav_2 = document.querySelector(".nav_2_items");
let dots_2 = document.querySelector(".menu_dots");
let cross_1 = document.querySelector(".cross-btn-1");

dots_2.addEventListener("click", function () {
  nav_2.classList.toggle("active");
});
cross_1.addEventListener("click", function () {
  nav_2.classList.remove("active");
});

let counter = 100;

const counterValue = document.querySelector(".counter-value");
const incrementBtn = document.querySelector(".increment-btn");
const decrementBtn = document.querySelector(".decrement-btn");
const resetBtn = document.querySelector("#reset");

// To increment the value of counter
incrementBtn.addEventListener("click", () => {
  counter++;
  counterValue.innerHTML = counter;
});

// To decrement the value of counter
decrementBtn.addEventListener("click", () => {
  counter--;
  counterValue.innerHTML = counter;
});




let hours = 40;
let minutes = 15;
let seconds = 12;
let milliseconds = 10;

function updateTime() {
  milliseconds--;

  if (milliseconds < 0) {
    milliseconds = 99;
    seconds--;

    if (seconds < 0) {
      seconds = 59;
      minutes--;

      if (minutes < 0) {
        minutes = 59;
        hours--;

        if (hours < 0) {
          // Timer finished
          clearInterval(timer);
          alert("Time's up!");
          return;
        }
      }
    }
  }

  // Format time nicely (hh:mm:ss:ms)
  let formattedTime = `${hours < 10 ? "0" + hours : hours}:${
    minutes < 10 ? "0" + minutes : minutes
  }:${seconds < 10 ? "0" + seconds : seconds}:${
    milliseconds < 10 ? "0" + milliseconds : milliseconds
  }`;
  document.getElementById("timer").textContent = formattedTime;
}

setInterval(updateTime, 10); // Update every 10 milliseconds
