let burger = document.querySelector('.burger');
let headerLinks = document.querySelector('.header__links');
let body = document.querySelector('body');

burger.addEventListener('click', () => {
  burger.classList.toggle("burger-active");
  headerLinks.classList.toggle("header__links-active");
  body.classList.toggle("lock");
});