export default class UserInfo {
  constructor({name, about, avatar, _id}) {
    this._name = document.querySelector(name);
    this._about = document.querySelector(about);
    this._avatar = document.querySelector(avatar);
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
