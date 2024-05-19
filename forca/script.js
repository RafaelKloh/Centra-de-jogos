import {
  modalVencedor,
  modalPerdedor,
  comoJogarForca,
} from "../modal/script.js";

let inputUsuario = "";
let letraUsuario = "";
const palavras = ["banana", "passaro", "rafael", "amor", "xerox"];
const palavraSorteada = palavras[Math.floor(Math.random() * palavras.length)];
let letrasDescobertas = "_".repeat(palavraSorteada.length);
let erros = 0;
let letrasErradas = [];
let acertou = false;
let posicoes = [];

function carregarPalavras(palavraSorteada) {
  document.getElementById("palavraCompleta").innerText = "_".repeat(
    palavraSorteada.length
  );
  document.getElementById("listaErros").innerText = "Letras erradas: ";
}
carregarPalavras(palavraSorteada);

const letraQ = document.getElementById("letraQ");
letraQ.addEventListener("click", function () {
  inputUsuario = document.getElementById("letraQ");
  letraUsuario = inputUsuario.textContent.trim();
  letraUsuario = letraUsuario.toLowerCase();
  enviar();
});

const letraW = document.getElementById("letraW");
letraW.addEventListener("click", function () {
  inputUsuario = document.getElementById("letraW");
  letraUsuario = inputUsuario.textContent.trim();
  letraUsuario = letraUsuario.toLowerCase();
  enviar();
});

const letraE = document.getElementById("letraE");
letraE.addEventListener("click", function () {
  inputUsuario = document.getElementById("letraE");
  letraUsuario = inputUsuario.textContent.trim();
  letraUsuario = letraUsuario.toLowerCase();
  enviar();
});

const letraR = document.getElementById("letraR");
letraR.addEventListener("click", function () {
  inputUsuario = document.getElementById("letraR");
  letraUsuario = inputUsuario.textContent.trim();
  letraUsuario = letraUsuario.toLowerCase();
  enviar();
});

const letraT = document.getElementById("letraT");
letraT.addEventListener("click", function () {
  inputUsuario = document.getElementById("letraT");
  letraUsuario = inputUsuario.textContent.trim();
  letraUsuario = letraUsuario.toLowerCase();
  enviar();
});

const letraY = document.getElementById("letraY");
letraY.addEventListener("click", function () {
  inputUsuario = document.getElementById("letraY");
  letraUsuario = inputUsuario.textContent.trim();
  letraUsuario = letraUsuario.toLowerCase();
  enviar();
});

const letraU = document.getElementById("letraU");
letraU.addEventListener("click", function () {
  inputUsuario = document.getElementById("letraU");
  letraUsuario = inputUsuario.textContent.trim();
  letraUsuario = letraUsuario.toLowerCase();
  enviar();
});

const letraI = document.getElementById("letraI");
letraI.addEventListener("click", function () {
  inputUsuario = document.getElementById("letraI");
  letraUsuario = inputUsuario.textContent.trim();
  letraUsuario = letraUsuario.toLowerCase();
  enviar();
});

const letraO = document.getElementById("letraO");
letraO.addEventListener("click", function () {
  inputUsuario = document.getElementById("letraO");
  letraUsuario = inputUsuario.textContent.trim();
  letraUsuario = letraUsuario.toLowerCase();
  enviar();
});

const letraP = document.getElementById("letraP");
letraP.addEventListener("click", function () {
  inputUsuario = document.getElementById("letraP");
  letraUsuario = inputUsuario.textContent.trim();
  letraUsuario = letraUsuario.toLowerCase();
  enviar();
});

const letraA = document.getElementById("letraA");
letraA.addEventListener("click", function () {
  inputUsuario = document.getElementById("letraA");
  letraUsuario = inputUsuario.textContent.trim();
  letraUsuario = letraUsuario.toLowerCase();
  enviar();
  enviar();
});

const letraS = document.getElementById("letraS");
letraS.addEventListener("click", function () {
  inputUsuario = document.getElementById("letraS");
  letraUsuario = inputUsuario.textContent.trim();
  letraUsuario = letraUsuario.toLowerCase();
  enviar();
});

const letraD = document.getElementById("letraD");
letraD.addEventListener("click", function () {
  inputUsuario = document.getElementById("letraD");
  letraUsuario = inputUsuario.textContent.trim();
  letraUsuario = letraUsuario.toLowerCase();
  enviar();
});

const letraF = document.getElementById("letraF");
letraF.addEventListener("click", function () {
  inputUsuario = document.getElementById("letraF");
  letraUsuario = inputUsuario.textContent.trim();
  letraUsuario = letraUsuario.toLowerCase();
  enviar();
});

const letraG = document.getElementById("letraG");
letraG.addEventListener("click", function () {
  inputUsuario = document.getElementById("letraG");
  letraUsuario = inputUsuario.textContent.trim();
  letraUsuario = letraUsuario.toLowerCase();
  enviar();
});

const letraH = document.getElementById("letraH");
letraH.addEventListener("click", function () {
  inputUsuario = document.getElementById("letraH");
  letraUsuario = inputUsuario.textContent.trim();
  letraUsuario = letraUsuario.toLowerCase();
  enviar();
});

const letraJ = document.getElementById("letraJ");
letraJ.addEventListener("click", function () {
  inputUsuario = document.getElementById("letraJ");
  letraUsuario = inputUsuario.textContent.trim();
  letraUsuario = letraUsuario.toLowerCase();
  enviar();
});

const letraK = document.getElementById("letraK");
letraK.addEventListener("click", function () {
  inputUsuario = document.getElementById("letraK");
  letraUsuario = inputUsuario.textContent.trim();
  letraUsuario = letraUsuario.toLowerCase();
  enviar();
});

const letraL = document.getElementById("letraL");
letraL.addEventListener("click", function () {
  inputUsuario = document.getElementById("letraL");
  letraUsuario = inputUsuario.textContent.trim();
  letraUsuario = letraUsuario.toLowerCase();
  enviar();
});

const letraZ = document.getElementById("letraZ");
letraZ.addEventListener("click", function () {
  inputUsuario = document.getElementById("letraZ");
  letraUsuario = inputUsuario.textContent.trim();
  letraUsuario = letraUsuario.toLowerCase();
  enviar();
});

const letraX = document.getElementById("letraX");
letraX.addEventListener("click", function () {
  inputUsuario = document.getElementById("letraX");
  letraUsuario = inputUsuario.textContent.trim();
  letraUsuario = letraUsuario.toLowerCase();
  enviar();
});

const letraC = document.getElementById("letraC");
letraC.addEventListener("click", function () {
  inputUsuario = document.getElementById("letraC");
  letraUsuario = inputUsuario.textContent.trim();
  letraUsuario = letraUsuario.toLowerCase();
  enviar();
});

const letraV = document.getElementById("letraV");
letraV.addEventListener("click", function () {
  inputUsuario = document.getElementById("letraV");
  letraUsuario = inputUsuario.textContent.trim();
  letraUsuario = letraUsuario.toLowerCase();
  enviar();
});

const letraB = document.getElementById("letraB");
letraB.addEventListener("click", function () {
  inputUsuario = document.getElementById("letraB");
  letraUsuario = inputUsuario.textContent.trim();
  letraUsuario = letraUsuario.toLowerCase();
  enviar();
});

const letraN = document.getElementById("letraN");
letraN.addEventListener("click", function () {
  inputUsuario = document.getElementById("letraN");
  letraUsuario = inputUsuario.textContent.trim();
  letraUsuario = letraUsuario.toLowerCase();
  enviar();
});

const letraM = document.getElementById("letraM");
letraM.addEventListener("click", function () {
  inputUsuario = document.getElementById("letraM");
  letraUsuario = inputUsuario.textContent.trim();
  letraUsuario = letraUsuario.toLowerCase();
  enviar();
});

function enviar() {
  acertou = false;
  posicoes = [];
  for (let i = 0; i < palavraSorteada.length; i++) {
    if (letraUsuario === palavraSorteada[i]) {
      acertou = true;
      posicoes.push(i);
    }
  }

  if (acertou) {
    for (let i = 0; i < posicoes.length; i++) {
      const posicao = posicoes[i];
      letrasDescobertas =
        letrasDescobertas.substring(0, posicao) +
        letraUsuario +
        letrasDescobertas.substring(posicao + 1);
    }
  } else {
    erros++;
    letrasErradas.push(letraUsuario);
  }

  if (letrasDescobertas == palavraSorteada) {
    modalVencedor();
  }

  if (erros >= 6) {
    modalPerdedor();
  }
  mostrarPalavraCompleta();
}

const info = document.getElementById("informacoes");
info.addEventListener("click", function () {
  comoJogarForca();
});

function mostrarPalavraCompleta() {
  document.getElementById("palavraCompleta").innerText = letrasDescobertas;
  document.getElementById("listaErros").innerText =
    "Letras erradas: " + letrasErradas;
}
