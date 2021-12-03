export default class Validator {
  constructor(option, formElement) {
      this._formElement = formElement;
      this._inputSelector = option.inputSelector;
      this._submitButtonSelector = option.submitButtonSelector;
      this._inactiveButtonClass = option.inactiveButtonClass;
      this._inputErrorClass = option.inputErrorClass;
      this._errorClass = option.errorClass;

      this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
      this._buttonSubmit = this._formElement.querySelector(this._submitButtonSelector);
  }

  _showInputError(inputElement, errorMessage) {
      const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
      inputElement.classList.add(this._inputErrorClass);
      errorElement.classList.add(this._errorClass);
      errorElement.textContent = errorMessage;
  }

  _hideInputError(inputElement) {
      const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
      inputElement.classList.remove(this._inputErrorClass);
      errorElement.classList.remove(this._errorClass);
      errorElement.textContent = '';
  }

  _checkInputValidity(inputElement) {
    if(!inputElement.validity.valid) {
        this._showInputError(inputElement, inputElement.validationMessage);
    } else {
        this._hideInputError(inputElement);
    }

  }
  _hasInvalidInput(inputlist){
    return inputlist.some((inputElement) => {
      return !inputElement.validity.valid
    })
  }

  _toggleButtonState() {
      if(this._hasInvalidInput(this._inputList)) {
        this._buttonSubmit.classList.add(this._inactiveButtonClass);
        this._buttonSubmit.disabled = true;
      } else {
        this._buttonSubmit.classList.remove(this._inactiveButtonClass);
        this._buttonSubmit.disabled = false;
      }
  }

  _setEventListener () {
      this._toggleButtonState()
      this._inputList.forEach((inputElement) => {
          inputElement.addEventListener('input', () => {
            this._checkInputValidity(inputElement);
            this._toggleButtonState();
          });
      });
  }

  setInitialState() {
    this._inputList.forEach((inputElement) => {
      this._hideInputError(inputElement);
      this._toggleButtonState();
    });
  }

  enableValidation () {
    this._setEventListener();
  }
}