import './index.css';
import Tasks from './operations.js';

const tasks = new Tasks();
const addTaskBtn = document.getElementById('addBtn');

addTaskBtn.addEventListener('click', () => {
  tasks.addTask();
});

const clearBtn = document.getElementById('clearBtn');
clearBtn.addEventListener('click', () => {
  tasks.clearComplete();
});