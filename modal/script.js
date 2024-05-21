export function modalVencedor() {
  const body = document.body;
  body.insertAdjacentHTML(
    "beforeend",
    `
    <div class="modalContainer">
    <div class="modalPrincipal">
    <p>VOCÊ GANHOU<p>
    <p>PARABÉNS<p>
    <spam>🏆🏆🏆<spam>
        <button id="botaoModal">RECOMEÇAR</button>
    </div>
</div>
    `
  );
  const botaoModal = document.querySelector("#botaoModal");
  botaoModal.addEventListener("click", () => {
    const modalContainer = document.querySelector(".modalContainer");
    modalContainer.remove();
    window.location.replace("../forca/index.html")
  });
}


export function modalPerdedor() {
    const body = document.body;
    body.insertAdjacentHTML(
      "beforeend",
      `
      <div class="modalContainer">
      <div class="modalPrincipal">
      <p>VOCÊ PERDEU<p>
      <p>TENTE NOVAMENTE<p>
      <spam>😢😢😢<spam>
          <button id="botaoModal">RECOMEÇAR</button>
      </div>
  </div>
      `
    );
    const botaoModal = document.querySelector("#botaoModal");
    botaoModal.addEventListener("click", () => {
      const modalContainer = document.querySelector(".modalContainer");
      modalContainer.remove();
      window.location.replace("../forca/index.html")
    });
  }
  

  export function comoJogarForca() {
    const body = document.body;
    body.insertAdjacentHTML(
      "beforeend",
      `
      <div class="modalContainer">
      <div class="modalPrincipal">
      <p>No Jogo da Forca, seu objetivo é adivinhar a palavra secreta antes de cometer 6 erros. O jogo escolhe uma palavra e a exibe como traços (_). Digite uma letra e clique em "Enviar".
      <br><br>
      <strong>Acerto</strong>: A letra correta aparece nos lugares correspondentes.
      <br>
      <strong>Erro</strong>: A letra errada é adicionada à lista de erros e aumenta o contador.
      <br><br>
      Você vence ao adivinhar todas as letras da palavra antes de cometer 6 erros. Se cometer 6 erros, você perde.
      <br><br>
      <strong>Dicas:</strong>
      <br>
      - Comece com letras comuns (vogais e consoantes frequentes).
      <br>
      - Preste atenção nas letras já reveladas.
      <br>
      - Evite repetir letras.
      <br><br>
      Divirta-se e tente adivinhar a palavra antes de cometer muitos erros!<p>
          <button id="botaoModal">FECHAR</button>
      </div>
  </div>
      `
    );
    const botaoModal = document.querySelector("#botaoModal");
    botaoModal.addEventListener("click", () => {
      const modalContainer = document.querySelector(".modalContainer");
      modalContainer.remove();
    });
  }

  export function modalXGanha() {
    const body = document.body;
    body.insertAdjacentHTML(
      "beforeend",
      `
      <div class="modalContainer">
      <div class="modalPrincipal">
      <p>X GANHOU<p>
      <spam>🏆🏆🏆<spam>
          <button id="botaoModal">RECOMEÇAR</button>
      </div>
  </div>
      `
    );
    const botaoModal = document.querySelector("#botaoModal");
    botaoModal.addEventListener("click", () => {
      const modalContainer = document.querySelector(".modalContainer");
      modalContainer.remove();
      window.location.replace("../velha/index.html")
    });
  }

  export function modalOGanha() {
    const body = document.body;
    body.insertAdjacentHTML(
      "beforeend",
      `
      <div class="modalContainer">
      <div class="modalPrincipal">
      <p>O GANHOU<p>
      <spam>🏆🏆🏆<spam>
          <button id="botaoModal">RECOMEÇAR</button>
      </div>
  </div>
      `
    );
    const botaoModal = document.querySelector("#botaoModal");
    botaoModal.addEventListener("click", () => {
      const modalContainer = document.querySelector(".modalContainer");
      modalContainer.remove();
      window.location.replace("../velha/index.html")
    });
  }

  export function modalVelha() {
    const body = document.body;
    body.insertAdjacentHTML(
      "beforeend",
      `
      <div class="modalContainer">
      <div class="modalPrincipal">
      <p>DEU VELHA<p>
      <spam>🥶😵🥶<spam>
          <button id="botaoModal">RECOMEÇAR</button>
      </div>
  </div>
      `
    );
    const botaoModal = document.querySelector("#botaoModal");
    botaoModal.addEventListener("click", () => {
      const modalContainer = document.querySelector(".modalContainer");
      modalContainer.remove();
      window.location.replace("../velha/index.html")
    });
  }