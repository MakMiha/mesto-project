export default class Api {
  constructor(token, baseUrl) {
    this.token = token;
    this.baseUrl = baseUrl;
  }

    _checkResponse = (res) => {
      if (res.ok) {
        return res.json();
      }
      // если ошибка, отклоняем промис
      return Promise.reject(`Ошибка: ${res.status}`);
    };

    getInitialCards = () => {
      return fetch(`${this.baseUrl}/cards`, {
        headers: {
          authorization: this.token
        }
      }).then(this._checkResponse);
    } 
    
    getInitialUser = () => {
      return fetch(`${this.baseUrl}/users/me`, {
        headers: {
          authorization: this.token
        }
      }).then(this._checkResponse);
    }

    getInfoAll() {
      return Promise.all([this.getInitialUser(), this.getInitialCards()])
    }
    
    editProfile = (profile) => {
      return fetch(`${this.baseUrl}/users/me`, {
        method: "PATCH",
        headers: this.token,
        body: JSON.stringify({
          name: profile.name,
          about: profile.about,
          avatar: profile.avatar,
        }),
      }).then(this._checkResponse);
    }
    
    addNewCard = (card) => {
      return fetch(`${this.baseUrl}/cards`, {
        method: "POST",
        headers: this.token,
        body: JSON.stringify({
          name: card.name,
          link: card.link
        }),
      }).then(this._checkResponse);
    }
    
    addLike = (cardId) => {
      return fetch(`${this.baseUrl}/cards/likes/${cardId}`, {
        method: "PUT",
        headers: {
          authorization: this.token
        }
      }).then(this._checkResponse);
    }
    
    deleteLike = (cardId) => {
      return fetch(`${this.baseUrl}/cards/likes/${cardId}`, {
        method: "DELETE",
        headers: {
          authorization: this.token
        }
      }).then(this._checkResponse);
    }
    
    editAvatar = (newAvatar) => {
      return fetch(`${this.baseUrl}/users/me/avatar`, {
        method: "PATCH",
        headers: this.token,
        body: JSON.stringify({
          avatar: newAvatar
        }),
      }).then(this._checkResponse);
    }
    
    deleteCard = (cardId) => {
      return fetch(`${this.baseUrl}/cards/${cardId}`, {
        method: "DELETE",
        headers: this.token
      }).then(this._checkResponse);
    }
}

