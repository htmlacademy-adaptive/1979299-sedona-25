var navMain = document.querySelector(".main-nav");
var navToggle = document.querySelector(".main-header__toggle");

navMain.classList.remove("main-nav--nojs");

navToggle.addEventListener('click', function () {
  navMain.classList.toggle('main-nav--opened');
});
