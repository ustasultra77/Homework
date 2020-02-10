'use strict';

// Флаги и дискрипторы свойств

/* 
    writable - усли оно true, то свойство можно менять, иначе оно только для чтения
    (по-умолчанию true)
    enumerable - eсли true, свойство перечисляется в циклах, в противном игнорируется циклом ( по умолчанию true)
    configurable - если true? свойство можно удалить и изменять атрибуты 
    writable\ enumerable, иначе нельзя.




*/

let obj = {
    'name' : 'Иван',
    'age' : 55,
    'access' : 'admin'
};

/* 
    Object.getOwnPropertyDescriptor(obj, propertyName) - получает параметры 
    writable,   WEC
*/
let descriptor = Object.getOwnPropertyDescriptor(obj, 'access');
console.log (descriptor );

/* 
    Object.defineProperty (obj, propertyName, descriptor)
*/

Object.defineProperty(obj, 'access', { writable : false, enumerable : false});

descriptor = Object.getOwnPropertyDescriptor(obj, 'access');
console.log( descriptor);
let pi = Math.PI;


/* 
    Object.defineProperties( obj, {
        prop1 : {descriptor}
    });
    Функция позволяет задать дескрипторы сразу нескольким свойствам объекта


*/

descriptor = Object.defineProperties( obj, {
    name : {writable : false},
    age : { enumerable : false, writable : true}
});
/* 
    Object.getOwnPropertyDescriptors(obj)
    Получить сразу все дескрипторы всех свойств объекта
*/

descriptor = Object.getOwnPropertyDescriptors(obj);
console.log( descriptor);

/* 
    Object.preventExtensions(obj) - запрещает новые свойства в объект.

    Object.seal(obj) - запрещает добавлять / удалять свойства. Устанавливает configurable false для всех свойств

    Object.freeze(obj) - Запрещает удалять/добавлять/менять

    Методы проверки

    Object.isExtension(obj) - возвращает false, если запрещено добавление совйств
    Object.isSealed(obj) -  возвращает true, если запрещено добавление/удаление
    Object.isFrozen(obj) - возвращает true, если запрещено добавлять\удалять\изменять

*/

// Геттеры и сеттеры (get \ set) - свойства-аксессоры

let user = {
    'name' : "John",
    'surname' : 'Smith',

    get fullName() {
        return `${this.name} ${this.surname}`;
    },
    set fullName(value) {
        [this.name, this.surname] = value.split(' ');
    }
};

console.log( user.fullName);

user.fullName = 'Иван Кочерга';
console.log( user.fullName );

/* 
    1) get и set не имеют дескриптора writable, но имеет enumerable \ configurable
    2) get - функция без аргументов, которая спабатывает при чтении свойства
    3) set - функция, принимающая один аргумент, вызываемая при присвоении свойства

*/

let user2 = {
    get name() {
        return this._name;
    },
    set name(value) {
        if( value.lenght < 4 ) {
            console.log('Имя слишком короткое');
            return;
        }
        this._name = value;

    }
};

user2.name = 'Иван';
console.log(user2.name);

user2.name = ' ';
console.log(user2);

localStorage.setItem('user', JSON.stringify(user));

console.log( JSON.parse(localStorage.getItem('user')) );

  



