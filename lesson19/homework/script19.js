'use script';
//1
let numm = 3;
function isNumberinRange(numm){
    if(numm > 0 && numm <10){
        return true;
    }else{
        return false;
    }
}
console.log( isNumberinRange (numm)); 

//2
let even = 5;
function isEven(even){
    if(even % 2 == 0){
        return true;
    }else{
        return false;
    }
}
console.log( isEven(even));

//3
let value = +prompt('value?', '');
switch(value){
    case 0:
        alert(0);
        break;
    case 1:
        alert(1);
        break;
    case 2:
    case 3:
        alert('2,3');
        break;
}

//4

let a = 5, b = 5;
function min(a,b){
    if(a < b){
        return a;
    }else if(b < a){
        return b;    
    }else{
        return false;
    }
}
console.log( min(a,b));