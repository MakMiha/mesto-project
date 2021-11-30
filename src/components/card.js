import {
  cardTemplate,
  caption,
  imageFull,
  cardContainer,
  popupImage,
} from "../components/constants.js";
import { openPopup } from "./utils.js";
import { userId } from "../components/modals.js";
import { addLike, deleteLike, deleteCard } from "../components/api";
//Добавление карточки
function createCard(data) {
  const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
  const imageCard = cardElement.querySelector('.element__image');
  const title = data.name;
  const link = data.link;
  const cardId = data._id;
  const ownerId = data.owner._id;
  const likes = data.likes;
  cardElement.querySelector('.element__title').textContent = title;
  imageCard.src = link;
  imageCard.alt = title;
  const countLikes = cardElement.querySelector('.element__like-count');
  countLikes.textContent = likes.length;
  //Отображение посставленного лайка
  if ( likes.some( like => like._id === userId ) ) {
    cardElement.querySelector('.element__like').classList.add('element__like_active');
  }
  //Постановка и снятие лайка
  cardElement.querySelector('.element__like').addEventListener('click', (evt) => {
    if (!evt.target.classList.contains("element__like_active")) {
      addLike(cardId)
        .then((card) => {
          countLikes.textContent = card.likes.length;
        })
        .then(() => {
          evt.target.classList.toggle('element__like_active');
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      deleteLike(cardId)
        .then((card) => {
          countLikes.textContent = card.likes.length;
        })
        .then(() => {
          evt.target.classList.toggle('element__like_active');
        })
        .catch((err) => {
          console.log(err);
        });
    }
  });
  //Удаление карточки
  if ( userId === ownerId ) {
    cardElement.querySelector('.element__delete').classList.add('element__delete_visible');
    cardElement.querySelector('.element__delete').addEventListener('click', () => removeCard(cardId, cardElement));
  }
  //Открытие изображения
  imageCard.addEventListener('click', () => {
    openPopup(popupImage);
    imageFull.src = link;
    imageFull.alt = title;
    caption.textContent = title;
  });
  return cardElement;
};

function addCard(card) {
  cardContainer.prepend(card);
};

//Функция удаление карточки
function removeCard(cardId, cardElement) {
  deleteCard(cardId)
    .then(() => {
      cardElement.remove(); 
    })
    .catch((err) => {
      console.log(err);
    });
};
function addCards(initialCards) {
  for (let i = 0; i < initialCards.length; i++) {
    const data = initialCards[i];
    addCard(createCard(data));
  }
};

export { addCards, addCard, createCard,};