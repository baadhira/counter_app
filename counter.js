let increment=document.querySelector("#increment");
let decrement=document.querySelector("#decrement");
let countervalue=document.querySelector("#countervalue");
let counter=78;
increment.addEventListener("click",()=>{
    counter++;
    countervalue.innerText=counter;

});
decrement.addEventListener("click",()=>{
    counter--;
    countervalue.innerText=counter;

});

