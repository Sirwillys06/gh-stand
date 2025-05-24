const clientesSwiper = new Swiper('.clientesSwiper', {
  loop: true,
  slidesPerView: 'auto',
  spaceBetween: 40,
  grabCursor: true,
  centeredSlides: true, // Centra los slides activos
  autoplay: {
    delay: 2500,
    disableOnInteraction: false
  },
  breakpoints: {
    320: { 
      slidesPerView: 2,
      spaceBetween: 20 
    },
    576: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    768: { 
      slidesPerView: 4,
      spaceBetween: 40 
    },
    1024: { 
      slidesPerView: 6,
      spaceBetween: 50 
    }
  }
});