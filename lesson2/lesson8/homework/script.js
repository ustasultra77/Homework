'use strict';


let list_items=document.querySelectorAll('.list li:nth-child(odd)'); 

console.log(list_items); 

/*
for (let i=0; i< list_items.length; i++){
    if (list_items.querySelectorAll('li')[i]%2-1==0){
        let litems = list_items.querySelectorAll('.list li')[i];
        i++;
        console.log(litems);
    }
}*/


let news_titles = document.getElementsByClassName('news_item_title');
console.log(news_titles);
for (let elem of news_titles){
    console.log( elem.innerHTML);
}



let news_dates = document.getElementsByTagName('time');
let arr=[];

for (let elem of news_dates){
    arr.push(elem.innerHTML);
    console.log( elem.innerHTML);
}


