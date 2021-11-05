export { addCards, addCard, createCard};
import {
  initialCards,
  cardTemplate,
  caption,
  imageFull,
  cardContainer,
  popupImage,
} from "../components/constants.js";
import { openPopup } from "./utils.js";

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
};

function addCard(card) {
  cardContainer.prepend(card);
};
//Функции постановки лайка
function switchLike(evt){
  evt.target.classList.toggle('element__like_active');
};
//Функция удаление карточки
function deleteCard(evt) {
  evt.target.closest('.element').remove(); 
};
function addCards() {
  for (let i = 0; i < initialCards.length; i++) {
    const data = initialCards[i];
    const title = data.name;
    const link = data.link;
    addCard(createCard(title, link));
  }
};