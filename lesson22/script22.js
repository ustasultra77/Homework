'use script';
//  Проверка на бесконечность is Finite\ Проверка на число is Nan

console.log( isNaN(NaN)); // true

// В начале она преобразует к числу переданные данные и потом определяет число ли это

let text = 'Privet';
// concole.log( isNaN(text)); // true

console.log( NaN === NaN);// false

console.log( isFinite('15')); //true

//  Сначала преобразовывают в число переданные данные и потом возвращает true если это обычное число

// Иногда isFinite используется для проверки - нет ли числа в строке

// parseInt parseFloat
// parseInt - отделяет число от текста в строке (чтрока должна еачинаться с числа)
console.log( parseInt('100px')); // 100

// parseFloat - работает также, но сохраняет дробную часть числ


console.log( parseFloat('12.3')); // 12

console.log( parseFloat('12.3.4')); // 12.3

// Если переданный текст начинается с буквы, то функция вернет NaN
console.log( parseInt('a123')); // NaN

/* 
   У parseInt усть еще 2 параметр, в который можно передать систему исчисления в которой записаны
     передаваемые данные 
*/

console.log( parseInt( 'ff', 16)); // 255

// Math.random() - генерирует псевдослучайное число от 0 до 1, не включая ее

console.log( Math.random());
console.log( Math.random());

function getRandom(min, max){
    return( Math.round( Math.random()) * (max - min) + min);
}
console.log( getRandom(1, 10)); //

// Math.max (a,b,c,.... ) \ Math.min( a,b,c,...)

console.log(Math.max(1,2,3,4,5,6,3,0)) // 6

console.log( Math.min(1,2,5,6,3,0)); // 0

// Math.pow(n, power) - возвращает число n, возведенное в степень power

console.log( Math.pow(2,10)); // 1024

// СТроки

let bigtext =`Привет
Как дла?
Хорошо`;

// Спецсимвол

let str = 'hello\nW\`orld';
console.log(str);

/* 
\n - перенос строки
Также спецсимволом являются кавычки слэш
Чтобы вставить в текст спецсимвол, необходимо перед ним поставить \
\uXXXX - для вставки юникод символов

*/

console.log('\u00A9');
console.log( '\u{1F60D}');

// Свойство - Длина строки (length)

console.log( 'aslkjd;alk'.length); // 6
let str2 = 'Hello';
console.log( str2[0] ); // H

console.log( str2.charAt(0)); //H

console.log( str2[str.lrnght-1] ); // 0

/* 
    Если символ под номкером [x] отсутствует, то вернется ubderfined, а в случак chartAt вернется пустая строка

*/

console.log( str2[500]); // underfined

console.log( str2.charAt(5000)); //*

// Строку можно перебрать посимвольно с помощью for...of

for(let char of 'Hello'){
    console.log(char);
}


// Строки неизменяемые - Нельзя поменять значение символа обратившись к нему

/* 
     Изменение регистра
     toUpperCase - переводит в верхний регистр
     toLowerCase - переводит в нижний регистр
*/

// Поиск подстроки
// str.indexOf - ищет подстроку substr в строке str, начиная с позиции pos. И возвращает позицию -1,
// если ничего не найдено

let str3 = 'Widget with id';

console.log( str3.indexOf('Widget')); // 0
console.log( str3.indexOf('widget')); // -1
console.log(str3.indexOf('id')); //1

// У функции есть второй необязательный аргумент, он позволяет указать с какого символа начинается поиск

console.log( str3.indexOf('id',2)); // 12

// Есть также аналогичная функция, только ищет с конца lastIndexOf(substr, possition)

// Функция includes - возвращает true, если в строке есть подстрокаб либо false если нет

console.log( str3.includes('Widget')); // true

// Также есть 2-й необязательный парамерт - задает с какого символа нужно искать

// startsWith() \ endsWith
// Определяет начинается или заканчивается строка определенными символами

console.log( str3.startsWith('Wid')); //true
console.log(str3.endsWith('id')); // true

// Получение подстроки (substring \ substr \ slice)

// slice -  ыозвращает часть строки от start до end, не включая end

let str4 = 'stringify';
console.log( str4.slice(0,5)); // strin

// Если end не указан, вернет строку от  start и до конца

console.log( str4.slice(5)); // 'gify'

// Также можно передать отрицательные значения end , start

console.log( str4.slice (-4, -1)); // 'gif' 

// substring(start, end) - возвращает часть строки между start и  end
// это почти то же, что и slice? только можно задать stsrt больше , чем end

console.log( str4.substring(2,6)); // 'ring'
console.log( str4.substring(6,2)); // 'ring'

// Отрицательные значения не поддерживаются

//  substr(start, lenght) - возвращает часть строки от start длиной в lenght

console.log( str4.substr(2,4)); // 'ring'

//  Значение start может быть отрицательным, тогда начало будет с конца

// codePointAt(pos)

console.log( 'zlklkh'.codePointAt(0)); // 122
console.log( 'Zlklkh'.codePointAt(0)); // 90

// fromCodePoint(code) в объектe string

console.log( String.fromCodePoint(90)); // 'Z'

// Массивы

let arr = new Array();
let arr2 = [];

let fruits = ['яблоко', 'Апельсин','Слива'];
console.log( fruits[1]);

fruits[2] = 'Банан'; // можно замещать элементы

console.log( fruits);
console.log( fruits.length); // Длина массива или количество элементов в массиве

fruits[90] = 'Груша'; // так делать нельзя, поскольку образуется дырка в 87 ячеек
console.log(fruits.length); // 91

console.log(fruits);
fruits[fruits.length] = 'Киви';
console.log(fruits);

// В массив можно складывать любые типы данных

let arr3 = [
    'Яблоко', 
    {name:'Иван'}, 
    true, 
    function(){return true;}, // запятую лучше ставить
];

console.log(arr3[1].name); // Иван

// Метод pop \ push \ shift \ unshift
// push - добавляет элемент в конец массива

arr3.push('privet');

// pop - удаляет элемент последний элемент из массива и возвращает его

let deleted_item = arr3.pop();

console.log(deleted_item);

// shift - удаляет из массива первый элемент и возвращает его

let dleted_item2 =arr3.shift();

// unshift -  добавляет элемент в начало мвссива

arr3.unshift(true);
console.log(arr3);

// Методы push, unshift могут добавить сразу несколько объектоа, если их перечислить через запчтую

arr3.push('Гранат', 'Лайм');

/* 
[1,2,3,4]

[0, 1, 2, 3, 4]
*/

// Перебор элементов массива

 for(let i = 0; i < arr.length; i++);{
     console.log( arr3[i] );
 }

 for(let fruit of arr3){
     console.log(fruit);
 }

 









