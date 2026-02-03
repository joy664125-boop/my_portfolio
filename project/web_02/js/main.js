const test_list = new Swiper("test_list", {
  slidesPerView: 3,
  centeredSlides: true,
  spaceBetween: 50,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
});