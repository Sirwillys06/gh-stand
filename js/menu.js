document.addEventListener('DOMContentLoaded', () => {
    const burger = document.getElementById('burger');
    const navLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-item');
    const navLinkEls = document.querySelectorAll('.nav-link');

    const openMenu = () => {
        burger.classList.add('active');
        navLinks.classList.add('active');
        burger.setAttribute('aria-expanded', 'true');
        document.body.style.overflow = 'hidden';

        navItems.forEach((item, i) => {
            item.style.animation = `fadeInUp 0.5s ease ${i * 0.1}s forwards`;
            item.style.opacity = '0';
        });
    };

    const closeMenu = () => {
        burger.classList.remove('active');
        navLinks.classList.remove('active');
        burger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';

        navItems.forEach(item => {
            item.style.animation = '';
            item.style.opacity = '';
        });
    };

    burger.addEventListener('click', () => {
        const isActive = burger.classList.contains('active');
        isActive ? closeMenu() : openMenu();
    });

    navLinkEls.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 992) {
                closeMenu();
            }
        });
    });
});
