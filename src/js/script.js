$(function () {
  $('.header-middleline__hamburger').on( 'click', function() {
    $('.header-middleline__hamburger').toggleClass( 'is-active');
  });

  $('.nav-secondary-item').on( 'click', function() {
    $($(this).children('ul')).toggleClass('is-active');
  });
});
