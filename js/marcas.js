const clientesSwiper = new Swiper('.clientesSwiper', {
  loop: true,
  slidesPerView: 'auto',
  spaceBetween: 40,
  grabCursor: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false
  },
  breakpoints: {
    320: { slidesPerView: 2 },
    768: { slidesPerView: 4 },
    1024: { slidesPerView: 6 }
  }
});
