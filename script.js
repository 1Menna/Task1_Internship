//  JS Code

var task = document.getElementById("taskTitle");
var description = document.getElementById("taskDescription");

var list = [];

function addTask(){

    value1 = task.value;
    value2 = description.value;

    if (!value1) {
        window.alert('Title is empty');
        return;
    }

    var obj = {
        task : value1,
        des : value2
    };

    list.push(obj);
    display();
}

function display(){
    var cartona = [];
    for(var i=0; i<list.length ; i++){
        cartona += 
        `   <tr> 
                <td id="${'title'+i}">${list[i].task}</td>
                <td id="${'des'+i}">${list[i].des}</td>
                <td id="${'edit'+i}"><button onclick="editTask(${i})" class='blue'>Edit</button></td>
                <td id="${'del'+i}"><button class='red'>Delete</button></td>
            </tr>
        `
    }
    var L = document.getElementById("taskList");
    L.innerHTML = cartona;
}

function confirmUpdate (id) {
    // list[id].task = document.getElementById("titleUpdate").value;
    // list[id].des= document.getElementById("desUpdate").value;
    // console.log(list); for checking
    const titleUp = document.getElementById("titleUpdate");
    const desUp = document.getElementById("desUpdate");
    const updatedTasks = list.map((task, i) => {
        if (i === id) {
            return { task: titleUp.value, des: desUp.value };
        }
        return task;
    });
    list = updatedTasks;
    // console.log(updatedTasks);
    display();
}
function editTask(id){
    const titleUp = document.getElementById('title'+id);
    const desUp = document.getElementById('des'+id);
    const confirmBtn = document.getElementById('edit'+id);
    const cancelBtn = document.getElementById('del'+id);

    titleUp.innerHTML = `<input type="text" id="titleUpdate" value="${list[id].task}">`;
    desUp.innerHTML = `<input type="text" id="desUpdate" value="${list[id].des}">`;
    confirmBtn.innerHTML = `<button onclick="confirmUpdate(${id})">Confirm</button>`;
    cancelBtn.innerHTML = `<button onclick="display()">Cancel</button>`;
}