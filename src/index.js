import { toggleTaskStatus, clearCompletedTasks } from "./status.js";

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

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
        <button class="edit-task">Edit</button>
        <button class="delete-task">Delete</button>
      `;

      const checkbox = li.querySelector("input");
      checkbox.addEventListener("change", () => {
        toggleTaskStatus(task);
        localStorage.setItem("tasks", JSON.stringify(tasks));
        renderTodoList();
      });

      const editButton = li.querySelector(".edit-task");
      editButton.addEventListener("click", () => editTask(task));

      const deleteButton = li.querySelector(".delete-task");
      deleteButton.addEventListener("click", () => deleteTask(task));

      todoList.appendChild(li);
    });
}

function addTask(description) {
  const newTask = {
    description: description,
    completed: false,
    index: tasks.length
  };

  tasks.push(newTask);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  renderTodoList();
}

function deleteTask(task) {
  tasks = tasks.filter((t) => t !== task);
  tasks.forEach((t, i) => (t.index = i));
  localStorage.setItem("tasks", JSON.stringify(tasks));
  renderTodoList();
}

function editTask(task) {
  const newDescription = prompt("Enter a new description:", task.description);

  if (newDescription !== null) {
    task.description = newDescription;
    localStorage.setItem("tasks", JSON.stringify(tasks));
    renderTodoList();
  }
}

const addTaskForm = document.querySelector("#add-task-form");
addTaskForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const input = addTaskForm.querySelector("input");
  const description = input.value.trim();

  if (description !== "") {
    addTask(description);
    input.value = "";
  }
});

const clearCompletedButton = document.querySelector("#clear-completed-button");
clearCompletedButton.addEventListener("click", () => {
  tasks = clearCompletedTasks(tasks);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  renderTodoList();
});

window.addEventListener("load", renderTodoList);
