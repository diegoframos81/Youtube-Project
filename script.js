document.addEventListener('DOMContentLoaded', () => {
    // Sidebar Toggle
    const menuIcon = document.querySelector('.menu-icon');
    const nav = document.querySelector('nav');
    const content = document.querySelector('.content');

    if (menuIcon && nav) {
        menuIcon.addEventListener('click', () => {
            nav.classList.toggle('nav-hidden');
        });
    }


});
