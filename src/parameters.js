/**
 * парамеры по умолчанию (default parametrs)
 * оставшиеся параметры (rest parametrs)
 */

// парамеры по умолчанию (default parametrs)
function greet(greeting = 'Hello', name = 'Bill'){
    console.log(`${greeting} ${name}`);
};

greet('Hi', 'Vasya');
greet('Hi');
greet(undefined, 'Vasya');
greet();

// оставшиеся параметры (rest parametrs)
    // ES5  
function sum(){
    console.log(arguments);
    let result = 0;
    Array.prototype.forEach.call(arguments, function(value){
        result += value;
    });
    console.log(result);
}
    // ES6
function sum(...values){
    let result = 0;
    values.forEach(function(value){
        result += value;
    });
    console.log(result);
}
    // reduce
function sum(...values){
    let result = 0;
    console.log(values.reduce(function(prevValue, currentValue){
        return prevValue + currentValue;
    }));
}

sum(3, 7, 9, 16);
