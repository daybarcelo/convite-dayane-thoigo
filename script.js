/* ==========================================================
   SITE DE CASAMENTO
   Dayane & Thoigo
   Tema Rancho Barthô
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    iniciarMusica();

    iniciarEnvelope();

    iniciarContagem();

    iniciarRolagem();

});


/* ==========================================================
   MÚSICA
========================================================== */

function iniciarMusica(){

    const musica = document.getElementById("musica");

    const botao = document.getElementById("musicButton");

    let tocando = false;

    botao.addEventListener("click",()=>{

        if(tocando){

            musica.pause();

            botao.innerHTML="🎵";

        }

        else{

            musica.play();

            botao.innerHTML="⏸";

        }

        tocando=!tocando;

    });

}


/* ==========================================================
   ABRIR CONVITE
========================================================== */

function iniciarEnvelope(){

    const abrir=document.getElementById("abrirConvite");

    const abertura=document.getElementById("abertura");

    const envelope=document.getElementById("envelopeSection");

    abrir.addEventListener("click",()=>{

        abertura.style.opacity="0";

        abertura.style.pointerEvents="none";

        setTimeout(()=>{

            envelope.scrollIntoView({

                behavior:"smooth"

            });

        },600);

    });

}


/* ==========================================================
   CONTAGEM
========================================================== */

function iniciarContagem(){

    const destino=new Date("November 14, 2026 18:30:00").getTime();

    setInterval(()=>{

        const agora=new Date().getTime();

        const diferenca=destino-agora;

        if(diferenca<=0){

            document.getElementById("dias").innerHTML="00";

            document.getElementById("horas").innerHTML="00";

            document.getElementById("minutos").innerHTML="00";

            document.getElementById("segundos").innerHTML="00";

            return;

        }

        const dias=Math.floor(diferenca/(1000*60*60*24));

        const horas=Math.floor(

            (diferenca%(1000*60*60*24))

            /(1000*60*60)

        );

        const minutos=Math.floor(

            (diferenca%(1000*60*60))

            /(1000*60)

        );

        const segundos=Math.floor(

            (diferenca%(1000*60))

            /1000

        );

        document.getElementById("dias").innerHTML=dias;

        document.getElementById("horas").innerHTML=horas;

        document.getElementById("minutos").innerHTML=minutos;

        document.getElementById("segundos").innerHTML=segundos;

    },1000);

}


/* ==========================================================
   ROLAGEM SUAVE
========================================================== */

function iniciarRolagem(){

    const links=document.querySelectorAll("a[href^='#']");

    links.forEach(link=>{

        link.addEventListener("click",(e)=>{

            e.preventDefault();

            const destino=document.querySelector(

                link.getAttribute("href")

            );

            if(destino){

                destino.scrollIntoView({

                    behavior:"smooth"

                });

            }

        });

    });

}


/* ==========================================================
   ANIMAÇÃO DE ENTRADA
========================================================== */

window.addEventListener("scroll",()=>{

    const elementos=document.querySelectorAll(

        ".card,.item,.fotos img,.caixaMensagem"

    );

    elementos.forEach(item=>{

        const topo=item.getBoundingClientRect().top;

        if(topo<window.innerHeight-120){

            item.classList.add("fade");

        }

    });

});

/* ==========================================================
   SCRIPT.JS - PARTE 2
   Recursos avançados
========================================================== */


/* ==========================================================
   LIGHTBOX DA GALERIA
========================================================== */

const imagens = document.querySelectorAll(".fotos img");

const lightbox = document.createElement("div");

lightbox.id = "lightbox";

lightbox.innerHTML = `
    <span id="fecharLightbox">&times;</span>
    <img id="imagemLightbox">
`;

document.body.appendChild(lightbox);

const imagemGrande = document.getElementById("imagemLightbox");

imagens.forEach(img => {

    img.addEventListener("click", () => {

        lightbox.classList.add("ativo");

        imagemGrande.src = img.src;

    });

});

lightbox.addEventListener("click", () => {

    lightbox.classList.remove("ativo");

});


/* ==========================================================
   INTERSECTION OBSERVER
========================================================== */

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("fade");

        }

    });

},{threshold:.20});

document.querySelectorAll("section").forEach(sec=>{

    observer.observe(sec);

});


/* ==========================================================
   PARTÍCULAS DOURADAS
========================================================== */

function criarParticulas(){

    setInterval(()=>{

        const p=document.createElement("span");

        p.className="particula";

        p.style.left=Math.random()*100+"vw";

        p.style.animationDuration=

            (6+Math.random()*8)+"s";

        document.body.appendChild(p);

        setTimeout(()=>{

            p.remove();

        },15000);

    },450);

}

criarParticulas();


/* ==========================================================
   PARALLAX
========================================================== */

window.addEventListener("scroll",()=>{

    document.querySelectorAll(".parallax")

    .forEach(item=>{

        let velocidade=.35;

        item.style.backgroundPositionY=

            (window.pageYOffset*velocidade)+"px";

    });

});


/* ==========================================================
   ABERTURA DO ENVELOPE
========================================================== */

const envelope = document.querySelector(".envelope");

const convite = document.getElementById("convite");

if(envelope && convite){

    envelope.addEventListener("click",()=>{

        envelope.style.transform="scale(.9) rotateX(20deg)";
        envelope.style.opacity="0";

        setTimeout(()=>{

            envelope.parentElement.style.display="none";

            convite.scrollIntoView({

                behavior:"smooth"

            });

        },900);

    });

}


/* ==========================================================
   EFEITO DE DIGITAÇÃO
========================================================== */

function escreverTitulo(){

    const titulo=document.querySelector(".tituloInicial h1");

    if(!titulo) return;

    const texto=titulo.innerText;

    titulo.innerHTML="";

    let i=0;

    const intervalo=setInterval(()=>{

        titulo.innerHTML+=texto.charAt(i);

        i++;

        if(i>=texto.length){

            clearInterval(intervalo);

        }

    },90);

}

escreverTitulo();


/* ==========================================================
   BOTÕES
========================================================== */

document.querySelectorAll("button,a")

.forEach(botao=>{

    botao.addEventListener("mouseenter",()=>{

        botao.style.transform="translateY(-3px)";

    });

    botao.addEventListener("mouseleave",()=>{

        botao.style.transform="";

    });

});


/* ==========================================================
   ANO AUTOMÁTICO NO RODAPÉ
========================================================== */

const rodape=document.querySelector("footer p");

if(rodape){

    rodape.innerHTML+=

    "<br><br>© "+new Date().getFullYear();

}


/* ==========================================================
   PRELOAD DAS IMAGENS
========================================================== */

document.querySelectorAll("img").forEach(img=>{

    const preload=new Image();

    preload.src=img.src;

});


/* ==========================================================
   FINAL
========================================================== */

console.log("Site Dayane & Thoigo carregado com sucesso ❤️");
