let cantidadn=1;
let parrafon=document.querySelector('.cantidadn');
let sumarn=document.querySelector('.jugos');
let menosn=document.querySelector('.menosn');

sumarn.addEventListener('click',()=> {
    cantidadn ++;
    parrafon.textContent=cantidadn;
})
menosn.addEventListener('click',()=> {
    if (cantidadn > 0) {
        cantidadn--;
        parrafon.textContent=cantidadn;       
    }
})