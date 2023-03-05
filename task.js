var tasks = [];
loadTasks();

function addTask() {
    var taskName = document.getElementById("inputTask").value;
    tasks.push({
        name: taskName,
        completed: false,
    });
    console.log("adding your new item:", taskName);
    console.log("all of your tasks are:", tasks);
    refreshUi();
}

function addTaskToUi(taskObj) {

    var container = document.getElementById("to_do_list");

    var newElement = document.createElement("div");
    newElement.addEventListener("click", () => {
        taskObj.completed = !taskObj.completed;
        refreshUi()
    })
    newElement.className = "tasks";
    if (taskObj.completed) {
        newElement.className = "tasks strikethrough";
    }
    var heading = document.createElement("h4");
    heading.innerHTML = "Audio Checklist";
    var dueDate = document.createElement("p");
    dueDate.innerHTML = "Due by 25 March 2023";


    newElement.appendChild(heading);
    newElement.innerHTML += taskObj.name;
    newElement.appendChild(dueDate);
    container.appendChild(newElement);
}

function removeTask() {
    tasks.pop();
    refreshUi();
}

function refreshUi() {
    var container = document.getElementById("to_do_list");
    container.innerHTML = "";
    tasks.forEach(task => {
        addTaskToUi(task);
        console.log(task);
    });
    saveTasks()
}
refreshUi();

function saveTasks() {
    var jsonTasks = JSON.stringify(tasks)
    localStorage.setItem("savedtasks", jsonTasks)

}
function loadTasks() {
    var loadedTasks = localStorage.getItem("savedtasks");
    if (loadedTasks) {
        tasks = JSON.parse(loadedTasks)
    }
}




