(function () {

    document.querySelectorAll('.selection-form__dropdown').forEach(function (dropdown) {
    const dropDownBtn = dropdown.querySelector('.selection-form__dropdown-button');
    const dropDownList = dropdown.querySelector('.selection-form__dropdown-list');
    const dropDownListItems = dropDownList.querySelectorAll('.selection-form__dropdown-list-item');
    const dropDownInput = dropdown.querySelector('.selection-form__dropdown-input-hidden');
  
    // Клик по кнопке. Открыть/Закрыть select
    dropDownBtn.addEventListener('click', function (e) {
      dropDownList.classList.toggle('selection-form__dropdown-list--visible');
          this.classList.add('selection-form__dropdown-button--active');
    });
  
    // Выбор элемента списка. Запомнить выбранное значение. Закрыть дропдаун
    dropDownListItems.forEach(function (listItem) {
      listItem.addEventListener('click', function (e) {
        e.stopPropagation();
        dropDownBtn.innerText = this.innerText;
        dropDownBtn.focus();
        dropDownInput.value = this.dataset.value;
        dropDownList.classList.remove('selection-form__dropdown-list--visible');
      });
    });
  
    // Клик снаружи дропдауна. Закрыть дропдаун
    document.addEventListener('click', function (e) {
      if (e.target !== dropDownBtn) {
        dropDownBtn.classList.remove('selection-form__dropdown-button--active');
        dropDownList.classList.remove('selection-form__dropdown-list--visible');
      }
    });
  
    // Нажатие на Tab или Escape. Закрыть дропдаун
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Tab' || e.key === 'Escape') {
        dropDownBtn.classList.remove('selection-form__dropdown-button--active');
        dropDownList.classList.remove('selection-form__dropdown-list--visible');
      }
    });
  });

})();
