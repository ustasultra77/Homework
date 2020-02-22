'use script';

// Свойство узлов

/* 
    HTMLInputElement - это класс для элементов форм
    HTMLElement - общий класс для всех типов
    EventTarget - класс событий
    Node - класс узлов
    ....
    Для того, чтобы узнать имя класса, можно обратиться к конструктору и вызвать имя (name)
    
    




*/
console.log( document.body.constructor.name); // HTMLBodyElement

// console.dir(element) - отличается от console.log тем, что выводит DOM-объект, а не DOM-дерево

console.dir(document.body);

// innerHTML - позволяет получить или записать контент, который хранится внутри элемента.
// Получаемые данные будут со всеми html тегами, но в текстовом типе данных

console.log( document.body.innerHTML );

document.body.querySelector('div').innerHTML = '<b>Другой текст</b>';

document.body.querySelector('div b').innerHTML = '<b>Другой текст</b>'; // автоисправление ошибок

//  если записать через innerHTML скрипт <script>.....</script> то он не выполнится,
// но станет часть html документа.
// Запись через знак += сработает как просто через =, т.е. контент заменится.
// outerHTML - позволяет получить или перезаписать контент вместе с элементом к которому мы обращаемся

document.body.querySelector('p').outerHTML = '<p class="paragraph">Новый абзац</p>';

document.body.querySelector('p').outerHTML = '<p class=\'paragraph\'>Новый абзац</p>';// то же самое

/*
    nadeValue\ data - содержимое текстового узла (комментария) 
*/

let parag = document.querySelector('.paragraph');

let comment = parag.nextSibling.nextSibling;
console.log( comment.data );

/* 
    textContent - позволяет получить контент внутри элемента за исключением всех тегов
*/

console.log( document.body.textContent);// получили все узлы с пробелами!!!!!

// Если вам нужно получить именно текст, то лучше использовать textContent, а не innerHTML
// Если передать в textContent  теги, то они выведутся как текст

document.querySelector('.text').textContent = '<b>жирный</b>';

document.querySelector('.hide').hidden = true;

// Другие свойства
/* 
    value -  свойство поддерживаемое тегами input \ select \ textarea

    href -  свойство ссылок для задания адреса

    Полный список свойств можно посмотреть, если обратиться к элементу и вывести
    его через console.dir() либо на сайте в полной спецификации
    html.spec.whatwg.org/#htmlinputelement

*/

//DOM - свойства
/* 
    Создание собственного свойства
*/
document.querySelector('.text').myData = {
    'name' : 'Some text',
    'descr' : 'Text about...'
};
console.log( document.querySelector('.text').myData.descr);

/* вернет коллекцию объектов
     в свойства можно записывать любые данные
*/

/*  HTML - атрибуты
    elem.hasAttribute(name) - проверка на наличие атрибута у элемента (true\false)
    elem.getAttribute(name) -  получение значение атрибута
    elem.setAttribute(name, value) -  устанавливает значение атрибута
    elem.removeAttribute(name) - удаление атрибута
    
    также можно получить все значения атрибута элемента через
    elem.attributes -  вернет коллекцию объектов

*/
console.log( document.querySelector('.text').getAttribute('about') );

// 1) Имена атрибутов регистронезависимы (например: about и AbOuT  тоже самое)

// 2) Имена свойств регистрозависимы (свойство about About отличаются)
// 3) Свойствам можно присваивать любые значения
// 4) У атрибутов значения это всегда строка

// Взаимосвязь атрибутов и свойств при их изменении

/* 
    При изменении СТАНДАРТНОГО атрибута с именем, таким же как у свойствах значение свойства будут перезаписаны
    если изменяется значение свойства с именем как у атрибута, оно тоже запишется.
    Исключением является атрибут value - если изменить значение атрибута, то свойство перезапишется, а в 
    обратную сторону нет.

*/
document.querySelector('.text').id = 'Saturday';
console.log( document.querySelector('.text').getAttribute('id') );

document.querySelector('.inputText').setAttribute('value', 'Hello');// перезапишем значение на Hello
document.querySelector('.inputText').value = 'Пока';// Попытаемся перезаписать свойство

console.log(document.querySelector('.inputText').getAttribute('value') );// в атрибуте осталось старое значение

// Типизирование DOM-свойств

/* 
    Все свойства могут хранить любые типы данных, а атрибуты только текст. Но есть исключения
    Например, свойство checked у input - оно хранит булевое значение true\false

     Свойство style - это объект, но в атрибуте хранится как строка
     Свойство href у ссылки - оно всегда хранит полную ссылку с http://...домен...

*/
document.querySelector('.text').style.fontSize = '25px';

// Нестандартные элементы

/* 
    Нестандартные атрибуты используются обычно для передачи каких-то данных между html и css.

    Нестандартные атрибуты, которые начинаются со слова "data-.." зарезирвированы программистами и они 
    доступны в свойстве dataset



*/
console.dir( document.querySelector('.link') );




