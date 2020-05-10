const navMenuButton = document.querySelector(".nav-menu-btn");
const menuCloseButton = document.querySelector(".menu-close-btn");
const navigator = document.querySelector(".navigator");
const body = document.querySelector("body");

navMenuButton.addEventListener("click", (e) => {
    menuCloseButton.classList.add("active");
    navigator.classList.add("active");
    body.setAttribute("style", "overflow: hidden")
})

menuCloseButton.addEventListener("click", (e) => {
    menuCloseButton.classList.remove("active");
    navigator.classList.remove("active");
    body.setAttribute("style", "overflow: auto")
})