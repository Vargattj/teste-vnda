(function ($) {
  "use strict";
  AOS.init();

  let show = true;
  const button = document.querySelector(".hamburger-button button");
  const menu = document.querySelector("nav");

  button.addEventListener("click", function (e) {
    menu.classList.toggle("active", show);
    show = !show;
    button.classList.toggle("menu-closed", show);
  });

  $(function () {
    const headerSwiper = new Swiper(".swiper-container", {
      autoplay: {
        disableOnInteraction: false,
        delay: 3000,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      effect: "fade",
    });
  });

  const productsSwiper = new Swiper(".product-section", {
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      480: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      680: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      880: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    observer: true,
  });
})(jQuery);
