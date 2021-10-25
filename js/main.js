const menuBtm = document.querySelector('menu-btm');
let menuOpen = false;
menuBtm.addEventListener('click', () => {
    if(!menuOpen) {
        menuBtm.classList.add('open');
        menuOpen = true;
    } else {
        menuBtm.classList.remove('open');
        menuOpen = false;
    }
});