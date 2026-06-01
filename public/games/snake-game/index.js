const playBoard = document.querySelector(".play-board");
const scoreElement = document.querySelector(".score");
const highScoreElement = document.querySelector(".high-score");

const gameOverScreen = document.querySelector(".game-over");
const restartButton = document.querySelector(".restart-button");

const startScreen = document.querySelector(".start-screen");
const startButton = document.querySelector(".start-button");

const winScreen = document.querySelector(".win-screen");
const winRestartButton = document.querySelector(".win-restart-button");

let gameOver = false;
let gameStarted = false;

const winningScore = 100;

let foodX;
let foodY;

let snakeX = 5;
let snakeY = 5;

let velocityX = 0;
let velocityY = 0;

let snakeBody = [];
let setIntervalId;
let score = 0;

let touchStartX = 0;
let touchStartY = 0;

let highScore = localStorage.getItem("high-score") || 0;
highScoreElement.innerText = `High Score: ${highScore}`;

const updateFoodPosition = () => {
  foodX = Math.floor(Math.random() * 30) + 1;
  foodY = Math.floor(Math.random() * 30) + 1;
};

const resetGame = (showStartScreen = true) => {
  gameOver = false;
  gameStarted = !showStartScreen;

  snakeX = 5;
  snakeY = 5;

  velocityX = 0;
  velocityY = 0;

  snakeBody = [];
  score = 0;

  scoreElement.innerText = `Score: ${score}`;

  gameOverScreen.classList.add("hidden");
  winScreen.classList.add("hidden");

  if (showStartScreen) {
    startScreen.classList.remove("hidden");
  } else {
    startScreen.classList.add("hidden");
  }

  updateFoodPosition();

  playBoard.innerHTML = `
    <div class="food" style="grid-area: ${foodY} / ${foodX}"></div>
    <div class="head" style="grid-area: ${snakeY} / ${snakeX}"></div>
  `;
};

const startGame = () => {
  if (gameStarted || gameOver) return;

  gameStarted = true;
  startScreen.classList.add("hidden");
  window.focus();
};

const handleGameOver = () => {
  gameOver = true;
  gameStarted = false;
  gameOverScreen.classList.remove("hidden");
};

const handleWin = () => {
  gameOver = true;
  gameStarted = false;
  winScreen.classList.remove("hidden");
};

const changeDirection = (direction) => {
  if (gameOver) return;

  if (!gameStarted) {
    startGame();
  }

  if (direction === "up" && velocityY !== 1) {
    velocityX = 0;
    velocityY = -1;
  } else if (direction === "down" && velocityY !== -1) {
    velocityX = 0;
    velocityY = 1;
  } else if (direction === "left" && velocityX !== 1) {
    velocityX = -1;
    velocityY = 0;
  } else if (direction === "right" && velocityX !== -1) {
    velocityX = 1;
    velocityY = 0;
  }
};

const handleKeyboardControl = (event) => {
  if (
    event.key === "ArrowUp" ||
    event.key === "ArrowDown" ||
    event.key === "ArrowLeft" ||
    event.key === "ArrowRight"
  ) {
    event.preventDefault();
  }

  if (event.key === "ArrowUp") {
    changeDirection("up");
  } else if (event.key === "ArrowDown") {
    changeDirection("down");
  } else if (event.key === "ArrowLeft") {
    changeDirection("left");
  } else if (event.key === "ArrowRight") {
    changeDirection("right");
  }
};

const handleTouchStart = (event) => {
  if (gameOver) return;

  const touch = event.touches[0];

  touchStartX = touch.clientX;
  touchStartY = touch.clientY;
};

const handleTouchEnd = (event) => {
  if (gameOver) return;

  const touch = event.changedTouches[0];

  const touchEndX = touch.clientX;
  const touchEndY = touch.clientY;

  const diffX = touchEndX - touchStartX;
  const diffY = touchEndY - touchStartY;

  const minSwipeDistance = 30;

  if (
    Math.abs(diffX) < minSwipeDistance &&
    Math.abs(diffY) < minSwipeDistance
  ) {
    return;
  }

  if (Math.abs(diffX) > Math.abs(diffY)) {
    if (diffX > 0) {
      changeDirection("right");
    } else {
      changeDirection("left");
    }
  } else {
    if (diffY > 0) {
      changeDirection("down");
    } else {
      changeDirection("up");
    }
  }
};

const initGame = () => {
  if (gameOver) return;

  let html = `<div class="food" style="grid-area: ${foodY} / ${foodX}"></div>`;

  if (!gameStarted) {
    html += `<div class="head" style="grid-area: ${snakeY} / ${snakeX}"></div>`;
    playBoard.innerHTML = html;
    return;
  }

  if (snakeX === foodX && snakeY === foodY) {
    updateFoodPosition();

    snakeBody.push([foodX, foodY]);
    score++;

    highScore = score >= highScore ? score : highScore;
    localStorage.setItem("high-score", highScore);

    scoreElement.innerText = `Score: ${score}`;
    highScoreElement.innerText = `High Score: ${highScore}`;

    if (score >= winningScore) {
      handleWin();
      return;
    }
  }

  snakeX += velocityX;
  snakeY += velocityY;

  for (let i = snakeBody.length - 1; i > 0; i--) {
    snakeBody[i] = snakeBody[i - 1];
  }

  snakeBody[0] = [snakeX, snakeY];

  if (snakeX <= 0 || snakeX > 30 || snakeY <= 0 || snakeY > 30) {
    handleGameOver();
    return;
  }

  for (let i = 0; i < snakeBody.length; i++) {
    html += `<div class="head" style="grid-area: ${snakeBody[i][1]} / ${snakeBody[i][0]}"></div>`;

    if (
      i !== 0 &&
      snakeBody[0][0] === snakeBody[i][0] &&
      snakeBody[0][1] === snakeBody[i][1]
    ) {
      handleGameOver();
      return;
    }
  }

  playBoard.innerHTML = html;
};

updateFoodPosition();
resetGame(true);

setIntervalId = setInterval(initGame, 100);

window.addEventListener("keydown", handleKeyboardControl);

playBoard.addEventListener("touchstart", handleTouchStart, {
  passive: true,
});

playBoard.addEventListener("touchend", handleTouchEnd);

startScreen.addEventListener("touchstart", handleTouchStart, {
  passive: true,
});

startScreen.addEventListener("touchend", handleTouchEnd);

restartButton.addEventListener("click", (event) => {
  event.stopPropagation();
  resetGame(false);
});

winRestartButton.addEventListener("click", (event) => {
  event.stopPropagation();
  resetGame(false);
});

startButton.addEventListener("click", (event) => {
  event.stopPropagation();
  startGame();
});

startScreen.addEventListener("click", () => {
  startGame();
});

window.addEventListener("click", () => {
  window.focus();
});