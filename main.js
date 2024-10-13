import "./style.sass";

import Swiper from "swiper/bundle";

// import styles bundle
import "swiper/css/bundle";

const swiper = new Swiper(".swiper", {
  // Optional parameters
  cssWidthAndHeight: true,
  slidesPerView: "auto",
  visibilityFullFit: true,
  autoResize: false,
  loopedSlides: 4,
  loop: true,
  spaceBetween: 24,
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: false,
  },
});
