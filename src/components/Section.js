export default class Section {
  constructor({ items, renderer }, cardContainer) {
    this._items = items;
    this._renderer = renderer;
    this._container = cardContainer;
  }

  addItem(element) {
    this._container.prepend(element);
  }

  renderItems(items) {
    items.forEach((item) => {
      this._renderer(item);
    });
  }
}
