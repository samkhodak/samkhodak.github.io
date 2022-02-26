//display list when button is clicked

let nav_button = document.getElementById('hamburger');
let nav_ul = document.getElementById('nav-list');


//Hide/display the nav list when the hamburger is pressed.
nav_button.addEventListener('click', () => {
    nav_ul.classList.toggle('list');
});

//Once a link is selected, close the nav list.
nav_ul.addEventListener('click', () => {
    nav_ul.classList.toggle('list');
});