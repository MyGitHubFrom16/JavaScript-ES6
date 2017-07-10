// function Task() {

// }

// let Task = function Task() {

// }


// class Task {
//     constructor() {
//         console.log('Create a task');
//     }
// }

let Task = class {
    constructor() {
        console.log('Create a task');
    }
}

let SubTask = class extends Task {
    constructor() {
        super();
        console.log('Create a subtask');
    }
}

let task = new Task();
let subtask = new SubTask();

console.dir(task);
console.dir(subtask);