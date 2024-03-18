const swiper = new Swiper('.swiper-container', {
  loop: true,
  slidesPerView: 3,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.carousel__button-next',
    prevEl: '.carousel__button-prev',
  },
})
