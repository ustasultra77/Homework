"use strict";

// логический оператор НЕ (!)
let result = true;

console.log(result); //true

console.log(!result); //false

/*
1. В начале он преобразовывает к булевому значению.
2. Переворачивает значение наоборот.
 */

 console.log( !false ); //  true

 // !! Двойной восклитательный знак исползуется дл преобразрвания к булевому значению

 console.log( !!'non-empty string'); // true  Boolean('non-empty string')

// Приоритет самый большой среди логических операторов. Он будет выполняться
// перед оператором &&, ||

if( !result === false){ //false (!result раавно false)
    // выполнится

}

// циклы while

// Используются для повторения однотипных действий

let number = 0;
while (number < 10){
    console.log(number);
    number++;
}

/*
    Итерация - одно выполнение тела цикла
 */

 let number2 = 3;

 while ( number2){
     console.log(number2);
     number2--;
 }

 //цикл do...while

 /*
 То же самое, что while , только проверка выполняется в конце итерации
    Сначало выполняется тело цикла, потом выполняется проверка
     */ 

     let number3 = 0;
     do{
         console.log(number3);
         number3++;
     }while (number3 < 3);

// Тело цикла выполнится хотя бы 1 раз

// Цикл for

for(let i = 0; i <3; i++){
console.log('коробка' + i);
}

/* 
for (начало; условие; шаг){...тело цикла...}
1. Начало - выполняется 1 раз в начале Цикла
2. Условие проверяется перед кажлой итерацией
3. Шаг выполняется после каждой итерации
4. Тело цикла выполняктся бесконечно пока условие true

*/
let b;
for(b = 0; b <3; b++){

}
console.log(b);


for( let d = 0, g = 0, k = 0; d <3; d++){   

}
// console.log(d); - переменные объявленные внутри скобок не видны за их пределами

// Посмотреть раздел "Пропуск частей for" !!!

// Прерыварие цикла (break)
let number4 = 0;

while(true){
    let value = +prompt('ввести число', '');
    if(!value) {break;}
    number4+=value;
}
console.log(number4);

//Переход к слудующей итерации (continue)

/* 
continue - это облегченная версия break. При ее віполнении цикл не останавливается,
а просто переходит к следующей итерации.
*/
for(let i = 0; i < 10; i++){
    if(i % 2 == 0){continue;}
    console.log(i);
}
/* 
break, continue  нельзя использовать в тернарном операторе
*/


// Конструкция switch

/* 
switch - заменяет собой сразу несколько if
*/
let n = 1
let number5 = 4;
switch(number5){
    case 3:
        console.log('Маловато');
        break;
    case 4:
        console.log('в точку');
        break;
    case 5:
    case n + 4:
        console.log('перебор');
        break;
    default:
        console,log('нет таких значений');

}

/* 
 case - записанные, один под другим называются группировкой кейсов.
 обычно они выполняют одно и то же действие.
 Значение в switch сравниваются по строгому равенству!!
 */

 // Функции

 function showMassege() {
    console.log('Привет');
 }

 showMassege();
 showMassege();

 // Локальные переменные фуекции

 //Это переменные, объявленные в самой функции. Эти переменные не доступны из вне

 // Внешние переменные
 // У функции есть доступ ко всем внешним переменным

 let userName = 'Петр';
 function showMassege3(){
     console.log('Привет' + userName);
 }
 showMassege3();

 /* 
 Помимо доступа к переменным  - все что произойдет с переменной внутри сохранится
 Т.е. у функции есть возможность изменять переменные
 */
function showMassege4(){
    userName = 'Alex';
    console.log('Привет' + userName);
}
console.log(userName); // Петр
showMassege4();
console.log(userName); // Alex

let user = 'Andrei';
function showMassege5(){
    let user = 'Валерий';
    console.log('Привет' + user);
}
console.log(user); // Andrei
showMassege5(); // Привет Валерий
console.log(user); // Andrei

/*
Переменные объявленные внутри функции являются самостоятельными и не связвны с внешними */

// Параметры функции
let from = 'Vika';
function showMassege6(from, text){
    console.log(from + ': ' + text)
}

showMassege6('Ana', 'Privet');
showMassege6('Ana', 'Как дела?');

/* 
Параметры видны внутри функции как локальные переменные,
меняя их мы не меняем внешнюю переменную
*/

// Параметры по умолчанию

function showMassege7(from, text = 'текст не добавлен'){
   // text = text || 'текст не добавлен';
    console.log(from + ': ' + text);
}

showMassege7('Виталий'); // Виталий текст не добавлен
showMassege7('Виталий', "Привет"); // Виталий: Привет