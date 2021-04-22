import { LitElement, html } from "@polymer/lit-element";

class AddItem extends LitElement {
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
    //if enter button
    if (e.keyCode == 13) {
      //call add item function
    } else {
      this.todoItem = e.target.value;
    }
    console.log(this.todoItem);
  }

  render() {
    return html`<div>
      <input value=${this.todoItem} @keyup="${(e) => this.inputKeypress(e)}" />
    </div>`;
  }
}

customElements.define("add-item", AddItem);
