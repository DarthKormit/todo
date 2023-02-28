import  { addTaskModal, createTaskCardModal, editTaskModal } from "./taskModal";

function dropdownHideAll() {
  let dropdowns = document.getElementsByClassName("dropdown-content");
  Array.from(dropdowns).forEach((element) => {
    element.classList.remove("dropdown-content-block");
  });
}
window.onclick = function (event) {
  if (!event.target.matches(".project-dropdown-menu")) {
    dropdownHideAll();
  }
};

function myFunction(dropdownContent) {
  dropdownHideAll();
  let xStyle = getComputedStyle(dropdownContent);
  let x = dropdownContent;
  console.log(xStyle.display);
  if (xStyle.display === "block") {
    x.classList.remove("dropdown-content-block");
  } else {
    x.classList.add("dropdown-content-block");
  }
  console.log(xStyle.display);
}

function displayAddTaskCardModal(addIndex) {
  addTaskModal(addIndex);
  document.getElementById("modal-title").innerHTML = "Add Task";
  document.getElementById("id01").style.display = "block";
}

function taskCardDisplayModal(name, desc, sDate, dDate, prio, completed, arrayIndex, taskProjectIndex) {
  editTaskModal(name, desc, sDate, dDate, prio, completed, arrayIndex, taskProjectIndex);
  document.getElementById("id01").style.display = "block";
}

function createTaskCard(name, desc, sDate, dDate, prio, completed, taskIndex, projectIndex) {
  let arrayIndex = taskIndex;
  let taskProjectIndex = projectIndex;
  console.log(taskProjectIndex);
  let taskCard = document.createElement("div");
  taskCard.id = "task1";
  taskCard.className = "task";

  if (completed === "yes") {
    taskCard.classList.add("task-completed");
  }

  let taskCardPTag = document.createElement("p");
  taskCardPTag.id = "task-description";
  taskCardPTag.className = "task-description";
  taskCardPTag.innerHTML = name;

  taskCard.appendChild(taskCardPTag);

  taskCard.addEventListener("click", () => {
    console.log("Index: " + arrayIndex);
    taskCardDisplayModal(name, desc, sDate, dDate, prio, completed, arrayIndex, taskProjectIndex);
  });

  return taskCard;
}

function createProjectDropdown() {
  let projectCardDropdown = document.createElement("div");
  projectCardDropdown.className = "dropdown";

  let projectCardDropdownHousing = document.createElement("div");
  projectCardDropdownHousing.className = "button-housing";

  let projectCardDropdownButton = document.createElement("button");
  projectCardDropdownButton.id = "project-dropdown-menu";
  projectCardDropdownButton.className = "project-dropdown-menu";
  projectCardDropdownButton.innerHTML = "&middot;&middot;&middot;";

  let projectCardDropdownContent = document.createElement("div");
  projectCardDropdownContent.id = "dropdown-content";
  projectCardDropdownContent.className = "dropdown-content";

  let projectCardDropdownLinks = document.createElement("a");
  projectCardDropdownLinks.innerHTML = "Link 1";

  projectCardDropdownContent.appendChild(projectCardDropdownLinks);
  projectCardDropdownHousing.appendChild(projectCardDropdownButton);

  projectCardDropdown.appendChild(projectCardDropdownContent);
  projectCardDropdown.appendChild(projectCardDropdownHousing);

  projectCardDropdownButton.addEventListener("click", () =>
    myFunction(projectCardDropdownContent)
  );

  return projectCardDropdown;
}

function createProjectCard(projectTitle, projectIndex) {
  let projectCard = document.createElement("div");
  projectCard.className = "project-container";

  let projectCardHeader = document.createElement("div");
  projectCardHeader.className = "project-header";

  let projectCardTitle = document.createElement("p");
  projectCardTitle.id = "project-title";
  projectCardTitle.className = "project-title";
  projectCardTitle.innerHTML = projectTitle;

  let projectCardAddButton = document.createElement("button");
  projectCardAddButton.className = "circular-add-button";
  projectCardAddButton.innerHTML = "+";
  projectCardAddButton.addEventListener("click", () => {
    displayAddTaskCardModal(projectIndex);
  });

  let projectTaskContainer = document.createElement("div");
  projectTaskContainer.className = "project";
  projectTaskContainer.id = "project1";

  projectCardHeader.appendChild(projectCardTitle);
  projectCardHeader.appendChild(createProjectDropdown());
  projectCardHeader.appendChild(projectCardAddButton);
  projectCard.appendChild(projectCardHeader);

  //create function to iterate through corresponding tasks for project
  projectTaskContainer.appendChild(
    createTaskCard(
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumlaborum facere voluptates voluptate officia error ab ipsum indistinctio dolorem omnis illum libero laboriosam facilis, quivoluptatem eligendi pariatur ipsam"
    )
  );
  projectTaskContainer.appendChild(createTaskCard("Test"));
  projectTaskContainer.appendChild(createTaskCard("Test"));
  projectTaskContainer.appendChild(createTaskCard("Test"));
  projectTaskContainer.appendChild(
    createTaskCard(
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumlaborum facere voluptates voluptate officia error ab ipsum indistinctio dolorem omnis illum libero laboriosam facilis, quivoluptatem eligendi pariatur ipsam"
    )
  );
  projectTaskContainer.appendChild(createTaskCard("Test"));
  projectTaskContainer.appendChild(createTaskCard("Test"));
  projectTaskContainer.appendChild(createTaskCard("34543535345353453453"));
  projectCard.appendChild(projectTaskContainer);

  return projectCard;
}

export { createProjectCard, createTaskCard };
