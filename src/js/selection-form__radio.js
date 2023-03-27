(function () {

  // Анимация шкалы scale НАЧАЛО
  const formRadioLabel = document.querySelectorAll('.selection-form__radio-label');
  const formRadioScale = document.querySelectorAll('.selection-form__radio-scale');
  const formRadioPriceDynamic = document.querySelector('.selection-form__radio-price-dynamic');

  // Для всех label
  formRadioLabel.forEach( (labelItem) => {

    // Устанавливаем обработчик
    labelItem.addEventListener('click', function() {
      const labelItemDataVal = Number(this.dataset.number);

      formRadioScale.forEach( (scaleItem) => {
        const scaleItemDataVal = Number(scaleItem.dataset.number);

        // Сравниваем значения dataset.number
        if (labelItemDataVal <= 800) {
          formRadioPriceDynamic.innerHTML = labelItemDataVal + 'т';
        } else {
          const labelItemDataVal_float = labelItemDataVal / 1000;
          formRadioPriceDynamic.innerHTML = labelItemDataVal_float + 'м';
        }

        // Если условие выполняется, красим в другой цвет
        if ( scaleItemDataVal < labelItemDataVal ) {
          scaleItem.classList.add('selection-form__radio-scale--color-red');
        } else {
          scaleItem.classList.remove('selection-form__radio-scale--color-red');
        }
      });
      console.log(labelItemDataVal);
    });
  });
  // Анимация шкалы scale КОНЕЦ
 
})();
