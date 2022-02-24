//display list when button is clicked

let nav_button = document.getElementById('hamburger');
let nav_ul = document.getElementById('nav-list');


nav_button.addEventListener('click', () => {
    nav_ul.classList.toggle('list');
});