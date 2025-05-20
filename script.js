'use strict';
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

const newGame = function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.message').textContent = `Start guessing...`;
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = `?`;
  document.querySelector('.guess').value = '';
  return secretNumber, score;
};

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //console.log(guess, typeof guess);

  // if no guess is supplied..
  if (!guess) {
    // document.querySelector('.message').textContent = `🙀 No number entered!`;
    displayMessage(`🙀 No number entered!`);
  }
  // When player wins
  else if (guess === secretNumber) {
    displayMessage(`🟩 Correct Number!`);
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > document.querySelector('.highscore').textContent) {
      document.querySelector('.highscore').textContent = score;
    }
  }
  // When guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? `🔺 Too High!` : `🔻 Too Low!`);
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage(`💀 Game Over!`);
      document.querySelector('body').style.backgroundColor = '#f34b4b';
    }
  }
});

newGame();

document.querySelector('.again').addEventListener('click', function () {
  newGame();
});
