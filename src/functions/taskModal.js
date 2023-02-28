function createTaskCardModal(
  name,
  desc,
  sDate,
  dDate,
  prio,
  completed,
  taskIndex,
  projectIndex
) {

  console.log(name);
  console.log(desc);
  console.log(sDate);
  console.log(dDate);
  console.log(prio);
  console.log(completed);

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
  modaltitleheader.innerHTML = "Edit Task";

  let taskForm = document.createElement("form");
  taskForm.className = "task-form";
  let inputDiv = document.createElement("div");
  inputDiv.className = "form-input";

  let labelTitle = document.createElement("label");
  labelTitle.className = "form-input-label";
  labelTitle.setAttribute("for", "title");
  labelTitle.innerHTML = "Title:";
  let textareaTitle = document.createElement("textarea");
  textareaTitle.id = "title";
  textareaTitle.className = "input-form";
  textareaTitle.name = "name";
  textareaTitle.innerHTML = name;

  console.log(desc);

  let labelDescription = document.createElement("label");
  labelDescription.className = "form-input-label";
  labelDescription.setAttribute("for", "description");
  labelDescription.innerHTML = "Description:";
  let textareaDescription = document.createElement("textarea");
  textareaDescription.id = "description";
  textareaDescription.className = "input-form";
  textareaDescription.name = "description"
  textareaDescription.innerHTML = desc;

  let labelStartDate = document.createElement("label");
  labelStartDate.className = "form-input-label";
  labelStartDate.setAttribute("for", "start-date");
  labelStartDate.innerHTML = "Start Date:";
  let inputStartDate = document.createElement("input");
  inputStartDate.id = "start-date";
  inputStartDate.className = "input-form";
  inputStartDate.setAttribute("type", "date");
  inputStartDate.name = "startDate";
  inputStartDate.value = sDate;

  let labelDueDate = document.createElement("label");
  labelDueDate.className = "form-input-label";
  labelDueDate.setAttribute("for", "due-date");
  labelDueDate.innerHTML = "Due Date:";
  let inputDueDate = document.createElement("input");
  inputDueDate.id = "due-date";
  inputDueDate.className = "input-form";
  inputDueDate.setAttribute("type", "date");
  inputDueDate.name = "dueDate";
  inputDueDate.value = dDate;

  let labelPriority = document.createElement("label");
  labelPriority.className = "form-input-label";
  labelPriority.setAttribute("for", "priority");
  labelPriority.innerHTML = "Priority";
  let selectPriority = document.createElement("select");
  selectPriority.id = "priority";
  selectPriority.name = "priority";

  let optionPriorityNA = document.createElement("option");
  optionPriorityNA.setAttribute("value", "n/a");
  optionPriorityNA.innerHTML = "N/A";
  let optionPriorityHigh = document.createElement("option");
  optionPriorityHigh.setAttribute("value", "high");
  optionPriorityHigh.innerHTML = "High";
  let optionPriorityMedium = document.createElement("option");
  optionPriorityMedium.setAttribute("value", "medium");
  optionPriorityMedium.innerHTML = "Medium";
  let optionPriorityLow = document.createElement("option");
  optionPriorityLow.setAttribute("value", "low");
  optionPriorityLow.innerHTML = "Low";
  selectPriority.appendChild(optionPriorityNA);
  selectPriority.appendChild(optionPriorityHigh);
  selectPriority.appendChild(optionPriorityMedium);
  selectPriority.appendChild(optionPriorityLow);
  selectedOptionPriority(
    prio,
    optionPriorityNA,
    optionPriorityHigh,
    optionPriorityMedium,
    optionPriorityLow
  );

  let labelCompleted = document.createElement("label");
  labelCompleted.className = "form-input-label";
  labelCompleted.setAttribute("for", "completed");
  labelCompleted.innerHTML = "Completed";
  let selectCompleted = document.createElement("select");
  selectCompleted.id = "completed";
  selectCompleted.name = "completed";

  let optionCompletedYes = document.createElement("option");
  optionCompletedYes.setAttribute("value", "yes");
  optionCompletedYes.innerHTML = "Yes";
  let optionCompletedNo = document.createElement("option");
  optionCompletedNo.setAttribute("value", "no");
  optionCompletedNo.innerHTML = "No";
  selectCompleted.appendChild(optionCompletedNo);
  selectCompleted.appendChild(optionCompletedYes);
  selectedOptionPriority(completed, optionCompletedYes, optionCompletedNo);

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

function selectedOptionPriority(
  storedOption,
  option1,
  option2,
  option3,
  option4
) {
  console.log("Gone Through");
  console.log(storedOption);
  switch (storedOption) {
    case ("n/a" || "yes"):
      option1.selected = "true";
      console.log("dumb");
      break;
    case "high" || "no":
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

export { createTaskCardModal };
