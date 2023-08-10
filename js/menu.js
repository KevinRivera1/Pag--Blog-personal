document.addEventListener("DOMContentLoaded", function () {
    const hamburgerMenu = document.querySelector(".header__hamburger-menu");
    const nav = document.querySelector(".header__nav");

    hamburgerMenu.addEventListener("click", function () {
        nav.classList.toggle("active");
    });
});