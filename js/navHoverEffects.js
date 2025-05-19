// Hover en enlaces del menú
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.nav-link').forEach(link => {
        const hover = link.querySelector('.link-hover');
        const text = link.querySelector('.link-text');

        link.addEventListener('mouseenter', () => {
            hover.style.transform = 'translateX(0)';
            text.style.transform = 'translateY(-3px)';
            text.style.color = 'var(--mustard)';
        });

        link.addEventListener('mouseleave', () => {
            hover.style.transform = 'translateX(-110%)';
            text.style.transform = 'translateY(0)';
            text.style.color = 'var(--white)';
        });
    });
});
