/**
 * this в стрелочных функциях береться из контекста в кот. функция объявлена
 *  при function ссылаеться на сам объект в кот она объявлена
 * 
 * стрелочные функции нельзя использовать как конструкторы объектов
 * и нельзя использовать методы
 * bind();
 * call();
 * apply();
 * т.к. в стрелочных функциях мы не можем изменить значение this, оно береться из контекста
 */
/**
 * ES5
 */
function add(x, y) {
    return x + y;
};
let squeare = function(x) {
    return x * x;
};
let getMeAmsver = function() {
    return 170717;
};
let log = function(){
    console.log('logging');
};
let multiply = function(x, y){
    let result = x * y;
    return result;
};
let getPerson = function(x, y){
    return { name: 'John'}
};

(function() {
    console.log('IIFE');
})();

console.log(getPerson()); // Object { name: 'John'}

let person = {
    name: 'Bob',
    greet: function() {
        // console.log(`Hello, my name is ${this.name}`);
        console.log('Hello, my name is ' +  this.name);
        console.log(this);
    }
}
person.greet();


/**
 * ES6
 */
let add_a = (x, y) => x + y;
// если функция принимает только 1 параметр, то нет необходимость заключать его в скобки  
let squeare_a = x => x * x;
// если у функции нет параметров:  
let getMeAnswer_a = () => 170717;
// если у функции не чего не аозвращает:  
let log_a = () => console.log('logging');
// если в теле функции исполюзуеться много строк: нужны {}, а также кл.сл.return  
let multiply_a = (x, y) => {
    let result = x * y;
    return result;
}

// если функция возвр. литерал obj  
let getPerson_a = () =>({ name: 'John'}); 

// IIFE _ Immediately-Invoked Function Expression
(() => console.log('IIFE'))();


console.log(typeof getPerson_a); // function


let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let sum = 0;

// Сумма элементов массива
numbers.forEach(num => sum += num);

// массим квадратов элеметов массива
let squared = numbers.map(n => n * n);

console.log(sum); 
console.log(squared);

let person2 = {
    name: 'Bob',
    greet: function() {
        let that = this;
        setTimeout(function(){
            console.log('Hello, my name is ' +  that.name);
            console.log(this);
            console.log(that);
        }, 1000);
    }
}
person2.greet();