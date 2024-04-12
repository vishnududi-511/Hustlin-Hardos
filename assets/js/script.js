
$(".nav_slider").slick({
  arrows: false,
  dots: false,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  variableWidth: true,
  slidesToShow: 6,
  autoplay: true,
  autoplaySpeed: 0,
  speed: 5000,
  pauseOnHover: true,
  cssEase: "linear",
});
$(".slider-1").slick({
  dots: false,
  infinite: true,
  autoplaySpeed: 1,
  prevArrow: ".prev",
  nextArrow: ".next",
  slidesToShow: 3,
  pauseOnHover: false,
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

$(".slider-2").slick({
  dots: false,
  infinite: true,
  speed: 300,
  prevArrow: ".prev_2",
  nextArrow: ".next_2",
  slidesToShow: 2,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1500,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
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
let cross_2 = document.querySelector(".cross-btn-2");
let shadow_nav2 = document.querySelector(".nav_2_shadow");

dots_2.addEventListener("click", function () {
  nav_2.classList.toggle("active");
  nav_2.classList.toggle("nav_2_shadow");
  dots_2.style.display = "none";
  cross_1.style.display = "block";
  cross_2.style.display = "block";
});

cross_1.addEventListener("click", function () {
  nav_2.classList.remove("active");
  nav_2.classList.remove("nav_2_shadow");
  dots_2.style.display = "flex";
  cross_1.style.display = "none";
  cross_2.style.display = "none";
});
cross_2.addEventListener("click", function () {
  nav_2.classList.remove("active");
  nav_2.classList.remove("nav_2_shadow");
  dots_2.style.display = "flex";
  cross_1.style.display = "none";
  cross_2.style.display = "none";
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

// accordion//

let accordion_boxes = document.querySelectorAll(".accordion-box");

accordion_boxes.forEach((items, index) => {
  let head_box = items.querySelector(".accordion_btn");
  let paragraph = items.querySelector(".accordion_para");
  let plus_sign = items.querySelector(".accordion_sign");

  // to hide all except the first one //
  if (index !== 0) {
    paragraph.style.display = "none";
    plus_sign.innerHTML = "+";
  }

  // Add event listener to each button //
  head_box.addEventListener("click", function () {
    if (paragraph.style.display === "none") {
      paragraph.style.display = "block";
      plus_sign.innerHTML = "-";
    } else {
      paragraph.style.display = "none";
      plus_sign.innerHTML = "+";
    }

    // If an accordion box is opened, close other accordion boxes //
    if (paragraph.style.display === "block") {
      accordion_boxes.forEach((other, otherIndex) => {
        if (otherIndex !== index) {
          other.querySelector(".accordion_para").style.display = "none";
          other.querySelector(".accordion_sign").textContent = "+";
        }
      });
    }
  });
});

let scroll_button = document.querySelector(".scroll-button");

function backtoTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

window.addEventListener("scroll", function () {
  if (window.scrollY > 500) {
    scroll_button.setAttribute("style", "display: flex;");
  } else {
    scroll_button.setAttribute("style", "display: none;");
  }
});
