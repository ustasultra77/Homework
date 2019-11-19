"use strict";
//Возврат значения функции (return)

function sum(a, b){
    return a + b;
}
console.log( sum(10, 15));

let  resultSum = sum(8, 6);
console.log( resultSum); // 14

/*  
При срабатывании return происходит тоже что и при break, но дополнительно
ущу возвращает значение, переданное через return
*/

function chackAge(age){
    if(age > 18){
        return true;
    }else{
        return false;
    }
}
console.log( chackAge (22)); // true
/* 
return можно и спользовать и без значения. Тогда он сработает как break
( просто звершит выполшнение функции 

    Функция с пустым return  врнет underfined.
    Функция без return  врнет тое underfined.

*/
function doNothing(){}

console.log( doNothing()); // underfined

function doNothing2(){ return;}

console.log( doNothing2()); // underfined
// НИкогда не добавлять  перенос строки между  return изначением


/* 
Именование Функций
1) В имени функции должно содержаться действие и имя того над чем производится действие
Например: showMessage, getAge, checkPremission


1) Функцию необходимо создавать с условием, что она выполняет какое-либо одно действие, даже если 
функции будут выполняться вместе
2) В имени функции должно содержаться действие и имя того над чем производится действие
Например: showMessage выпоняет две другие функции showName and showText
- Функция Стирать будет содержать функции: Залить_воду/ засыпать_порошок/вращать_барабан/слить_воду

Нужно комментировать действие, происходящее в функциях, описывающее этапы работы,
 принимаемые значения, возвращаемые значения...

*/

// Function Expression (функциональное выражение)

/* 
Синтаксис функций, записываемый ранее называется Function Declaration ( объявление функций)
*/

let sayHi = function(){
    console.log('Privet');
};
sayHi(); // Privet
console.log(sayHi ); // выведет тело функции

let copySayHi = sayHi; // в переменную запишется тело функции

copySayHi(); // Теперь эта функция работает так же , как sayHi

// Функции - коллбеки

/* 
Процесс передачи функции как значения, называв. коллбек
*/

function ask(question, yes, no){
    if(confirm(question)){
        yes();
    }else{
        no();
    };
};

function showOk(){
    console.log('Вы согласны?');
};
 function showCancel(){
     confirm.log('Вы  отменили выполнение ');
 }
 ask( 'Вы согласны?', showOk, showCancel);




 // Функции, передаваемые в другую функцию - это значения, представляющие "действия"

 // Различия  Function Expression , Function Declaration

 /* 
  Function Expression создается, когда выполнение доходит до него, и в последствии может использоваться.
  Function Declaration может использоваться во всем скрипте.

   При сторогом режиме "use strict"; когда Function Declaration находится в блоке {...}
   эта функция доступна только внутри этого блока, но не снаружи него

 */

 let welcome;

let age2 = 18;
 if(age2 >= 18){
     welcome = function(){
         console.log('Добро  пожаловать');
     }
     welcome();
 }
 // welcome(); - будет ошибка - функция доступна только внутри скобок


 let copyWelcome;
 if(age2 >= 18){
    copyWelcome = function(){
        console.log('Добро  пожаловать');
    };
    copyWelcome();
}
copyWelcome();



let age3 = prompt('Сколько вам лет?', 18);

let welcome2 = prompt(age3 < 18) ?
 function(){console.log('Privet');} :
 function(){console.log('Здравствуйте');};

 welcome2();

 // Функции стрелки (стрелочные функции)

 let summ = (a, b) => a + b;
 console.log(summ(10, 90)); // 100

 // Тело функции сразу возвращает значение (встроенный return);

 // Если используется только одние аргумент, то можно не писать скобки 

 let doubel = n => n*2;
 console.log( doubel(3)); // 6

 // Если аргументов нет, тоуказываются пустые скобки.

 let sayHello = () => console.log('Hello');
 sayHello(); // Hello

 // Многострочные  стрелочные функции


 let summ2 = (a, b) => {
     let result = a + b;
     return result; // в многострочном варианте return  необходимо указывать
 };
 console.log(summ2(4,33)); // 37

 //  Тип данных: Объекты 

// объявление объекта (создание)

 let user = new Object();

 let user2 = {}; // Литеральная нотация или литерал объекта

let user3 = {
    name: 'Иван',
    age: 30,
    height: 180
};
// Свойства объекта также называют полями объекта

// Получение или обращение к свойствам объекта

console.log( user3.name); // Иван
console.log( user3);

// Добавление свойства в объект

user3.isAdmin = true;
console.log( user3 );

// Удаление из объекта

delete user3.age;
console.log(user3);

// Если название свойства состоит из несколких слов, то название нужно брать в кавычки

let user4 = {
    name: 'John',
    'home address': 'Poltava'
};
console.log(user4['home address']); // Poltava

/* 
Чтобы обратиться к свойству с названием из более чем 1 слово, необходимо солюдать следующий синтаксис:
["название_свойства"]
Этот способ также позволяет обратиться к свойству , передава вместо имени переменную

*/

let option_name = "home address";
console.log(user4[option_name]); //Poltava

// Вычисляемые свойства

let fruit = prompt('какой фрукт купить?', "apple");

let bag = {
    [fruit]: 5 // имя свойства будет взято из переменной fruit
};
 
console.log( bag.apple );
console.log(bag);

// Проверка на существование свойства

 let user5 = {
     age:19
 };

 console.log(user5.name === undefined ); // true
 console.log('name' in user5); //false
 console.log('age' in user5); //true

 // Цикл  for...in

 /* 
 Необходим для перебора свойств объекта
  for( key in object ){

  }
   key - переменная, куда на каждой итерации будет попадать имя текущего свойства
   object - имя объекта
 */
 for( let key in user3){
     console.log(key + ': ' + user3[key]);
 };

 


