document.addEventListener("DOMContentLoaded", function () {
  const taskInput = document.getElementById("task-input");
  const addTaskBtn = document.querySelector(".add-task-btn");
  const taskListContainer = document.querySelector(".list-container");

  // Add a new task
  function addTask() {
    let taskValue = taskInput.value.trim();
    if (taskValue === "") {
      alert("Please enter a task to add.");
    } else {
      let listItem = document.createElement("li");
      listItem.innerHTML = taskValue;
      taskListContainer.appendChild(listItem);
      let spanIcon = document.createElement("span");
      spanIcon.innerHTML = "&#10006;";
      listItem.appendChild(spanIcon);
      taskInput.value = "";
      saveData();
    }
  }

  // Event listener for adding a new task
  addTaskBtn.addEventListener("click", addTask);

  // Event listener for toggling the "checked" class and removing tasks
  taskListContainer.addEventListener("click", handleTaskClick);

  // Handle click events on tasks
  function handleTaskClick(event) {
    const target = event.target;
    if (target.tagName === "LI") {
      target.classList.toggle("checked");
      saveData();
    } else if (target.tagName === "SPAN") {
      target.parentElement.remove();
      saveData();
    }
  }

  // Save task list to localStorage
  function saveData() {
    localStorage.setItem("tasks", taskListContainer.innerHTML);
  }

  // Display all tasks from localStorage
  function displayTasks() {
    taskListContainer.innerHTML = localStorage.getItem("tasks");
  }

  displayTasks();
});

// DANGER ZONE — only for DEV.
// localStorage.removeItem("tasks");
