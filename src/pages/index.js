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
} from "../components/constants.js";

//Слушатели событий
cardOpen.addEventListener('click', () => {
  openPopup(popupAddCard);
});
profileOpen.addEventListener('click', () => {
  openPopup(popupEditProfile);
  popupName.value = profileName.textContent;
  popupSubname.value = profileSubname.textContent;
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
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
}); 
addCards();