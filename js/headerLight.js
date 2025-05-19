// Luz dinámica que sigue el cursor
document.addEventListener('DOMContentLoaded', () => {
    const headerLight = document.querySelector('.header-light');
    let lastX = 0, lastY = 0;
    let rafId;

    function updateLightPosition() {
        headerLight.style.left = `${lastX}px`;
        headerLight.style.top = `${lastY}px`;
        rafId = null;
    }

    function followCursor(e) {
        lastX = e.clientX - 100;
        lastY = e.clientY - 100;

        if (!rafId) {
            rafId = requestAnimationFrame(updateLightPosition);
        }
    }

    document.addEventListener('mousemove', followCursor);
});
