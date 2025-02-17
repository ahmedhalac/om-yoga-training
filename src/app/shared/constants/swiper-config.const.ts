import { SwiperOptions } from 'swiper';

export const swiperConfig: SwiperOptions = {
  slidesPerView: 1,
  spaceBetween: 25,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    600: {
      slidesPerView: 1.5,
    },
    768: {
      slidesPerView: 1.5,
    },
    900: {
      slidesPerView: 2,
    },
    1280: {
      slidesPerView: 2.5,
    },
    1600: {
      slidesPerView: 3,
    },
    2100: {
      slidesPerView: 3.5,
    },
    2500: {
      slidesPerView: 4,
    },
    2800: {
      slidesPerView: 5,
    },
  },
  pagination: true,
};
