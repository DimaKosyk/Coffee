$(function () {
  $('.product__items').slick({
    slidesToShow: 3,
    prevArrow: '<button class="slider-btn slider-btn__prev" aria-label="previous button"><svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">< circle cx="23" cy="23" r="22.5" stroke="#FF4B32" /><circle cx="23" cy="23" r="20" fill="#FF4B32"/><path d="M19.7142 16.4284L26.2856 22.9999L19.7142 29.5713" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
    nextArrow: '<button class="slider-btn slider-btn__next" aria-label="next button"><svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">< circle cx="23" cy="23" r="22.5" stroke="#FF4B32" /><circle cx="23" cy="23" r="20" fill="#FF4B32"/><path d="M19.7142 16.4284L26.2856 22.9999L19.7142 29.5713" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 1,
          arrows: false,
        }
      },
    ]
  });
});