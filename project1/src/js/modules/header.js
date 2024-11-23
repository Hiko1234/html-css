const header = document.querySelector(".header");
const burgerBtn = document.querySelector(".header__burger-btn");
const burgerMenu = document.querySelector(".burger-menu");

window.addEventListener('scroll', () => {
  if (window.scrollY > 25) {
    header.classList.add('scroll');
    burgerMenu.classList.add('scroll');
  } else {
    header.classList.remove('scroll');
    burgerMenu.classList.remove('scroll');
  }
});

burgerBtn.addEventListener("click", () => {
  burgerBtn.classList.toggle("active");
  burgerMenu.classList.toggle("active");
  document.body.classList.toggle("no-scroll");
});