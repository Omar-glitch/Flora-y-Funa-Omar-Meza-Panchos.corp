const btnMenu = document.querySelector('.btn-menu');
const containerMenu = document.querySelector('.menu');
const menu = document.querySelector('.list-container')
const boton = document.querySelector(".btn-menu i")
let activador = true;

//Menu de navegacion animacion izquierda

btnMenu.addEventListener('click', () => {
    boton.classList.toggle('fa-times');
    if (activador) {
        menu.style.left = "0";
        activador = false;
    } else {
        menu.style.left = "-100%";
        activador = true;
    }
});

//Enlaces y navegacion izquierda
let elements = document.querySelectorAll('.list-container li a');
elements.forEach((element) => {
    element.addEventListener('click', () => {
       menu.style.left = "-100%";
       boton.classList.remove('fa-times');
       boton.classList.add('fa-bars');
       activador = true;
    });
});

//El scroll
let prevScrollPos = window.scrollY;
const goTop = document.querySelector('.go-top');

const scroll = () => {
    const scrolled = window.scrollY;

    let currenScrollpPos = window.scrollY;

    if (prevScrollPos > currenScrollpPos) containerMenu.style.top = "0";
    else containerMenu.style.top = "-3.4375rem";

    prevScrollPos = currenScrollpPos;
    //Mostrar y ocultar scroll estilos
    if (scrolled <= 600) goTop.style.right = '-6.25rem';    
    else goTop.style.right = '1.25rem';

    if (scrolled > 30) containerMenu.style.background = "#fff";
    else containerMenu.style.background = "transparent";
}



window.addEventListener('scroll', scroll);

goTop.addEventListener('click', () => {
    //para safari la linea de abajo
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

// Scroll down parent element
const verAbajo = document.querySelector('#abajo');

verAbajo.addEventListener('click', () => {
    if (verAbajo != null) {
        const padre = verAbajo.parentElement;
        const { height } = padre.getBoundingClientRect();
        document.body.scrollTop = height;
        document.documentElement.scrollTop = height;
    }
});

const noVisible = document.querySelector('.no-visible');
const leerMas = document.querySelector('#about-mas');
let visible = false;

leerMas.addEventListener('click', () => {
    const s = noVisible.scrollHeight;

    if (!visible) {
        noVisible.style.maxHeight = `${s}px`;
        leerMas.innerHTML = "Leer menos...";
        visible = true;
    } else {
        noVisible.style.maxHeight = `0px`;
        leerMas.innerHTML = "Leer más...";
        visible = false;
    }
});

const resizing = () => {
    if (!noVisible) return;
    const s = noVisible.scrollHeight;
    if (visible) noVisible.style.maxHeight = `${s}px`
}

window.addEventListener('resize', resizing);
