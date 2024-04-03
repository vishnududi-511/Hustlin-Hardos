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
