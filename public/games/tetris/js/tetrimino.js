class Tetrimino {
  constructor(nome = random(["Z", "S", "J", "L", "T", "O", "I"])) {
    this.nome = nome;

    const base = tetriminosBase[nome];

    this.cor = base.cor;
    this.mapa = [];

    for (const pmino of base.mapa) {
      this.mapa.push(pmino.copy());
    }

    this.posicao = createVector(int(tabuleiro.colunas / 2), -1);
  }

  moverParaDireita() {
    this.posicao.x++;

    if (this.movimentoInvalido) {
      this.moverParaEsquerda();
    }
  }

  moverParaEsquerda() {
    this.posicao.x--;

    if (this.movimentoInvalido) {
      this.moverParaDireita();
    }
  }

  moverParaBaixo() {
    this.posicao.y++;

    if (this.movimentoInvalido) {
      this.moverParaCima();

      if (tetrimino === this) {
        tabuleiro.armazenarMino(this);
        tetrimino = new Tetrimino();
      }

      return false;
    }

    return true;
  }

  moverParaCima() {
    this.posicao.y--;
  }

  colocarNoFundo() {
    this.posicao = this.espectro.posicao;
    this.moverParaBaixo();
  }

  girar() {
    for (const pmino of this.mapa) {
      pmino.set(pmino.y, -pmino.x);
    }

    if (this.movimentoInvalido) {
      this.desfazerGiro();
    }
  }

  desfazerGiro() {
    for (const pmino of this.mapa) {
      pmino.set(-pmino.y, pmino.x);
    }
  }

  get movimentoInvalido() {
    const saiuDoTabuleiro = !this.estaDentroDoTabuleiro;

    return saiuDoTabuleiro || this.colidiuComMinosArmazenados;
  }

  get colidiuComMinosArmazenados() {
    for (const pmino of this.mapaTabuleiro) {
      if (pmino.y < 0) continue;

      if (tabuleiro.minosArmazenados[pmino.x][pmino.y]) {
        return true;
      }
    }

    return false;
  }

  get estaDentroDoTabuleiro() {
    for (const pmino of this.mapaTabuleiro) {
      if (pmino.x < 0) {
        return false;
      }

      if (pmino.x >= tabuleiro.colunas) {
        return false;
      }

      if (pmino.y >= tabuleiro.linhas) {
        return false;
      }
    }

    return true;
  }

  get mapaTabuleiro() {
    const retorno = [];

    for (const pmino of this.mapa) {
      const copia = pmino.copy().add(this.posicao);
      retorno.push(copia);
    }

    return retorno;
  }

  get mapaCanvas() {
    const retorno = [];

    for (const pmino of this.mapa) {
      const copia = pmino.copy().add(this.posicao);
      retorno.push(tabuleiro.coordenada(copia.x, copia.y));
    }

    return retorno;
  }

  desenhar() {
    push();
    fill(this.cor);

    for (const pmino of this.mapaCanvas) {
      Tetrimino.desenharMino(pmino);
    }

    pop();

    if (tetrimino === this) {
      this.desenharEspectro();
    }
  }

  desenharEspectro() {
    this.espectro = new Tetrimino(this.nome);
    this.espectro.posicao = this.posicao.copy();

    for (let i = 0; i < this.mapa.length; i++) {
      this.espectro.mapa[i] = this.mapa[i].copy();
    }

    while (this.espectro.moverParaBaixo());

    push();
    drawingContext.globalAlpha = 0.3;
    this.espectro.desenhar();
    pop();
  }

  static desenharMino(pmino) {
    rect(pmino.x, pmino.y, tabuleiro.tamanhoCelula);

    push();
    noStroke();

    fill(255, 255, 255, 80);
    beginShape();
    vertex(pmino.x, pmino.y);
    vertex(pmino.x + tabuleiro.tamanhoCelula, pmino.y);
    vertex(
      pmino.x + tabuleiro.tamanhoCelula,
      pmino.y + tabuleiro.tamanhoCelula
    );
    endShape(CLOSE);

    fill(0, 0, 0, 80);
    beginShape();
    vertex(pmino.x, pmino.y);
    vertex(pmino.x, pmino.y + tabuleiro.tamanhoCelula);
    vertex(
      pmino.x + tabuleiro.tamanhoCelula,
      pmino.y + tabuleiro.tamanhoCelula
    );
    endShape(CLOSE);

    pop();
  }
}

function criarMapeamentoBaseTetriminos() {
  tetriminosBase = {
    Z: {
      cor: "red",
      mapa: [
        createVector(),
        createVector(-1, -1),
        createVector(0, -1),
        createVector(1, 0),
      ],
    },
    S: {
      cor: "lime",
      mapa: [
        createVector(),
        createVector(1, -1),
        createVector(0, -1),
        createVector(-1, 0),
      ],
    },
    J: {
      cor: "orange",
      mapa: [
        createVector(),
        createVector(-1, 0),
        createVector(-1, -1),
        createVector(1, 0),
      ],
    },
    L: {
      cor: "dodgerblue",
      mapa: [
        createVector(),
        createVector(-1, 0),
        createVector(1, -1),
        createVector(1, 0),
      ],
    },
    T: {
      cor: "magenta",
      mapa: [
        createVector(),
        createVector(-1, 0),
        createVector(1, 0),
        createVector(0, -1),
      ],
    },
    O: {
      cor: "yellow",
      mapa: [
        createVector(),
        createVector(0, -1),
        createVector(1, -1),
        createVector(1, 0),
      ],
    },
    I: {
      cor: "cyan",
      mapa: [
        createVector(),
        createVector(-1, 0),
        createVector(1, 0),
        createVector(2, 0),
      ],
    },
  };
}