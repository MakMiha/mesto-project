export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._closeEscPopup = this._closeEscPopup.bind(this);
  }

  openPopup() {
    this._popup.classList.add('popup_opened');
    window.addEventListener('keydown', this._closeEscPopup);
  }

  closePopup() {
    this._popup.classList.remove('popup_opened');
    window.removeEventListener('keydown', this._closeEscPopup);
  }

  _closeEscPopup (event) {
    if(event.key === 'Escape') {
      this.closePopup();
    }
  }

  setEventListeners() {
    this._popup.addEventListener('mousedown', (evt) => {
      if (evt.target.classList.contains('popup_opened')) {
        this.closePopup();
      }
      if (evt.target.classList.contains('popup__close-button')) {
        this.closePopup();
      }
    });
  }
}