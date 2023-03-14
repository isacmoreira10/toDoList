let baseboard = document.querySelector('#baseBoard')
let task = document.querySelector('#task')
let array = []

function add() {
    let myArray = {
        task: task.value
    }
     if (task.value === '') {
        alert("type it a task");
        return
    }

    array.push(myArray)
    show()
}

function show() {
    let string = ''
    for (let i = 0; i < array.length; i++) {
        if (i === 8) { alert("type it only eitgth tasks"); 
        break
        }
        const htmlElement = `<div class="display" id="display">
        <p class="list">${array[i].task} </p>
        <button onclick="hanldeRemoveTask(${i})" class="button">
        <img src="icons8-trash-bin-50 (1).png" class="image"></button><hr>
        </div>`
        string += htmlElement
    }
    baseboard.innerHTML = string
}

function handleRemoveTask(index) {
       const newTasks = array.filter((task, taskIndex) => index !== taskIndex)
       array = newTasks
       show()
}
















