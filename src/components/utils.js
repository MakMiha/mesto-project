//Открытие popup
function openPopup(popup) {
  popup.classList.add('popup_opened');
  window.addEventListener('keydown', closeEscPopup);
};
//Закрытие popup
function closePopup(popup) {
  popup.classList.remove('popup_opened');
  window.removeEventListener('keydown', closeEscPopup);
};
function closeEscPopup(evt) {
  if (evt.key === 'Escape') {
    const popupOpen = document.querySelector(".popup_opened");
    closePopup(popupOpen);
  }
};

export { openPopup, closePopup, closeEscPopup };