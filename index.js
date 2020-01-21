// import TasksList from './TasksList';
// import TaskForm from './TaskForm';

const tasksListContainer = document.querySelector('#tasks');
const tasksList = new TasksList(tasksListContainer);
const formContainer = document.querySelector('#tasks_form_container');
const form = new TaskForm(formContainer, tasksList);
form.render();

document.body.addEventListener('click', function(e) {
  if (e.target.matches('.delete')) {
    const ind = parseInt(e.target.parentNode.parentNode.dataset.index);
    tasksList.removeTask(ind);
    tasksList.render();
  }

  if (e.target.matches('.edit')) {
    const ind = parseInt(e.target.parentNode.parentNode.dataset.index);
    const task = tasksList.getTask(ind);
    form.setFormFieldsFromTask(task, ind);
  }
});
