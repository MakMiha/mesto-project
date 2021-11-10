//Переменные
// const initialCards = [
//   {
//     name: 'Архыз',
//     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
//   },
//   {
//     name: 'Челябинская область',
//     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
//   },
//   {
//     name: 'Иваново',
//     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
//   },
//   {
//     name: 'Камчатка',
//     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
//   },
//   {
//     name: 'Холмогорский район',
//     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
//   },
//   {
//     name: 'Байкал',
//     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
//   }
// ];

const popupEditProfile = document.querySelector('.popup_edit-profile');
const popupAddCard = document.querySelector('.popup_add-card');
const popupAvatar = document.querySelector('.popup_edit-avatar');
const cardOpen = document.querySelector('.profile__add-button');
const profileOpen = document.querySelector('.profile__edit-button');
const avatarOpen = document.querySelector('.profile__avatar-edit-button');
const popups = document.querySelectorAll('.popup');

const cardContainer = document.querySelector('.elements__cards-list');
const popupImage= document.querySelector('.popup_full-image');
const imageFull = document.querySelector('.popup__image');
const caption = document.querySelector('.popup__image-caption');
const cardTemplate = document.querySelector('#card-template').content;

const formAddCard = document.querySelector('form[name="add-card"]');
const buttonAddCard = document.querySelector('.popup__submit-button_add-card');
const title = document.querySelector('.popup__form-text_title');
const link = document.querySelector('.popup__form-text_link');
const linkAvatar = document.querySelector('.popup__form-text_link-avatar');
const popupName= document.querySelector('.popup__form-text_name');
const popupSubname = document.querySelector('.popup__form-text_subname');
const formPopupEditProfile = document.querySelector('form[name="user-info"]');
const buttonEditProfile = document.querySelector('.popup__submit-button_edit-profile');
const buttonEditAvatar = document.querySelector('.popup__submit-button_edit-avatar');
const formPopupEditAvatar = document.querySelector('form[name="user-avatar"]');
const profileName = document.querySelector('.profile__name');
const profileSubname = document.querySelector('.profile__subname');
const profileAvatar = document.querySelector('.profile__avatar');

export {
  popupEditProfile,
  popupAddCard,
  cardOpen,
  profileOpen,
  popups,
  cardContainer,
  popupImage,
  imageFull,
  caption,
  cardTemplate,
  formAddCard,
  title,
  link,
  popupName,
  popupSubname,
  formPopupEditProfile,
  profileName,
  profileSubname,
  buttonAddCard,
  buttonEditProfile,
  popupAvatar,
  avatarOpen,
  buttonEditAvatar,
  linkAvatar,
  profileAvatar,
  formPopupEditAvatar,
};