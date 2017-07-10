/**
 *  оператор разворота(spread operator)
 *      позволяет разворачивать элементы массива для передачи в качестве аргументов функции или в элементы другого массива.
 */
let staticLanguages = ['C', 'C++', 'java'];
let dynamicLanguages = ['JavaScript', 'PHP', 'Ruby'];

let languages = [...staticLanguages, 'C#', ...dynamicLanguages, 'Python'];

console.log(languages);

let numbers = [10, 20, 30];
function sum(x, y, z){
    console.log(x + y + z);
}
sum(...numbers);