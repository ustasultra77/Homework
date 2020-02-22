'use strict';

/*  АВТОИСПРАВЛЕНИЕ 

Браузер автоматически пытется закрыть ТЭГи или исправить код, но чаще всего это будет неправильно
Это происходит потому что, DOM-структура должна быть правильной, все ТЭГи должны закрываться


ДРУГИЕ ТИПЫ УЗЛОВ

Комментари - они являются тоже DOM-узлами наряду с ТЭГами и текстом
Существует 12 типов узлов, но в основном, мы пользуемся только 4-мя.

1) document - входная точка в DOM
2) узлы  -єлементы (ТЄГи) - основные узлы
3) текстовые узлы - содержат текст
4) комментарии - иногда в них можно хранить то, что не будет видно в html,
но можно использовать в js.

*/

/* 
    НАВИГАЦИЯ ПО DOM-элементам

    parentNode - родительский узел.

    previousSibling - предыдущий сестринский узел
    nextSibling - следующий сестринский узел

    childNodes - дочерние узлы (возвращает коллекцию, которая содержит список всех детей,
         включая текстовые узлы)
    firstChild - первый дочерний узел
    lastChild - последний дочерний узел

*/

let childOfDiv = document.body.childNodes;
console.log( childOfDiv);

/* 
        DOM - коллекция

    Элементы, клторые мы получаем похожи на массив, но на самом деле это урезанные
    коллекции, которые поддерживают только функцию перебора

    Для перебора мы используем for...of

    Методы массивов работать с такими коллекциями не будут!
*/

for (let node of childOfDiv){
    console.log(node);
}

/* 
1) DOM - коллекция только для чтения! Нельзя обратиться к узлу и поменятть его содержание
таким способом
childNodes[1]='123'

2) Нельзя использовать цикл for...in  для перебора

*/

/* 
    СОСЕДИ И РОДИТЕЛИ

    body - является "следующим" или "правым" соседом для head

    head является "предыдущим"  или "левым" соседом для body

    html - является родителем для head, body
*/
 /* 
 НАВИГАЦИЯ ТОЛЬКО ПО ЭЛЕМЕНТАМ

 В ситуации, когда нам нужно обращаться только к элементам (исключая текст/комментарии)
 нужно использовать теже команды, только с приставкой Element

 parentElement
 previousElementSibling
 nextElementSibling
 children
 firstElementChild

 */

 let bodyChildrens = document.body.children;
 console.log(bodyChildrens);  

 /* 
 getElementById или просто id

 */

 let h1title = document.getElementById('mainTitle');

 console.log(mainTitle); // так лучше не обращаться

/* let mainTitle = '123';
 console.log(mainTitle);
*/

/* 
    elem.querySelectorAll(css) - вернет все элементы внутри elem, которые удовлетворяют селектор
    переданный как css
    Также в селекторе css  поддерживаются и псевдоэлементы\псевдоселекторы
*/

let lastli = document.querySelectorAll('.list li:last-child');

console.log(lastli);

for (let elem of lastli){
    console.log( elem.innerHTML);
}

/* 
   elem.innerHTML - функция которая возвращает содержимое элемента в формате HTML 

   elem.querySelector(css) - вернет только 1 элемент, который удовлетворяет селектор переданный
   как  css. Это то же самое, если бы написали elem.querySelectorAll(css)[0]

   Преимущество querySelector - он быстрее, его нужно использовать, когда вы уверены, что такой элемент либо один,
   либо вам нужен только первый элемент из возможных

*/

/* 
    Метод matches

    Он ничего не возвращает, а только проверяет есть ли элемент, который 
    удовлетворяет селектор.
    Этот метод удобен, если нам нужно найти особый элемент среди списка элементов при переборе
*/

if (h1title.matches('#mainTitle')){
    console.log('Все верно - заголовок имеет id mainTitle');
}
/* 
    Метод elem.closest(css) - ищет б(лижайшего предка, который удовлетворяет переданный селектор
*/

let elemList = document.querySelector('.list'); // Получаем элемент с классом .list
let elemListParent = elemList.closest('.box'); // Получаем родителя.list с классом .box

/* 
Методы получения элементов, которые устарели:

elem.getElementByTagName(tag) - получить все элементы с указанным тегом

elem.getElementByClassName(className) - получить все элементы с указанным классом

document.getElementsByName(name) - получить все эелементы с указанным атрибутом name

*/

/* 
        Отличие querySelector от старых функций -  он возвращает не живую коллекцию
        Живая коллекция-это коллекция, которая изменяется с ходом изменений в коде.
        Т.е. если мы получили, например, список элементов и потом удалили (изменили) один из них, то в живой
        коллекции будет все с изменениями, а в не живой сохранится состояние на момент получения элементов
*/

let table1 = document.querySelector('.table tbody');
console.log(table1);


let i = 0;


for( let tr of table1.querySelectorAll('tr')){
    let tdOfTr = tr.querySelectorAll('td')[i];

    tdOfTr.style.backgroundColor = 'red';

    i++;
}
