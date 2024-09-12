var text = document.querySelector("input");
var listEle = document.querySelector("ul");

function createTask() {
    
    if (text.value === ""){
        alert("Please enter task");
    } else {   
        let li = document.createElement("li");
        li.innerHTML = text.value;
        listEle.appendChild(li);
        let span = document.createElement("span")
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    text.value = "";
    saveTasks();
}


listEle.addEventListener("click", function(e){
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveTasks();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveTasks();
    }
}, false)

function saveTasks() {
    localStorage.setItem("data", listEle.innerHTML);
}
function getTasks() {
    listEle.innerHTML = localStorage.getItem("data")
}
getTasks();
