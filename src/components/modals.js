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
  popupEditProfile,
  popupAvatar,
  linkAvatar,
  profileAvatar,
  buttonEditProfile,
  buttonAddCard,
  buttonEditAvatar
} from "./constants.js";
import { addCard, createCard } from "../components/card.js";
import { editProfile, addNewCard, editAvatar } from "../components/api";
let userId = 1;
//Редактирование профиля
function loadProfile(user) {
  userId = user._id;
  profileName.textContent = user.name;
  profileSubname.textContent = user.about;
  profileAvatar.src = user.avatar;
  closePopup(popupEditProfile);
};

function handleProfileSubmit(evt) {
  renderLoading(true, buttonEditProfile)
  editProfile({name:popupName.value, about:popupSubname.value})
    .finally(() => {
      renderLoading(false, buttonEditProfile);
    });
  profileName.textContent = popupName.value;
  profileSubname.textContent = popupSubname.value;
  evt.preventDefault();
  closePopup(popupEditProfile);
};

//Добавление карточки пользователем
function addUserCard(evt) {
  renderLoading(true, buttonAddCard)
  addNewCard({name:title.value, link:link.value})
    .then((card) => {
      addCard(createCard(card));
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      renderLoading(false, buttonAddCard);
    }); 
  evt.preventDefault();
  closePopup(popupAddCard);
  formAddCard.reset();
};

function handleAvatarSubmit(evt) {
  renderLoading(true, buttonEditAvatar)
  editAvatar(linkAvatar.value)
    .finally(() => {
      renderLoading(false, buttonEditAvatar);
    });
  profileAvatar.src = linkAvatar.value;
  evt.preventDefault();
  closePopup(popupAvatar);
};

function renderLoading(isLoading, button){
  if (isLoading) {
    button.textContent = 'Сохранение...' ;
  } else {
    button.textContent = 'Сохранить' ;
  }
};

export { loadProfile, handleProfileSubmit, addUserCard, handleAvatarSubmit, userId};