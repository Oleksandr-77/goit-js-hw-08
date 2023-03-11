import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const formEl = document.querySelector('form');
const formInputEl = document.querySelector('input');
const formTextareaEl = document.querySelector('textarea');
const formSubmitBtnEl = document.querySelector('button');

console.log(formEl);
console.log(formInputEl);
console.log(formTextareaEl);
console.log(formSubmitBtnEl);
console.log(localStorage);

formEl.addEventListener('submit',onFormSubmit);
formTextareaEl.addEventListener('input',throttle(onInput, 500));

getStorageItems();

function onFormSubmit(event) {
  event.preventDefault();

  console.log('Відправляємо форму');

  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function onInput(event) {
  const message = event.target.value;

  // console.log(message);

  localStorage.setItem(STORAGE_KEY, message);
}

function getStorageItems() {
  const savedMessage = localStorage.getItem(STORAGE_KEY);

  if (savedMessage) {
    console.log(savedMessage);
    formTextareaEl.value = savedMessage;
  }
}