export { openPopup, closePopup, escClosePopup};

//Открытие popup
function openPopup(popup) {
  popup.classList.add('popup_opened');
  window.addEventListener('keydown', escClosePopup);
  popup.addEventListener('mousedown', (evt) => {
    if (evt.target !== evt.currentTarget) {
      return;
    }
    closePopup(popup);
  });
};
//Закрытие popup
function closePopup(popup) {
  popup.classList.remove('popup_opened');
  window.removeEventListener('keydown', escClosePopup);
};
function escClosePopup(evt) {
  if (evt.key === 'Escape') {
    closePopup(popup);
  }
};