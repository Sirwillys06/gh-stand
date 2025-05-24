const clientesSwiper = new Swiper('.clientesSwiper', {
  loop: true,
  slidesPerView: 'auto',
  spaceBetween: 30,
  grabCursor: true,
  centeredSlides: true, /* Centrado activo para mejor efecto */
  autoplay: {
    delay: 2000, /* Más rápido para mejor engagement */
    disableOnInteraction: false,
  },
  navigation: { /* Flechas de navegación (opcional) */
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: { /* Puntos inferiores (opcional) */
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    320: { 
      slidesPerView: 2,
      spaceBetween: 15 
    },
    480: { 
      slidesPerView: 3,
      spaceBetween: 20 
    },
    768: { 
      slidesPerView: 4,
      spaceBetween: 25 
    },
    1024: { 
      slidesPerView: 5,
      spaceBetween: 30 
    },
    1200: { 
      slidesPerView: 6,
      spaceBetween: 40 
    }
  }
});
