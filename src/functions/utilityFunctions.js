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

function displayProjectWithTasks() {
  const projectLayout = document.getElementById("project-layout");
  let arrayOfDisplayProjects = JSON.parse(localStorage.getItem("projects"));
  arrayOfDisplayProjects.forEach((element, index) => {
    let projectIndex = index;
    console.log(projectIndex);
    let newProjectCard = createProjectCard(element.name, projectIndex);
    projectLayout.appendChild(newProjectCard);
    element.tasks.forEach((element, index) => {
      console.log(element.name);
      console.log(index);
      console.log(projectIndex);
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
