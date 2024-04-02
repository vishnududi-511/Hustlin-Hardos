let nav_2 = document.querySelector(".nav_2_items");
let dots_2 = document.querySelector(".menu_dots");
let cross_1 = document.querySelector(".cross-btn-1");

dots_2.addEventListener("click", function () {
  nav_2.classList.toggle("active");
});
cross_1.addEventListener("click", function () {
  nav_2.classList.remove("active");
});
