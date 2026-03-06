let a=1.35;


let cantidadem=document.querySelector('.cantidadem');
let calcular=document.querySelector('.calcular');
let montoem=document.querySelector('.montoem');
let empanada=a*cantidadem;
let total=empanada;


calcular.addEventListener('click',()=>{
    montoem.textContent=total;   

})



