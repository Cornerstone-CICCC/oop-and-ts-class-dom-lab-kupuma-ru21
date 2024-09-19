import { Component } from "../common/Component.js";

export class TodoItem extends Component {
  render() {
    const todoElement = document.createElement("li");
    todoElement.className = "todo-item";

    const buttonGroup = document.createElement("div");
    buttonGroup.id = "buttonGroup";
    todoElement.appendChild(buttonGroup);

    const markButton = document.createElement("button");
    markButton.textContent = "Mark Complete";
    markButton.onclick = () => {
      const todoText = todoElement.querySelector("#todo-text");
      if (markButton.textContent === "Mark Complete") {
        markButton.textContent = "Mark Incomplete";
        const s = document.createElement("s");
        s.id = "incomplete-todo";
        s.textContent = todoText.textContent;
        todoText.replaceWith(s);
        return;
      }
      markButton.textContent = "Mark Complete";

      const s = todoElement.querySelector("#incomplete-todo");
      const span = document.createElement("span");
      span.id = "todo-text";
      span.textContent = s.textContent;
      s.replaceWith(span);
    };
    buttonGroup.appendChild(markButton);

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = () => {
      todoElement.remove();
    };
    buttonGroup.appendChild(deleteButton);

    return todoElement;
  }
}
