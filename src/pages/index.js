import "./index.css";
import Api from "../components/Api.js";
import User from "../components/User.js";
import Validator from "../components/Validator.js";

import {
  cardOpen,
  profileOpen,
  formAddCard,
  popupName,
  popupSubname,
  formPopupEditProfile,
  profileName,
  profileSubname,
  avatarOpen,
  formPopupEditAvatar,
  token,
  baseUrl,
  cardContainer,
  validationOption,
} from "../components/constants.js";
import Section from "../components/Section.js";
import Card from "../components/Card.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";

let userId = 1;

const api = new Api(token, baseUrl);

const cardList = new Section(
  {
    items: [],
    renderer: (item) => {
      cardList.addItem(createCard(item));
    },
  },
  cardContainer
);

const user = new User({
  name: ".profile__name",
  about: ".profile__subname",
  avatar: ".profile__avatar",
});

api
  .getInfoAll()
  .then((data) => {
    const [initialUserInfo, initialCards] = data;
    userId = initialUserInfo._id;
    user.setUserInfo(initialUserInfo);
    const cardList = new Section(
      {
        items: initialCards,
        renderer: (item) => {
          cardList.addItem(createCard(item));
        },
      },
      cardContainer
    );
    cardList.renderItems();
  })
  .catch((err) => {
    console.log(err);
  });

//Удаление карточки
const handleDeleteClick = (card) => {
  api
    .deleteCard(card._cardId)
    .then(() => {
      card.removeCard();
    })
    .catch((err) => {
      console.log(err);
    });
};

//Постановка лайка
const handleAddLikeClick = (card) => {
  api
    .addLike(card._cardId)
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
  api
    .deleteLike(card._cardId)
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
    "#card-template"
  );
  return card.createCard();
};

//Слушатели событий
//Редактирование профиля
const profileChangeHandler = (userinfo) => {
  api
    .editProfile({ name: userinfo.name, about: userinfo.subname })
    .then((data) => {
      user.setUserInfo(data);
      popupEditProfile.closePopup();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      popupEditProfile.renderLoading(false);
    });
};

//Добавление карточки
const newCardHandler = (card) => {
  api
    .addNewCard(card)
    .then((data) => {
      cardList.addItem(createCard(data));
      popupAddCard.closePopup();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      popupAddCard.renderLoading(false);
    });
};

//Редактирование аватара
const avatarChangeHandler = (avatar) => {
  api
    .editAvatar(avatar)
    .then((data) => {
      user.setUserInfo(data);
      popupAvatar.closePopup();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      popupAvatar.renderLoading(false);
    });
};

const popupAddCard = new PopupWithForm(".popup_add-card", newCardHandler);
const popupEditProfile = new PopupWithForm(
  ".popup_edit-profile",
  profileChangeHandler
);
const popupAvatar = new PopupWithForm(
  ".popup_edit-avatar",
  avatarChangeHandler
);
//Открытие изображения
const popupWithImage = new PopupWithImage(".popup_full-image");
const handleCardClick = (title, link) => {
  popupWithImage.openPopup(title, link);
};

cardOpen.addEventListener("click", () => {
  popupAddCard.openPopup();
});
profileOpen.addEventListener("click", () => {
  popupEditProfile.openPopup();
  popupName.value = profileName.textContent;
  popupSubname.value = profileSubname.textContent;
});
avatarOpen.addEventListener("click", () => {
  popupAvatar.openPopup();
});

popupAddCard.setEventListeners();
popupEditProfile.setEventListeners();
popupAvatar.setEventListeners();
popupWithImage.setEventListeners();

//Validation
const editFormValidator = new Validator(validationOption, formPopupEditProfile);
const AvatarValidator = new Validator(validationOption, formPopupEditAvatar);
const cardFormValidator = new Validator(validationOption, formAddCard);

editFormValidator.enableValidation();
AvatarValidator.enableValidation();
cardFormValidator.enableValidation();
