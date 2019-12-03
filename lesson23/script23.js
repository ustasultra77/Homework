'use script';

// Oъекты - Копирование по ссылке

let obj1 = {
    name: 'Иван',
    age: 25,
};
let admin = obj1;
admin.name = "Alex";
console.log(obj1.name); // Alex

// Клонирование объекта

let clone = {};
/*for(let key in obg1){
    clone[key] = obj1[key];
}

// Objekt.assing - скдеивание объектов

 // let obg2 = {name: }



Object.assign(obj2, premission1, premission2);
console.log(obj2);
*/


// Длина массива (lenght)

let fruits = [];
fruits[123] = 'Яблоко' ;

console.log(fruits.length);

let arr3 = [1,2,3,4,5,5,10];

arr3.length = 2; // обрежется массив до 2 элементов и обрезанные элементф пропадут бесследно
console.log(arr3);

// Создание массива через new Array()

let arr4 = new Array('Яблоко', "Груша", "Апельсин");
let arr5 = new Array(4); // Создасться пустой массив на 4 элемента

// Многомерные массивы

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(matrix[1][1] ); // 5

// Преобразование массива в string

let arr6 = [1, 2, 3];
console.log (String(arr6)); // '1,2,3'

console.log( [] + 1); // '1'
console.log( [1] + 1); // '11'
console.log( [1,2] + 1); // '1,21' массив при сложении преобразовывается в текст

/* 
С массивами работают те же фуекции, что и с объектами
push \ pop \ shift \ unshift

*/

// Функция массива splice - функция удаления из массива

let arr7 = ['1', 'hello', 'name']

arr7.splice(1, 1); // первым параметром передаем с какого элемента удалить, вторым-сколько удалить
console.log(arr7);

let deleted = arr7.splice(0, 3, 'Яблоко', "Груша");
console.log(arr7);
 //в переменную deleted запишутся удаленные элементы

 console.log(arr7);

 console.log(deleted);

 arr7.splice(1, 0, 1, 3, 5);
 console.log(arr7);

 // Метод slice(start, end) - возвращает новый массив и копирует в него элементы начиная от start до end

 let arr8 = ['h', 'e', 'l', 'l', 'o'];

 console.log(arr8.slice(1,3) );

 // Метод concat - соединяет массивы в один

 let arr9 =[];
 console.log( arr9.concat(arr8, arr7, 12));

 // Перебор массива forEarch - позволяет запустить функцию для каждого отдельного элемента массива
/* 
    item - это текущий элемент итерации
    index - порядковый номер итерации
    array - это массив с которым мы работаем
*/


 arr7.forEarch(function(item, index, array){
    console.log(index + ' ' + item);
 });

 // Поиск в массиве

 // indexof / lastindexOf / includes

 /* 
 Работают аналогично с текстом, но вместо символов перебирают значения элементов массива

 */

 console.log(arr7.indexOf(1) ); //1
 console.log(arr7.indexOf(3) ); //2

 // indexOf(item, from) - ищет значение item, начиная с индекса from. Возвращает индекс, либо -1 если не найдено

 // lastIndexOf - то же самое только с конца
 // includes(item, from) - ищет item, начиная с from, и возвращает true, если не найдено

 console.log( arr7.includes(1) ); // true

 // Дата и время 

 /* 
    Для работы с датой и временем используется встроенный объект 
 */

 let now = new Date();

 console.log(now);

 let jan01_1070 = new Date(0);

 console.log(jan01_1070);

 // отсчет времени идет от 01.01.1970

 let jan02_1970 = new Date(24 * 3600 * 1000); //  02.01.1970
 console.log(jan02_1970);

 // new Date принимает миллисекунды
// new Date(datestring) -  это формат записи 2017-01-26\ 2017-01-26T10:22

// new Date(2011, 10, 5, 12, 20, 40, 565) - год, месяц, день, часы, минуты, секунды, миллисекунды

// Получение компонентов даты

console.log(now.getFullYear()); // выведет полный год

/* 
 getMonth() - выведет месяц от 0 до 11

 getDate() - выведет день месяца от 1 до 31

 getHours, getMinites, getSeconds, getMilliseconds

 getDay - вернет день недели от 0(воскресенье) до 6

 Существуют также аналогичные функции с приставкой UTC - они выведут тщже самоеб только в 9 часовом поясе

 Например: getUTCFullYear()...

 timestamp - это особый вид хранения времени (epochconverter.com  пересчитывает время) в котором сочтаются Дата+ время + часовой пояс

 getTime() - возвращает  timestamp, количество ms  с 1 января 1970 
 getTimezoneOffset() - возвращает разницу в минутах между вашим поясом и UTC+0

 есть также аналогичные функции для установки всех параметров даты и времени с приставкой set

 

*/










