// Scroll suave con offset
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        const navbarHeight = document.querySelector('.navbar').offsetHeight;
        window.scrollTo({
            top: target.offsetTop - navbarHeight,
            behavior: 'smooth'
        });
    });
});

// Cambio de estilo del header al hacer scroll
document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.gh-header');
    const logoImg = document.querySelector('.logo-img');
    let timeout;

    window.addEventListener('scroll', () => {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            const y = window.scrollY || window.pageYOffset;
            if (y > 50) {
                header.style.background = 'rgba(255, 252, 252, 0.95)';
                header.style.borderBottomColor = 'var(--mustard)';
                header.style.padding = '1rem 5%';
                logoImg.style.height = '45px';
            } else {
                header.style.background = 'rgba(255, 255, 255, 0.8)';
                header.style.borderBottomColor = 'rgba(255, 219, 88, 0.2)';
                header.style.padding = '1.5rem 5%';
                logoImg.style.height = '50px';
            }
        }, 10);
    });
});
