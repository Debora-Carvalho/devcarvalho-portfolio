document.addEventListener('DOMContentLoaded', (event) => {
    const menuButton = document.querySelector('.menu-btn');
    const menu = document.querySelector('.nav-menu');

    menuButton.addEventListener('click', () => {
        menu.classList.toggle('mostrar');
    });
});