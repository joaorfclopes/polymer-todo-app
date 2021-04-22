import { LitElement, html } from "@polymer/lit-element";
import "./components/add-item";

class TodoApp extends LitElement {
  static get properties() {
    return {
      todoList: Array,
    };
  }

  constructor() {
    super();
    this.todoList = [];
  }

  render() {
    return html`<div>
      <add-item></add-item>
    </div>`;
  }
}

customElements.define("todo-app", TodoApp);
