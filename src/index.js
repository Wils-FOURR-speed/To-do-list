import './index.css';

const tasks = [
  {
    description: "Complete homework",
    completed: false,
    index: 1
  },
  {
    description: "Go grocery shopping",
    completed: true,
    index: 2
  },
  {
    description: "Clean the kitchen",
    completed: false,
    index: 3
  }
];

function renderTodoList() {
  const todoList = document.querySelector("#todo-list");
  todoList.innerHTML = "";

  tasks
    .sort((a, b) => a.index - b.index)
    .forEach((task) => {
      const li = document.createElement("li");

      li.innerHTML = `
        <input type="checkbox" ${task.completed ? "checked" : ""} />
        <span>${task.description}</span>
      `;

      todoList.appendChild(li);
    });
}

window.addEventListener("load", renderTodoList);
