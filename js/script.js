function toggleMenu() {
    var menuButton = document.querySelector('.menu-button');
    var menu = document.querySelector('.menu')
    menuButton.addEventListener('click', () => {
        if(!menu.classList.contains('closed')) {
            menu.classList.remove('slide-bottom');
            menu.classList.add('slide-top');
            menu.classList.add('closed');
            menuButton.style.filter = 'brightness(1)';
        } else {
            menu.classList.remove('slide-top');
            menu.classList.add('slide-bottom');
            menu.classList.remove('closed');
            menuButton.style.filter = 'brightness(10)';
        }
    })
}

function closeMenuNavigate() {
    var menuButton = document.querySelector('.menu-button');
    var menu = document.querySelector('.menu')
    var menuItems = menu.querySelectorAll('a')
    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            menu.classList.remove('slide-bottom');
            menu.classList.add('slide-top');
            menu.classList.add('closed');
            menuButton.style.filter = 'brightness(1)';
        })
    })
}

toggleMenu();
closeMenuNavigate();