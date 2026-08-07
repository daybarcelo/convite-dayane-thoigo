/* ==========================================================
   CONVITE DAYANE & THOIGO
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    iniciarMusica();
    iniciarConvite();
    iniciarContagem();
    iniciarLightbox();
    iniciarAnimacoes();

});

/* ==========================
   MÚSICA
========================== */

function iniciarMusica() {

    const musica = document.getElementById("musica");
    const botao = document.getElementById("musicButton");

    if (!musica || !botao) return;

    let tocando = false;

    botao.addEventListener("click", () => {

        if (tocando) {
            musica.pause();
            botao.innerHTML = "🎵";
        } else {
            musica.play().catch(() => {});
            botao.innerHTML = "⏸";
        }

        tocando = !tocando;

    });

}

/* ==========================
   ABERTURA DO CONVITE
========================== */

function iniciarConvite() {

    const selo = document.getElementById("selo");
    const inicio = document.getElementById("inicio");
    const convite = document.getElementById("convite");
    const musica = document.getElementById("musica");

    if (!selo || !inicio || !convite) return;

    convite.style.display = "none";

    selo.addEventListener("click", () => {

        selo.classList.add("quebrar");

        setTimeout(() => {

            inicio.style.display = "none";

            convite.style.display = "block";

            convite.scrollIntoView({
                behavior: "smooth"
            });

            if (musica) {
                musica.play().catch(() => {});
                document.getElementById("musicButton").innerHTML = "⏸";
            }

        }, 700);

    });

}

/* ==========================
   CONTAGEM REGRESSIVA
========================== */

function iniciarContagem() {

    const dataCasamento = new Date("2026-11-14T18:30:00");

    function atualizar() {

        const agora = new Date();

        const diferenca = dataCasamento - agora;

        if (diferenca <= 0) return;

        const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));

        const horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24);

        const minutos = Math.floor((diferenca / (1000 * 60)) % 60);

        const segundos = Math.floor((diferenca / 1000) % 60);

        document.getElementById("dias").textContent = dias;
        document.getElementById("horas").textContent = horas;
        document.getElementById("minutos").textContent = minutos;
        document.getElementById("segundos").textContent = segundos;

    }

    atualizar();

    setInterval(atualizar, 1000);

}

/* ==========================
   LIGHTBOX
========================== */

function iniciarLightbox() {

    const imagens = document.querySelectorAll(".gridGaleria img");

    const lightbox = document.getElementById("lightbox");

    const imagem = document.getElementById("imagemLightbox");

    const fechar = document.getElementById("fecharLightbox");

    if (!lightbox) return;

    imagens.forEach((foto) => {

        foto.addEventListener("click", () => {

            imagem.src = foto.src;

            lightbox.classList.add("mostrar");

        });

    });

    fechar.addEventListener("click", () => {

        lightbox.classList.remove("mostrar");

    });

    lightbox.addEventListener("click", (e) => {

        if (e.target === lightbox) {

            lightbox.classList.remove("mostrar");

        }

    });

}

/* ==========================
   ANIMAÇÕES AO ROLAR
========================== */

function iniciarAnimacoes() {

    const elementos = document.querySelectorAll("section");

    const observer = new IntersectionObserver((entradas) => {

        entradas.forEach((entrada) => {

            if (entrada.isIntersecting) {

                entrada.target.classList.add("visivel");

            }

        });

    }, {
        threshold: 0.15
    });

    elementos.forEach((item) => observer.observe(item));

}
