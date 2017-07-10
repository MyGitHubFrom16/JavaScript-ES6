/**
 * в отличие от других языков, в JS часто приходиться работать с литералами объектов,
 *  т.е. простыми объектами, которые не являються экземплярами каких либо классов, 
 *  а являються набором свойств и значений
 * 
 *  несколько нововведений ES6, 
 *   которые немного упростили синтаксис при работе с литералами объектов.
 *      
 */

let firstName = 'Bill',
    lastName = 'Gates',
    email = 'billgates@microsoft.com';

// в ES6 если имя св. объекта совпадает с именем переменной, можно указывать только имя св.
let person = {
    firstName,
    lastName,
    email,
    // синтаксис создания метода ES6 
    sayHello() {
        console.log(`Hi my name is ${this.firstName} ${this.lastName}`);
    },
    get fullName() {
        return this.firstName + ' ' + this.lastName;
    },
    set fullName(value) {
        this.firstName = value;
    }
};

// ES5 способ установки акцессоров свойста

// Object.defineProperty(person, 'fullName', {
//     get: function() {
//         return this.firstName + ' ' + this.lastName;
//     },
//     set: function(value) {
//         this.firstName = value;
//     }
// });

console.log(person);
person.sayHello();



/**
 * в ES5, доступ к свойтву метода с пом. синтаксиса obj[]
 *   доступен только для существующих объектов
 */ 
person.firstName;
person['firstName'];

let property = 'firstName';
person[property]; // person['firstName']

/**
 * в ES6 добавлена возможность исп. синтаксис obj[]
 *  внутри объекта, тем самым, динамически указывать имя свойства
 */

person = {
    [property]: 'Bill'
};


function createCar(property, value) {
    return {
        [property]: value,
        ['_' + property]: value,
        [property.toUpperCase()]: value,
        ['get' + property]() {
            return this[property];
        }
    };
}

console.log(createCar('vin', 1));