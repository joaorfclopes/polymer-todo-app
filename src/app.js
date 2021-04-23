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
    window.addEventListener("removeItem", (e) => {
      let index = this.todoList
        .map(function (item) {
          return item.id;
        })
        .indexOf(e.detail.itemId);
      this.todoList.splice(index, 1);
      this.todoList = _.clone(this.todoList);
      localStorage.setItem("todo-list", JSON.stringify(this.todoList));
    });
    window.addEventListener("changeItem", (e) => {
      let index = this.todoList
        .map(function (item) {
          return item.id;
        })
        .indexOf(e.detail.itemId);
      this.todoList[index].done = !this.todoList[index].done;
      localStorage.setItem("todo-list", JSON.stringify(this.todoList));
    });
    super.ready();
  }

  static get template() {
    return html`<div>
      <add-item></add-item>
      <list-items todo-list="[[todoList]]"></list-items>
    </div>`;
  }
}

customElements.define("todo-app", TodoApp);
