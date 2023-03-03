import { Project } from "../classes/project";
import { createProjectCard, createTaskCard } from "./projectCard";

function serialize(obj) {
  var str = JSON.stringify(obj);
  return str;
}

function unserialize(str, theClass) {
  var instance = new theClass();
  var serializedObject = str;
  Object.assign(instance, serializedObject);
  return instance;
}

function refreshProjectLayout() {
  let projectLayout = document.getElementById("project-layout");
  projectLayout.replaceChildren();
}

function createInitialLocalStorage() {
  if (localStorage.getItem("projects") === null) {
    let arrayOfDisplayProjects = [];
    localStorage.setItem("projects", arrayOfDisplayProjects);
    let initialProject = new Project("New Project");
    arrayOfDisplayProjects.push(initialProject);
    localStorage.setItem("projects", JSON.stringify(arrayOfDisplayProjects));
  }
}

function displayProjectWithTasks() {
  createInitialLocalStorage();
  const projectLayout = document.getElementById("project-layout");
  let arrayOfDisplayProjects = JSON.parse(localStorage.getItem("projects"));
  arrayOfDisplayProjects.forEach((element, index) => {
    let projectIndex = index;
    let newProjectCard = createProjectCard(element.name, projectIndex);
    projectLayout.appendChild(newProjectCard);
    element.tasks.forEach((element, index) => {
      newProjectCard.childNodes[1].appendChild(
        createTaskCard(
          element.name,
          element.description,
          element.startDate,
          element.dueDate,
          element.priority,
          element.completed,
          index,
          projectIndex
        )
      );
    });
  });
}

export {
  serialize,
  unserialize,
  refreshProjectLayout,
  displayProjectWithTasks,
};
