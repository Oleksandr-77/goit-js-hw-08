import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
const formEl = document.querySelector("form");

formEl.addEventListener('submit',onFormSubmit);
formEl.addEventListener('input',throttle(onInput, 500));

getStorageItems();


function readStorage() {
  const storageRawData = localStorage.getItem(STORAGE_KEY);
  const formData = {
      email: "",
      message: ""
  };
  if(storageRawData) {
      try{
          const parsedData = JSON.parse(storageRawData);
          Object.keys(formData).forEach((key) => {
              formData[key] = parsedData[key];
          });
      } catch(exc) {
          console.warn(exc);
      }
  }
  return formData;
}

function onFormSubmit(e) {
  const formData = readStorage();
  e.preventDefault();
  if(!validate(e.currentTarget)) {
    return ;
  }
  clearInputs(e.currentTarget);
  console.log(formData);
  localStorage.removeItem(STORAGE_KEY);
  console.log('localStorage[STORAGE_KEY] was removed')
}

function onInput(e) {
  const formData = readStorage();
  formData[e.target.name] = e.target.value;
  if(validateEmpty(e.target)) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  }
}

function getStorageItems() {
  const formData = readStorage();
  Object.keys(formData).forEach((key) => {
      const elem = document.querySelector(`[name="${key}"]`);
      if(elem) {
          elem.value = formData[key];
      }
  });
}

function validateEmpty(elem) {
    const isEmpty = (elem.value.trim() === '');
    const elemChildren = elem.parentNode.children;
    if( elemChildren.length > 1
              && elemChildren[1].classList.contains("error-msg")) {
      elemChildren[1].remove();
    }
    if(isEmpty) {
      const elemMsg = document.createElement("SPAN");
      elemMsg.classList.add('error-msg');
      elemMsg.style.fontSize = '15px';
      elemMsg.textContent = 'Заповни всі поля форми!';
      elem.parentNode.append(elemMsg);
    }
    return !isEmpty;
}

function validate(formEl) {
    const elements = formEl.elements;
    const formData = readStorage();
    const allFilled = Object.keys(formData).reduce((acc, key) => {
      const isEmpty = !validateEmpty(elements[key]);
      return (acc && (!isEmpty));
    }, true);
    return allFilled;
}

function clearInputs(formEl) {
    const elements = formEl.elements;
    const formData = readStorage();
    const allFilled = Object.keys(formData).forEach((key) => {
      elements[key].value = '';
    });
}



