let cantidad=1;
let parrafo=document.querySelector('.cantidad');
let suma=document.querySelector('.a');
let menos=document.querySelector('.menos');

suma.addEventListener('click', ()=> {
    cantidad ++;
    parrafo.textContent=cantidad;
    
})

menos.addEventListener('click',() =>{
    if (cantidad > 0 ) {
        cantidad --;
        parrafo.textContent=cantidad;
    }
} )