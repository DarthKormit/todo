import { Project } from "../classes/project";
import { renameProjectModal } from "./projectCard";
import { refreshProjectLayout, unserialize } from "./utilityFunctions";
import displayProjectWithTasks from "..";

const addProjectButton = document.getElementById("add-project");

addProjectButton.addEventListener("click", () => {
  createProjectModal();
  document.getElementById("modal-title").innerHTML = "Add Project";
  document.getElementById("id01").style.display = "block";
});

function createProjectModal() {
  console.log("click");
  let taskForm = renameProjectModal();
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

export default createProjectModal;
