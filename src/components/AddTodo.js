import { Component } from "../common/Component.js";
import { TodoItem } from "./TodoItem.js";

export class AddTodo extends Component {
  render() {
    const addElement = document.createElement("div");
    addElement.className = "add-todo";

    const input = document.createElement("input");
    input.id = "todo-input";
    input.type = "text";
    input.placeholder = "Enter task details...";
    addElement.appendChild(input);

    const addTodoButton = document.createElement("button");
    addTodoButton.id = "todo-add-btn";
    addTodoButton.textContent = "Add To Do";
    addTodoButton.onclick = () => {
      const todoElement = new TodoItem().render();
      const span = document.createElement("span");
      span.id = "todo-text";
      span.textContent = input.value;
      todoElement.insertBefore(span, todoElement.querySelector("#buttonGroup"));
      const todos = document.getElementsByClassName("todo-list")[0];
      todos.appendChild(todoElement);
      input.value = "";
    };
    addElement.appendChild(addTodoButton);

    return addElement;
  }
}
