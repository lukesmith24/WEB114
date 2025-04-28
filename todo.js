
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

addTaskBtn.addEventListener("click", function () {
  const newTask = taskInput.value.trim();

  //error checking.. Check if the box is empty
  if (newTask === "") {
    alert("Please enter a task.");
    return;
  }
  // Create a li html element and add the text to it
  const listTask = document.createElement("li");
  listTask.textContent = newTask;

  // Create a delete button and add text to it
  const removeButton = document.createElement("button");
  removeButton.textContent = "Remove";

  // Add a click event listener to the button
  // and remove the item from the list
  removeButton.addEventListener("click", function () {
    taskList.removeChild(listTask);
  });

  //Add the delete button the list and the list item to the
  //big list and clear out the box.
  listTask.appendChild(removeButton);
  taskList.appendChild(listTask);
  taskInput.value = "";
});