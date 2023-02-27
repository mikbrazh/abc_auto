$(function () {

  // Hamburger toggle function
  $('.header-middleline__hamburger').on( 'click', function() {
    $('.header-middleline__hamburger').toggleClass( 'is-active');
  });

  // Nav menu toggle function
  $('.nav-secondary-item').on( 'click', function() {
    $($(this).children('ul')).toggleClass('is-active');
  });

  // Owl carousel initializer function
  $(document).ready(function(){
    $(".owl-carousel").owlCarousel({
      items: 1,
      nav: true,
      dotsEach: true,
      margin: 20
    });
  });

});
