const MARGEM_TABULEIRO = 10;

let reguladorVelocidadeTeclas = 0;
let reguladorDeQueda = 0;
let linhasFeitas = 0;

let jogoIniciado = false;
let jogoFinalizado = false;

const linhasParaVencer = 100;

let tabuleiro;
let tetrimino;
let tetriminosBase;

let anguloFundo = Math.random() * 360;
let tomFundo = Math.random() * 360;

const telaInicio = document.getElementById("start-screen");
const telaGameOver = document.getElementById("game-over-screen");
const telaVitoria = document.getElementById("win-screen");

const botaoInicio = document.getElementById("start-button");
const botaoReiniciar = document.getElementById("restart-button");
const botaoReiniciarVitoria = document.getElementById("win-restart-button");

setInterval(() => {
  document.body.style.background = `linear-gradient(
    ${anguloFundo}deg,
    hsl(${tomFundo}, 80%, 25%),
    hsl(${tomFundo}, 80%, 4%)
  )`;

  anguloFundo += 0.15;
  tomFundo += 0.1;
}, 50);

setInterval(() => {
  if (!jogoIniciado || jogoFinalizado) return;

  if (millis() - reguladorDeQueda < 300) return;

  reguladorDeQueda = millis();
  tetrimino.moverParaBaixo();
}, 500);

function setup() {
  createCanvas(900, 600);

  criarMapeamentoBaseTetriminos();

  tabuleiro = new Tabuleiro();
  tetrimino = new Tetrimino();

  resizeCanvas(
    tabuleiro.largura + 2 * MARGEM_TABULEIRO,
    tabuleiro.altura + 2 * MARGEM_TABULEIRO + 2 * tabuleiro.tamanhoCelula
  );
}

function draw() {
  clear();

  if (!tabuleiro || !tetrimino) return;

  desenharPontuacao();
  tabuleiro.desenhar();
  tetrimino.desenhar();

  if (jogoIniciado && !jogoFinalizado) {
    controlarTeclado();
  }
}

function desenharPontuacao() {
  push();
  textSize(20);
  strokeWeight(2);
  stroke("black");
  fill("white");
  text(
    "Linhas: " + linhasFeitas,
    tabuleiro.posicao.x,
    tabuleiro.posicao.y - tabuleiro.tamanhoCelula / 2
  );
  pop();
}

let limiteReguladorVelocidadeTeclas = 100;

function controlarTeclado() {
  if (
    millis() - reguladorVelocidadeTeclas <
    limiteReguladorVelocidadeTeclas
  ) {
    return;
  }

  limiteReguladorVelocidadeTeclas = 100;
  reguladorVelocidadeTeclas = millis();

  if (keyIsDown(RIGHT_ARROW)) {
    tetrimino.moverParaDireita();
    reguladorDeQueda = millis();
  }

  if (keyIsDown(LEFT_ARROW)) {
    tetrimino.moverParaEsquerda();
    reguladorDeQueda = millis();
  }

  if (keyIsDown(DOWN_ARROW)) {
    tetrimino.moverParaBaixo();
    reguladorDeQueda = millis();
  }

  if (keyIsDown(UP_ARROW)) {
    limiteReguladorVelocidadeTeclas = 150;
    tetrimino.girar();
    reguladorDeQueda = millis();
  }

  if (keyIsDown(32)) {
    limiteReguladorVelocidadeTeclas = 200;
    tetrimino.colocarNoFundo();
    reguladorDeQueda = millis();
  }
}

function iniciarJogo() {
  jogoIniciado = true;
  jogoFinalizado = false;
  linhasFeitas = 0;

  tabuleiro = new Tabuleiro();
  tetrimino = new Tetrimino();

  telaInicio.classList.add("hidden");
  telaGameOver.classList.add("hidden");
  telaVitoria.classList.add("hidden");

  window.focus();
}

function finalizarJogo() {
  jogoFinalizado = true;
  jogoIniciado = false;

  telaGameOver.classList.remove("hidden");
}

function vencerJogo() {
  jogoFinalizado = true;
  jogoIniciado = false;

  telaVitoria.classList.remove("hidden");
}

botaoInicio.addEventListener("click" || "space", iniciarJogo);
botaoReiniciar.addEventListener("click" || "space", iniciarJogo);
botaoReiniciarVitoria.addEventListener("click" || "space", iniciarJogo);

window.addEventListener("keydown", (event) => {
  if (
    event.code === "ArrowUp" ||
    event.code === "ArrowDown" ||
    event.code === "ArrowLeft" ||
    event.code === "ArrowRight" ||
    event.code === "Space"
  ) {
    event.preventDefault();
  }
});

window.addEventListener("click" || "space", () => {
  window.focus();
});

const mobileButtons = document.querySelectorAll(".mobile-controls button");

mobileButtons.forEach((button) => {
  button.addEventListener("pointerdown", () => {
    if (!jogoIniciado || jogoFinalizado) return;

    const action = button.dataset.action;

    if (action === "left") {
      tetrimino.moverParaEsquerda();
    }

    if (action === "right") {
      tetrimino.moverParaDireita();
    }

    if (action === "down") {
      tetrimino.moverParaBaixo();
    }

    if (action === "rotate") {
      tetrimino.girar();
    }

    if (action === "drop") {
      tetrimino.colocarNoFundo();
    }

    reguladorDeQueda = millis();
  });
});