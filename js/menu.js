// Menú hamburguesa responsivo
document.addEventListener('DOMContentLoaded', () => {
    const burger = document.getElementById('burger');
    const navLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-item');

    burger.addEventListener('click', () => {
        const isExpanded = burger.getAttribute('aria-expanded') === 'true';
        burger.setAttribute('aria-expanded', !isExpanded);
        burger.classList.toggle('active');
        navLinks.classList.toggle('active');
        document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';

        if (navLinks.classList.contains('active')) {
            navItems.forEach((item, i) => {
                item.style.animation = `fadeInUp 0.5s ease ${i * 0.1}s forwards`;
                item.style.opacity = '0';
            });
        } else {
            navItems.forEach(item => {
                item.style.animation = '';
                item.style.opacity = '';
            });
        }
    });

    // Cierra el menú al hacer clic en un enlace (modo móvil)
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 992) {
                burger.classList.remove('active');
                navLinks.classList.remove('active');
                burger.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = '';
            }
        });
    });
});
