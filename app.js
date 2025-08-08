const navbar = document.querySelector(".navbar ul");
const button = document.querySelector(".hamburger");
button.addEventListener("click", () => {
    navbar.classList.toggle("show")
})