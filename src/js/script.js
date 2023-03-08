(function () {

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



  document.querySelectorAll('.car-selection-form-dropdown').forEach(function (dropdown) {
	const dropDownBtn = dropdown.querySelector('.car-selection-form-dropdown__button');
	const dropDownList = dropdown.querySelector('.car-selection-form-dropdown__list');
	const dropDownListItems = dropDownList.querySelectorAll('.car-selection-form-dropdown__list-item');
	const dropDownInput = dropdown.querySelector('.car-selection-form-dropdown__input-hidden');

	// Клик по кнопке. Открыть/Закрыть select
	dropDownBtn.addEventListener('click', function (e) {
		dropDownList.classList.toggle('car-selection-form-dropdown__list--visible');
        this.classList.add('car-selection-form-dropdown__button--active');
	});

	// Выбор элемента списка. Запомнить выбранное значение. Закрыть дропдаун
	dropDownListItems.forEach(function (listItem) {
		listItem.addEventListener('click', function (e) {
			e.stopPropagation();
			dropDownBtn.innerText = this.innerText;
			dropDownBtn.focus();
			dropDownInput.value = this.dataset.value;
			dropDownList.classList.remove('car-selection-form-dropdown__list--visible');
		});
	});

	// Клик снаружи дропдауна. Закрыть дропдаун
	document.addEventListener('click', function (e) {
		if (e.target !== dropDownBtn) {
			dropDownBtn.classList.remove('car-selection-form-dropdown__button--active');
			dropDownList.classList.remove('car-selection-form-dropdown__list--visible');
		}
	});

	// Нажатие на Tab или Escape. Закрыть дропдаун
	document.addEventListener('keydown', function (e) {
		if (e.key === 'Tab' || e.key === 'Escape') {
			dropDownBtn.classList.remove('car-selection-form-dropdown__button--active');
			dropDownList.classList.remove('car-selection-form-dropdown__list--visible');
		}
	});
});

})();
