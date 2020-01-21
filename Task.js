class Task {
  constructor({ name, description, priority, deadline }) {
    this.name = name;
    this.description = description;
    this.priority = priority;
    this.deadline = deadline;
  }

  update({ name, description, priority, deadline }) {
    this.name = name;
    this.description = description;
    this.priority = priority;
    this.deadline = deadline;
  }

  render() {
    const deadline = !!this.deadline ? `Deadline: ${this.deadline}`: '';

    return (
      `<h3>${this.name}</h3>
      <div>
        <span class="priority${this.priority}">${this.priority}</span>
        ${deadline}
      </div>
      <p>${this.description}</p>
      <div class="taskActions">
        <span class="edit">Edit</span>
        |
        <span class="delete">Delete</span>
      </div>`
    );
  }
}

// export default Task;
