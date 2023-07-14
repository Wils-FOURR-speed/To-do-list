import './index.css';
import {
  renderTodoList, addTask,
} from './operations.js';

const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
const addButton = document.getElementById('addbutton');
addButton.addEventListener('click', () => {
//   const task = document.getElementById('addTask');
//   task.addEventListener('change', () => {
//     const doit = task.value;
//     if (doit) {
//       const tasks = addTask(doit);
//       localStorage.setItem('tasks', JSON.stringify(tasks));

//       renderTodoList();
//       task.value = '';
//     }
//   });
  console.log('me');
});

// const clearCompletedButton = document.querySelector('#clear-completed-button');
// clearCompletedButton.addEventListener('click', () => {
//   tasks = clearCompletedTasks(tasks);
//   localStorage.setItem('tasks', JSON.stringify(tasks));
//   renderTodoList();
// });

window.addEventListener('load', renderTodoList(tasks));