//display list when button is clicked

var nav_button = document.getElementById("hamburger");
var nav_ul = document.getElementById("nav-list");

var window_size = window.matchMedia("(min-width: 1023px)");

nav_button.addEventListener("click", () => {
  nav_ul.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((i) =>
  i.addEventListener("click", () => {
    nav_ul.classList.remove("active");
  })
);
