class Project {
  constructor(name, description, startDate, dueDate, completed) {
    this.name = name;
    this.description = description;
    this.startDate = startDate;
    this.dueDate = dueDate;
    this.completed = completed;
    this.tasks = [];
  }
  setName(name) {
    this.name = name;
  }
  setDescription(description) {
    this.description = description;
  }
  setStartDate(startDate) {
    this.startDate = startDate;
  }
  setDueDate(dueDate) {
    this.dueDate = dueDate;
  }
  setCompleted(completed) {
    this.completed = completed;
  }

  addTask(tasks) {
    this.tasks.push(tasks);
  }

  removeTask() {
    this.tasks.slice();
  }
}

class Task {
  constructor(name, description, startDate, dueDate, completed, priority) {
    this.name = name;
    this.description = description;
    this.startDate = startDate;
    this.dueDate = dueDate;
    this.priority = priority;
    this.completed = completed;
  }
  setName(name) {
    this.name = name;
  }
  setDescription(description) {
    this.description = description;
  }
  setStartDate(startDate) {
    this.startDate = startDate;
  }
  setDueDate(dueDate) {
    this.dueDate = dueDate;
  }
  setCompleted(completed) {
    this.completed = completed;
  }
  setPriority(priority) {
    this.priority = priority;
  }
}

export { Task, Project };
