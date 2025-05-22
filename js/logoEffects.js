// Partículas en el logo (desktop)
document.addEventListener('DOMContentLoaded', () => {
    const logo = document.getElementById('logo');
    const logoParticles = document.querySelector('.logo-particles');
    const logoImg = document.querySelector('.logo-img');

    if (window.innerWidth > 992) {
        logo.addEventListener('mousemove', e => {
            const rect = logo.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            logoParticles.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255, 219, 88, 0.3) 0%, transparent 80%)`;
        });

        logo.addEventListener('mouseenter', () => {
            logoParticles.style.opacity = '1';
            logoImg.style.transform = 'scale(1.1) rotate(-5deg)';
            logoImg.style.filter = 'drop-shadow(0 0 8px rgba(255, 219, 88, 0.7))';
        });

        logo.addEventListener('mouseleave', () => {
            logoParticles.style.opacity = '0';
            logoImg.style.transform = 'scale(1)';
            logoImg.style.filter = 'none';
        });
    }
});
