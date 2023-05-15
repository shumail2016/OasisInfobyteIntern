const tasks=document.getElementById("add-task");
const addBtn=document.getElementById("add-button");
const showTasks=document.getElementById("tasks-list");



addBtn.addEventListener("click",()=>{
    if (tasks.value==="") {
        alert("Please enter your task for today 😊");
    }
    else{
        let list=document.createElement("li");
        list.textContent=tasks.value;
        list.classList.add("tasks-lists-points");
        showTasks.appendChild(list);

        let delBtn=document.createElement("button");
        const delIcon=document.createElement("i");
        delIcon.classList.add("fa-solid","fa-trash");
        delBtn.appendChild(delIcon);
        delBtn.classList.add("tasks-list-del-btn");
        list.appendChild(delBtn);

        let checkIcon = document.createElement("i");
        checkIcon.classList.add("check-list-icon","fa-regular", "fa-circle");
        list.insertBefore(checkIcon, list.firstChild); 
    }
    tasks.value="";
    saveData();
});

showTasks.addEventListener("click", (e) =>{
    if (e.target.tagName==="LI"){
        if(e.target.classList.contains("checked")){

        }
        else{
        e.target.classList.toggle("checked");
        const checkIcon = e.target.querySelector(".check-list-icon");
        checkIcon.classList.toggle("fa-regular");
        checkIcon.classList.toggle("fa-solid");
        saveData();
        }
    }
    else if (e.target.tagName==="I" && e.target.classList.contains("fa-trash")){
        e.target.parentElement.parentElement.remove();
        saveData();
    }
},false);


function saveData(){
    localStorage.setItem("data",showTasks.innerHTML);
}

function showTask(){
    showTasks.innerHTML=localStorage.getItem("data");
}

showTask();