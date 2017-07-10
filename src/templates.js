/**
 * шаблонные строки (template literals или template strings),
 *  поддерживают многострочность, интерполяцию выражений и тегирование.
 * 
 *  переносы строк добавляються автоматически.
 * 
 *  ${name} - местозаполнитель
 * 
 *  Тэгирование - позволяет изменить вывод шаблона при помощи функции
 *   1й арг. массим строковых литералов
 *   2й и последующие арг. содержат значения вычесленных выражений 
 * 
 */

function greet(name){
    console.log(`Hello ${name}`);
};
greet('Sanya');

function createEmail(to, from, subject, message){
    console.log(`
        To: ${to}
        From: ${from}
        Subject: ${subject}
        Message: ${message}
    `);
};
createEmail('John@mail.con', 'Jane@mail.com', 'Hello', 'How are you doing?');

function add(x, y){
    console.log(`${x} + ${y} = ${parseInt(x) + parseInt(y)}`);
}
add('5', '7');

let name = 'Bill';
let name2 = 'Scott';
console.log(upperName`Hello ${name} ${name2}`);

function upperName(literals, ...values) {
    console.log(literals, values);
    let result = literals[0];
    values.forEach(function(element){
        result = result + element.toUpperCase();
    })
    return result;
}
