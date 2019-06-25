window.onload = function () {

    const menuButton = document.getElementById('navigationMenuButton');
    const navigationMenuList = document.getElementById('navigationMenuList');

    menuButton.addEventListener('click', function () {
        handleOpenMenu();
    });

    navigationMenuList.addEventListener('click', function () {
        handleOpenMenu();
    });

    function handleOpenMenu() {
        menuButton.classList.toggle('open');
        navigationMenuList.classList.toggle('hidden');
    }

};