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

  onRemove() {
    this.dispatchEvent(
      new CustomEvent("removeItem", {
        bubbles: true,
        composed: true,
        detail: { itemId: this.todoItem.id },
      })
    );
  }

  static get template() {
    return html`<li>[[todoItem.item]]</li>
      <button on-click="onRemove">x</button>`;
  }
}

customElements.define("todo-item", TodoItem);
