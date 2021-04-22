import { PolymerElement, html } from "@polymer/polymer";

class TodoItem extends PolymerElement {
  static get properties() {
    return {
      todoItem: Object,
    };
  }

  constructor() {
    super();
    this.todoItem = {};
  }

  static get template() {
    return html`<li>[[todoItem.item]]</li>`;
  }
}

customElements.define("todo-item", TodoItem);
