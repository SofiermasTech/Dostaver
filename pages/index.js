/* --------------------- Burger menu --------------------- */
const btnOpenMenu = document.querySelector('.header__logo-menu');
const btnCloseMenu = document.querySelector('.header__nav-btn-close');
const burgerMenu = document.querySelector('.header__nav');

function toggleBurgerMenu() {
   burgerMenu.classList.toggle('menu_active');
}

btnOpenMenu.addEventListener('click', toggleBurgerMenu)
btnCloseMenu.addEventListener('click', toggleBurgerMenu)


/* --------------------- Telephone number mask --------------------- */
const inputPhone = Array.from(document.querySelectorAll('.call-me__input-mobile'));

// слушатель для всех input
inputPhone.forEach((item) => {
   item.addEventListener('input', () => {
      IMask(
         item,
         {mask: '+7(000) 000-00-00'}
      );
   })
})


/* --------------------- Button scroll-up --------------------- */
const offset = 700;
const btnScrollUp = document.querySelector('.btn-scroll-up');
const btnScrollUpSvgPath = document.querySelector('.btn-scroll-up__svg-path');
const pathLength = btnScrollUpSvgPath.getTotalLength();

btnScrollUpSvgPath.style.strokeDasharray = `${pathLength} ${pathLength}`;
btnScrollUpSvgPath.style.transition = 'stroke-dashoffset 30ms';

// function button click
btnScrollUp.addEventListener('click', () => {
   window.scrollTo({
      top: 0,
      behavior: 'smooth'
   });
})

// get length scroll page
const getScroll = () => window.pageYOffset || document.documentElement.scrollTop;

// update Svg-path shadow
const updateShadowSvg = () => {
   const heightScroll = document.documentElement.scrollHeight - window.innerHeight;
   const dashoffset = pathLength - (getScroll() * pathLength / heightScroll);

   btnScrollUpSvgPath.style.strokeDashoffset = dashoffset;
};

// function add/remove class--active
window.addEventListener('scroll', () => {
   updateShadowSvg();
   if (getScroll() > offset) {
      btnScrollUp.classList.add('btn-scroll-up--active');
   } else {
      btnScrollUp.classList.remove('btn-scroll-up--active');
   }
})