class Task {
    constructor(title = 'Задача') {
        this._title = title;
        this._done = false;
        Task.count += 1;
    }

    get title() {
        return this._title;
    }

    set title(value) {
        this._title = value;
    }

    complete() {
        this.done = true;
    }

    static getDefaultTitle() {
        return 'задача';
    }
}

Task.count = 0;



class SubTask extends Task {
    constructor(title, parent) {
        super(title);
        this._parent = parent;
    }
}



var task = new Task('Изучить JavaScript');
var subtask = new SubTask('Изучить ES6', task);

console.log(task);
console.log(subtask);