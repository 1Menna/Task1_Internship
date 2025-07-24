//  JS Code

var task = document.getElementById("taskTitle");
var description = document.getElementById("taskDescription");

var list = [];

function addTask(){

    value1 = task.value;
    value2 = description.value;

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
                <td>${list[i].task}</td>
                <td>${list[i].des}</td>
                <td><button>Delete</button></td>
            </tr>
        `
    }
    var L = document.getElementById("taskList");
    L.innerHTML = cartona;
}