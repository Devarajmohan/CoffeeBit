const hamburger = document.querySelector(".hamburger");
const menulinks = document.querySelector(".menulinks");


hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    menulinks.classList.toggle("active");
})

document.querySelectorAll(".nav-menu-links").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active")
    menulinks.classList.remove("active")

}))