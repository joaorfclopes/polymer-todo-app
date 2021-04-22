import { PolymerElement, html } from "@polymer/polymer";
import "./components/add-item";

class TodoApp extends PolymerElement {
  static get properties() {
    return {
      todoList: Array,
    };
  }

  constructor() {
    super();
    this.todoList = [];
  }

  static get template() {
    return html`<div>
      <h1>Todo App</h1>
      <add-item></add-item>
    </div>`;
  }
}

customElements.define("todo-app", TodoApp);
