import './index.css';
import Api from '../components/api.js';
import  User  from "../components/User.js";
//import { getInitialCards, getInitialUser } from "../components/api";
import { loadProfile, handleProfileSubmit, addUserCard, handleAvatarSubmit} from "../components/modals.js";
import { enableValidation, } from "../components/validate.js";
import { openPopup, closePopup, } from "../components/utils.js";

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
  token,
  baseUrl,
  imageFull,
  popupImage,
  caption,
  cardContainer
} from "../components/constants.js";
import Section from "../components/Section.js";
import Card from "../components/card.js";

let userId = 1;

const api = new Api(token, baseUrl);

// const cardList = new Section({
//   items: [],
//   renderer: (item) => {
//     cardList.addItem(createCard(item))
//   }
// }, cardContainer);

api.getInfoAll()
  .then((data) => {
    const [initialUserInfo, initialCards] = data;
    userId = initialUserInfo._id;
    console.log(initialUserInfo);
    console.log(initialCards);
    const user = new User({
      name: '.profile__name',
      about: '.profile__subname',
      avatar: '.profile__avatar',
    });
    user.setUserInfo(initialUserInfo);
    const cardList = new Section({
      items: initialCards,
      renderer: (item) => {
        cardList.addItem(createCard(item))
      }
    }, cardContainer);
    cardList.renderItems();

  })
  .catch((err) => {
    console.log(err);
  })

//Открытие изображения
const handleCardClick =  (title, link) => {
  openPopup(popupImage);
  imageFull.src = link;
  imageFull.alt = title;
  caption.textContent = title;
};

//Удаление карточки
const handleDeleteClick = (card) => {
  api.deleteCard(card._cardId)
    .then(() => {
      card.removeCard(); 
    })
    .catch((err) => {
      console.log(err);
    });
};

//Постановка лайка
const handleAddLikeClick = (card) => {
  api.addLike(card._cardId)
    .then((data) => {
      card.countLikes(data.likes);
    })
    .then(() => {
      card.likeToggle();
    })
    .catch((err) => {
      console.log(err);
    });
};

//Удаление лайка
const handleDeleteLikeClick = (card) => {
  api.deleteLike(card._cardId)
    .then((data) => {
      card.countLikes(data.likes);
    })
    .then(() => {
      card.likeToggle();
    })
    .catch((err) => {
      console.log(err);
    });
};

const createCard = (data) => {
  const card = new Card(
    data,
    handleCardClick,
    handleAddLikeClick,
    handleDeleteLikeClick,
    handleDeleteClick,
    userId,
    '#card-template',
    // cardTemplate
  );
  return card.createCard();
};

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
