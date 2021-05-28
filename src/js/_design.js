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
// toggle details

let detailsBtns = document.querySelectorAll('.details__btn, .details__title');
if (detailsBtns !== null) {
  detailsBtns.forEach((btn) => btn.addEventListener('click', function (e) {
    this.closest('.details').classList.toggle('details--open');
  }))
}


// end toggle details
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
