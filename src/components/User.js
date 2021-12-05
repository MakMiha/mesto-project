import { profileName, profileSubname, profileAvatar } from "./constants.js";

export default class User {
  constructor() {
    this._name = profileName;
    this._about = profileSubname;
    this._avatar = profileAvatar;
  }

  getUserInfo(fetchRequest) {
    fetchRequest()
      .then((res) => res)
      .catch((err) => console.err(err));
  }

  setUserAvatar(data) {
    this._avatar.alt = data.name;
    this._avatar.src = data.avatar;
  }

  getUserAvatar() {
    return this._avatar.src;
  }

  setUserInfo(data) {
    this._name.textContent = data.name;
    this._avatar.alt = data.name;
    this._about.textContent = data.about;
    this._avatar.src = data.avatar;
  }
}
