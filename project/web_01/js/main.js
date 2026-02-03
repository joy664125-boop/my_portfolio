//visual_list

const visual_list = new Swiper(".visual_list", {
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 5000, // 슬라이드가 머무르는 시간, 5000=5초
    disableOnInteration: false,
  },
});

const quick_list = new Swiper(".quick_list", {
  slidesPerView: 3,
  breakpoints: {
    650: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
    1200: {
      slidesPerView: 6,
      spaceBetween: 50,
    },
  },
  //centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 5000, // 슬라이드가 머무르는 시간, 5000=5초
    disableOnInteration: false,
  },
});

const prd_list = new Swiper(".prd_list", {
  slidesPerView: 1,
  breakpoints: {
    650: {
      slidesPerView: 2,
      spaceBetween: 50,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
  //spaceBetween: 30,
  /* centeredSlides: true, */
  // loop: true,
  navigation: {
    nextEl: ".prd-next",
    prevEl: ".prd-prev",
  },
});

