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

// Открытие popup
const popupEditProfile = document.querySelector('.popup_edit-profile');
const popupAddCard = document.querySelector('.popup_add-card');

function openPopup(popup) {
  popup.classList.add('popup_opened');
}

const cardOpen = document.querySelector('.profile__add-button');
cardOpen.addEventListener('click', () => {
  openPopup(popupAddCard);
});
const profileOpen = document.querySelector('.profile__edit-button');
profileOpen.addEventListener('click', () => {
  openPopup(popupEditProfile);
});

// Закрытие popup
const closePopupEditProfile = document.querySelector('.popup__close-button_edit-profile');
const closePopupAddCard = document.querySelector('.popup__close-button_add-card');
function clossePopup(popup) {
  popup.classList.remove('popup_opened');
}
closePopupEditProfile.addEventListener('click', () => {
  clossePopup(popupEditProfile);
});
closePopupAddCard.addEventListener('click', () => {
  clossePopup(popupAddCard);
});

// добавление карточки
const cardContainer = document.querySelector('.elements__cards-list');
const popupImage= document.querySelector('.popup_full-image');
const imageFull = document.querySelector(".popup__image");
const caption = document.querySelector(".popup__image-caption");

function createCard(title, link) {
  const cardTemplate = document.querySelector('#card-template').content;
  const cardElement = cardTemplate.querySelector('.element').cloneNode(true);

  cardElement.querySelector('.element__title').textContent = title;
  cardElement.querySelector('.element__image').src = link;
  cardElement.querySelector('.element__image').alt = title;

  cardElement.querySelector('.element__like').addEventListener('click', (evt) => {
    evt.target.classList.toggle('element__like_active');
  });

  //Удаление карточки
  cardElement.querySelector('.element__delete').addEventListener('click', (evt) => {
    const cardContainer = document.querySelector('.elements__cards-list');
    cardContainer.removeChild(evt.currentTarget.parentNode);
  });

  //Открытие изображения
  cardElement.querySelector('.element__image').addEventListener('click', () => {
    popupImage.classList.add('popup_opened');
    imageFull.src = link;
    caption.textContent = title;
  });
  cardContainer.prepend(cardElement);
}

//Закрытие изображения
document.querySelector('.popup__close-button_image').addEventListener('click', () => {
  popupImage.classList.remove('popup_opened');
});

function addCards() {
  for (let i = 0; i < initialCards.length; i++) {
    const data = initialCards[i];
    const title = data.name;
    const link = data.link;
    createCard(title, link);
  }
}
addCards();

// добавление карточки пользователем
const buttonAddCard = document.querySelector('.popup__submit-button_add-card');
function addUserCard(evt) {
  const title = document.querySelector('.popup__form-text_title');
  const link = document.querySelector('.popup__form-text_link');
  createCard(title.value, link.value);
  evt.preventDefault();
  clossePopup(popupAddCard);
}
buttonAddCard.addEventListener('click', addUserCard); 


//Редактирвание профиля
const popupName= document.querySelector('.popup__form-text_name');
const popupSubname = document.querySelector('.popup__form-text_subname');

let Name = document.querySelector('.profile__name').textContent;
let Subname = document.querySelector('.profile__subname').textContent;

popupName.value = Name;
popupSubname.value = Subname;

const popupEditButton = document.querySelector('.popup__submit-button_edit-profile');

popupEditButton.addEventListener('click', (evt) => {
    const profileName = document.querySelector('.profile__name');
    const profileSubname = document.querySelector('.profile__subname');
    profileName.textContent = popupName.value;
    profileSubname.textContent = popupSubname.value;
    evt.preventDefault();
    clossePopup(popupEditProfile);
});