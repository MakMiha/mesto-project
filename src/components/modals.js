import { closePopup } from "./utils.js";
import {
  profileName,
  profileSubname,
  popupName,
  popupSubname,
  formAddCard,
  title,
  link,
  popupAddCard,
  popupEditProfile
} from "./constants.js";
import { addCard, createCard} from "../components/card.js";

//Редактирование профиля
function handleProfileSubmit(evt) {
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

export { handleProfileSubmit, addUserCard};