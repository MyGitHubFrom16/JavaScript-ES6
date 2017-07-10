/**
 * в ES5 2 области видимости:
 *  глобальная и в пределах функции
 * в ES6 добавленна новая область видимости ограниченая блоком кода {}. 
 * 
 * let - мы можем использовать для объявления переменных с ограниченной областью видимости.
 * 
 * особенноси let и const с Hoistg
 * переменные объявленные с пом. let не поднимаються
 * т.е. нельзя использовать переменную до её объявления
 */
if(true){
    let version = 'ES6'
}
//console.log(version);

var buttons = document.querySelectorAll('button');
for(let i = 0; i < buttons.length; i++){
    var button = buttons[i];
    button.innerText = button.innerText + i; 
    button.onclick = function(event){
        console.log(i);
    }
}

console.log(buttons);