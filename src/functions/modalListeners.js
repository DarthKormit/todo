import { createTaskCardModal } from "./taskModal";
import displayProjectWithTasks from "..";
import { Project, Task } from "../classes/project";
import { refreshProjectLayout, unserialize } from "./utilityFunctions";
import { renameProjectModal } from "./projectCard";

function addTaskListener(e, indexofProject) {
  e.preventDefault();
  let arrayOfProjects = JSON.parse(localStorage.getItem("projects"));
  const formData = new FormData(e.target);
  const obj = Object.fromEntries(formData);
  console.log(obj);
  const newTask = new Task(
    obj.name,
    obj.description,
    obj.startDate,
    obj.dueDate,
    obj.completed,
    obj.priority
  );
  console.log(newTask);
  console.log(JSON.parse(JSON.stringify(arrayOfProjects)));
  arrayOfProjects.forEach((element, index) => {
    arrayOfProjects[index] = unserialize(element, Project);
  });
  console.log(indexofProject);
  arrayOfProjects[indexofProject].addTask(newTask);
  console.log(JSON.parse(JSON.stringify(arrayOfProjects)));
  localStorage.setItem("projects", JSON.stringify(arrayOfProjects));
}

//replace task at index on project task array

function editTaskListener(e, indexofTask, projectIndex) {
  e.preventDefault();
  let arrayOfProjects = JSON.parse(localStorage.getItem("projects"));
  const formData = new FormData(e.target);
  const obj = Object.fromEntries(formData);
  const newTask = new Task(
    obj.name,
    obj.description,
    obj.startDate,
    obj.dueDate,
    obj.completed,
    obj.priority
  );
  console.log(newTask);
  console.log(JSON.parse(JSON.stringify(arrayOfProjects)));
  arrayOfProjects.forEach((element, index) => {
    arrayOfProjects[index] = unserialize(element, Project);
  });
  console.log(projectIndex);
  let accessedProject = arrayOfProjects[projectIndex];
  accessedProject.tasks[indexofTask] = newTask;
  console.log(JSON.parse(JSON.stringify(arrayOfProjects)));
  localStorage.setItem("projects", JSON.stringify(arrayOfProjects));
}

function deleteProjectModal(projectIndex) {
  let taskForm = renameProjectModal();
  document.getElementById("label-title").remove();
  document.getElementById("title").remove();
  document.getElementById("modal-title").innerHTML = "Are you sure you want to delete this Project?";
  document.getElementById("task-form-submit").innerHTML = "Yes"
  document.getElementById("task-form-submit").style.backgroundColor = "rgb(156, 60, 60)";
  document.getElementById("task-form-cancel").innerHTML = "No"
  document.getElementById("task-form-cancel").style.backgroundColor = "rgb(190, 190, 190)";
  taskForm.addEventListener("submit", (e) => {
    deleteProjectListener(e, projectIndex);
    refreshProjectLayout();
    displayProjectWithTasks();
    document.getElementById("id01").remove();
  });
}

function deleteProjectListener(e, indexofProject) {
  e.preventDefault();
  let arrayOfProjects = JSON.parse(localStorage.getItem("projects"));
  console.log(JSON.parse(JSON.stringify(arrayOfProjects)));
  arrayOfProjects.forEach((element, index) => {
    arrayOfProjects[index] = unserialize(element, Project);
  });
  arrayOfProjects.splice(indexofProject, 1);
  console.log(JSON.parse(JSON.stringify(arrayOfProjects)));
  localStorage.setItem("projects", JSON.stringify(arrayOfProjects));
}

function addTaskModal(projectIndex) {
  let taskForm = createTaskCardModal();
  document.getElementById("title").innerHTML = "";
  document.getElementById("description").innerHTML = "";
  taskForm.addEventListener("submit", (e) => {
    addTaskListener(e, projectIndex);
    refreshProjectLayout();
    displayProjectWithTasks();
    document.getElementById("id01").remove();
  });
}

function editTaskModal(
  name,
  desc,
  sDate,
  dDate,
  prio,
  completed,
  taskIndex,
  projectIndex
) {
  let taskForm = createTaskCardModal(
    name,
    desc,
    sDate,
    dDate,
    prio,
    completed,
    taskIndex,
    projectIndex
  );
  taskForm.addEventListener("submit", (e) => {
    editTaskListener(e, taskIndex, projectIndex);
    refreshProjectLayout();
    displayProjectWithTasks();
    document.getElementById("id01").remove();
  });
}

function deleteTaskModal(taskIndex, projectIndex) {
  let taskForm = renameProjectModal();
  document.getElementById("label-title").remove();
  document.getElementById("title").remove();
  document.getElementById("modal-title").innerHTML = "Are you sure you want to delete this Task?";
  document.getElementById("task-form-submit").innerHTML = "Yes"
  document.getElementById("task-form-submit").style.backgroundColor = "rgb(156, 60, 60)";
  document.getElementById("task-form-cancel").innerHTML = "No"
  document.getElementById("task-form-cancel").style.backgroundColor = "rgb(190, 190, 190)";
  taskForm.addEventListener("submit", (e) => {
    deleteTaskListener(e, taskIndex, projectIndex);
    refreshProjectLayout();
    displayProjectWithTasks();
    document.getElementById("id01").remove();
  });
}

function deleteTaskListener(e, indexofTask, projectIndex) {
  e.preventDefault();
  let arrayOfProjects = JSON.parse(localStorage.getItem("projects"));
  console.log(JSON.parse(JSON.stringify(arrayOfProjects)));
  arrayOfProjects.forEach((element, index) => {
    arrayOfProjects[index] = unserialize(element, Project);
  });
  arrayOfProjects[projectIndex].tasks.splice(indexofTask, 1);
  console.log(JSON.parse(JSON.stringify(arrayOfProjects)));
  localStorage.setItem("projects", JSON.stringify(arrayOfProjects));
}

function editProjectModal(projectIndex, projectTitle) {
  let taskForm = renameProjectModal(projectTitle);
  taskForm.addEventListener("submit", (e) => {
    editProjectListener(e, projectIndex);
    refreshProjectLayout();
    displayProjectWithTasks();
    document.getElementById("id01").remove();
  });
}

function editProjectListener(e, indexofProject) {
  e.preventDefault();
  let arrayOfProjects = JSON.parse(localStorage.getItem("projects"));
  const formData = new FormData(e.target);
  const obj = Object.fromEntries(formData);
  const newProjectName = obj.name;
  console.log(newProjectName);
  console.log(JSON.parse(JSON.stringify(arrayOfProjects)));
  arrayOfProjects.forEach((element, index) => {
    arrayOfProjects[index] = unserialize(element, Project);
  });
  console.log(indexofProject);
  let accessedProject = arrayOfProjects[indexofProject];
  accessedProject.name = newProjectName;
  console.log(JSON.parse(JSON.stringify(arrayOfProjects)));
  localStorage.setItem("projects", JSON.stringify(arrayOfProjects));
}

export { addTaskModal, editTaskModal, editProjectModal, deleteProjectModal, deleteTaskModal };
