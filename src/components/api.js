const config = {
  baseUrl: 'https://nomoreparties.co/v1/plus-cohort-3',
  headers: {
    authorization: '295298ff-2da3-4248-8148-e158f9c4a5df',
    'Content-Type': 'application/json'
  }
}

const checkResponse = (res) => {
    if (res.ok) {
      return res.json();
    }
    // если ошибка, отклоняем промис
    return Promise.reject(`Ошибка: ${res.status}`);
  };

export const getInitialCards = () => {
  return fetch(`${config.baseUrl}/cards`, {
    headers:  config.headers
  }).then(checkResponse);
} 

export const getInitialUser = () => {
  return fetch(`${config.baseUrl}/users/me`, {
    headers: config.headers,
  }).then(checkResponse);
}

export const editProfile = (profile) => {
  return fetch(`${config.baseUrl}/users/me`, {
    method: "PATCH",
    headers: config.headers,
    body: JSON.stringify({
      name: profile.name,
      about: profile.about,
      avatar: profile.avatar,
    }),
  }).then(checkResponse);
}

export const addNewCard = (card) => {
  return fetch(`${config.baseUrl}/cards`, {
    method: "POST",
    headers: config.headers,
    body: JSON.stringify({
      name: card.name,
      link: card.link
    }),
  }).then(checkResponse);
}

export const addLike = (cardId) => {
  return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
    method: "PUT",
    headers: config.headers,
  }).then(checkResponse);
}

export const deleteLike = (cardId) => {
  return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
    method: "DELETE",
    headers: config.headers,
  }).then(checkResponse);
}

export const editAvatar = (newAvatar) => {
  return fetch(`${config.baseUrl}/users/me/avatar`, {
    method: "PATCH",
    headers: config.headers,
    body: JSON.stringify({
      avatar: newAvatar
    }),
  }).then(checkResponse);
}

export const deleteCard = (cardId) => {
  return fetch(`${config.baseUrl}/cards/${cardId}`, {
    method: "DELETE",
    headers: config.headers,
  }).then(checkResponse);
}