const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];
//Переменные
const popupEditProfile = document.querySelector('.popup_edit-profile');
const popupAddCard = document.querySelector('.popup_add-card');
const cardOpen = document.querySelector('.profile__add-button');
const profileOpen = document.querySelector('.profile__edit-button');
const closePopupEditProfile = document.querySelector('.popup__close-button_edit-profile');
const closePopupAddCard = document.querySelector('.popup__close-button_add-card');

const cardContainer = document.querySelector('.elements__cards-list');
const popupImage= document.querySelector('.popup_full-image');
const imageFull = document.querySelector(".popup__image");
const caption = document.querySelector(".popup__image-caption");
const cardTemplate = document.querySelector('#card-template').content;

const formAddCard = document.querySelector('form[name="add-card"]');
const title = document.querySelector('.popup__form-text_title');
const link = document.querySelector('.popup__form-text_link');
const popupName= document.querySelector('.popup__form-text_name');
const popupSubname = document.querySelector('.popup__form-text_subname');
const formPopupEditProfile = document.querySelector('form[name="user-info"]');
const profileName = document.querySelector('.profile__name');
const profileSubname = document.querySelector('.profile__subname');

//Открытие popup
function openPopup(popup) {
  popup.classList.add('popup_opened');
}

//Закрытие popup
function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

//Добавление карточки
function createCard(title, link) {
  const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
  const imageCard = cardElement.querySelector('.element__image');
  cardElement.querySelector('.element__title').textContent = title;
  imageCard.src = link;
  imageCard.alt = title;
  cardElement.querySelector('.element__like').addEventListener('click', switchLike);
  cardElement.querySelector('.element__delete').addEventListener('click', deleteCard);
  //Открытие изображения
  imageCard.addEventListener('click', () => {
    openPopup(popupImage);
    imageFull.src = link;
    imageFull.alt = title;
    caption.textContent = title;
  });
  return cardElement;
}
function addCard(card) {
  cardContainer.prepend(card);
}
//Функции постановки лайка
function switchLike(evt){
  evt.target.classList.toggle('element__like_active');
}
//Функция удаление карточки
function deleteCard(evt) {
  evt.target.closest('.element').remove(); 
}
function addCards() {
  for (let i = 0; i < initialCards.length; i++) {
    const data = initialCards[i];
    const title = data.name;
    const link = data.link;
    addCard(createCard(title, link));
  }
}
addCards();

//Добавление карточки пользователем
function addUserCard(evt) {
  addCard(createCard(title.value, link.value));
  evt.preventDefault();
  closePopup(popupAddCard);
  formAddCard.reset();
}

//Редактирование профиля
formPopupEditProfile.addEventListener('submit', (evt) => {
    profileName.textContent = popupName.value;
    profileSubname.textContent = popupSubname.value;
    evt.preventDefault();
    closePopup(popupEditProfile);
});

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
//Закрытие изображения
document.querySelector('.popup__close-button_image').addEventListener('click', () => {
  closePopup(popupImage);
});
formAddCard.addEventListener('submit', addUserCard); 