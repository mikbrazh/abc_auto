(function () {

  const qwe = document.querySelector('.qwe');
  const asd1 = document.querySelector('.asd1');
  const asd2 = document.querySelector('.asd2');
  const asd3 = document.querySelector('.asd3');

   // Клик по кнопке. Открыть/Закрыть select
   qwe.addEventListener('click', function () {
    asd1.classList.toggle('selection-form__radio-scale--color-red');
    asd2.classList.toggle('selection-form__radio-scale--color-red');
    asd3.classList.toggle('selection-form__radio-scale--color-red');
  });





})();