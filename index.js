// Theme Toggle
let darkModeIcon = document.querySelector('#theme-switcher');

darkModeIcon.addEventListener('click', () => {

    darkModeIcon.classList.toggle('bx-sun');
    
    document.body.classList.toggle('dark_mode');
});