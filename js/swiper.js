// Inicialización de Swiper
const swiper = new Swiper('.swiper-container', {
    slidesPerView: 'auto',
    spaceBetween: 15,
    loop: true,
    speed: 5000,
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
    },
    freeMode: true,
    freeModeMomentum: false,
    grabCursor: true,
    navigation: false,
    pagination: false,
});

// Hover en móviles
document.querySelectorAll('.swiper-slide').forEach(slide => {
    slide.addEventListener('touchstart', () => {
        slide.querySelector('.image-info').style.bottom = '0';
    });

    slide.addEventListener('touchend', () => {
        slide.querySelector('.image-info').style.bottom = '-100%';
    });
});
