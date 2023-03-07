// (function () {

//   // Переменные
//   const hamburger = document.querySelector('.header-middleline__hamburger')
//   const navSecondaryItems = document.querySelectorAll('.nav-secondary .item')

//   // Переключение гамбургер меню
//   hamburger.addEventListener('click', function() {
//     this.classList.toggle('is-active');
//   });

//   // Переключение навигации в шапке
//   navSecondaryItems.forEach(item => {
//     item.addEventListener('mouseover', function() {
//       this.querySelector('.subnav-secondary').classList.add('is-active');
//     });
//     item.addEventListener('mouseout', function(e) {
//       const thisItem = this.querySelector('.subnav-secondary .item');
//       if (e.target !== thisItem) {
//         this.querySelector('.subnav-secondary').classList.remove('is-active');
//       }
//     });
//   });

// })();
