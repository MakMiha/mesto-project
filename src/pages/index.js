import './index.css';

import { getInitialCards, getInitialUser } from "../components/api";
import { loadProfile, handleProfileSubmit, addUserCard, handleAvatarSubmit } from "../components/modals.js";
import { enableValidation, } from "../components/validate.js";
import { openPopup, closePopup, } from "../components/utils.js";
import { addCards } from "../components/card.js";
import {
  popupEditProfile,
  popupAddCard,
  cardOpen,
  profileOpen,
  popups,
  formAddCard,
  popupName,
  popupSubname,
  formPopupEditProfile,
  profileName,
  profileSubname,
  buttonAddCard,
  buttonEditProfile,
  avatarOpen,
  buttonEditAvatar,
  popupAvatar,
  formPopupEditAvatar,
} from "../components/constants.js";

//Слушатели событий
cardOpen.addEventListener('click', () => {
  openPopup(popupAddCard);
  buttonAddCard.setAttribute('disabled', true);
  buttonAddCard.classList.add('popup__submit-button_inactive');
});
profileOpen.addEventListener('click', () => {
  openPopup(popupEditProfile);
  popupName.value = profileName.textContent;
  popupSubname.value = profileSubname.textContent;
  buttonEditProfile.removeAttribute('disabled'); 
  buttonEditProfile.classList.remove('popup__submit-button_inactive'); 
});
avatarOpen.addEventListener("click", () => {
  openPopup(popupAvatar);
  buttonEditAvatar.setAttribute('disabled', true);
  buttonEditAvatar.classList.add('popup__submit-button_inactive');
});
popups.forEach((popup) => {
    popup.addEventListener('click', (evt) => {
        if (evt.target.classList.contains('popup_opened')) {
            closePopup(popup);
        }
        if (evt.target.classList.contains('popup__close-button')) {
          closePopup(popup);
        }
    });
});

formAddCard.addEventListener('submit', addUserCard); 
formPopupEditAvatar.addEventListener('submit', handleAvatarSubmit);
formPopupEditProfile.addEventListener('submit', handleProfileSubmit);
enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__form-text',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_inactive',
  inputErrorClass: 'popup__form-text_type_error',
  errorClass: 'error_active'
}); 

const initialCards = getInitialCards();
const userInfo = getInitialUser();
Promise.all([initialCards, userInfo]).then((arr) => {
  loadProfile(arr[1]);
  addCards(arr[0]);
})
    .catch((err) => { 
      console.log(err);
    }); 
