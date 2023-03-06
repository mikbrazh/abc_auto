// $(function () {

  const hamburger = document.querySelector('.header-middleline__hamburger')
  const navSecondaryItems = document.querySelectorAll('.nav-secondary .item')

  // Переключение гамбургер меню
  hamburger.addEventListener('click', function() {
    this.classList.toggle('is-active');
  });

  // Переключение навигации в шапке
  navSecondaryItems.forEach(item => {
    item.addEventListener('mouseover', function() {
      this.querySelector('.subnav-secondary').classList.add('is-active');
      console.log('1')
    });
    item.addEventListener('mouseout', function(e) {
      const thisItem = this.querySelector('.subnav-secondary .item');
      if (e.target !== thisItem) {
        this.querySelector('.subnav-secondary').classList.remove('is-active');
      }
    });
  });


  const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });


  // Owl carousel initializer function
  // $(document).ready(function(){
  //   $(".owl-carousel").owlCarousel({
  //     items: 1,
  //     nav: true,
  //     dotsEach: true,
  //     margin: 20
  //   });
  // });

// });
