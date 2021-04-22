import { PolymerElement, html } from "@polymer/polymer";
import "./components/add-item";
import "./components/list-items";

class TodoApp extends PolymerElement {
  static get properties() {
    return {
      todoList: Array,
    };
  }

  constructor() {
    super();
    let list = JSON.parse(localStorage.getItem("todo-list"));
    this.todoList = list === null ? [] : list;
  }

  ready() {
    window.addEventListener("addItem", (e) => {
      this.todoList = e.detail.todoList;
    });
    super.ready();
  }

  static get template() {
    return html`<div>
      <h1>Todo App</h1>
      <add-item></add-item>
      <list-items todo-list="[[todoList]]"></list-items>
    </div>`;
  }
}

customElements.define("todo-app", TodoApp);
