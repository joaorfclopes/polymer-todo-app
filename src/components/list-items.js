import { PolymerElement, html } from "@polymer/polymer";
import "@polymer/polymer/lib/elements/dom-repeat";
import "./todo-item";

class ListItems extends PolymerElement {
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
    return html`<ul>
      <template is="dom-repeat" items="[[todoList]]" as="todo">
        <todo-item todo-item="[[todo]]"></todo-item>
      </template>
    </ul>`;
  }
}

customElements.define("list-items", ListItems);
