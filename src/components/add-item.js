import { PolymerElement, html } from "@polymer/polymer";

class AddItem extends PolymerElement {
  static get properties() {
    return {
      todoList: Array,
      todoItem: String,
    };
  }

  constructor() {
    super();
    this.todoItem = "";
  }

  inputKeypress(e) {
    if (e.keyCode == 13) {
      this.onAddItem();
    } else {
      this.todoItem = e.target.value;
    }
    console.log(this.todoItem);
  }

  onAddItem() {
    let todoList = [
      {
        id: new Date().valueOf(),
        item: this.todoItem,
        done: false,
      },
    ];
    localStorage.setItem("todo-list", JSON.stringify(todoList));
    this.todoItem = "";
  }

  static get template() {
    return html`<div>
      <input value="[[todoItem]]" on-keyup="inputKeypress" />
      <button on-click="onAddItem">Add Item</button>
    </div>`;
  }
}

customElements.define("add-item", AddItem);
