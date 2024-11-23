const burgerBtn = document.querySelector(".header__burger-btn");
const burgerMenu = document.querySelector(".burger-menu");

burgerBtn.addEventListener("click", () => {
  burgerBtn.classList.toggle("active");
  burgerMenu.classList.toggle("active");
  document.body.classList.toggle("no-scroll");
});