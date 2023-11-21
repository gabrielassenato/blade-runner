$(document).ready(function(){
    $('#carouselExample').carousel();
});

document.addEventListener("DOMContentLoaded", function () {
var menuIcon = document.querySelector(".header__menu");
var navLinks = document.querySelector(".header__links");

menuIcon.addEventListener("click", function (event) {
    event.preventDefault();

    navLinks.classList.toggle("active");
    menuIcon.classList.toggle("active");
});
});
