'use strict';

//обработка ошибок, try... catch

/* 
    try {
        код ...
    } catch (уккщк){
        обработка ошибки...
    }


    */

    try{
        console.log('запустился код');

        gfhgfhg;

        console.log('конец кода');
    } catch(error){
        alert('возникла ошибка: '+  err);
    }
    
// try ... catch отслеживает ошибки только во время выполнения кода. И не отслеживает синтаксические ошибки.
// также try...catch работает синхронно. Пока не выполнится try, catch не запустится ( в случае ошибки)
// По отношению ко всему коду или коду записанному в try, также работает синхронно. Например:
// Если в try присутствует код с использованием SetTimeout (т.е. что-то запланировано на будущее)
// такую ошибку try...catch не поймает
// Чтобы поймать такую ошибку, нужно вызывать try...catch внутри setTimeout

setTimeout(function(){
    try {
        lalala;
    } catch(err) {
        alert('Ошибка поймана!' + ' name: ' + err.name  + 'massage: ' + err.message+ ' stack: ' + errr.stack);
    }
}, 1000);

/* 
    в объект error в случае ошибки попадают такие параметры:
    1) name - Имя ошибки (ReferenceError)
    2) message - текст о деталях ошибки
    3) stack - стек вызова (строка, содержащая информацию о последовательности , которая привела к ошибке)
*/
/* 
    В новых версиях js появилась возможность выводить catch без параметра err
    try{
        }catch{

        }
    
*/

let jison = "{некорректный JSON }";
try {
    let user = JSON.parse(jison);
    console.log(user);
} catch(e){
    alert('извините возникла ошибка - ' + e.name+ '  '+ e.message);
}


// Генерация ошибок

let json2 = '{"age" : 30}';
try {
    let user = JSON.parse(jison);
    if(!user.name){
        throw new SyntaxError('Данные не полные: нет name');
    }

    console.log( user.name );
} catch(e) {

    console.log('ошибка - ' + e.message);
}

/* 
    1) new Error(massage)
    2) new SyntaxError(message)
    3) new ReferenceError(message)
    4) new TypeError(message)
    
*/

// Переброс ошибок

try{
    try{

    }catch{

    }

}catch{

}

function readData(){
    let json = '{"age" : 30}';
    try{
        lalala();

    }catch(e) {
        if (e.name != 'SyntaxError'){ 
            throw e;
        }
    }
}

try{
    readData();
}catch (e){
    console.log('внешний catch пойман' + e);
}

// try...catch...finaly

/* 
    finally - выполняется в любом случае: если была ошибка, или не была
*/

try {
    console.log('try');
    if(!confirm('сделать ошибку?')){ go_func(); }

}catch (e) {
    console.log(' catch');
} finally {
    console.log('finally');
}

/* 
    Все переменные внутри конструкции try... catch..finally  локальные

    Если try используется внутри функции и внутри try вызвать returt, finale сработает
    Он увидит, что произошел перехват контроля во внешний код

    Конструкция try...finally используется когда мы хотим чтобы код внутри finaly
    выполнится тогда когда заверит свою работу код внутри try
    В этом случае, мы уверены, что один код выполнится перед другим
*/