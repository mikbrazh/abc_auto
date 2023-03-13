(function () {

  // document.querySelectorAll('.selection-form__radio-scale').forEach(function (form) {
    
  //   const formRadioScale = document.querySelectorAll('.selection-form__radio-scale');
  //   const formRadioLabel = form.querySelector('.selection-form__radio-label');
  
  //   formRadioLabel.addEventListener('click', function () {
    //     formRadioScale.classList.toggle('selection-form__radio-scale--color-red');
    //   });
    
    // });
    
  
    
    document.querySelectorAll('.selection-form__radio-label').forEach(function (lebel) {
      // const lebelIndex = lebel.indexOf(lebel);
      
      lebel.addEventListener('click', function () {
        console.log(this);


        const formScaleAll = document.querySelectorAll('.selection-form__radio-scale');

        
        const closestFormScale = this.closest('.selection-form__radio-scale');
        console.log('formScaleAll: ' + formScaleAll);
        // console.log('closestFormScale: ' + closestFormScale);

        
        console.log( typeof(formScaleAll) );
        console.log( formScaleAll[0], formScaleAll[1] );
        
        
        // const closestFormScaleIndex = formScaleAll.indexOf(closestFormScale);
        // console.log(closestFormScaleIndex);



        closestFormScale.classList.toggle('selection-form__radio-scale--color-red');

        // console.log(qwe);
        // const formScale = document.querySelectorAll('.selection-form__radio-scale');
        // formScaleIndex = formScale.indexOf()
        // console.log(formScale[0], formScale[1]);
        // formScale[0].classList.toggle('selection-form__radio-scale--color-red');
    });
  });


    

  // });

  

})();