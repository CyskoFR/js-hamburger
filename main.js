const hamburgerMenu = document.getElementsByClassName("hamburger-menu")
const openMenu = document.getElementById("open-menu");
const closeMenu = document.getElementById("close-menu");

openMenu.addEventListener("click", hamburgerOn);

function hamburgerOn() {
    hamburgerMenu.style.display = "block";
}