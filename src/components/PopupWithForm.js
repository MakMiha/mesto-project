import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor(popupSelector, callback) {
    super(popupSelector);
    this._callback = callback;
    this._form = this._popup.querySelector('.popup__form');
    this._input = Array.from(this._form.querySelectorAll('.popup__form-text'));
    this._formSubmitButton = this._form.querySelector('.popup__submit-button');
  }

  _getInputValues() {
    this._formValues = {};
    Array.from(this._input).forEach(input => {
      this._formValues[input.name] = input.value
    });
    return this._formValues;
  }

  setEventListeners() {
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this.renderLoading(true);
      this._callback(this._getInputValues());
    })
    super.setEventListeners();

  }

  renderLoading(isLoading) {
    if(isLoading) {
      this._formSubmitButton.textContent = 'Сохранение...';
    } else {
      this._formSubmitButton.textContent = 'Сохранить';
    }
  }

  closePopup() {
    this._form.reset();
    super.closePopup();
  }
}