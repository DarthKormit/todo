import "./styles/main.scss";
import {
  createProjectCard,
  createTaskCard,
} from "./functions/projectCard";
import { createAddProjectButton } from "./functions/addProject";

const projectLayout = document.getElementById("project-layout");

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

createAddProjectButton();

function displayProjectWithTasks() {
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
          projectIndex,
        )
      );
    });
  });
}

displayProjectWithTasks();

export default displayProjectWithTasks;
