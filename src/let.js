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

        function buttonMouseOver(event) {
            this.classList.add('over');
            this.classList.add('start-animation');
            console.log('buttonMouseOver:: adding:: .over & .start-animation');
        }

            function buttonTransitionend(event) {
                console.log(event.propertyName);
                console.log(event.elapsedTime);
                if (this.classList.contains('start-animation') && this.classList.contains('over')) {
                    // завершена анимация при наведении мыши на едемент
                    this.classList.remove('start-animation');
                    this.classList.add('animating');
                    console.log('IS buttonTransitionend! :: remove:: .start-animation & adding:: .animating');
                } else if (this.classList.contains('finish-animation') && !this.classList.contains('over')){
                    // завершена анимация при выхода мыши с елемента
                    this.classList.remove('finish-animation');
                    console.log('IS buttonTransitionend! :: remove:: .animating');
                }
            }

        function buttonMouseLeave(event) {
            this.classList.remove('over');
            this.classList.remove('animating');
            this.classList.add('finish-animation');
            console.log('buttonMouseLeave:: remove:: .over, .animating & adding:: .finish-animation');
        }

    function buttonMouseMove(event) {
        console.log('mousemove над "button#" ', i);
    };

    // button. removeEventListener('mousemove');

    button.addEventListener('mouseover', buttonMouseOver);
    button.addEventListener('transitionend', buttonTransitionend);
    button.addEventListener('mousemove', buttonMouseMove);
    button.addEventListener('mouseleave', buttonMouseLeave);
}

console.log(buttons);