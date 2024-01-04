function toggleSideMenu() {
    const sideMenu = document.querySelector(".side-menu");

    sideMenu.classList.toggle("open")

    if(sideMenu.classList.contains("open")) {
        document.querySelector(".menu-button").setAttribute("src", "./assets/icons/close.svg")
    } else {
        document.querySelector(".menu-button").setAttribute("src", "./assets/icons/list.svg")
    }
}