import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
let formData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};

const formEl = document.querySelector('form');
const formInputEl = document.querySelector('input');
const formTextareaEl = document.querySelector('textarea');
// const formSubmitBtnEl = document.querySelector('button');

formEl.addEventListener('submit',onFormSubmit);
formEl.addEventListener('input',throttle(onInput, 500));

getStorageItems();

function onFormSubmit(event) {
  event.preventDefault();

  if (event.target.elements.email.value && event.target.elements.message.value) {
    console.log('Відправляємо форму');
    console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));

    event.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
    formData = {};
  } else {
    alert('заповни всі поля форми!');
  }
}

function onInput(event) {
  // const message = event.target.value;

  // console.log(message);

  // localStorage.setItem(STORAGE_KEY, message);

  formData[event.target.name] = event.target.value;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function getStorageItems() {
  // const savedMessage = localStorage.getItem(STORAGE_KEY);

  // if (savedMessage) {
  //   console.log(savedMessage);
  //   formTextareaEl.value = savedMessage;
  // }

  const storageItem = JSON.parse(localStorage.getItem(STORAGE_KEY));

  if (storageItem) {
    console.log(storageItem);
    formInputEl.value = storageItem.email || '';
    formTextareaEl.value = storageItem.message || '';
    console.log(storageItem);
  }
}