// МОБИЛЬНОЕ МЕНЮ 

const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu-list');
const navLinks = document.querySelectorAll('.menu a');
const screen = document.querySelector('.screen');
const itemList = document.querySelector('.item-list');

function toggleMenu() {
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
    // При открытом меню блокируем прокрутку body
    if (menu.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
        screen.style.opacity = '0';
        itemList.style.opacity = '0';
    } else {
        document.body.style.overflow = '';
        screen.style.opacity = '1';
        itemList.style.opacity = '1';
    }
}

// Клик по кнопке меню
menuBtn.addEventListener('click', toggleMenu);

// Клик по любой ссылке в меню
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Если меню открыто — закрываем
        if (menu.classList.contains('active')) {
            toggleMenu();
        }
    });
});