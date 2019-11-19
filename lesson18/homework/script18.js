"use strict";
// 1
let a = 1;

if( a == '1' ){
    console.log( 'true');
}else if( a == 1 ){
    console.log('true');
}else{
    console.log( 'false');
};

let a1 = 1;

if( a1 === '1' ){
    console.log( 'true');
}else{
    console.log( 'false');
};


//2
let item = true;
if( item != true ){
    console.log( 'Верно');
}else{
    console.log( 'Не верно');
};

let item1 = false;
if( item1 != true ){
    console.log( 'Верно');
}else{
    console.log( 'Не верно');
};



//3
let b = 2; 
if( b > 0 && b < 4){
    console.log('true');
}else{
    console.log('false');
};

//4

let a4 = 8;
let b4 = 9;
if( a4 > 3 && a4 < 12 || b4 >= 7 && b4 < 15) {
    console.log('true');
}else{
    console.log('false');
};

//5
let month = 2;
if( month > 2 && month < 6){
    console.log("spring");
}else if(month > 5 && month < 9){
    console.log("summer");
}else if(month > 8 && month < 12){
    console.log("autumn");
}else if(month===12 || month > 0 && month <3){
    console.log("winter");
}else{
    prompt('Введите число от 1 до 12', month);
};

//6

for(let num = 0; num <= 101; num++){
    if(num % 2 != 0){continue;}
    console.log(num);
};
