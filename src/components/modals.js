import { closePopup } from "./utils.js";
import {
  profileName,
  profileSubname,
  popupName,
  popupSubname,
  formAddCard,
  title,
  link
} from "./constants.js";

//Редактирование профиля
function popupProfile(evt) {
  profileName.textContent = popupName.value;
  profileSubname.textContent = popupSubname.value;
  evt.preventDefault();
  closePopup(popupEditProfile);
};
//Добавление карточки пользователем
function addUserCard(evt) {
  addCard(createCard(title.value, link.value));
  evt.preventDefault();
  closePopup(popupAddCard);
  formAddCard.reset();
};
export { popupProfile, addUserCard};