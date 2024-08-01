// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('header.navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
});
