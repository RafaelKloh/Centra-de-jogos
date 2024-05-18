import { modalVencedor,modalPerdedor,comoJogarForca } from "../modal/script.js";

function carregarPalavras(palavraSorteada) {
    document.getElementById("palavraCompleta").innerText = "_".repeat(palavraSorteada.length);
    document.getElementById("listaErros").innerText = "Letras erradas: "
    document.getElementById("errosTotais").innerText = "Total de erros: 0"
}



const palavras = ["banana", "passaro", "rafael", "amor","xerox"];
const palavraSorteada = palavras[Math.floor(Math.random() * palavras.length)];
let letrasDescobertas = "_".repeat(palavraSorteada.length);
carregarPalavras(palavraSorteada)
let erros = 0
let letrasErradas = []

const botao = document.getElementById("enviar");
botao.addEventListener("click", function () {
    let acertou = false;
    const inputUsuario = document.getElementById("textoUsuario");
    const letraUsuario = inputUsuario.value;
    
    if (letraUsuario.length !== 1) {
        console.log("Você só pode enviar uma letra por vez");
        return;
    }

    let posicoes = [];

    for (let i = 0; i < palavraSorteada.length; i++) {
        if (letraUsuario === palavraSorteada[i]) {
            acertou = true;
            posicoes.push(i)
        }
    }

    if (acertou) {
        for (let i = 0; i < posicoes.length; i++) {
            const posicao = posicoes[i];
            letrasDescobertas = letrasDescobertas.substring(0, posicao) + letraUsuario + letrasDescobertas.substring(posicao + 1);
        }
        console.log("Acertou uma letra");
    } else {
        erros++;
        letrasErradas.push(letraUsuario);
        console.log(letrasErradas);
    }

    if(letrasDescobertas == palavraSorteada){
        modalVencedor()
    }

    if(erros >= 6){
        modalPerdedor()
    }
    mostrarPalavraCompleta();
});

const info = document.getElementById("informacoes");
info.addEventListener("click", function () {
    comoJogarForca()
})

function mostrarPalavraCompleta() {
    document.getElementById("palavraCompleta").innerText = letrasDescobertas;
    document.getElementById("listaErros").innerText = "Letras erradas: " + letrasErradas ;
    document.getElementById("errosTotais").innerText = "Total de erros: " + erros;
}
console.log(letrasDescobertas);
