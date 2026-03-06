let cantidadr=1;
let parrafor=document.querySelector('.cantidadr');
let sumar=document.querySelector('.refresco');
let menosr=document.querySelector('.menosr');

sumar.addEventListener('click',()=> {
    cantidadr ++;
    parrafor.textContent=cantidadr;
})
menosr.addEventListener('click',() =>{
    if (cantidadr > 0 ) {
        cantidadr --;
        parrafor.textContent=cantidadr;
    }
})