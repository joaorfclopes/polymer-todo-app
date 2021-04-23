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

  onDone() {
    this.dispatchEvent(
      new CustomEvent("changeItem", {
        bubbles: true,
        composed: true,
        detail: { itemId: this.todoItem.id },
      })
    );
  }

  static get template() {
    return html`
      <li>
        <input checked="[[todoItem.done]]" type="checkbox" on-click="onDone" />
        [[todoItem.item]]
        <button on-click="onRemove">x</button>
      </li>
    `;
  }
}

customElements.define("todo-item", TodoItem);
