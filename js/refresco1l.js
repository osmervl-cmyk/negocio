let cantidad1=1;
let parrafo1=document.querySelector('.cantidad1');
let sumar1=document.querySelector('.refresco1');
let menos1=document.querySelector('.menos1');

sumar1.addEventListener('click',()=> {
    cantidad1 ++;
    parrafo1.textContent=cantidad1;
})
menos1.addEventListener('click',()=> {
    if (cantidad1 > 0) {
        cantidad1 --;
        parrafo1.textContent=cantidad1;
    }
})