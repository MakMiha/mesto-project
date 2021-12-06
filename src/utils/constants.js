export const cardOpen = document.querySelector(".profile__add-button");
export const profileOpen = document.querySelector(".profile__edit-button");
export const avatarOpen = document.querySelector(
  ".profile__avatar-edit-button"
);
export const popups = document.querySelectorAll(".popup");

export const cardContainer = document.querySelector(".elements__cards-list");
export const cardTemplate = document.querySelector("#card-template").content;

export const formAddCard = document.querySelector('form[name="add-card"]');
export const buttonAddCard = document.querySelector(
  ".popup__submit-button_add-card"
);
export const title = document.querySelector(".popup__form-text_title");
export const link = document.querySelector(".popup__form-text_link");
export const linkAvatar = document.querySelector(
  ".popup__form-text_link-avatar"
);
export const popupName = document.querySelector(".popup__form-text_name");
export const popupSubname = document.querySelector(".popup__form-text_subname");
export const formPopupEditProfile = document.querySelector(
  'form[name="user-info"]'
);
export const buttonEditProfile = document.querySelector(
  ".popup__submit-button_edit-profile"
);
export const buttonEditAvatar = document.querySelector(
  ".popup__submit-button_edit-avatar"
);
export const formPopupEditAvatar = document.querySelector(
  'form[name="user-avatar"]'
);
export const profileName = document.querySelector(".profile__name");
export const profileSubname = document.querySelector(".profile__subname");
export const profileAvatar = document.querySelector(".profile__avatar");

export const token = "295298ff-2da3-4248-8148-e158f9c4a5df";
export const baseUrl = "https://nomoreparties.co/v1/plus-cohort-3";
export const validationOption = {
  formSelector: ".popup__form",
  inputSelector: ".popup__form-text",
  submitButtonSelector: ".popup__submit-button",
  inactiveButtonClass: "popup__submit-button_inactive",
  inputErrorClass: "popup__form-text_type_error",
  errorClass: "error_active",
};
