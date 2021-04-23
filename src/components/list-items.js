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
    return html`<style>
        .lists {
          padding-left: 350px;
          margin: 0 auto;
          max-width: 500px;
        }
        .list {
          transform-origin: center bottom;
          transition: 200ms all linear;
        }
        .list .title {
          color: #b8d4ff;
          font-size: 1.5rem;
          letter-spacing: 5px;
          text-transform: uppercase;
          text-align: center;
          margin: 3.5rem 0 3.5rem 0;
          line-height: 1;
        }
        .list .list-wrapper {
          list-style: none;
          margin: 0 0.5rem;
          padding: 0;
        }
        @media (max-width: 576px) and (orientation: portrait) {
          .lists {
            padding: 0 1rem;
            margin-bottom: 5rem;
          }
          .list .title {
            margin: 1.5rem 1rem;
            font-size: 1.5rem;
          }
        }
      </style>
      <ul>
        <template is="dom-repeat" items="[[todoList]]" as="todo">
          <todo-item todo-item="[[todo]]"></todo-item>
        </template>
      </ul>`;
  }
}

customElements.define("list-items", ListItems);
