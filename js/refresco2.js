let cantidad2=1;
let parrafo2=document.querySelector('.cantidad2');
let sumar2=document.querySelector('.refresco2');
let menos2=document.querySelector('.menos2');

sumar2.addEventListener('click',()=> {
    cantidad2 ++;
    parrafo2.textContent=cantidad2;
})
menos2.addEventListener('click',()=> {
    if (cantidad2 > 0 ) {
        cantidad2 --;
        parrafo2.textContent=cantidad2;
    }
})