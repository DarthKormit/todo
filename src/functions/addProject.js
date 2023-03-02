import { Project } from "../classes/project";
import { renameProjectModal } from "./projectCard";
import { refreshProjectLayout, unserialize } from "./utilityFunctions";
import displayProjectWithTasks from "..";

function createAddProjectButton() {
  let plusIcon = document.createElement("i");
  plusIcon.className = "fa fa-plus";
  let addProjectButton = document.createElement("button");
  addProjectButton.id = "add-project";
  addProjectButton.appendChild(plusIcon);
  addProjectButton.innerHTML = "Add Project";
  document.getElementById("add-project-div").appendChild(addProjectButton);
  addProjectButton.addEventListener("click", addProjectButtonListener);
}

function addProjectButtonListener() {
  console.log("Test");
  createProjectModal();
  document.getElementById("modal-title").innerHTML = "Add Project";
  document.getElementById("id01").style.display = "block";
}

function createProjectModal() {
  console.log("click");
  let taskForm = renameProjectModal();
  document.getElementById("title").innerHTML = "";
  taskForm.addEventListener("submit", (e) => {
    createProjectListener(e);
    refreshProjectLayout();
    displayProjectWithTasks();
    document.getElementById("id01").remove();
  });
}

function createProjectListener(e) {
  e.preventDefault();
  let arrayOfProjects = JSON.parse(localStorage.getItem("projects"));
  const formData = new FormData(e.target);
  const obj = Object.fromEntries(formData);
  const newProject = new Project(obj.name);
  console.log(JSON.parse(JSON.stringify(arrayOfProjects)));
  arrayOfProjects.forEach((element, index) => {
    arrayOfProjects[index] = unserialize(element, Project);
  });
  arrayOfProjects.push(newProject);
  console.log(JSON.parse(JSON.stringify(arrayOfProjects)));
  localStorage.setItem("projects", JSON.stringify(arrayOfProjects));
}

export { createProjectModal, createAddProjectButton };
