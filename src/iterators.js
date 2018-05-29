
/**
 * Iterable итерируеммый или перебираемый объект
 *   это объект содержание которого можно перебрать по одному элементу один за другим.
 *
 *   данное понятие "не уникально" для JavaScript, оно есть и в других языках
 *   да и в самом JavaScript до ES6 такое понятие было но оно не было `стандартизированным`. 
 *   
 *  для перебора итерируеммых объектов в ES5 был добавлен новый цикл
 *  for (let num of numbers) {
 *      console.log(num);
 *  }
 *  итератор также используеться и в операторе разворота
 *  func(...numbers);
 *  
 */
/** 
 * примером итерируеммого объекта
 *  являеться Array
 *   [1, 2, 3]
 *  или String
 *   'JavaScript'
 *  или коллекция элементов DOM (NodeList)
 *   [div, div, div]
 *
 * у итерируеммого объекта есть специальный метод который возвращает объект Iterator,
 *  для доступа к этому методу используется специальный символ 'Symbol.iterator'
 *  Iterable {
 *      [Symbol.iterator]();
 *  } 
 *  объект, который возвращает этот метод формально называется Iterator
 *   у итератора есть всего лишь один метод
 *  Iterator {
 *      next();
 *  }
 * который возвращает IteratorResult (результат итератора)
 *  у этого объекта есть два свойства
 *  IteratorResult {
 *      done,   // указано есть ли еще значения в последовательности 
 *      value   // буде содержать следующий элемент последовательности 
 *  }
 */
/**
 * в ES5 итерировать массив можно 3мя способами
 */
let xmen = ['Cyclops', 'Wolverine', 'Rogue'];

// console.info('for');
// for (let index = 0; index < xmen.length; index++) {
//     console.log(xmen[index]);
// }

// console.info('for...in');
// for (let key in xmen) {
//     console.log(xmen[key]);
// }

// console.info('forEach');
// xmen.forEach(xmen => console.log(xmen));

/** 
 * в ES6 был добавлен for...of
 *  внутри for...of использует итераторы
 */
console.info('for...of');
for (let item of xmen) {
    console.log(item);
}

/**
 * массивы в JS являются итерируеммыми объектами
 */
console.log(xmen[Symbol.iterator]()); // ArrayIterator {}

let iterator = xmen[Symbol.iterator]();

let next = iterator.next();

while (!next.done) {
    console.log(next.value);
    next = iterator.next();
}

// let idGenerator = {
//     [Symbol.iterator]() {
//         let id = 1;
//         return {
//             next() {
//                 let value = id > 10 ? undefined : id++;
//                 let done = !value;
//                 return { value, done };
//             }
//         };
//     }
// };

// for (let id of idGenerator) {
//     console.log(id);
// }

let randomGenerator = {
    generate() {
        return this[Symbol.iterator]();
    },
    
    [Symbol.iterator]() {
        let count = 0;
        
        return {
            next() {
                let value = Math.ceil(Math.random() * 100);
                let done = count > 9;
                count += 1;
                return { value, done };
            }
        };
    }
};

let random = randomGenerator.generate();
console.log(random.next().value);

// class ArrayIterator {
//     constructor(array) {
//         this.array = array.map(item => item).sort();
//         this.index = 0;
//     }
    
//     next() {
//         let result = { value: undefined, done: true };
                
//         if (this.index < this.array.length) {
//             result.value = this.array[this.index];
//             result.done = false;
//             this.index += 1;
//         }
        
//         return result;
//     }
// }

// class TaskList {
//     constructor() {
//         this.tasks = [];
//     }
    
//     addTasks(...tasks) {
//         this.tasks = this.tasks.concat(tasks);
//     }
    
//     [Symbol.iterator]() {
//         return new ArrayIterator(this.tasks);
//     }
// }

// let taskList = new TaskList();
// taskList.addTasks('Изучить JavaScript', 'Изучить ES6', 'Купить продукты');

// for (let task of taskList) {
//     console.log(task);
// }