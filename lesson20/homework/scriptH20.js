'use script';
let n = 100;
function fib(n){
    let a = 1;
    let b = 1;
    for (let i = 3; i <=n; i++){
        let c = a + b;
        a = b;
        b = c;
    }
    return b;
}
console.log(fib(n));

//2

let x = 1000;
let num = 0;
while( x >= 50){
    x /=2;
    num++;

}
console.log(x);
console.log(num);


 