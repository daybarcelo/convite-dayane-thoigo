// Abrir o convite
const botao = document.getElementById("abrir");
const envelope = document.getElementById("envelope");
const convite = document.getElementById("convite");

if (botao) {
    botao.addEventListener("click", () => {
        envelope.style.display = "none";
        convite.style.display = "block";
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}

// Contagem regressiva
const contador = document.getElementById("contador");

function atualizarContagem() {
    const casamento = new Date("2026-11-14T18:30:00").getTime();
    const agora = new Date().getTime();

    const distancia = casamento - agora;

    if (distancia <= 0) {
        contador.innerHTML = "💍 Chegou o grande dia!";
        return;
    }

    const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

    contador.innerHTML =
        `${dias} dias • ${horas} horas • ${minutos} minutos • ${segundos} segundos`;
}

atualizarContagem();
setInterval(atualizarContagem, 1000);
