var navMain = document.querySelector(".main-nav");
var navToggle = document.querySelector(".main-header__toggle");
// var link = document.querySelectorAll(".main-nav__list a");
// var navToggleclosed =  document.querySelector(".main-header__toggle--closed");

// navToggle.addEventListener("click", function (evt) {
// evt.preventDefault();
// navMain.classList.add("main-nav--opened");
// });

// link.addEventListener("click", function (evt) {
// evt.preventDefault();
// navToggle.classList.add(".main-header__toggle--closed");
// });

// closed.addEventListener("click", function (evt) {
// evt.preventDefault();
// navMain.classList.add("main-nav--closed");
// });

navMain.classList.remove("main-nav--nojs");

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
    console.log("Открывает меню");
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
    console.log("Закрывает меню");
  }
});
