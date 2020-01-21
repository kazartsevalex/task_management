// import Input from './Input';

class TaskForm {
  constructor(el, tasksList) {
    this.el = el;
    this.tasksList = tasksList;
    this.inputs = [];
    this.formElements = {
      name: {
        type: 'text',
        placeholder: 'Task Name',
        required: true
      },
      description: {
        type: 'textarea',
        placeholder: 'Task Description',
        required: true
      },
      priority: {
        type: 'select',
        options: [{ value: "", text: "Priority" },
                  { value: "High", text: "High" },
                  { value: "Medium", text: "Medium" },
                  { value: "Low", text: "Low" }],
        required: true
      },
      deadline: {
        type: 'date'
      }
    };
  }

  assignEvents() {
    this.form = document.querySelector('#create_task_form');
    this.form.addEventListener('submit', this.onFormSubmit);
  }

  onFormSubmit = (e) => {
    e.preventDefault();

    const formData = {};
    for (let input of this.form.elements) {
      if (input.tagName.toLowerCase() !== 'button') {
        formData[input.name] = input.value;
      }
    }

    if (this.form.dataset.edit) {
      const ind = parseInt(this.form.dataset.index);
      this.tasksList.updateTask(formData, ind);
    } else {
      this.tasksList.addTask(formData);
    }

    this.cleanForm();
    this.tasksList.render();
  }

  setFormFieldsFromTask(task, ind) {
    this.form.dataset['edit'] = true;
    this.form.dataset['index'] = ind;

    for (let input of this.form.elements) {
      if (input.tagName.toLowerCase() !== 'button') {
        input.value = task[input.name];
      }
    }
  }

  cleanForm() {
    delete this.form.dataset.index;
    delete this.form.dataset.edit;

    for (let input of this.form.elements) {
      if (input.tagName.toLowerCase() !== 'button') {
        input.value = null;
      }
    }
  }

  setInputs() {
    for (let key in this.formElements) {
      this.inputs.push(new Input(key, this.formElements[key]));
    }
  }

  render() {
    this.setInputs();
    const inputs = this.inputs.map(input => input.render());
    const taskForm = (
      `<form id="create_task_form">
        ${inputs.join('')}
        <button>Save</button>
      </form>`
    );
    this.el.insertAdjacentHTML('beforeend', taskForm);
    this.assignEvents();
  }
}

// export default TaskForm;
