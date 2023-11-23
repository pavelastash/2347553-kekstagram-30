import { onKeyDownEscape } from './util.js';

const successMessageElement = document.querySelector('#success').content.querySelector('.success');
const errorMessageElement = document.querySelector('#error').content.querySelector('.error');

const hideMessage = () => {
  const existsElement = document.querySelector('.success') || document.querySelector('.error');
  existsElement.remove();
};

const onCloseButtonClick = () => {
  hideMessage();
};

const onDocumentKeydown = (evt) => {
  if (onKeyDownEscape()) {
    evt.preventDefault();
    hideMessage();
  }
};

const onBodyClick = (evt) => {
  if (evt.target.closest('.success__inner') || (evt.target.closest('.error__inner'))) {
    return;
  }

  hideMessage();
};

const showMessage = (element, buttonClass) => {
  document.body.append(element);
  document.body.addEventListener('click', onBodyClick);
  document.addEventListener('keydown', onDocumentKeydown);
  element.querySelector(buttonClass).addEventListener('click', onCloseButtonClick);
};

const showSuccessMessage = () => {
  showMessage(successMessageElement, '.success__button');
};

const showErrorMessage = () => {
  showMessage(errorMessageElement, '.error__button');
};

export {showSuccessMessage, showErrorMessage};
