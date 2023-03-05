/*function addTwoNumbers(a, b) {
    console.log(a + b);
*/
// addTwoNumbers(4,3)
// create an empty array with [] 
var tasks = [];

function addTask() {
    var newTask = document.getElementById("inputTask").value;
    // if tasks array already has newTask show alert to user
    tasks.push(newTask);
    console.log("adding your new item:", newTask);
    console.log("all of your tasks are:", tasks);
    refreshUi();
}

function addTaskToUi(nameOfTask) {
    // is getting ref to where we will display our tasks
    var container = document.getElementById("to_do_list");
    // is creating a new task element
    var newElement = document.createElement("div");
    newElement.className = "tasks";
    var heading = document.createElement("h4");
    heading.innerHTML = "Audio Checklist";
    var dueDate = document.createElement("p");
    dueDate.innerHTML = "Due by 25 March 2023";

    // var calendar = document.getElementsByClassName("calendar")
    // calendar.className = "dates"
    newElement.appendChild(heading);
    newElement.innerHTML += nameOfTask;
    newElement.appendChild(dueDate);
    container.appendChild(newElement);
}

function removeTask() {
    // var newTask = document.getElementById("inputTask").value;
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
}
refreshUi();





/*function addCalendar() {
    var addCalendar = document.createElement("dates");
    addCalendar.className = "calendar";
    addCalendar.innerHTML = "Due by 24 March ";
    // addCalendar.appendChild(container);
        var dueDate = document.getElementById("p")
    dueDate.innerHTML = "Task to be done by 24 March 2023"
}
*/