// Оператор присваивания (=)

let x = 2 * 3 - 1; // 5

let a, b, c;

a = b = c = 2 + 2; // 4

let z = 3 - (a = b + 1); // -2

// Оператор = возвращает значение, а не только присваивает.

// Оператор остатка от деления (%)

console.log( 5 % 2 ); //1
console.log( 8 % 3 ); //2
console.log( 6 % 3 ); //0


// Возведение в степень (**)

console.log( 2 ** 2 ); // 4
console.log( 2 ** 4 ); // 16

console.log( 4 ** (1/2) ); // 2


// Инкремент/декремент

// Инкремент увеличивает на 1 (++)

let counter = 2;
counter++;
console.log( counter ); // 3

// Декремент уменьшает на 1 (--)

counter--;
console.log( counter ); //2

// Инкремент/декремент можно использовать только на переменной!

/*
    Эти операторы могут быть расположены не только после переменной, но и до.
    Расположенные после называются - 'постфиксная форма';
    Расположенные до - 'префиксная форма';
*/

let counter2 = 1;
let number = ++counter2;

console.log(number); // 2

let counter3 = 1;
let number2 = counter3++;

console.log(number2); // 1

console.log(counter3); //2



// Сокращенная арифметика

let n = 5;
n = n * 5;
n *= 5; // Скращенное умножение

/*
-=
+=
*=
/=
%=
*/

let m = 2;
m *= 3 + 5;

console.log(m); //16

// Оператор запятая (,)

let g = (1 + 2, 3 + 4); //7



// Операторы сравнения

// Оператор больше\меньше (>  <)

console.log( 2 > 1 ); // true

// Операция сравнения всегда выозвращает логическое значение (булевое)

// Оператор больше\меньше или равно

console.log( 10 >= 10 ); // true

// Оператор равенства (==)

console.log( 5 == 10 ); //false

// Оператор НЕ равно (!=)

console.log( 5 != 10); // true


// Любая операция сравнения возвращает результат

let result = 5 > 4;
console.log(result);  // true


// Сравнение строк

// Сравнение строк происходит по приниципу посимвольного сравнения. 

console.log( 'Я' > 'A' ); //true

console.log( 'Кот' > 'Код'); // true

console.log( 'Сонный' > 'Сон'); // true



// Сравнение разных типов

// при сравнении разных типов JS приводит каждый из них к числу.

console.log( '2' > 1 ); // true

console.log( '01' == 1 ); //true

console.log( true == 1 ); // true



// Строгое равенство (===)

console.log( true === 1 ); // false


// Есть также оператор стогого неравенства !==

/*
 Оператор равенства == не различает 0 от false и пустую строку от false
*/


// Сравнение с null и undefined
console.log( null === undefined ); //false
// Они не равны т.к. у них разные типы

console.log( null == undefined ); //true


// Странный результат сравнения null и 0

console.log( null > 0 );// false
console.log( null == 0 );// false
console.log( null >= 0 );// true

// При равенстве null и undefined - ни к чему не приводятся, они равны друг другу
//и одновременни ни равны ничему.


// Несравнимое значение undefined

console.log( undefined > 0 ); //false
console.log( undefined < 0 ); //false
console.log( undefined == 0 ); //false




// Взаимодействие с пользователем

alert('Привет');

/* 
Модальное окно - это информационное окно, которое появляется поверх конетна
и не позволяет с контентом взаимодействовать, пока оно открыто.
*/

//prompt(заголовок, значение_по_умолчанию);

/*
 prompt - модальное окно, которое запрашивает у пользователя ввести данные.
 В результате подтверждения эти данные можно записать в переменную.
 Форма вернет null, если пользователь нажал Отмена или закрыл.
 Для кроссбраузерности желательно указывать значение по умолчанию хотябы пустое.
*/

let text_from_user = prompt('Сколько Вам лет?', '18');
console.log(text_from_user);


/*
confirm - модальное окно, которое спрашивает пользователя Да\Нет. И в результате
возвращает true\false.
*/
let question = confirm('Сегодня суббота?');

console.log(question);


// Оператор ЕСЛИ (if)

if( question == true ){
    console.log( 'Верно');
}else{
    console.log( 'Не верно');
}

let d = null;

if( d ){
    /*  Все что происходит внутри скобок if перед проверкой приводится 
      к булевому значениею.
    */
   console.log('123');
}


// Несколько условий else if

let year = 2016;

if(year < 2016){
    console.log('Слишком рано');
}else if (year > 2016) {
    console.log('Слишком поздно');
}else{
    console.log('Верно');
}

/*
if(){
}else if(){
}else if(){
}else{
}
*/



// Условный оператор (?) - тернарный оператор

let accessAllowed;
let age = 18;

if( age >= 18 ){
    accessAllowed = true;
}else{
    accessAllowed = false;
}

console.log(accessAllowed);


/*
    let result = условие ? значение1 : значение2;
*/

accessAllowed = (age >= 18) ? true : false;




// Несколько операторов '?'

let message = (age < 3) ? 'Здравствуй, малыш!' :
              (age < 18) ? 'Привет' :
              (age < 100) ? 'Здравствуйте' :
              'Какой необчный возраст!';
        
console.log(message);


// Оператор ИЛИ ( || )


// Оператор ИЛИ находит первое истинное значение. (Он запинается на истине)

let items = 9;

if( items > 10 || items < 10){
    console.log('Не верно');
}else{
    console.log('Верно');
}


console.log( null || 1 ); // выведет 1 т.к. 1 это true
console.log( 1 || 0 ); // выведет 1, т.к. запнулся на истине

let r;

false || (r = 1);

console.log(r); //1



let j = false || false;

console.log(j);


// Логический оператор И (&&)

// Оператор И находит первое ложное значение (Он запинается на лжи)

console.log( true && true ); // true
console.log( false && true ); // false
console.log( false && false ); // false
console.log( true && false ); // false

let hours = 12;
let minutes = 30;

if( hours == 12 && minutes == 30){
    console.log('Пора обедать');
}
