export default class Card {
  constructor(data, handleCardClick, handleAddLikeClick, handleDeleteLikeClick, 
    handleDeleteClick, userId, cardTemplate)  {
    this._name = data.name;
    this._link = data.link;
    this._cardId = data._id;
    this._ownerId = data.owner._id;
    this._likes = data.likes;
    this._handleCardClick = handleCardClick;
    this._handleAddLikeClick = handleAddLikeClick;
    this._handleDeleteLikeClick = handleDeleteLikeClick;
    this._handleDeleteClick = handleDeleteClick;
    this._userId = userId;
    this._cardTemplate = cardTemplate;
  }


//Удаление карточки
  removeCard() {
    this._cardElement.remove();
  };
  countLikes(likes) {
    this._countLikes.textContent = likes.length;
  }
  likeToggle() {
    this._likeButton.classList.toggle('element__like_active');
  }
//Добавление карточки
  createCard() {
    this._cardElement = this._cardTemplate();
    this._imageCard = this._cardElement.querySelector('.element__image');
    this._imageCard.src =  this._link;
    this._imageCard.alt =  this._title;
    this._cardElement.querySelector('.element__title').textContent = this._title;

    this._countLikes = this._cardElement.querySelector('.element__like-count');
    this.countLikes(this._likes);

    this._deleteButton = this._cardElement.querySelector('.element__delete');
    this._likeButton = this._cardElement.querySelector('.element__like');
    
    //Отображение посставленного лайка
    if ( this._likes.some( like => like._id === this._userId ) ) {
      this._likeButton.classList.add('element__like_active');
    }
    //Удаление карточки
    if ( this._userId === this._ownerId ) {
      this._deleteButton.classList.add('element__delete_visible');
      this._deleteButton.addEventListener('click', () => this._handleDeleteClick() );
    }
    //Постановка и снятие лайка
    this._cardElement.querySelector('.element__like').addEventListener('click', (evt) => {
      if (!evt.target.classList.contains('element__like_active')) {
        this._handleAddLikeClick(this)
      } else {
        this._handleDeleteLikeClick(this)
      }
    });

    return this._cardElement;
  }
}