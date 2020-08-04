let btnMenu = document.querySelector('.btn-menu');
let menu = document.querySelector('.list-container')
let containerMenu = document.querySelector('.menu');
let activador = true;
//Menu de navegacion animacion izquierda
btnMenu.addEventListener('click', () =>{
    document.querySelector('.btn-menu i').classList.toggle('fa-times');
    if(activador){
        menu.style.left = "0";
        menu.style.transition = "0.5s";
        activador=false;
    }else{
        menu.style.left = "-100%";
        menu.style.transition = "0.5s";
        activador=true;
    }
});
//Enlaces y navegacion izquierda

let bol = document.querySelectorAll('.lists li a');
bol.forEach( (element) => {
    element.addEventListener('click', () => {
       menu.style.left = "-100%";
       document.querySelector('.btn-menu i').classList.remove('fa-times');
       document.querySelector('.btn-menu i').classList.add('fa-bars');
       activador=true;
    });
});
//Cambiando la clase active
let enlaces = document.querySelectorAll('.lists li a');
enlaces.forEach( (element) => {
    element.addEventListener('click', (event) => {
       enlaces.forEach( (link) => {
            link.classList.remove('activo');
       });
       event.target.classList.add('activo');
    });
});
//El scroll
let prevScrollPos = window.pageYOffset;
let goTop = document.querySelector('.go-top');
window.onscroll = () =>{
    let currenScrollpPos = window.pageYOffset;
    // Mostrar Menu y ocultarlo
    if(prevScrollPos > currenScrollpPos){
        containerMenu.style.top = "0";
        containerMenu.style.transition = "0.5s";
    }else{
        containerMenu.style.top = "-60px";
        containerMenu.style.transition = "0.5s";
    }
    prevScrollPos = currenScrollpPos;
    //Mostrar y ocultar scroll estilos
    let arriba = window.pageYOffset;
    if(arriba <= 600){
        containerMenu.style.borderBottom = "none";
        goTop.style.right = '-100%';
    }else{
        containerMenu.style.borderBottom = "3px solid #ff2e63";
        goTop.style.right = '0';
        goTop.style.transition = "0.5s";
    }
}
goTop.addEventListener('click', () => {
    //para safari la linea de abajo
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});
let verAbajo= document.querySelector('#abajo');
verAbajo.addEventListener('click', () => {
    //para safari la linea de abajo
    document.body.scrollTop = 600;
    document.documentElement.scrollTop = 600;
});
var noVisible = document.querySelector('.no-visible');
var leerMas = document.querySelector('#about-mas');
var visible = true;
    leerMas.addEventListener('click', () =>{
        if(visible){
            noVisible.style.display = "block";
            leerMas.innerHTML = "Leer menos...";
            document.body.scrollTop = 1900;
            document.documentElement.scrollTop = 1900;
            visible=false;
        }else{
            noVisible.style.display = "none";
            leerMas.innerHTML = "Leer más...";
            document.body.scrollTop = 1700;
            document.documentElement.scrollTop = 1700;
            visible=true;
        }
    });