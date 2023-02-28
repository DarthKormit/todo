import { addTaskModal, editProjectModal, editTaskModal } from "./modalListeners";

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

function dropdownDisplay(dropdownContent) {
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

function createProjectDropdown(projectIndex) {
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
  projectCardDropdownLinks.innerHTML = "Rename";
  projectCardDropdownLinks.addEventListener("click", () =>{
    editProjectModal(projectIndex);
    document.getElementById("id01").style.display = "block";
  });

  projectCardDropdownContent.appendChild(projectCardDropdownLinks);
  projectCardDropdownHousing.appendChild(projectCardDropdownButton);

  projectCardDropdown.appendChild(projectCardDropdownContent);
  projectCardDropdown.appendChild(projectCardDropdownHousing);

  projectCardDropdownButton.addEventListener("click", () =>
  dropdownDisplay(projectCardDropdownContent)
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
  projectCardHeader.appendChild(createProjectDropdown(projectIndex));
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

function renameProjectModal() {
  let modal = document.createElement("div");
  modal.id = "id01";
  modal.className = "modal";
  let modalcontent = document.createElement("div");
  modalcontent.className = "modal-content";
  let closebuttoncontainer = document.createElement("header");
  closebuttoncontainer.className = "w3-container w3-teal";
  let closebutton = document.createElement("span");
  closebutton.className = "close-x-button";
  closebutton.innerHTML = "&times;";
  closebutton.addEventListener("click", () => {
    modal.remove();
  });
  let modaltitleheader = document.createElement("h2");
  modaltitleheader.id = "modal-title";
  modaltitleheader.innerHTML = "Rename Project";

  let taskForm = document.createElement("form");
  taskForm.className = "task-form";
  let inputDiv = document.createElement("div");
  inputDiv.className = "form-input";

  let labelTitle = document.createElement("label");
  labelTitle.className = "form-input-label";
  labelTitle.setAttribute("for", "title");
  labelTitle.innerHTML = "Project Title:";
  let textareaTitle = document.createElement("textarea");
  textareaTitle.id = "title";
  textareaTitle.className = "input-form";
  textareaTitle.name = "name";
  textareaTitle.innerHTML = name;

  let buttonDiv = document.createElement("div");
  buttonDiv.className = "button-div";
  let submitButton = document.createElement("button");
  submitButton.type = "submit";
  submitButton.id = "task-form-submit";
  submitButton.className = "form-button";
  submitButton.innerHTML = "Submit";
  let cancelButton = document.createElement("button");
  cancelButton.id = "task-form-cancel";
  cancelButton.className = "form-button";
  cancelButton.innerHTML = "Cancel";
  cancelButton.addEventListener("click", () => {
    modal.remove();
  });

  modal.appendChild(modalcontent);
  modalcontent.appendChild(closebuttoncontainer);
  closebuttoncontainer.appendChild(closebutton);
  closebuttoncontainer.appendChild(modaltitleheader);
  modalcontent.appendChild(taskForm);
  taskForm.appendChild(inputDiv);
  inputDiv.appendChild(labelTitle);
  inputDiv.appendChild(textareaTitle);
  inputDiv.appendChild(buttonDiv);
  buttonDiv.appendChild(submitButton);
  buttonDiv.appendChild(cancelButton);

  document.getElementById("main-content-container").appendChild(modal);

  return taskForm;
}


export { createProjectCard, createTaskCard, renameProjectModal };
