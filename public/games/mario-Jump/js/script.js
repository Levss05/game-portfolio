const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe");
const scoreElement = document.querySelector(".score");

const startScreen = document.querySelector(".start-screen");
const gameOverScreen = document.querySelector(".game-over-screen");
const winScreen = document.querySelector(".win-screen");

const restartButton = document.querySelector(".restart-button");
const winRestartButton = document.querySelector(".win-restart-button");

let gameStarted = false;
let gameOver = false;

let score = 0;
let scoreInterval;
let animationFrameId;

const winningScore = 100;

/*
  Física do pulo
*/
let marioY = 0;
let velocityY = 0;
let isGrounded = true;
let jumpHeld = false;

const jumpStrength = 18;
const normalGravity = 0.8;
const slowFallGravity = 0.2;

const startGame = () => {
  if (gameStarted) return;

  gameStarted = true;
  gameOver = false;

  score = 0;
  marioY = 0;
  velocityY = 0;
  isGrounded = true;
  jumpHeld = false;

  scoreElement.innerText = `Score: ${score}`;

  startScreen.classList.add("hidden");
  gameOverScreen.classList.add("hidden");
  winScreen.classList.add("hidden");

    mario.src = "./images/mario.gif";
    setMarioDefaultStyle();

  pipe.classList.remove("running");
  pipe.style.left = "";
  pipe.style.right = "-90px";

  // Força reiniciar a animação do cano
  void pipe.offsetWidth;

  pipe.classList.add("running");

  scoreInterval = setInterval(() => {
    if (gameOver) return;

    score++;
    scoreElement.innerText = `Score: ${score}`;

    if (score >= winningScore) {
      handleWin();
    }
  }, 500);

  gameLoop();
};

const jump = () => {
  if (!gameStarted || gameOver) return;

  if (isGrounded) {
    velocityY = jumpStrength;
    isGrounded = false;
  }
};

const updateMarioPhysics = () => {
  if (!gameStarted || gameOver) return;

  if (!isGrounded) {
    const gravity =
      jumpHeld && velocityY < 0 ? slowFallGravity : normalGravity;

    marioY += velocityY;
    velocityY -= gravity;

    if (marioY <= 0) {
      marioY = 0;
      velocityY = 0;
      isGrounded = true;
    }

    mario.style.bottom = `${marioY}px`;
  }
};

const checkCollision = () => {
  if (!gameStarted || gameOver) return;

  const pipePosition = pipe.offsetLeft;
  const mobile = isMobile();

  const collisionRightLimit = mobile ? 105 : 150;
  const collisionLeftLimit = mobile ? 35 : 55;
  const collisionHeight = mobile ? 65 : 95;

  if (
    pipePosition <= collisionRightLimit &&
    pipePosition > collisionLeftLimit &&
    marioY < collisionHeight
  ) {
    handleGameOver();
  }
};

const gameLoop = () => {
  if (gameOver) return;

  updateMarioPhysics();
  checkCollision();

  animationFrameId = requestAnimationFrame(gameLoop);
};

const handleGameOver = () => {
  gameOver = true;
  gameStarted = false;
  jumpHeld = false;

  clearInterval(scoreInterval);
  cancelAnimationFrame(animationFrameId);

  const pipePosition = pipe.offsetLeft;

  pipe.classList.remove("running");
  pipe.style.left = `${pipePosition}px`;
  pipe.style.right = "auto";

mario.src = "./images/game-over.png";

    if (isMobile()) {
    mario.style.width = "50px";
    mario.style.marginLeft = "30px";
    } else {
    mario.style.width = "75px";
    mario.style.marginLeft = "50px";
    }

    mario.style.bottom = `${marioY}px`;

  gameOverScreen.classList.remove("hidden");
};

const handleWin = () => {
  gameOver = true;
  gameStarted = false;
  jumpHeld = false;

  clearInterval(scoreInterval);
  cancelAnimationFrame(animationFrameId);

  const pipePosition = pipe.offsetLeft;

  pipe.classList.remove("running");
  pipe.style.left = `${pipePosition}px`;
  pipe.style.right = "auto";

  winScreen.classList.remove("hidden");
};

const resetGame = () => {
  clearInterval(scoreInterval);
  cancelAnimationFrame(animationFrameId);

  gameStarted = false;
  gameOver = false;

  score = 0;
  marioY = 0;
  velocityY = 0;
  isGrounded = true;
  jumpHeld = false;

  scoreElement.innerText = `Score: ${score}`;

    mario.src = "./images/mario.gif";
    setMarioDefaultStyle();

  pipe.classList.remove("running");
  pipe.style.left = "";
  pipe.style.right = "-90px";

  startScreen.classList.add("hidden");
  gameOverScreen.classList.add("hidden");
  winScreen.classList.add("hidden");
};

const restartGame = (event) => {
  event.preventDefault();
  event.stopPropagation();

  resetGame();
  startGame();
};

const isRestartButton = (target) => {
  return (
    target.classList.contains("restart-button") ||
    target.classList.contains("win-restart-button")
  );
};

const isMobile = () => window.innerWidth <= 768;

const setMarioDefaultStyle = () => {
  if (isMobile()) {
    mario.style.width = "90px";
    mario.style.marginLeft = "0";
  } else {
    mario.style.width = "150px";
    mario.style.marginLeft = "0";
  }

  mario.style.bottom = "0px";
};

document.addEventListener("keydown", (event) => {
  if (event.code === "Space" || event.code === "ArrowUp") {
    event.preventDefault();

    jumpHeld = true;

    if (!gameStarted && !gameOver) {
      startGame();
      return;
    }

    if (!event.repeat) {
      jump();
    }
  }
});

document.addEventListener("keyup", (event) => {
  if (event.code === "Space" || event.code === "ArrowUp") {
    event.preventDefault();
    jumpHeld = false;
  }
});

document.addEventListener("mousedown", (event) => {
  if (isRestartButton(event.target)) return;

  jumpHeld = true;

  if (!gameStarted && !gameOver) {
    startGame();
    return;
  }

  jump();
});

document.addEventListener("mouseup", () => {
  jumpHeld = false;
});

document.addEventListener(
  "touchstart",
  (event) => {
    if (isRestartButton(event.target)) return;

    event.preventDefault();

    jumpHeld = true;

    if (!gameStarted && !gameOver) {
      startGame();
      return;
    }

    jump();
  },
  { passive: false }
);

document.addEventListener("touchend", () => {
  jumpHeld = false;
});

restartButton.addEventListener("pointerdown", restartGame);
winRestartButton.addEventListener("pointerdown", restartGame);

window.addEventListener("click", () => {
  window.focus();
});