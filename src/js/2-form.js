'use strict';

const form = document.querySelector('.feedback-form');

form.addEventListener('input', onInput);
form.addEventListener('submit', onSubmit);

//! === SIMPLE ===

const formData = JSON.parse(localStorage.getItem('feedback-form-state')) ?? {
  email: '',
  message: '',
};

form.elements.message.value = formData.message;
form.elements.email.value = formData.email;

function onInput(e) {
  let key = e.target.name;
  formData[key] = e.target.value.trim();
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function onSubmit(e) {
  e.preventDefault();

  if ( form.elements.message.value === '' || form.elements.email.value === '' ) {
    alert('Fill please all fields');
  } else {
    console.log(JSON.stringify(formData));

    localStorage.removeItem('feedback-form-state');
    form.reset();
    formData.message = '';
    formData.email = '';
  }
}

//! === SCALABLE === (the number and names of text fields is unknown)

// // set text in fields from LS on reload
// let formData = {};

// function getTextFromLS() {
//   formData =
//     JSON.parse(localStorage.getItem('feedback-form-state')) ?? formData;
//   for (const elem of form.elements) {
//     if (elem.nodeName === 'INPUT' || elem.nodeName === 'TEXTAREA') {
//       elem.value = formData[elem.name] || '';
//     }
//   }
// }
// getTextFromLS();
// // ---

// function onInput(e) {
//   let key = e.target.name;
//   formData[key] = e.target.value.trim();
//   localStorage.setItem('feedback-form-state', JSON.stringify(formData));
// }

// function onSubmit(e) {
//   e.preventDefault();

//   let isEmpty = false;

//   for (const key in formData) {
//     if (formData[key] === '') {
//       isEmpty = true;
//       break;
//     }
//   }

//   if (isEmpty) {
//     alert('Fill please all fields');
//   } else {
//     console.log(JSON.stringify(formData));
//     localStorage.removeItem('feedback-form-state');
//     form.reset();
//     for (const key in formData) {
//       formData[key] = '';
//     }
//   }
// }
