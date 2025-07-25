//  JS Code

var task = document.getElementById("taskTitle");
var description = document.getElementById("taskDescription");

var list = [];

function addTask() {

    value1 = task.value;
    value2 = description.value;

    if (!value1) {
        window.alert('Title is empty');
        return;
    }

    var obj = {
        task: value1,
        des: value2
    };

    list.push(obj);
    display();
    clear()
    saveToLocal();
}

function display() {
    var cartona = [];
    for (var i = 0; i < list.length; i++) {
        cartona +=
            `   
            <tr id='row${i}'> 
                <td id="completed${i}"><input type="checkbox" name="completed${i}" id="completed${i}_check" onchange="completeTask(${i})"></td>
                <td id="${'title' + i}">${list[i].task}</td>
                <td id="${'des' + i}">${list[i].des}</td>
                <td id="${'edit' + i}"><button onclick="editTask(${i})" class='blue'><i class="fa-solid fa-pen"></i></button></td>
                <td id="${'del' + i}"><button class='red' onclick="deleteTask(${i})"><i class="fa-solid fa-trash"></i></button></td>
            </tr>
        `
    }
    var L = document.getElementById("taskList");
    L.innerHTML = cartona;
}

function clear(){
    task.value= null;
    description.value= null;
}
function confirmUpdate(id) {
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
    saveToLocal();
}
function editTask(id) {
    const titleUp = document.getElementById('title' + id);
    const desUp = document.getElementById('des' + id);
    const confirmBtn = document.getElementById('edit' + id);
    const cancelBtn = document.getElementById('del' + id);

    titleUp.innerHTML = `<input type="text" id="titleUpdate" value="${list[id].task}">`;
    desUp.innerHTML = `<input type="text" id="desUpdate" value="${list[id].des}">`;
    confirmBtn.innerHTML = `<button onclick="confirmUpdate(${id})" class='green'><i class="fa-solid fa-check"></i></button>`;
    cancelBtn.innerHTML = `<button onclick="display()" class='red'><i class="fa-solid fa-xmark"></i></button>`;
}

function deleteTask(id) {
    list.splice(id, 1); // Remove task at index `id`
    display(); 
    saveToLocal();         // Refresh task list
}

function completeTask(id){
    //console.log(id);
    
    const element = document.getElementById('row'+id);
    const checkbox = document.getElementById(`completed${id}_check`);

    if (checkbox.checked) {
        element.classList.add('completed');
    }
    else {
        element.classList.remove('completed');
    }
}

function saveToLocal() {
    localStorage.setItem('storedTodo',JSON.stringify(list));
}

function loadFromLocal() {
    let stored = localStorage.getItem('storedTodo');
    if (stored){
        list = JSON.parse(stored);
        display();
    }
}

loadFromLocal();