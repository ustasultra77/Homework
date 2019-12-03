'use strict';


// Тип данных Symbol

/* 
    'Символ' представляет собой уникльный идентификатор 
*/
let id = Symbol();
let id2 = Symbol('id');
let id3 = Symbol('id');

console.log(id2==id3); //false

// Символы никогда не преобразуются в строки

console.log(id2); // false

console.log(id2.toString()); // Symbol('id')

// Создание скрытых свойств объектов

let id4 = Symbol('id');

let user = {
    name: 'Vasya'
};
user[id4] = 1;
user[id3] = 2;

console.log(user);

// Свойство объекта, объявленное через Символ, игнорируется циклом for...in

//Глобальные символы
let id5 = Symbol.for('id');
// Если такого символа с таким идентификатором нет, то он создасться

let idAgain = Symbol.for('id');

// В глобальной области видимости уже есть такой символ,  поэтому он запишется в переменную

console.log(id5==idAgain); // true

// Функция символов по значению

let sym = Symbol.for('name');

let sym2 = Symbol.for('age');

console.log( Symbol.keyFor(sym)); // name
console.log( Symbol.keyFor(sym2)); // age


// Методы объекта, 'this'

let car = {
    name: 'Mazda',
    maxSpeed: '200',
    color: "green",
    "current distance": 0,
    drive: function(){
        this["current distance"]+=100;
        console.log( this['current distance'] + ' изменился');

    }
}
car.drive();
car.drive();
car.drive();

car.stop = function(){
    console.log('mashine stop');

};
car.stop();

// У стрелочных функций нет "this", поэтому this нельзя испольховать в объекте, он не будет работать в объекте

// Преобразование объекта к примитивам (текст, число -например)

// При выводе в alert  console.log,  объект преобразуется к строке

console.log(car);

console.log(Number(car) ); // Nan

// Конструкторы или создание объектов через "new"

/* 
1) Имя функции конструктора должно начинаться с большой буквы
2) Функция-конструктор должна вызываться при поиощи оператора new

*/

function User(username){
    this.name = username;
    this.isAdmin = false;
}

let user_noadmin = new User('Andrey');

console.log(user_noadmin.name); // Andrey

console.log(user_noadmin.isAdmin); // false

/* 
1) в переменной создается объект
2) При выполнении функции в поле name объекта запишется переданная переменная username
А в поле isAdmin = false

    user_noadmin = {
    name: 'Andrey",
    isAdmin: false
}

/*Это фунНкции, которые описаны в объектах примитивов и позволяют делать различные манипуляции с этими объектами
Например

*/

let str = 'Privet';
console.log( str.toUpperCase()); // PRIVET

/* 
    function String(...){
        ...
        toUpperCase: function(...){
            переводит символы в верхний регистр
        }
        ...
    }
*/

// Числа

let billion = 1e9; // 1 миллиард (1 и 9 нулей)

let ms = 1e-6; // 0.000001

// Шестнадцатиричная система

console.log(0xff); // 255

// Бинарная форма записи

let a = 0b11111111; //255

// Восьмеричная

let b = 0o377; // 225
console.log(a == b); // true

// Метод toString(base) - возвращает строковое представление числа в системе base

let num = 255;

console.log(num.toString(16)); // ff

// Максимальная система счисления 36

// Округление

let num2 = 3.1;
console.log(Math.floor(num2) ); // 3 - округление в меньшую сторону
console.log(Math.сeil(num2) ); // округление в большую сторону
console.log(Math.round(num2) ); // округление до ближайшего целого

console.log(Math.trunc(num2) ); // удаляет дробную часть

// Округление до х знаков

let num3 = 1.23456

console.log(Math.floor(num3 * 100) / 100 ); // 1.23456 -> 123.456 -> 123 -> 1.23

// Метод toFixed(n) - округляет число до n - знаков

let num4 = 12.34;
console.log(num4.toFixed(1)); //12.3

let num5 = 12.36;
console.log(num5.toFixed(1)); //12.4

/* 
    После применения toFixed  возвращает текст, а не число
    При обрезани используется дополнительно метод round
    
*/

let num6 = 12.34;
console.log( num6.toFixed(6)); // '12.34000'

// неточные вычисления
// Если число слишком большое, то оно выведется как бесконечность

console.log(1e500); // infinity

console.log(0.1+0.2 == 0.3); // false

console.log(0.1 +0.2 ); // 0.3000000000

console.log( 0.1.toFixed(20) ); // 0.1

// 1-й способ решения

let sum2 = 0.1 +0.2;

console.log( +sum2.toFixed(2)); //0.3

// 2- й способ решения
console.log((0.1 * 10 + 0.2*10)/10); // 0.3

// лучше использовать 1 способ , т.к. 2 не идеален

console.log( (0.28*100 +0))






