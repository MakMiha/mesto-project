import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._imageFull = this._popup.querySelector(".popup__image");
    this._caption = this._popup.querySelector(".popup__image-caption");
  }

  openPopup(title, link) {
    super.openPopup();
    this._imageFull.src = link;
    this._imageFull.alt = title;
    this._caption.textContent = title;
  }
}
