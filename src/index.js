import "./styles/main.scss";
import unga from "./assets/unga.jpg";
import {
  createProjectCard,
  createTaskCard,
} from "./functions/projectCard";
import { Task, Project } from "./classes/project";

const projectLayout = document.getElementById("project-layout");
const addProjectButton = document.getElementById("add-project");

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

addProjectButton.addEventListener("click", () => {
  projectLayout.appendChild(createProjectCard("Tester"));
});

// dropdownbutton.addEventListener("click", myFunction);

// window.onclick = function (event) {
//   if (!event.target.matches(".project-dropdown-menu")) {
//     var dropdowns = document.getElementsByClassName("dropdown-content");
//     var i;
//     for (i = 0; i < dropdowns.length; i++) {
//       var openDropdown = dropdowns[i];
//       if (openDropdown.classList.contains("show")) {
//         openDropdown.classList.remove("show");
//       }
//     }
//   }
// };

projectLayout.appendChild(createProjectCard("Tester"));
// createTaskCardModal();
let task2 = new Task(
  "Create a new way to pump water out of the tank in the garden",
  "This will require a multitude of equipment and resourses to complete",
  "2023-02-18",
  "2023-02-25",
  "no",
  "low"
);

let task3 = new Task(
  "Create a new way to pump water into the tank in the garden",
  "This will require a multitude of equipment and resourses to complete",
  "2023-02-18",
  "2023-02-25",
  "yes",
  "medium"
);

let projectTest = new Project(
  "Project 1",
  "This is the first test project",
  "2023-02-18",
  "2023-02-23",
  "no"
);

let task4 = new Task(
  "Create a new way to pump water out of the tank in the garden",
  "This will require a multitude of equipment and resourses to complete",
  "2023-02-18",
  "2023-02-25",
  "no",
  "low"
);

let task5 = new Task(
  "Create a new way to pump water into the tank in the garden",
  "This will require a multitude of equipment and resourses to complete",
  "2023-02-18",
  "2023-02-25",
  "yes",
  "medium"
);

let projectTest2 = new Project(
  "Project 2",
  "This is the first test project",
  "2023-02-18",
  "2023-02-23",
  "no"
);

// projectTest.addTask(task2);
// projectTest.addTask(task3);

// projectTest2.addTask(task4);
// projectTest2.addTask(task5);

// let arr = [task2, task3];

// console.log(arr[1].name);
// console.log(projectTest);
// console.log(projectTest.tasks.length);

// let arrayOfProjects = [];
// arrayOfProjects.push(projectTest, projectTest2);

// localStorage.setItem("projects", JSON.stringify(arrayOfProjects));

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
