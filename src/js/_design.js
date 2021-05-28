// contenteditable

let pens = document.querySelectorAll('.js-contenteditable-btn');

let priceInpus = document.querySelectorAll('.js-contenteditable-input');
let priceTexts = document.querySelectorAll('.js-contenteditable-span');

pens.forEach((pen) => pen.addEventListener('click', function (e) {

  priceInpus.forEach(item => item.classList.add('h-hide'));
  priceTexts.forEach(item => item.classList.remove('h-hide'));

  let priceText = this.parentElement.querySelector('.js-contenteditable-span');
  let priceInput = this.parentElement.querySelector('.js-contenteditable-input');

  priceText.classList.add('h-hide');

  priceInput.classList.remove('h-hide');
  priceInput.focus();


}))


// end contenteditable
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
