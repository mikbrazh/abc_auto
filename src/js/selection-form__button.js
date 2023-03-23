(function() {
  const button = document.querySelector('.selection-form__button');
  button.addEventListener('mousedown', e => e.preventDefault());
  button.addEventListener('click', e => console.log('click'));
})();