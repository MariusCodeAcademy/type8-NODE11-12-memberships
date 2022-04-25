console.log('add service');

const nameEl = document.getElementById('name');
const priceEl = document.getElementById('price');
const descriptionEl = document.getElementById('description');

const formEl = document.forms[0];

formEl.addEventListener('submit', (e) => {
  e.defaultPrevented();
  console.log('js is in controll');
});
