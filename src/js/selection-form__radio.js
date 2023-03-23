(function () {


  // Анимация шкалы scale НАЧАЛО
  const formRadioLabel = document.querySelectorAll('.selection-form__radio-label');
  const formRadioScale = document.querySelectorAll('.selection-form__radio-scale');

  // Для всех label
  formRadioLabel.forEach( (labelItem) => {

    // Устанавливаем обработчик
    labelItem.addEventListener('click', function() {
      formRadioScale.forEach( (scaleItem) => {  

        // Сравниваем значения dataset.number
        const scaleItemDataVal = Number(scaleItem.dataset.number);
        const labelItemDataVal = Number(this.dataset.number);

        console.log(labelItemDataVal);

        // Если условие выполняется, красим в другой цвет
        if ( scaleItemDataVal < labelItemDataVal ) {
          scaleItem.classList.add('selection-form__radio-scale--color-red');
        } else {
          scaleItem.classList.remove('selection-form__radio-scale--color-red');
        }
      }); 
    });
  });
  // Анимация шкалы scale КОНЕЦ
 
})();
