'use strict';

// НАСЛЕДОВАНИЕ КЛАССОВ

class Animal {
    constructor(name) {
        this.speed = 0;
        this.name = name;

    }  

    run(speed){
        this.speed +=speed;
        console.log( `${this.name} бежит со скоростью ${this.speed}` );
    }
    stop() {
        this.speed = 0;
        console.log( `${this.name} стоит`);
    }

}

let animal = new Animal(`Кот`);
animal.run(100);
animal.stop();

/*
class Rabbit extends Animal{
    constructor(name, earLength){
        
        super(name);
        this.earLength = earLength;
    }
    hide(){
        console.log(`${this.name} прячется`);

    }
        
    }
    stop() {
        super.stop();
        this.hide();
    }
}

let rabbit = new Rabbit('Роджер');
rabbit.hide();

rabbit.run(10);
*/

// Преобразование методов

//rabbit.stop();

// super - не доступен в стрелочных функциях

// Переопределение конструктора

// let rabbit2 = new Rabbit(`Нафаня`, 10);

// rabbit2.stop();

//Статические свойства и методы

class User {
    static staticMetod(){
        console.log( this === User );
    }
}

class User2 {

}

User2.staticMetod = function (){
    console.log( this === User2 );
}

class Article {
    constructor(title, date){
        this.title = title;
        this.date = date;
    }

    static publisher = 'Иван';

    static compare(articleA, articleB){
        return articleA.date - articleB.date;
    }

    static createToday(){
        return new this ('Сегодняшний дайджест', new Date());
    }
}

let artticles = [
    new Article ('HTML', new Date(2019, 1, 1)),
    new Article ('CSS', new Date(2019, 0, 1)),
    new Article ('JS', new Date(2019, 11,1))
];

artticles.sort(Article.compare);

console.log(artticles[0].title);

let article = new Article('Статья', new Date(2020, 1, 1));

let daigest = Article.createToday();

/* 
    - Статическая функция - функция не конкретной статьи (экземпляра класса), а функция всего класса



*/


// Статические свойства

console.log( Article.publisher );

Article.author = 'Петр';

/* 
    Наследование статических свойств и методов

    При наследовании все статические объект доступны наследнику.



*/

// Приватные и защищенные методы и свойства

/* 
    1) Публичные - доступны отовсюду, из вне. Они составляют внешний интерфейс.
    2) Приватные - доступные только внутри класса. Они нужны для внутреннего интерфейса.
    3) Защищенные поля не реализованы в JS, поэтому их эмулируют


*/

class CoffeMachine {
    _waterAmount = 0;

    set waterAmount(value) {
        if (value < 0 ){
            throw new Error('Отрицательное количество воды');
        }
        this._waterAmount = value;
    }

    get waterAmount(){
        return this._waterAmount;
    }

    get power(){
        return this._power;    
    }

    constructor(power) {
        this._power = power;
        console.log( `Кофеварка создана, мощность: ${power}` );
    }
}

let coffeMachine = new CoffeMachine(100);

coffeMachine._waterAmount = 200;

let coffeMachine2 = new CoffeMachine(100);
// coffeMachine2.waterAmount = -10;

console.log(coffeMachine._waterAmount);

// Свойства только для чтения "power"

coffeMachine2.power = 20;













