'use strict';
//1 
let ArrayWorld = ['Кот', "Собака", "Жираф"];
let searchKey = ['Жираф'];
function searchArrayWorld(searchCriteria, searchArray){
   
}
//2
let arr = [1, 2, 3, 7, 6, 9];
let sum = 0;
for (let i = 0; i < arr.length; i++){
    sum += arr[i];
}
let result = sum / arr.length;
console.log(result.toFixed(2));

//3
let arr1 = [1, 3, 5, 6, 7, 9];
let arrN = [];
for (let item of arr1){
arrN.unshift(item);
}
console.log(arrN);
let arrNn = [];
for (let i = 0; i < arr1.length; i++){
    let a = arr1[i];
    arrNn.unshift(a);
}
console.log(arrNn);
//4
let prim = { // while + push
    html: "HTML",
    css: "CSS",
    js: "EGMA",
};
let primN = [];
for (let key in prim){ // no
    
    prim [key] = key;
    primN.push(key);

}
console.log(primN);