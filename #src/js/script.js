@@include('./testwebp.js')
@@include('./slick.js')

$(function () {
  $('.product__item-num').styler();

  $('.header__menu-btn').on('click', function(){
    $('.header__menu-items').toggleClass('header__menu-items--active');
  });
});