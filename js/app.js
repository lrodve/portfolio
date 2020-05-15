const $burgerMenu = document.getElementById("burger-menu")
const $navbarMobile = document.getElementById("navbar-mobile")


$burgerMenu.addEventListener("click", () => {
    $navbarMobile.classList.toggle("active")
    $burgerMenu.classList.toggle("active")
})


