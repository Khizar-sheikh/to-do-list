//-----------Toggle Theme----------
const container = document.querySelector(".container");
const ball = document.querySelector(".ball");
const body = document.querySelector(".main")
let isDark = false;

container.addEventListener("click", () => {
  ball.classList.toggle("right");

  if (!isDark) {
    setTimeout(() => {
      container.classList.add("dark");
      ball.style.backgroundColor = "black";
    }, 220);
  } else {
    container.classList.remove("dark");
    ball.style.backgroundColor = "orangered";
  }

  isDark = !isDark;

  setTimeout(() => {
    container.classList.toggle("bright");
  }, 100);
});

//-----------ACTIVE's DROPDOWN LIST--------------
const homeDivs = document.querySelectorAll(".Home > div");
const header = document.querySelector(".contentHead");

homeDivs.forEach((homeDiv) => {
  homeDiv.addEventListener("click", () => {
    homeDivs.forEach((d) => d.classList.remove("selected"));
    taskContainer
      .querySelectorAll(".task")
      .forEach((taskDiv) => taskDiv.classList.remove("selected"));
    homeDiv.classList.add("selected");
    header.textContent = homeDiv.getAttribute("value");

  });
});

const taskContainer = document.querySelector(".taskcontainer");
taskContainer.addEventListener("click", (event) => {
  const clickedElement = event.target;

  if (clickedElement.classList.contains("task")) {
    taskContainer.querySelectorAll(".task").forEach((task) => {
      task.classList.remove("selected");
    });

    // Add selected class to the clicked task
    clickedElement.classList.add("selected");
    header.textContent = clickedElement.querySelector(".title").textContent;

    // Remove selected class from all home divs
    homeDivs.forEach((homeDiv) => {
      homeDiv.classList.remove("selected");
    });
  }
});

//---------MENU DROPDOWN----------
const menuDropdown = document.querySelector(".menu");
const dropdownList = document.querySelector(".dropdown");

let isDropdownOpen = false;

menuDropdown.addEventListener("click", () => {
  if (isDropdownOpen) {
    dropdownList.style.display = "none";
  } else {
    dropdownList.style.display = "block";
  }
  isDropdownOpen = !isDropdownOpen;
});
//------ADD PROJECT BUTTON--------------

const addProject = document.querySelector(".addproject");
const addProjectInfo = document.querySelector(".projectinfo");
const addBtn = document.querySelector(".addbtn");
const cancelBtn = document.querySelector(".cancelbtn");

addProject.addEventListener("click", () => {
  addProjectInfo.style.display = "flex";
});

cancelBtn.addEventListener("click", () => {
  addProjectInfo.style.display = "none";
});
addBtn.addEventListener("click", creatTask);

function creatTask() {

  const projectTitleInput = document.querySelector(".projectitle");
  const value = projectTitleInput.value;

  if (value === "") {
    alert("Please enter a project title.");
    return;
  }
  const task = document.createElement("div");
  task.classList.add("task");
  
  const parent = document.createElement("div");
  parent.classList.add("parent");

  const menubtn = document.createElement("div");
  menubtn.classList.add("material-icons-round");
  menubtn.textContent = "menu";

  const projectTitle = document.createElement("div");
  projectTitle.classList.add("title");
  projectTitle.textContent = value;

  const threedots = document.createElement("div");
  threedots.classList.add("material-icons-round", "threedots");
  threedots.textContent = "close";

  threedots.addEventListener("click", removeProject);

  function removeProject(event) {
    const taskToRemove = event.currentTarget.closest(".task");
    if (taskToRemove) {
      taskToRemove.remove();
    }
  }
  parent.appendChild(menubtn);
  parent.appendChild(projectTitle);

  task.appendChild(parent);
  task.appendChild(threedots);

  const taskContainer = document.querySelector(".taskcontainer");
  taskContainer.appendChild(task);

  const addProjectInfo = document.querySelector(".projectinfo");
  addProjectInfo.style.display = "none";

  projectTitleInput.value = "";
}

const addTasks = document.querySelector(".addtask");
let isFormOpen = false;

addTasks.addEventListener("click", () => {
  if (!isFormOpen) {
    createForm();
  } else {
    closeForm();
  }
});

function createForm() {
  // Create the detailsContainer div
  const detailsContainer = document.createElement("div");
  detailsContainer.classList.add("detailsContainer");

  // Create the Title input element
  const titleLabel = document.createElement("label");
  titleLabel.setAttribute("for", "Title");
  titleLabel.textContent = "Title:";
  titleInput = document.createElement("input");
  titleInput.setAttribute("type", "text");
  titleInput.setAttribute("placeholder", "What I have To Do today ?");
  detailsContainer.appendChild(titleLabel);
  detailsContainer.appendChild(titleInput);

  // Create the Details textarea element
  const detailsLabel = document.createElement("label");
  detailsLabel.textContent = "Details:";
  detailsTextarea = document.createElement("textarea");
  detailsTextarea.setAttribute(
    "placeholder",
    "Today I will create a to do list app ......................"
  );
  detailsContainer.appendChild(detailsLabel);
  detailsContainer.appendChild(detailsTextarea);

  // Create the Date input element
  const dateLabel = document.createElement("label");
  dateLabel.setAttribute("for", "Date");
  dateLabel.textContent = "Date:";
  dateInput = document.createElement("input");
  dateInput.setAttribute("type", "date");
  detailsContainer.appendChild(dateLabel);
  detailsContainer.appendChild(dateInput);

  isFormOpen = true;

  // Create the formButtons div
  const formButtons = document.createElement("div");
  formButtons.classList.add("formButtons");

  // Create the Add button
  const addBtn = document.createElement("div");
  addBtn.classList.add("addbtn");
  addBtn.setAttribute("id", "addTask");
  addBtn.textContent = "Add";

  addBtn.addEventListener("click", createprojectTasks);

  const cancelBtn = document.createElement("div");
  cancelBtn.classList.add("cancelbtn");
  cancelBtn.setAttribute("id", "canceladd");
  cancelBtn.textContent = "Cancel";
  cancelBtn.addEventListener("click", closeForm);

  // Append the Add and Cancel buttons to the formButtons
  formButtons.appendChild(addBtn);
  formButtons.appendChild(cancelBtn);

  // Append detailsContainer and formButtons to the document
  const container = document.querySelector(".projectdetails"); // Replace with your actual container
  container.appendChild(detailsContainer);
  container.appendChild(formButtons);
}
function closeForm() {
  isFormOpen = false;
  const container = document.querySelector(".projectdetails");

  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}
function createprojectTasks() {
  closeForm();

  const taskTitle = titleInput.value;
  const taskDescription = detailsTextarea.value;
  const taskDate = dateInput.value;

  const listItem = document.createElement("div");
  listItem.classList.add("listcontainer");

  const leftItems = document.createElement("div");
  leftItems.classList.add("leftitems");

  const unchecked = document.createElement("div");
  unchecked.classList.add("unchecked");
  leftItems.appendChild(unchecked);

  let isChecked = false;

  unchecked.addEventListener("click", () => {
    isChecked = !isChecked;

    if (isChecked) {
      unchecked.classList.add("checked");
      taskInfo.classList.add("fade");
      title.classList.add("linethrough");
    } else {
      unchecked.classList.remove("checked");
      taskInfo.classList.remove("fade");
      title.classList.remove("linethrough");
    }
  });

  const taskInfo = document.createElement("div");
  taskInfo.classList.add("taskinfo");
  const title = document.createElement("div");
  title.classList.add("title");
  title.textContent = taskTitle;
  const description = document.createElement("div");
  description.classList.add("description");
  description.textContent = taskDescription;
  taskInfo.appendChild(title);
  taskInfo.appendChild(description);
  leftItems.appendChild(taskInfo);

  const rightItems = document.createElement("div");
  rightItems.classList.add("rightitems");

  const date = document.createElement("div");
  date.classList.add("date");
  date.textContent = taskDate;
  rightItems.appendChild(date);

  const starIcon = document.createElement("div");
  starIcon.classList.add("material-icons-round");
  starIcon.textContent = "star_outlined";
  rightItems.appendChild(starIcon);

  let isstarIcon = false;

  starIcon.addEventListener("click", () => {
    isstarIcon = !isstarIcon;
    if (isstarIcon) {
      starIcon.textContent = "star";
      starIcon.classList.add("yellowed");
    } else {
      starIcon.textContent = "star_outlined";
      starIcon.classList.remove("yellowed");
    }
  });

  const optionDiv = document.createElement("div");
  optionDiv.classList.add("option");
  const deleteButton = document.createElement("button");
  deleteButton.classList.add("delTask");
  deleteButton.textContent = "Delete";
  const editButton = document.createElement("button");
  editButton.classList.add("editTask");
  editButton.textContent = "Edit";
  optionDiv.appendChild(deleteButton);
  optionDiv.appendChild(editButton);
  rightItems.appendChild(optionDiv);

  const moreVertIcon = document.createElement("div");
  moreVertIcon.classList.add("material-icons-round", "more-options-button");
  moreVertIcon.textContent = "more_vert";
  rightItems.appendChild(moreVertIcon);

  let isMoreVertIconHidden = false;

  moreVertIcon.addEventListener("click", () => {
    isMoreVertIconHidden = !isMoreVertIconHidden;

    if (isMoreVertIconHidden) {
      optionDiv.classList.add("hidden");
    } else {
      optionDiv.classList.remove("hidden");
    }
  });

  listItem.appendChild(leftItems);
  listItem.appendChild(rightItems);

  const listTodoContainer = document.querySelector(".listtodo");
  listTodoContainer.appendChild(listItem);
}
