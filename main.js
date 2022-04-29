const hamburgerMenu = document.getElementById("hamburger_menu")
const openMenu = document.getElementById("open-menu");
const closeMenu = document.getElementById("close-menu");

openMenu.addEventListener("click", hamburgerOn);

closeMenu.addEventListener("click", hamburgerOff);

function hamburgerOn() {
    hamburgerMenu.style.display = "block";
}

function hamburgerOff() {
    hamburgerMenu.style.display = "none";
}