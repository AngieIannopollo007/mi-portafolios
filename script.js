/*=========================================
    PORTFOLIO - ANGIE IANNOPOLLO
=========================================*/

// ===========================
// Navbar cambia al hacer scroll
// ===========================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.background = "rgba(255,255,255,.90)";
        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.15)";

    } else {

        header.style.background = "rgba(255,255,255,.25)";
        header.style.boxShadow = "none";

    }

});

// ===========================
// Aparición de secciones
// ===========================

const elementos = document.querySelectorAll("section");

const mostrarElemento = () => {

    const trigger = window.innerHeight * 0.85;

    elementos.forEach((elemento) => {

        const top = elemento.getBoundingClientRect().top;

        if (top < trigger) {

            elemento.style.opacity = "1";
            elemento.style.transform = "translateY(0)";

        }

    });

};

elementos.forEach((elemento) => {

    elemento.style.opacity = "0";
    elemento.style.transform = "translateY(60px)";
    elemento.style.transition = ".8s ease";

});

window.addEventListener("scroll", mostrarElemento);

mostrarElemento();

// ===========================
// Animación de las tarjetas
// ===========================

const cards = document.querySelectorAll(".card, .proyecto");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-12px) scale(1.03)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0) scale(1)";

    });

});


// ===========================
// Efecto de escritura
// ===========================

const textos = [
    "Técnica en Computación e Informática ",
    "Desarrolladora Web",
    "Apasionada por la Inteligencia Artificial ",
    "Estudiante en ciencia de datos"
];

let indiceTexto = 0;
let indiceLetra = 0;
let escribiendo = true;

const typing = document.getElementById("typing");

function maquinaEscribir() {

    const textoActual = textos[indiceTexto];

    if(escribiendo){

        typing.innerHTML =
        textoActual.substring(0,indiceLetra) + "<span>|</span>";

        indiceLetra++;

        if(indiceLetra > textoActual.length){

            escribiendo = false;

            setTimeout(maquinaEscribir,1500);

            return;

        }

    }else{

        typing.innerHTML =
        textoActual.substring(0,indiceLetra) + "<span>|</span>";

        indiceLetra--;

        if(indiceLetra < 0){

            escribiendo = true;

            indiceTexto++;

            if(indiceTexto >= textos.length){

                indiceTexto = 0;

            }

        }

    }

    setTimeout(maquinaEscribir,80);

}

maquinaEscribir();

// ===========================
// Botón volver arriba
// ===========================

const botonTop = document.createElement("button");

botonTop.innerHTML = "↑";

botonTop.classList.add("top-btn");

document.body.appendChild(botonTop);

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        botonTop.style.opacity = "1";
        botonTop.style.pointerEvents = "all";

    } else {

        botonTop.style.opacity = "0";
        botonTop.style.pointerEvents = "none";

    }

});

botonTop.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

window.addEventListener("load", ()=>{

setTimeout(()=>{

document.getElementById("preloader").style.opacity="0";

setTimeout(()=>{

document.getElementById("preloader").style.display="none";

},900);

},1100);

});
const particles = document.getElementById("particles");

for(let i=0;i<45;i++){

const p=document.createElement("div");

p.className="particle";

p.style.left=Math.random()*300+"vw";

p.style.animationDuration=(10+Math.random()*15)+"s";

p.style.animationDelay=Math.random()*5+"s";

p.style.opacity=Math.random();

particles.appendChild(p);

}