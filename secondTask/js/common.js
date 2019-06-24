window.onload = function () {

    const menuButton = document.getElementById('navigation-menu-button');
    const navigationMenuList = document.getElementById('navigation-menu-list');

    menuButton.addEventListener('click', function () {
        this.classList.toggle('open');
        navigationMenuList.classList.toggle('hidden');
    })

};