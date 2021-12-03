import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor(popupSelector, callback) {
    super(popupSelector);
    this._callback = callback;
    this._form = this._popup.querySelector('.popup__form');
    this._input = this._popup.querySelectorAll('.popup__form-text');
  }

  _getInputValues() {
    const formValues = {};
    this._input.forEach(input => formValues[input.name] = input.value);
    return formValues;
  }

  setEventListeners() {
    super.setEventListeners();

    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this.renderLoading(true);
      this._callback(this._getInputValues());
    })
  }

  renderLoading(isLoading) {
    if(isLoading) {
      this._form.querySelector('.popup__submit-button').textContent = 'Сохранение...';
    } else {
      this._form.querySelector('.popup__submit-button').textContent = 'Сохранить';
    }
  }

  closePopup() {
    this._form.reset();
    super.closePopup();
  }
}