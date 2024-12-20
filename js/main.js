const swipers = [
  new Swiper('.swiper', {
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
      reverseDirection: true,
    },
    loop: true,
    slidesPerView: 1,
    speed: 50000,
    allowTouchMove: false,
  }),
  new Swiper('.swiper2', {
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
    loop: true,
    slidesPerView: 1,
    speed: 50000,
    allowTouchMove: false,
  }),
  new Swiper('.swiper3', {
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
      reverseDirection: true,
    },
    loop: true,
    slidesPerView: 1,
    speed: 50000,
    allowTouchMove: false,
  }),
  new Swiper('.swiper4', {
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
    loop: true,
    slidesPerView: 1,
    speed: 50000,
    allowTouchMove: false,
  }),
  new Swiper('.swiper5', {
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
      reverseDirection: true,
    },
    loop: true,
    slidesPerView: 1,
    speed: 50000,
    allowTouchMove: false,
  }),
  new Swiper('.swiper6', {
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
    loop: true,
    slidesPerView: 1,
    speed: 50000,
    allowTouchMove: false,
  })
];


function controlVisibility() {
  setTimeout(() => {
    const swiperContainer = document.querySelector('.wrapper');
    swiperContainer.classList.add('visible');

    setInterval(() => {
      swiperContainer.classList.remove('visible');
      setTimeout(() => {
        swiperContainer.classList.add('visible');
      }, 3000);
    }, 8000);
  }, 5000);
}

controlVisibility();
