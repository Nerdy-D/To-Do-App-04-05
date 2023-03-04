/*function addTwoNumbers(a, b) {
    console.log(a + b);
*/
// create an empty array with [] 
var tasks = [];

function addTask() {
    var newTask = document.getElementById("inputTask").value;
    // if tasks array already has newTask show alert to user
    tasks.push(newTask);
    console.log("adding your new item:", newTask);
    console.log("all of your tasks are:", tasks);
    upDateUi();
}
function upDateUi() {
    // is getting ref to where we will display our tasks
    var container = document.getElementById("to_do_list");
    // is creating a new task element
    var newElement = document.createElement("div");
    newElement.innerHTML = "hello world"
    container.appendChild(newElement);
}
