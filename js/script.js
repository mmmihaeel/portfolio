const hamburger = document.querySelector('.first-screen__humburger'),
    menu = document.querySelector('.nav-menu__block'),
    overlay = document.querySelector('.nav-menu__overlay'),
    closeElem = document.querySelector('.nav-menu__close');


hamburger.addEventListener('click', () => {
    menu.classList.add('nav-menu__block_active');
    overlay.classList.add('nav-menu__overlay_active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('nav-menu__block_active');
    overlay.classList.remove('nav-menu__overlay_active');
});

const counters = document.querySelectorAll('.my-skills__ratings__item-counter'),
    lines = document.querySelectorAll('.my-skills__ratings__item-line span');

counters.forEach((item, i) => {
    lines[i].style.width = item.innerHTML;
});
