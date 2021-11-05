import './index.css';

import { popupProfile, addUserCard} from "../components/modals.js";
import { enableValidation, } from "../components/validate.js";
import { openPopup, closePopup, } from "../components/utils.js";
import { addCards} from "../components/card.js";
import {
  popupEditProfile,
  popupAddCard,
  cardOpen,
  profileOpen,
  closePopupEditProfile,
  closePopupAddCard,
  popupImage,
  formAddCard,
  popupName,
  popupSubname,
  formPopupEditProfile,
  profileName,
  profileSubname,
  buttonAddCard,
  buttonEditProfile,
} from "../components/constants.js";

//Слушатели событий
cardOpen.addEventListener('click', () => {
  openPopup(popupAddCard);
  buttonAddCard.setAttribute("disabled", true);
});
profileOpen.addEventListener('click', () => {
  openPopup(popupEditProfile);
  popupName.value = profileName.textContent;
  popupSubname.value = profileSubname.textContent;
  buttonEditProfile.removeAttribute("disabled");
  buttonEditProfile.classList.remove("popup__submit-button_inactive");
});
closePopupEditProfile.addEventListener('click', () => {
  closePopup(popupEditProfile);
});
closePopupAddCard.addEventListener('click', () => {
  closePopup(popupAddCard);
});
formAddCard.addEventListener('submit', addUserCard); 

formPopupEditProfile.addEventListener('submit', popupProfile);
//Закрытие изображения
document.querySelector('.popup__close-button_image').addEventListener('click', () => {
  closePopup(popupImage);
});

enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__form-text',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_inactive',
  inputErrorClass: 'popup__form-text_type_error',
  errorClass: 'error_active'
}); 
addCards();