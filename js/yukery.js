let cantidady=1;
let parrafoy=document.querySelector('.cantidady');
let sumary=document.querySelector('.yukery');
let menosy=document.querySelector('.menosy');

sumary.addEventListener('click',()=> {
    cantidady ++;
    parrafoy.textContent=cantidady;

})
menosy.addEventListener('click',()=> {
    if (cantidady > 0) {
        cantidady --;
        parrafoy.textContent=cantidady;
    }
})