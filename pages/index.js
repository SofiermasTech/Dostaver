const btnOpenMenu = document.querySelector('.header__logo-menu');
const btnCloseMenu = document.querySelector('.header__nav-btn-close');
const burgerMenu = document.querySelector('.header__nav');

function toggleBurgerMenu() {
   burgerMenu.classList.toggle('menu_active');
}

btnOpenMenu.addEventListener('click', toggleBurgerMenu)
btnCloseMenu.addEventListener('click', toggleBurgerMenu)