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

export { serialize, unserialize, refreshProjectLayout };
