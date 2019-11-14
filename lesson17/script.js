"use strict";

// alert("Привет");
// alert("Пока");
/*
alert(3+
    2+
    4);
*/

/*var message;

message = 10;
console.log(message);

var message = 20; //нельзя объявлять перпеменную второй раз
console.log(message)
*/


let message; //let позволяет переназначить переменную

message = 10;
console.log(message);

message = 20; 
console.log(message)

let user = 'John', age=20, height=180;

let hello;
hello = user;
console.log(hello);
//userName \ userAge \ user_name \ $

//В названии переменных важен регистр
// переменная apple AppLE разные
// запрещается использовать задокументированные названия

const COLOR_ITEM = '#fff';

// COLOR_ITEM = '#000';   нельзя менять константу

message = 'hello';

//тип данных Числа (Number)
message = 123;

let number = 15.25; // Числа с плавающей точкой

// Существуют спец. числовые значения - Infinity\  -Infinity

console.log(1/0);

// если не число делим на число, то получмтся  NaN (Not a Number)
console.log('не число' / 10);

// Тип данных Сторока (String)

message = 'Привет';
message = "Привет";
let phrase = `${message} Андрей`;

console.log(phrase);

let x = 10, y = 20;
console.log(`${x + y}`);  // 30 работает в кривых кавычках

// 'a' - это строка, в отличие от других языков

// Тип данных - Булевый (логический тип (Boolean)
// Поддерживает два типа значения true / false

let ageChecked = true;
let isGreater = 4 > 1;

console.log(isGreater); // true


// Специальное значение - null
// не относится ни к одному типу данных и представляет собой "ничего" \ "пусто" \ "значение не известно"

let weight = null;

// Специальное значение undefined

/* Также не относиится ни к одному типу данных. 
Если объявлена переменная и в нее ничего не записан - в ней хранится undefinerd */

let z;
console.log(z);

/* Рекомендуется использовать null для определения пустой переменной, а undefined
будет показателем того, что в переменную ничего не записывалось
*/ 

/*  Тип данных объект - object - особенный тип данных, который может хранить 
все типы данных сразу

Тип символ (symbol) используется для создания уникальніх идентификаторов переменніх

Тип данных typeof - нужен для определения типа данных аргумента, либо данных хранящихся
в переменной
 */
console.log(typeof 0); // number
console.log(typeof z); // undefined

console.log(typeof null); // это ошибка в программировании

// Строковое преобразование

let value =true;
console.log(typeof value); // boolean

value = String(value); //Функция String преобразрвывает все в строку переданные данные
console.log(typeof value); // string ("true")

//Числовое преобразование

// Числовое преобразование срабатывает, когда в выражении участвуют числа или происходит математическое действие

console.log('6' / '2');
//  получится 3

let text = '123';

let number2 = Number(text);
console.log(number2);

console.log(Number('привет')); // NaN

/*
undfined > NaN
null > 0
true > 1
false > 0
 */

console.log(Number('    123    ')); //123
console.log(Number('123n')); // Nan
console.log(1 + '2'); // 12
// Если один из аргументов строка, то произойдет конкатинация (присоединение) строк

// Логическое преобразование

/*
Значение типа "пустые, 0, пустая строка, null, undefined? NaN - false
все остальные значения - true
 */

 console.log( Boolean(1())); // true
 console.log( Boolean ('0')); // true
 console.log(Boolean(0)); // false
 console,log(Boolean(" ")); // true

 //  Операторы

 /*
 Операнд - то к чему применяется оператор
 Унарный оператор -когда применяется только к 1 операнду
 Бинарный опертор - когда применяется к 2 операндам
  */
 let g = 1;
 g = -g; // унарній  минус

п = 2 - 1; // бинарный минус

// Сложение строк (бинарны +)

text = "моя" + "прелесть"; // мояпрелесть

console.log('2' - 1); // 1 (при "-" происходит преобразование к числу)

console.log('6' / 3);
// 2 происходит преобразование к числу

// Преобразование к числу, унарный +

number = 1;
console.log(+number); // 1 (не влияет на положительное число)

number = -1;
console.log(+number); // -1

console.log(+true); // 1 (произойдет преобразование к числу)
console.log(+''); // 0 (не влияетна положительное число)

console.log(+"число"); // NaN не влияет на положительное число

let apples = "2";
let oranges = "4";
console.log(apples = oranges); //24
console.log(+ apples + +oranges); //6





