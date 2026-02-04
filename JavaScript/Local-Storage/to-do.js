let input = document.getElementById("inputList");   
let list  = document.getElementById("list")

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function showTask(){
    list.innerHTML = "";
    tasks.forEach((task) => {
        const li= document.createElement("li");
        li.innerText = task;
        list.append(li);
    });
}
function addItem(){
    let task = input.value;
    if(task === "") return;
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    input.value ="";
    showTask();
}

function removeItem(){
    list.innerHTML = "";
    localStorage.clear()
}
showTask();
 