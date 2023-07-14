import './index.css';

const task = [
  {
    description: 'wash the dishes',
    completed: false,
    index: 1,
  },
  {
    description: 'complete To Do list project',
    completed: false,
    index: 2,
  },
  {
    description: 'Deploy the app to the server',
    completed: false,
    index: 3,
  },

];

const renderTask = () => {
  const taskList = document.getElementById('list');
  taskList.innerHTML = '';
  // sort tasks by index
  task.sort((a, b) => a.index - b.index);

  task.forEach((task) => {
    const li = document.createElement('li');
    li.classList = 'listItmes';
    const check = document.createElement('input');
    check.type = 'checkbox';
    const span = document.createElement('span');
    span.textContent = task.description;
    li.appendChild(check);
    li.appendChild(span);
    const ellipsis = document.createElement('i');
    ellipsis.classList.add('fa', 'fa-ellipsis-v');
    ellipsis.setAttribute('aria-hidden', 'true');
    li.appendChild(ellipsis);
    taskList.appendChild(li);
  });
};

window.addEventListener('load', renderTask);