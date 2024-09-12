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
    text.value = ""
}


listEle.addEventListener("click", function(e){
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
    }
}, false)

