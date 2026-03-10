let a=1.35;
let b=5;
let cantidadem=document.querySelector('.cantidadem').innerHTML;
let calcular=document.querySelector('.calcular');
let montoem=document.querySelector('.montoem');
let jorge=document.getElementById('jorge');
let n=document.querySelector('.n');
let unidades=document.querySelector('.unidades').innerHTML;

let empanada=a*cantidadem;




calcular.addEventListener('click',()=>{
    cantidadem ++;
    montoem.innerHTML=cantidadem*a;
    cantidadem.innerHTML=cantidadem;
     
   
    console.log('total: ',cantidadem)
    // function name() {
    //     return 100;
    // }
})
calcular.addEventListener('click',()=>{
    unidades++;
    n.innerHTML=unidades;
})





