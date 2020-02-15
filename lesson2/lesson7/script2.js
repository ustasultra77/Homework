'use strict';


// Браузерное  окружение

// BOM - Browser Object Model

/* 
    объект navigator- хранит данные о браузере и операционной системе

*/

console.log(navigator.userAgent);
console.log(navigator.platform);

/* 
    Объект location - в нем хранится текущий url. также мы можем с помощью location
    перенаправить нашу страницу по новому адресу
*/

console.log(location.href);


/*
if( confirm('Перенаправить в гугл?') ){
    location.href = 'https://google.com.ua';
}
*/
console.log(history);

/* 
    window.history.back  - дает возможность вернуться на 1 страницу назад
    window.history.forward() - вперед на 1 страницу
*/

// DOM() (Document Object Model)

document.body.style.background = 'red';
setTimeout(() => document.body.style.background = '', 1000);

// DOM - дерево

/* 
    Т.к. ДОМ-дерево это объектная модель документа, каждый HTML - тег это объект
    Вложенные теги являются "детьми" родительского элемента и тоже являются объектами
    
    Текстовые узлы присутствуют у всех тегов, но внути head и html они игнориются
    Также пробелы и переводы строк перед head игнориются

    2) Если мы записываем что-либо после закрывающегося тега </body>, браузер автоматически перенесет 
    это внутрь body (так требует спецификация html)

    */