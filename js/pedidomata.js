let cantida=1;
let pf=document.querySelector('.cantidadm');
let resta=document.querySelector('.resta');
let sumam=document.querySelector('.maltas');

sumam.addEventListener('click',()=>{
    cantida ++;
    pf.textContent=cantida;
})
resta.addEventListener('click',()=>{
    if (cantida > 0 ) {
        cantida --;
        pf.textContent=cantida;
    }
} )


console.log(resta);