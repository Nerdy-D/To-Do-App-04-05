var submitButton = document.getElementById("button1");
var clearButton = document.getElementById("button2");
var add = document.getElementById("write");

submitButton.addEventListener("click", addStuff);
clearButton.addEventListener("click", clear);

function addStuff() {
    todo = text1.value;
    if (todo == "") {
        alert("Please input data");
    } else {
        add.innerHTML += "<li>" + todo + "</li>";
    }
}

function clear() {
    add.innerHTML = "";
}