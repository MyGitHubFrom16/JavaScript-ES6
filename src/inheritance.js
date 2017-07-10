/**
 * Создание объектов на основе классов является лишь одной стороной ООП. 
 * Другая сторона - это наследование, т.е. способность объектов наследовать свойства и методы от других классов.
 * Внутри используются всё те же прототипы.
 * 
 * Кл.
 */

class Task {
    constructor(title = Task.getDefaultTitle()) {
        this._title = title;
        this.done = false;
        Task.count += 1;
        console.log(`Создание задачи: "${this.title}"`);
    }

    get title() {
        return this._title;
    }

    set title(value) {
        this._title = value;
    }

    static getDefaultTitle() {
        return 'задача';
    }

    complete() {
        this.done = true;
        console.log(`Задача "${this.title}" выполнена`);
    }
}

Task.count = 0;



class SubTask extends Task {
    constructor(title, parrent) {
        super(title); // вызов родительского класса
        this.parrent = parrent;
        console.log(`Создание подзадачи: "${this.title}"`);
    }

    complete() {
        super.complete();
        console.log(`Подзадача "${this.title}" выполнена`);
    }
}
/**
 * если у подкласса не тонструктора, буе исп. родительский конструуктор
 */

let task = new Task('Изучить JavaScript');
let subtask = new SubTask('Изучить ES6', task);

console.log(SubTask.getDefaultTitle());
console.log(SubTask.count);

task.complete();
subtask.complete();

console.log(task);
console.log(subtask);

// Проверка на принадлежность к классу
console.log("subtask instanceof Task :", subtask instanceof Task); 
console.log("subtask instanceof SubTask :", subtask instanceof SubTask);