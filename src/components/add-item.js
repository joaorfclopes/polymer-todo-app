import { PolymerElement, html } from "@polymer/polymer";

class AddItem extends PolymerElement {
  static get properties() {
    return {
      todoItem: String,
      todoList: Array,
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
  }

  onAddItem() {
    if (this.todoItem.length > 0) {
      let storedTodoList = JSON.parse(localStorage.getItem("todo-list"));
      storedTodoList = storedTodoList === null ? [] : storedTodoList;
      storedTodoList.push({
        id: new Date().valueOf(),
        item: this.todoItem,
        done: false,
      });
      localStorage.setItem("todo-list", JSON.stringify(storedTodoList));
      this.dispatchEvent(
        new CustomEvent("addItem", {
          bubbles: true,
          composed: true,
          detail: { todoList: storedTodoList },
        })
      );
      this.todoItem = "";
    }
  }

  static get template() {
    return html`<div>
      <input value="[[todoItem]]" on-keyup="inputKeypress" />
      <button on-click="onAddItem">Add Item</button>
    </div>`;
  }
}

customElements.define("add-item", AddItem);
