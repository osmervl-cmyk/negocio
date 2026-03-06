let cantidad15=1;
let parrafo15=document.querySelector('.cantidad15');
let suma15=document.querySelector('.refresco15');
let menos15=document.querySelector('.menos15');

suma15.addEventListener('click', ()=> {
    cantidad15 ++;
    parrafo15.textContent=cantidad15;

})
menos15.addEventListener('click',()=> {
    if (cantidad15 > 0 ) {
        cantidad15 --;
        parrafo15.textContent=cantidad15;
    }
})
