/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/classes/project.js":
/*!********************************!*\
  !*** ./src/classes/project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Project": () => (/* binding */ Project),
/* harmony export */   "Task": () => (/* binding */ Task)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Project = /*#__PURE__*/function () {
  function Project(name, description, startDate, dueDate, completed) {
    _classCallCheck(this, Project);
    this.name = name;
    this.description = description;
    this.startDate = startDate;
    this.dueDate = dueDate;
    this.completed = completed;
    this.tasks = [];
  }
  _createClass(Project, [{
    key: "setName",
    value: function setName(name) {
      this.name = name;
    }
  }, {
    key: "setDescription",
    value: function setDescription(description) {
      this.description = description;
    }
  }, {
    key: "setStartDate",
    value: function setStartDate(startDate) {
      this.startDate = startDate;
    }
  }, {
    key: "setDueDate",
    value: function setDueDate(dueDate) {
      this.dueDate = dueDate;
    }
  }, {
    key: "setCompleted",
    value: function setCompleted(completed) {
      this.completed = completed;
    }
  }, {
    key: "addTask",
    value: function addTask(tasks) {
      this.tasks.push(tasks);
    }
  }, {
    key: "removeTask",
    value: function removeTask() {
      this.tasks.slice();
    }
  }, {
    key: "deserialize",
    value: function deserialize() {}
  }]);
  return Project;
}();
var Task = /*#__PURE__*/function () {
  function Task(name, description, startDate, dueDate, completed, priority) {
    _classCallCheck(this, Task);
    this.name = name;
    this.description = description;
    this.startDate = startDate;
    this.dueDate = dueDate;
    this.priority = priority;
    this.completed = completed;
  }
  _createClass(Task, [{
    key: "setName",
    value: function setName(name) {
      this.name = name;
    }
  }, {
    key: "setDescription",
    value: function setDescription(description) {
      this.description = description;
    }
  }, {
    key: "setStartDate",
    value: function setStartDate(startDate) {
      this.startDate = startDate;
    }
  }, {
    key: "setDueDate",
    value: function setDueDate(dueDate) {
      this.dueDate = dueDate;
    }
  }, {
    key: "setCompleted",
    value: function setCompleted(completed) {
      this.completed = completed;
    }
  }, {
    key: "setPriority",
    value: function setPriority(priority) {
      this.priority = priority;
    }
  }]);
  return Task;
}();
var newTask = new Task("Swapnil", "Dumb", "20/04/1999", "20/04/2070", false, "Medium");

newTask.setName("dumb");

/***/ }),

/***/ "./src/functions/modalListeners.js":
/*!*****************************************!*\
  !*** ./src/functions/modalListeners.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addTaskModal": () => (/* binding */ addTaskModal),
/* harmony export */   "editProjectModal": () => (/* binding */ editProjectModal),
/* harmony export */   "editTaskModal": () => (/* binding */ editTaskModal)
/* harmony export */ });
/* harmony import */ var _taskModal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskModal */ "./src/functions/taskModal.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! .. */ "./src/index.js");
/* harmony import */ var _classes_project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../classes/project */ "./src/classes/project.js");
/* harmony import */ var _utilityFunctions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utilityFunctions */ "./src/functions/utilityFunctions.js");
/* harmony import */ var _projectCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./projectCard */ "./src/functions/projectCard.js");





function addTaskListener(e, indexofProject) {
  e.preventDefault();
  var arrayOfProjects = JSON.parse(localStorage.getItem("projects"));
  var formData = new FormData(e.target);
  var obj = Object.fromEntries(formData);
  console.log(obj);
  var newTask = new _classes_project__WEBPACK_IMPORTED_MODULE_2__.Task(obj.name, obj.description, obj.startDate, obj.dueDate, obj.completed, obj.priority);
  console.log(newTask);
  console.log(JSON.parse(JSON.stringify(arrayOfProjects)));
  arrayOfProjects.forEach(function (element, index) {
    arrayOfProjects[index] = (0,_utilityFunctions__WEBPACK_IMPORTED_MODULE_3__.unserialize)(element, _classes_project__WEBPACK_IMPORTED_MODULE_2__.Project);
  });
  console.log(indexofProject);
  arrayOfProjects[indexofProject].addTask(newTask);
  console.log(JSON.parse(JSON.stringify(arrayOfProjects)));
  localStorage.setItem("projects", JSON.stringify(arrayOfProjects));
}

//replace task at index on project task array

function editTaskListener(e, indexofTask, projectIndex) {
  e.preventDefault();
  var arrayOfProjects = JSON.parse(localStorage.getItem("projects"));
  var formData = new FormData(e.target);
  var obj = Object.fromEntries(formData);
  var newTask = new _classes_project__WEBPACK_IMPORTED_MODULE_2__.Task(obj.name, obj.description, obj.startDate, obj.dueDate, obj.completed, obj.priority);
  console.log(newTask);
  console.log(JSON.parse(JSON.stringify(arrayOfProjects)));
  arrayOfProjects.forEach(function (element, index) {
    arrayOfProjects[index] = (0,_utilityFunctions__WEBPACK_IMPORTED_MODULE_3__.unserialize)(element, _classes_project__WEBPACK_IMPORTED_MODULE_2__.Project);
  });
  console.log(projectIndex);
  var accessedProject = arrayOfProjects[projectIndex];
  accessedProject.tasks[indexofTask] = newTask;
  console.log(JSON.parse(JSON.stringify(arrayOfProjects)));
  localStorage.setItem("projects", JSON.stringify(arrayOfProjects));
}
function addTaskModal(projectIndex) {
  var taskForm = (0,_taskModal__WEBPACK_IMPORTED_MODULE_0__.createTaskCardModal)();
  taskForm.addEventListener("submit", function (e) {
    addTaskListener(e, projectIndex);
    (0,_utilityFunctions__WEBPACK_IMPORTED_MODULE_3__.refreshProjectLayout)();
    (0,___WEBPACK_IMPORTED_MODULE_1__["default"])();
    document.getElementById("id01").remove();
  });
}
function editTaskModal(name, desc, sDate, dDate, prio, completed, taskIndex, projectIndex) {
  var taskForm = (0,_taskModal__WEBPACK_IMPORTED_MODULE_0__.createTaskCardModal)(name, desc, sDate, dDate, prio, completed, taskIndex, projectIndex);
  taskForm.addEventListener("submit", function (e) {
    editTaskListener(e, taskIndex, projectIndex);
    (0,_utilityFunctions__WEBPACK_IMPORTED_MODULE_3__.refreshProjectLayout)();
    (0,___WEBPACK_IMPORTED_MODULE_1__["default"])();
    document.getElementById("id01").remove();
  });
}
function editProjectModal(projectIndex) {
  var taskForm = (0,_projectCard__WEBPACK_IMPORTED_MODULE_4__.renameProjectModal)();
  taskForm.addEventListener("submit", function (e) {
    editProjectListener(e, projectIndex);
    (0,_utilityFunctions__WEBPACK_IMPORTED_MODULE_3__.refreshProjectLayout)();
    (0,___WEBPACK_IMPORTED_MODULE_1__["default"])();
    document.getElementById("id01").remove();
  });
}
function editProjectListener(e, indexofProject) {
  e.preventDefault();
  var arrayOfProjects = JSON.parse(localStorage.getItem("projects"));
  var formData = new FormData(e.target);
  var obj = Object.fromEntries(formData);
  var newProjectName = obj.name;
  console.log(newProjectName);
  console.log(JSON.parse(JSON.stringify(arrayOfProjects)));
  arrayOfProjects.forEach(function (element, index) {
    arrayOfProjects[index] = (0,_utilityFunctions__WEBPACK_IMPORTED_MODULE_3__.unserialize)(element, _classes_project__WEBPACK_IMPORTED_MODULE_2__.Project);
  });
  console.log(indexofProject);
  var accessedProject = arrayOfProjects[indexofProject];
  accessedProject.name = newProjectName;
  console.log(JSON.parse(JSON.stringify(arrayOfProjects)));
  localStorage.setItem("projects", JSON.stringify(arrayOfProjects));
}


/***/ }),

/***/ "./src/functions/projectCard.js":
/*!**************************************!*\
  !*** ./src/functions/projectCard.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createProjectCard": () => (/* binding */ createProjectCard),
/* harmony export */   "createTaskCard": () => (/* binding */ createTaskCard),
/* harmony export */   "renameProjectModal": () => (/* binding */ renameProjectModal)
/* harmony export */ });
/* harmony import */ var _modalListeners__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modalListeners */ "./src/functions/modalListeners.js");

function dropdownHideAll() {
  var dropdowns = document.getElementsByClassName("dropdown-content");
  Array.from(dropdowns).forEach(function (element) {
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
  var xStyle = getComputedStyle(dropdownContent);
  var x = dropdownContent;
  console.log(xStyle.display);
  if (xStyle.display === "block") {
    x.classList.remove("dropdown-content-block");
  } else {
    x.classList.add("dropdown-content-block");
  }
  console.log(xStyle.display);
}
function displayAddTaskCardModal(addIndex) {
  (0,_modalListeners__WEBPACK_IMPORTED_MODULE_0__.addTaskModal)(addIndex);
  document.getElementById("modal-title").innerHTML = "Add Task";
  document.getElementById("id01").style.display = "block";
}
function taskCardDisplayModal(name, desc, sDate, dDate, prio, completed, arrayIndex, taskProjectIndex) {
  (0,_modalListeners__WEBPACK_IMPORTED_MODULE_0__.editTaskModal)(name, desc, sDate, dDate, prio, completed, arrayIndex, taskProjectIndex);
  document.getElementById("id01").style.display = "block";
}
function createTaskCard(name, desc, sDate, dDate, prio, completed, taskIndex, projectIndex) {
  var arrayIndex = taskIndex;
  var taskProjectIndex = projectIndex;
  console.log(taskProjectIndex);
  var taskCard = document.createElement("div");
  taskCard.id = "task1";
  taskCard.className = "task";
  if (completed === "yes") {
    taskCard.classList.add("task-completed");
  }
  var taskCardPTag = document.createElement("p");
  taskCardPTag.id = "task-description";
  taskCardPTag.className = "task-description";
  taskCardPTag.innerHTML = name;
  taskCard.appendChild(taskCardPTag);
  taskCard.addEventListener("click", function () {
    console.log("Index: " + arrayIndex);
    taskCardDisplayModal(name, desc, sDate, dDate, prio, completed, arrayIndex, taskProjectIndex);
  });
  return taskCard;
}
function createProjectDropdown(projectIndex) {
  var projectCardDropdown = document.createElement("div");
  projectCardDropdown.className = "dropdown";
  var projectCardDropdownHousing = document.createElement("div");
  projectCardDropdownHousing.className = "button-housing";
  var projectCardDropdownButton = document.createElement("button");
  projectCardDropdownButton.id = "project-dropdown-menu";
  projectCardDropdownButton.className = "project-dropdown-menu";
  projectCardDropdownButton.innerHTML = "&middot;&middot;&middot;";
  var projectCardDropdownContent = document.createElement("div");
  projectCardDropdownContent.id = "dropdown-content";
  projectCardDropdownContent.className = "dropdown-content";
  var projectCardDropdownLinks = document.createElement("a");
  projectCardDropdownLinks.innerHTML = "Rename";
  projectCardDropdownLinks.addEventListener("click", function () {
    (0,_modalListeners__WEBPACK_IMPORTED_MODULE_0__.editProjectModal)(projectIndex);
    document.getElementById("id01").style.display = "block";
  });
  projectCardDropdownContent.appendChild(projectCardDropdownLinks);
  projectCardDropdownHousing.appendChild(projectCardDropdownButton);
  projectCardDropdown.appendChild(projectCardDropdownContent);
  projectCardDropdown.appendChild(projectCardDropdownHousing);
  projectCardDropdownButton.addEventListener("click", function () {
    return dropdownDisplay(projectCardDropdownContent);
  });
  return projectCardDropdown;
}
function createProjectCard(projectTitle, projectIndex) {
  var projectCard = document.createElement("div");
  projectCard.className = "project-container";
  var projectCardHeader = document.createElement("div");
  projectCardHeader.className = "project-header";
  var projectCardTitle = document.createElement("p");
  projectCardTitle.id = "project-title";
  projectCardTitle.className = "project-title";
  projectCardTitle.innerHTML = projectTitle;
  var projectCardAddButton = document.createElement("button");
  projectCardAddButton.className = "circular-add-button";
  projectCardAddButton.innerHTML = "+";
  projectCardAddButton.addEventListener("click", function () {
    displayAddTaskCardModal(projectIndex);
  });
  var projectTaskContainer = document.createElement("div");
  projectTaskContainer.className = "project";
  projectTaskContainer.id = "project1";
  projectCardHeader.appendChild(projectCardTitle);
  projectCardHeader.appendChild(createProjectDropdown(projectIndex));
  projectCardHeader.appendChild(projectCardAddButton);
  projectCard.appendChild(projectCardHeader);

  //create function to iterate through corresponding tasks for project
  projectTaskContainer.appendChild(createTaskCard("Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumlaborum facere voluptates voluptate officia error ab ipsum indistinctio dolorem omnis illum libero laboriosam facilis, quivoluptatem eligendi pariatur ipsam"));
  projectTaskContainer.appendChild(createTaskCard("Test"));
  projectTaskContainer.appendChild(createTaskCard("Test"));
  projectTaskContainer.appendChild(createTaskCard("Test"));
  projectTaskContainer.appendChild(createTaskCard("Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumlaborum facere voluptates voluptate officia error ab ipsum indistinctio dolorem omnis illum libero laboriosam facilis, quivoluptatem eligendi pariatur ipsam"));
  projectTaskContainer.appendChild(createTaskCard("Test"));
  projectTaskContainer.appendChild(createTaskCard("Test"));
  projectTaskContainer.appendChild(createTaskCard("34543535345353453453"));
  projectCard.appendChild(projectTaskContainer);
  return projectCard;
}
function renameProjectModal() {
  var modal = document.createElement("div");
  modal.id = "id01";
  modal.className = "modal";
  var modalcontent = document.createElement("div");
  modalcontent.className = "modal-content";
  var closebuttoncontainer = document.createElement("header");
  closebuttoncontainer.className = "w3-container w3-teal";
  var closebutton = document.createElement("span");
  closebutton.className = "close-x-button";
  closebutton.innerHTML = "&times;";
  closebutton.addEventListener("click", function () {
    modal.remove();
  });
  var modaltitleheader = document.createElement("h2");
  modaltitleheader.id = "modal-title";
  modaltitleheader.innerHTML = "Rename Project";
  var taskForm = document.createElement("form");
  taskForm.className = "task-form";
  var inputDiv = document.createElement("div");
  inputDiv.className = "form-input";
  var labelTitle = document.createElement("label");
  labelTitle.className = "form-input-label";
  labelTitle.setAttribute("for", "title");
  labelTitle.innerHTML = "Project Title:";
  var textareaTitle = document.createElement("textarea");
  textareaTitle.id = "title";
  textareaTitle.className = "input-form";
  textareaTitle.name = "name";
  textareaTitle.innerHTML = name;
  var buttonDiv = document.createElement("div");
  buttonDiv.className = "button-div";
  var submitButton = document.createElement("button");
  submitButton.type = "submit";
  submitButton.id = "task-form-submit";
  submitButton.className = "form-button";
  submitButton.innerHTML = "Submit";
  var cancelButton = document.createElement("button");
  cancelButton.id = "task-form-cancel";
  cancelButton.className = "form-button";
  cancelButton.innerHTML = "Cancel";
  cancelButton.addEventListener("click", function () {
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


/***/ }),

/***/ "./src/functions/taskModal.js":
/*!************************************!*\
  !*** ./src/functions/taskModal.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTaskCardModal": () => (/* binding */ createTaskCardModal)
/* harmony export */ });
function createTaskCardModal(name, desc, sDate, dDate, prio, completed, taskIndex, projectIndex) {
  console.log(name);
  console.log(desc);
  console.log(sDate);
  console.log(dDate);
  console.log(prio);
  console.log(completed);
  var modal = document.createElement("div");
  modal.id = "id01";
  modal.className = "modal";
  var modalcontent = document.createElement("div");
  modalcontent.className = "modal-content";
  var closebuttoncontainer = document.createElement("header");
  closebuttoncontainer.className = "w3-container w3-teal";
  var closebutton = document.createElement("span");
  closebutton.className = "close-x-button";
  closebutton.innerHTML = "&times;";
  closebutton.addEventListener("click", function () {
    modal.remove();
  });
  var modaltitleheader = document.createElement("h2");
  modaltitleheader.id = "modal-title";
  modaltitleheader.innerHTML = "Edit Task";
  var taskForm = document.createElement("form");
  taskForm.className = "task-form";
  var inputDiv = document.createElement("div");
  inputDiv.className = "form-input";
  var labelTitle = document.createElement("label");
  labelTitle.className = "form-input-label";
  labelTitle.setAttribute("for", "title");
  labelTitle.innerHTML = "Title:";
  var textareaTitle = document.createElement("textarea");
  textareaTitle.id = "title";
  textareaTitle.className = "input-form";
  textareaTitle.name = "name";
  textareaTitle.innerHTML = name;
  console.log(desc);
  var labelDescription = document.createElement("label");
  labelDescription.className = "form-input-label";
  labelDescription.setAttribute("for", "description");
  labelDescription.innerHTML = "Description:";
  var textareaDescription = document.createElement("textarea");
  textareaDescription.id = "description";
  textareaDescription.className = "input-form";
  textareaDescription.name = "description";
  textareaDescription.innerHTML = desc;
  var labelStartDate = document.createElement("label");
  labelStartDate.className = "form-input-label";
  labelStartDate.setAttribute("for", "start-date");
  labelStartDate.innerHTML = "Start Date:";
  var inputStartDate = document.createElement("input");
  inputStartDate.id = "start-date";
  inputStartDate.className = "input-form";
  inputStartDate.setAttribute("type", "date");
  inputStartDate.name = "startDate";
  inputStartDate.value = sDate;
  var labelDueDate = document.createElement("label");
  labelDueDate.className = "form-input-label";
  labelDueDate.setAttribute("for", "due-date");
  labelDueDate.innerHTML = "Due Date:";
  var inputDueDate = document.createElement("input");
  inputDueDate.id = "due-date";
  inputDueDate.className = "input-form";
  inputDueDate.setAttribute("type", "date");
  inputDueDate.name = "dueDate";
  inputDueDate.value = dDate;
  var labelPriority = document.createElement("label");
  labelPriority.className = "form-input-label";
  labelPriority.setAttribute("for", "priority");
  labelPriority.innerHTML = "Priority";
  var selectPriority = document.createElement("select");
  selectPriority.id = "priority";
  selectPriority.name = "priority";
  var optionPriorityNA = document.createElement("option");
  optionPriorityNA.setAttribute("value", "n/a");
  optionPriorityNA.innerHTML = "N/A";
  var optionPriorityHigh = document.createElement("option");
  optionPriorityHigh.setAttribute("value", "high");
  optionPriorityHigh.innerHTML = "High";
  var optionPriorityMedium = document.createElement("option");
  optionPriorityMedium.setAttribute("value", "medium");
  optionPriorityMedium.innerHTML = "Medium";
  var optionPriorityLow = document.createElement("option");
  optionPriorityLow.setAttribute("value", "low");
  optionPriorityLow.innerHTML = "Low";
  selectPriority.appendChild(optionPriorityNA);
  selectPriority.appendChild(optionPriorityHigh);
  selectPriority.appendChild(optionPriorityMedium);
  selectPriority.appendChild(optionPriorityLow);
  selectedOptionPriority(prio, optionPriorityNA, optionPriorityHigh, optionPriorityMedium, optionPriorityLow);
  var labelCompleted = document.createElement("label");
  labelCompleted.className = "form-input-label";
  labelCompleted.setAttribute("for", "completed");
  labelCompleted.innerHTML = "Completed";
  var selectCompleted = document.createElement("select");
  selectCompleted.id = "completed";
  selectCompleted.name = "completed";
  var optionCompletedYes = document.createElement("option");
  optionCompletedYes.setAttribute("value", "yes");
  optionCompletedYes.innerHTML = "Yes";
  var optionCompletedNo = document.createElement("option");
  optionCompletedNo.setAttribute("value", "no");
  optionCompletedNo.innerHTML = "No";
  selectCompleted.appendChild(optionCompletedNo);
  selectCompleted.appendChild(optionCompletedYes);
  selectedOptionPriority(completed, optionCompletedYes, optionCompletedNo);
  var buttonDiv = document.createElement("div");
  buttonDiv.className = "button-div";
  var submitButton = document.createElement("button");
  submitButton.type = "submit";
  submitButton.id = "task-form-submit";
  submitButton.className = "form-button";
  submitButton.innerHTML = "Submit";
  var cancelButton = document.createElement("button");
  cancelButton.id = "task-form-cancel";
  cancelButton.className = "form-button";
  cancelButton.innerHTML = "Cancel";
  cancelButton.addEventListener("click", function () {
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
  inputDiv.appendChild(labelDescription);
  inputDiv.appendChild(textareaDescription);
  inputDiv.appendChild(labelStartDate);
  inputDiv.appendChild(inputStartDate);
  inputDiv.appendChild(labelDueDate);
  inputDiv.appendChild(inputDueDate);
  inputDiv.appendChild(labelPriority);
  inputDiv.appendChild(selectPriority);
  inputDiv.appendChild(labelCompleted);
  inputDiv.appendChild(selectCompleted);
  inputDiv.appendChild(buttonDiv);
  buttonDiv.appendChild(submitButton);
  buttonDiv.appendChild(cancelButton);
  document.getElementById("main-content-container").appendChild(modal);
  console.log(taskForm.childNodes[0].childNodes[1]);
  return taskForm;
}
function selectedOptionPriority(storedOption, option1, option2, option3, option4) {
  console.log("Gone Through");
  console.log(storedOption);
  switch (storedOption) {
    case "n/a" || 0:
      option1.selected = "true";
      console.log("dumb");
      break;
    case "high" || 0:
      option2.selected = "selected";
      console.log("dumber");
      break;
    case "medium":
      option3.selected = "selected";
      break;
    case "low":
      option4.selected = "selected";
      break;
    case "yes":
      option1.selected = "selected";
      break;
    case "no":
      option2.selected = "selected";
      break;
    default:
      break;
  }
}


/***/ }),

/***/ "./src/functions/utilityFunctions.js":
/*!*******************************************!*\
  !*** ./src/functions/utilityFunctions.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "refreshProjectLayout": () => (/* binding */ refreshProjectLayout),
/* harmony export */   "serialize": () => (/* binding */ serialize),
/* harmony export */   "unserialize": () => (/* binding */ unserialize)
/* harmony export */ });
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
  var projectLayout = document.getElementById("project-layout");
  projectLayout.replaceChildren();
}

// function displayProjectWithTasks() {
//   let arrayOfDisplayProjects = JSON.parse(localStorage.getItem("projects"));
//   for (let xindex = 0; xindex < arrayOfDisplayProjects.length; xindex++) {
//     const projectElement = arrayOfDisplayProjects[xindex];
//     console.log(projectIndex);
//     let newProjectCard = createProjectCard(projectElement.name, projectIndex);
//     projectLayout.appendChild(newProjectCard);

//     for (let yindex = 0; yindex < projectElement.tasks.length; yindex++) {
//       const taskElement = projectElement.tasks[yindex];
//       console.log(taskElement.name);
//       console.log(yindex);
//       newProjectCard.childNodes[1].appendChild(
//         createTaskCard(
//           element.name,
//           element.description,
//           element.startDate,
//           element.dueDate,
//           element.priority,
//           element.completed,
//           index,
//           projectIndex
//         )
//       );
//     }
//   }
// }



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.scss */ "./src/styles/main.scss");
/* harmony import */ var _assets_unga_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/unga.jpg */ "./src/assets/unga.jpg");
/* harmony import */ var _functions_projectCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./functions/projectCard */ "./src/functions/projectCard.js");
/* harmony import */ var _classes_project__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./classes/project */ "./src/classes/project.js");




var projectLayout = document.getElementById("project-layout");
// const addProjectButton = document.getElementById("add-project");

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// addProjectButton.addEventListener("click", () => {
//   projectLayout.appendChild(createProjectCard("Tester"));
// });

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

projectLayout.appendChild((0,_functions_projectCard__WEBPACK_IMPORTED_MODULE_2__.createProjectCard)("Tester"));
// createTaskCardModal();
var task2 = new _classes_project__WEBPACK_IMPORTED_MODULE_3__.Task("Create a new way to pump water out of the tank in the garden", "This will require a multitude of equipment and resourses to complete", "2023-02-18", "2023-02-25", "no", "low");
var task3 = new _classes_project__WEBPACK_IMPORTED_MODULE_3__.Task("Create a new way to pump water into the tank in the garden", "This will require a multitude of equipment and resourses to complete", "2023-02-18", "2023-02-25", "yes", "medium");
var projectTest = new _classes_project__WEBPACK_IMPORTED_MODULE_3__.Project("Project 1", "This is the first test project", "2023-02-18", "2023-02-23", "no");
var task4 = new _classes_project__WEBPACK_IMPORTED_MODULE_3__.Task("Create a new way to pump water out of the tank in the garden", "This will require a multitude of equipment and resourses to complete", "2023-02-18", "2023-02-25", "no", "low");
var task5 = new _classes_project__WEBPACK_IMPORTED_MODULE_3__.Task("Create a new way to pump water into the tank in the garden", "This will require a multitude of equipment and resourses to complete", "2023-02-18", "2023-02-25", "yes", "medium");
var projectTest2 = new _classes_project__WEBPACK_IMPORTED_MODULE_3__.Project("Project 2", "This is the first test project", "2023-02-18", "2023-02-23", "no");

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
  var arrayOfDisplayProjects = JSON.parse(localStorage.getItem("projects"));
  arrayOfDisplayProjects.forEach(function (element, index) {
    var projectIndex = index;
    console.log(projectIndex);
    var newProjectCard = (0,_functions_projectCard__WEBPACK_IMPORTED_MODULE_2__.createProjectCard)(element.name, projectIndex);
    projectLayout.appendChild(newProjectCard);
    element.tasks.forEach(function (element, index) {
      console.log(element.name);
      console.log(index);
      console.log(projectIndex);
      newProjectCard.childNodes[1].appendChild((0,_functions_projectCard__WEBPACK_IMPORTED_MODULE_2__.createTaskCard)(element.name, element.description, element.startDate, element.dueDate, element.priority, element.completed, index, projectIndex));
    });
  });
}
displayProjectWithTasks();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayProjectWithTasks);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/background.jpg */ "./src/assets/background.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  box-sizing: border-box;\n}\n\nbody {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  background-size: cover;\n  font-family: \"Roboto\", sans-serif;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 100vh;\n  overflow: auto;\n  overflow-y: hidden;\n  margin: 0;\n  padding-top: 20px;\n}\n\n.container {\n  background-color: #f4f4f4;\n  border-radius: 10px;\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1), 0 6px 6px rgba(0, 0, 0, 0.1);\n  padding: 50px 20px;\n  text-align: center;\n  max-width: 100%;\n  width: 800px;\n}\n\nh3 {\n  margin: 0;\n  opacity: 0.5;\n  letter-spacing: 2px;\n}\n\nimg {\n  width: 100px;\n  margin-bottom: 20px;\n}\n\n.joke {\n  font-size: 30px;\n  letter-spacing: 1px;\n  line-height: 40px;\n  margin: 50px auto;\n  max-width: 600px;\n}\n\n.btn {\n  background-color: #2fa8cc;\n  color: #f4f4f4;\n  border: 0;\n  border-radius: 10px;\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1), 0 6px 6px rgba(0, 0, 0, 0.1);\n  padding: 14px 40px;\n  font-size: 16px;\n  cursor: pointer;\n}\n.btn:active {\n  transform: scale(0.98);\n}\n.btn:focus {\n  outline: 0;\n}\n\nheader {\n  font-size: larger;\n  text-align: center;\n}\n\n.project-layout {\n  padding: 1rem;\n  max-height: 100%;\n  height: 100%;\n  max-width: 100vw;\n  width: 100vw;\n  display: grid;\n  row-gap: 5.5rem;\n  column-gap: 1rem;\n  position: relative;\n  grid-template-columns: repeat(auto-fill, 300px);\n  grid-auto-flow: column;\n  overflow-x: auto;\n  overflow-y: hidden;\n}\n\n.project-container {\n  overflow-y: hidden;\n  overflow-x: hidden;\n  background-color: rgba(168, 168, 168, 0.7176470588);\n  height: 100%;\n  width: 300px;\n  border-radius: 5px;\n}\n\n.project {\n  overflow-y: scroll;\n  display: grid;\n  width: 90% px;\n  height: 92%;\n  padding: 1rem;\n  row-gap: 1rem;\n}\n\n.task {\n  background-color: gray;\n  padding: 2px;\n}\n\n.task-completed {\n  background-color: #468b48;\n}\n\n.task:hover {\n  background-color: rgb(145, 145, 145);\n}\n\n.task:active {\n  background-color: rgb(172, 172, 172);\n}\n\n.circular-add-button {\n  border: none;\n  overflow: hidden;\n  text-decoration: none;\n  color: inherit;\n  background-color: transparent;\n  text-align: center;\n  cursor: pointer;\n  white-space: nowrap;\n  float: right;\n  font-size: 24px;\n  width: 3rem;\n  margin-left: auto;\n}\n\n.circular-add-button:hover {\n  background-color: gray;\n}\n\n.circular-add-button:active {\n  background-color: rgb(223, 223, 223);\n}\n\n.project-title {\n  display: flex;\n  background: transparent;\n  border: none;\n  box-shadow: none;\n  font-size: larger;\n  vertical-align: middle;\n  text-align: center;\n  margin: auto;\n  width: 100%;\n  font-family: \"Roboto\", sans-serif;\n  box-sizing: border-box;\n  justify-content: center;\n}\n\n.project-title:focus {\n  cursor: text;\n}\n\n.project-header {\n  display: flex;\n  justify-content: center;\n  align-content: center;\n  background-color: rgba(168, 168, 168, 0.8823529412);\n  height: 8%;\n  padding: 10px;\n}\n\n.button-housing {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  vertical-align: middle;\n}\n\n.project-dropdown-menu {\n  display: inline-flex;\n  justify-content: center;\n  vertical-align: middle;\n  font-size: larger;\n  background-color: transparent;\n  border: none;\n  align-items: center;\n  padding: 0;\n  line-height: 20px;\n  height: 40px;\n  width: 40px;\n}\n\n.project-dropdown-menu:hover {\n  background-color: gray;\n}\n\n.project-dropdown-menu:active {\n  background-color: rgb(153, 153, 153);\n}\n\n.project-dropdown-menu:focus {\n  background-color: rgb(153, 153, 153);\n}\n\n.dropdown {\n  position: relative;\n  display: flex;\n}\n\n.dropdown-content {\n  display: none;\n  position: absolute;\n  top: 65px;\n  background-color: #f9f9f9;\n  min-width: 160px;\n  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\n  z-index: 1;\n  cursor: pointer;\n}\n\n.dropdown-content-block {\n  display: block;\n}\n\n.dropdown-content a {\n  color: black;\n  padding: 12px 16px;\n  text-decoration: none;\n  display: block;\n}\n\n.dropdown-content a:hover {\n  background-color: #f1f1f1;\n}\n\n.dropdown:hover .dropbtn {\n  background-color: #3e8e41;\n}\n\n.show {\n  display: block;\n}\n\n.task-description {\n  -webkit-user-select: none;\n  /* Safari */\n  -moz-user-select: none;\n  /* Firefox */\n  -ms-user-select: none;\n  /* IE10+/Edge */\n  user-select: none;\n  /* Standard */\n}\n\n.modal {\n  z-index: 3;\n  display: none;\n  padding-top: 100px;\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: rgb(0, 0, 0);\n  background-color: rgba(0, 0, 0, 0.4);\n}\n\n.modal-content {\n  margin: auto;\n  background-color: rgb(179, 179, 179);\n  position: relative;\n  justify-content: center;\n  flex-wrap: nowrap;\n  padding: 0;\n  outline: 0;\n  width: 600px;\n  padding: 20px;\n}\n\n.close-x-button {\n  display: flex;\n  justify-content: right;\n  margin-right: 4px;\n  cursor: pointer;\n}\n\n.task-form {\n  width: 100%;\n  justify-content: center;\n}\n\n.form-input {\n  width: 100%;\n  justify-content: center;\n  align-items: center;\n}\n\n.button-div {\n  display: flex;\n  position: relative;\n  justify-content: center;\n  align-items: center;\n  padding: 5px;\n  padding-top: 10px;\n}\n\n.form-button {\n  border: none;\n  color: white;\n  padding: 15px 32px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 16px;\n  margin-right: 10px;\n}\n\n#task-form-submit {\n  background-color: #3e8e41;\n}\n\n#task-form-cancel {\n  background-color: rgb(156, 60, 60);\n}\n\n.form-input-label {\n  padding-right: 5px;\n}\n\nselect {\n  display: flex;\n  justify-content: center;\n  margin: auto;\n  margin-bottom: 10px;\n  align-self: center;\n  resize: none;\n  width: 100%;\n  padding: 5px;\n}\n\n.input-form {\n  display: flex;\n  justify-content: center;\n  margin: auto;\n  margin-bottom: 10px;\n  align-self: center;\n  resize: none;\n  width: 100%;\n  padding: 5px;\n}", "",{"version":3,"sources":["webpack://./src/styles/main.scss"],"names":[],"mappings":"AAMA;EACE,sBAAA;AAJF;;AAOA;EAEE,yDAAA;EACA,4BAAA;EACA,4BAAA;EACA,sBAAA;EACA,iCAAA;EACA,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,uBAAA;EACA,aAAA;EACA,cAAA;EACA,kBAAA;EACA,SAAA;EACA,iBAAA;AALF;;AAQA;EACE,yBA1BgB;EA2BhB,mBAAA;EACA,wEA3BW;EA4BX,kBAAA;EACA,kBAAA;EACA,eAAA;EACA,YAAA;AALF;;AAQA;EACE,SAAA;EACA,YAAA;EACA,mBAAA;AALF;;AAQA;EACE,YAAA;EACA,mBAAA;AALF;;AAQA;EACE,eAAA;EACA,mBAAA;EACA,iBAAA;EACA,iBAAA;EACA,gBAAA;AALF;;AAQA;EACE,yBAxDc;EAyDd,cAxDgB;EAyDhB,SAAA;EACA,mBAAA;EACA,uEAAA;EACA,kBAAA;EACA,eAAA;EACA,eAAA;AALF;AAOE;EACE,sBAAA;AALJ;AAQE;EACE,UAAA;AANJ;;AAUA;EACE,iBAAA;EACA,kBAAA;AAPF;;AAUA;EAEE,aAAA;EACA,gBAAA;EACA,YAAA;EACA,gBAAA;EACA,YAAA;EACA,aAAA;EACA,eAAA;EACA,gBAAA;EACA,kBAAA;EACA,+CAAA;EACA,sBAAA;EACA,gBAAA;EACA,kBAAA;AARF;;AAWA;EACE,kBAAA;EACA,kBAAA;EACA,mDAAA;EACA,YAAA;EACA,YAAA;EACA,kBAAA;AARF;;AAWA;EACE,kBAAA;EACA,aAAA;EAEA,aAAA;EACA,WAAA;EACA,aAAA;EAEA,aAAA;AAVF;;AAcA;EACE,sBAAA;EACA,YAAA;AAXF;;AAcA;EACE,yBAAA;AAXF;;AAcA;EACE,oCAAA;AAXF;;AAcA;EACE,oCAAA;AAXF;;AAcA;EACE,YAAA;EACA,gBAAA;EACA,qBAAA;EACA,cAAA;EACA,6BAAA;EACA,kBAAA;EACA,eAAA;EACA,mBAAA;EACA,YAAA;EACA,eAAA;EACA,WAAA;EACA,iBAAA;AAXF;;AAcA;EACE,sBAAA;AAXF;;AAcA;EACE,oCAAA;AAXF;;AAoBA;EACE,aAAA;EACA,uBAAA;EACA,YAAA;EACA,gBAAA;EACA,iBAAA;EACA,sBAAA;EACA,kBAAA;EACA,YAAA;EACA,WAAA;EACA,iCAAA;EACA,sBAAA;EACA,uBAAA;AAjBF;;AAoBA;EACE,YAAA;AAjBF;;AAoBA;EACE,aAAA;EACA,uBAAA;EACA,qBAAA;EACA,mDAAA;EACA,UAAA;EACA,aAAA;AAjBF;;AAoBA;EACE,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,sBAAA;AAjBF;;AAoBA;EACE,oBAAA;EACA,uBAAA;EACA,sBAAA;EACA,iBAAA;EACA,6BAAA;EACA,YAAA;EACA,mBAAA;EACA,UAAA;EACA,iBAAA;EACA,YAAA;EACA,WAAA;AAjBF;;AAoBA;EACE,sBAAA;AAjBF;;AAoBA;EACE,oCAAA;AAjBF;;AAoBA;EACE,oCAAA;AAjBF;;AAoBA;EACE,kBAAA;EACA,aAAA;AAjBF;;AAoBA;EACE,aAAA;EACA,kBAAA;EACA,SAAA;EACA,yBAAA;EACA,gBAAA;EACA,+CAAA;EACA,UAAA;EACA,eAAA;AAjBF;;AAoBA;EACE,cAAA;AAjBF;;AAoBA;EACE,YAAA;EACA,kBAAA;EACA,qBAAA;EACA,cAAA;AAjBF;;AAoBA;EACE,yBAAA;AAjBF;;AAwBA;EACE,yBAAA;AArBF;;AAwBA;EACE,cAAA;AArBF;;AAwBA;EACE,yBAAA;EACA,WAAA;EACA,sBAAA;EACA,YAAA;EACA,qBAAA;EACA,eAAA;EACA,iBAAA;EACA,aAAA;AArBF;;AAwBA;EACE,UAAA;EACA,aAAA;EACA,kBAAA;EACA,eAAA;EACA,OAAA;EACA,MAAA;EACA,WAAA;EACA,YAAA;EACA,cAAA;EACA,8BAAA;EACA,oCAAA;AArBF;;AAwBA;EACE,YAAA;EACA,oCAAA;EACA,kBAAA;EACA,uBAAA;EACA,iBAAA;EACA,UAAA;EACA,UAAA;EACA,YAAA;EACA,aAAA;AArBF;;AAwBA;EACE,aAAA;EACA,sBAAA;EACA,iBAAA;EACA,eAAA;AArBF;;AAwBA;EACE,WAAA;EACA,uBAAA;AArBF;;AAwBA;EACE,WAAA;EACA,uBAAA;EACA,mBAAA;AArBF;;AAwBA;EACE,aAAA;EACA,kBAAA;EACA,uBAAA;EACA,mBAAA;EACA,YAAA;EACA,iBAAA;AArBF;;AAwBA;EACE,YAAA;EACA,YAAA;EACA,kBAAA;EACA,kBAAA;EACA,qBAAA;EACA,qBAAA;EACA,eAAA;EACA,kBAAA;AArBF;;AAwBA;EACE,yBAAA;AArBF;;AAwBA;EACE,kCAAA;AArBF;;AAwBA;EACE,kBAAA;AArBF;;AAwBA;EACE,aAAA;EACA,uBAAA;EACA,YAAA;EACA,mBAAA;EACA,kBAAA;EACA,YAAA;EACA,WAAA;EACA,YAAA;AArBF;;AAwBA;EACE,aAAA;EACA,uBAAA;EACA,YAAA;EACA,mBAAA;EACA,kBAAA;EACA,YAAA;EACA,WAAA;EACA,YAAA;AArBF","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap\");\r\n\r\n$primary-color: #2fa8cc;\r\n$secondary-color: #f4f4f4;\r\n$box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1), 0 6px 6px rgba(0, 0, 0, 0.1);\r\n\r\n* {\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  // background-color: $primary-color;\r\n  background-image: url(\"../assets/background.jpg\");\r\n  background-repeat: no-repeat;\r\n  background-attachment: fixed;\r\n  background-size: cover;\r\n  font-family: \"Roboto\", sans-serif;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  height: 100vh;\r\n  overflow: auto;\r\n  overflow-y: hidden;\r\n  margin: 0;\r\n  padding-top: 20px;\r\n}\r\n\r\n.container {\r\n  background-color: $secondary-color;\r\n  border-radius: 10px;\r\n  box-shadow: $box-shadow;\r\n  padding: 50px 20px;\r\n  text-align: center;\r\n  max-width: 100%;\r\n  width: 800px;\r\n}\r\n\r\nh3 {\r\n  margin: 0;\r\n  opacity: 0.5;\r\n  letter-spacing: 2px;\r\n}\r\n\r\nimg {\r\n  width: 100px;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.joke {\r\n  font-size: 30px;\r\n  letter-spacing: 1px;\r\n  line-height: 40px;\r\n  margin: 50px auto;\r\n  max-width: 600px;\r\n}\r\n\r\n.btn {\r\n  background-color: $primary-color;\r\n  color: $secondary-color;\r\n  border: 0;\r\n  border-radius: 10px;\r\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1), 0 6px 6px rgba(0, 0, 0, 0.1);\r\n  padding: 14px 40px;\r\n  font-size: 16px;\r\n  cursor: pointer;\r\n\r\n  &:active {\r\n    transform: scale(0.98);\r\n  }\r\n\r\n  &:focus {\r\n    outline: 0;\r\n  }\r\n}\r\n\r\nheader {\r\n  font-size: larger;\r\n  text-align: center;\r\n}\r\n\r\n.project-layout {\r\n  // background-color: rgb(201, 201, 201);\r\n  padding: 1rem;\r\n  max-height: 100%;\r\n  height: 100%;\r\n  max-width: 100vw;\r\n  width: 100vw;\r\n  display: grid;\r\n  row-gap: 5.5rem;\r\n  column-gap: 1rem;\r\n  position: relative;\r\n  grid-template-columns: repeat(auto-fill, 300px);\r\n  grid-auto-flow: column;\r\n  overflow-x: auto;\r\n  overflow-y: hidden;\r\n}\r\n\r\n.project-container {\r\n  overflow-y: hidden;\r\n  overflow-x: hidden;\r\n  background-color: #a8a8a8b7;\r\n  height: 100%;\r\n  width: 300px;\r\n  border-radius: 5px;\r\n}\r\n\r\n.project {\r\n  overflow-y: scroll;\r\n  display: grid;\r\n  // background-color: #a8a8a8b7;\r\n  width: 90%px;\r\n  height: 92%;\r\n  padding: 1rem;\r\n  // gap: 1rem;\r\n  row-gap: 1rem;\r\n  // grid-template-rows: 60px;\r\n}\r\n\r\n.task {\r\n  background-color: gray;\r\n  padding: 2px;\r\n}\r\n\r\n.task-completed{\r\n  background-color: #468b48;\r\n}\r\n\r\n.task:hover {\r\n  background-color: rgb(145, 145, 145);\r\n}\r\n\r\n.task:active {\r\n  background-color: rgb(172, 172, 172);\r\n}\r\n\r\n.circular-add-button {\r\n  border: none;\r\n  overflow: hidden;\r\n  text-decoration: none;\r\n  color: inherit;\r\n  background-color: transparent;\r\n  text-align: center;\r\n  cursor: pointer;\r\n  white-space: nowrap;\r\n  float: right;\r\n  font-size: 24px;\r\n  width: 3rem;\r\n  margin-left: auto;\r\n}\r\n\r\n.circular-add-button:hover {\r\n  background-color: gray;\r\n}\r\n\r\n.circular-add-button:active {\r\n  background-color: rgb(223, 223, 223);\r\n}\r\n\r\n// .project-title {\r\n//   display: flex;\r\n//   margin-left: auto;\r\n//   resize: none;\r\n// }\r\n\r\n.project-title {\r\n  display: flex;\r\n  background: transparent;\r\n  border: none;\r\n  box-shadow: none;\r\n  font-size: larger;\r\n  vertical-align: middle;\r\n  text-align: center;\r\n  margin: auto;\r\n  width: 100%;\r\n  font-family: \"Roboto\", sans-serif;\r\n  box-sizing: border-box;\r\n  justify-content: center;\r\n}\r\n\r\n.project-title:focus {\r\n  cursor: text;\r\n}\r\n\r\n.project-header {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-content: center;\r\n  background-color: #a8a8a8e1;\r\n  height: 8%;\r\n  padding: 10px;\r\n}\r\n\r\n.button-housing {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  vertical-align: middle;\r\n}\r\n\r\n.project-dropdown-menu {\r\n  display: inline-flex;\r\n  justify-content: center;\r\n  vertical-align: middle;\r\n  font-size: larger;\r\n  background-color: transparent;\r\n  border: none;\r\n  align-items: center;\r\n  padding: 0;\r\n  line-height: 20px;\r\n  height: 40px;\r\n  width: 40px;\r\n}\r\n\r\n.project-dropdown-menu:hover {\r\n  background-color: gray;\r\n}\r\n\r\n.project-dropdown-menu:active {\r\n  background-color: rgb(153, 153, 153);\r\n}\r\n\r\n.project-dropdown-menu:focus {\r\n  background-color: rgb(153, 153, 153);\r\n}\r\n\r\n.dropdown {\r\n  position: relative;\r\n  display: flex;\r\n}\r\n\r\n.dropdown-content {\r\n  display: none;\r\n  position: absolute;\r\n  top: 65px;\r\n  background-color: #f9f9f9;\r\n  min-width: 160px;\r\n  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\r\n  z-index: 1;\r\n  cursor: pointer;\r\n}\r\n\r\n.dropdown-content-block{\r\n  display: block;\r\n}\r\n\r\n.dropdown-content a {\r\n  color: black;\r\n  padding: 12px 16px;\r\n  text-decoration: none;\r\n  display: block;\r\n}\r\n\r\n.dropdown-content a:hover {\r\n  background-color: #f1f1f1;\r\n}\r\n\r\n// .dropdown:hover .dropdown-content {\r\n//   display: block;\r\n// }\r\n\r\n.dropdown:hover .dropbtn {\r\n  background-color: #3e8e41;\r\n}\r\n\r\n.show {\r\n  display: block;\r\n}\r\n\r\n.task-description {\r\n  -webkit-user-select: none;\r\n  /* Safari */\r\n  -moz-user-select: none;\r\n  /* Firefox */\r\n  -ms-user-select: none;\r\n  /* IE10+/Edge */\r\n  user-select: none;\r\n  /* Standard */\r\n}\r\n\r\n.modal {\r\n  z-index: 3;\r\n  display: none;\r\n  padding-top: 100px;\r\n  position: fixed;\r\n  left: 0;\r\n  top: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  overflow: auto;\r\n  background-color: rgb(0, 0, 0);\r\n  background-color: rgba(0, 0, 0, 0.4);\r\n}\r\n\r\n.modal-content {\r\n  margin: auto;\r\n  background-color: rgb(179, 179, 179);\r\n  position: relative;\r\n  justify-content: center;\r\n  flex-wrap: nowrap;\r\n  padding: 0;\r\n  outline: 0;\r\n  width: 600px;\r\n  padding: 20px;\r\n}\r\n\r\n.close-x-button{\r\n  display: flex;\r\n  justify-content: right;\r\n  margin-right: 4px;\r\n  cursor: pointer;\r\n}\r\n\r\n.task-form{\r\n  width: 100%;\r\n  justify-content: center;\r\n}\r\n\r\n.form-input{\r\n  width: 100%;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.button-div{\r\n  display: flex;\r\n  position: relative;\r\n  justify-content: center;\r\n  align-items: center;\r\n  padding: 5px;\r\n  padding-top: 10px;\r\n}\r\n\r\n.form-button{\r\n  border: none;\r\n  color: white;\r\n  padding: 15px 32px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  display: inline-block;\r\n  font-size: 16px;\r\n  margin-right: 10px;\r\n}\r\n\r\n#task-form-submit{\r\n  background-color: #3e8e41;\r\n}\r\n\r\n#task-form-cancel{\r\n  background-color: rgb(156, 60, 60);\r\n}\r\n\r\n.form-input-label{\r\n  padding-right: 5px;\r\n}\r\n\r\nselect{\r\n  display: flex;\r\n  justify-content: center;\r\n  margin: auto;\r\n  margin-bottom: 10px;\r\n  align-self: center;\r\n  resize: none;\r\n  width: 100%;\r\n  padding: 5px;\r\n}\r\n\r\n.input-form{\r\n  display: flex;\r\n  justify-content: center;\r\n  margin: auto;\r\n  margin-bottom: 10px;\r\n  align-self: center;\r\n  resize: none;\r\n  width: 100%;\r\n  padding: 5px;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/background.jpg":
/*!***********************************!*\
  !*** ./src/assets/background.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "background.jpg";

/***/ }),

/***/ "./src/assets/unga.jpg":
/*!*****************************!*\
  !*** ./src/assets/unga.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "unga.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"bundle": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=bundlea3a7f3f81702583537a5.js.map