// import Task from './Task';

class TasksList {
  constructor(el) {
    this.el = el;
    this.tasks = [];
    this.priorityMap = {
      'Low': 0,
      'Medium': 1,
      'High': 2
    };
  }

  addTask(formData) {
    this.tasks.push(new Task(formData));
  }

  removeTask(ind) {
    this.tasks.splice(ind, 1);
  }

  getTask(ind) {
    return this.tasks[ind];
  }

  updateTask(formData, ind) {
    const task = this.getTask(ind);
    task.update(formData);
  }

  sortTasks() {
    this.tasks = this.tasks.sort((a, b) => {
      if (this.priorityMap[a.priority] < this.priorityMap[b.priority]) return 1;
      if (this.priorityMap[a.priority] > this.priorityMap[b.priority]) return -1;
      if (this.priorityMap[a.priority] === this.priorityMap[b.priority]) {
        return a.deadline > b.deadline;
      }
    });
  }

  render() {
    this.sortTasks();
    this.el.innerHTML = '';
    for (let i = 0; i < this.tasks.length; i++) {
      const task = `<li class="task" data-index="${i}">${this.tasks[i].render()}</li>`;
      this.el.insertAdjacentHTML('beforeend', task);
    }
  }
}

// export default TasksList;
