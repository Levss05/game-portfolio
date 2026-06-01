class Tabuleiro {
  constructor() {
    this.colunas = 10;
    this.linhas = 20;
    this.tamanhoCelula = 25;

    this.largura = this.colunas * this.tamanhoCelula;
    this.altura = this.linhas * this.tamanhoCelula;

    this.posicao = createVector(
      MARGEM_TABULEIRO,
      MARGEM_TABULEIRO + 2 * this.tamanhoCelula
    );

    this.minosArmazenados = [];

    for (let coluna = 0; coluna < this.colunas; coluna++) {
      this.minosArmazenados[coluna] = [];

      for (let linha = 0; linha < this.linhas; linha++) {
        this.minosArmazenados[coluna].push("");
      }
    }
  }

  armazenarMino(tetrimino) {
    for (const pmino of tetrimino.mapaTabuleiro) {
      if (pmino.y < 0) {
        finalizarJogo();
        return;
      }

      this.minosArmazenados[pmino.x][pmino.y] = tetrimino.nome;
    }

    this.buscarLinhasCompletas();
  }

  buscarLinhasCompletas() {
    const linhas = [];

    for (let linha = this.linhas - 1; linha >= 0; linha--) {
      let linhaCompleta = true;

      for (let coluna = 0; coluna < this.colunas; coluna++) {
        if (!this.minosArmazenados[coluna][linha]) {
          linhaCompleta = false;
          break;
        }
      }

      if (linhaCompleta) {
        linhas.push(linha);
      }
    }

    this.apagarLinhas(linhas);
  }

  apagarLinhas(linhas) {
    if (linhas.length === 0) return;

    linhasFeitas += linhas.length;

    if (linhasFeitas >= linhasParaVencer) {
      vencerJogo();
      return;
    }

    for (const linhaApagada of linhas) {
      for (let linha = linhaApagada; linha >= 0; linha--) {
        for (let coluna = 0; coluna < this.colunas; coluna++) {
          if (linha === 0) {
            this.minosArmazenados[coluna][linha] = "";
          } else {
            this.minosArmazenados[coluna][linha] =
              this.minosArmazenados[coluna][linha - 1];
          }
        }
      }
    }
  }

  coordenada(x, y) {
    return createVector(x, y).mult(this.tamanhoCelula).add(this.posicao);
  }

  desenhar() {
    push();
    noStroke();

    for (let coluna = 0; coluna < this.colunas; coluna++) {
      for (let linha = 0; linha < this.linhas; linha++) {
        if ((coluna + linha) % 2 === 0) {
          fill("black");
        } else {
          fill("#003");
        }

        const coordenada = this.coordenada(coluna, linha);
        rect(
          coordenada.x,
          coordenada.y,
          this.tamanhoCelula,
          this.tamanhoCelula
        );
      }
    }

    pop();

    this.desenharMinosArmazenados();
  }

  desenharMinosArmazenados() {
    push();

    for (let coluna = 0; coluna < this.colunas; coluna++) {
      for (let linha = 0; linha < this.linhas; linha++) {
        const nomeMino = this.minosArmazenados[coluna][linha];

        if (nomeMino) {
          fill(tetriminosBase[nomeMino].cor);
          Tetrimino.desenharMino(this.coordenada(coluna, linha));
        }
      }
    }

    pop();
  }
}