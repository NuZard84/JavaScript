'use strict';

// >>> Jonas Logic ...


// let secretNumber = Math.trunc(Math.random() * 20) + 1;
// let score = 20;
// let highscore = 0;

// const displayMessage = function (message) {
//   document.querySelector('.message').textContent = message;
// };

// document.querySelector('.check').addEventListener('click', function () {
//   const guess = Number(document.querySelector('.guess').value);
//   console.log(guess, typeof guess);

//   // When there is no input
//   if (!guess) {
//     // document.querySelector('.message').textContent = '⛔️ No number!';
//     displayMessage('⛔️ No number!');

//     // When player wins
//   } else if (guess === secretNumber) {
//     // document.querySelector('.message').textContent = '🎉 Correct Number!';
//     displayMessage('🎉 Correct Number!');
//     document.querySelector('.number').textContent = secretNumber;

//     document.querySelector('body').style.backgroundColor = '#60b347';
//     document.querySelector('.number').style.width = '30rem';

//     if (score > highscore) {
//       highscore = score;
//       document.querySelector('.highscore').textContent = highscore;
//     }

//     // When guess is wrong
//   } else if (guess !== secretNumber) {
//     if (score > 1) {
//       // document.querySelector('.message').textContent =
//       // guess > secretNumber ? '📈 Too high!' : '📉 Too low!';
//       displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       // document.querySelector('.message').textContent = '💥 You lost the game!';
//       displayMessage('💥 You lost the game!');
//       document.querySelector('.score').textContent = 0;
//     }
//   }

//   //   // When guess is too high
//   // } else if (guess > secretNumber) {
//   //   if (score > 1) {
//   //     document.querySelector('.message').textContent = '📈 Too high!';
//   //     score--;
//   //     document.querySelector('.score').textContent = score;
//   //   } else {
//   //     document.querySelector('.message').textContent = '💥 You lost the game!';
//   //     document.querySelector('.score').textContent = 0;
//   //   }

//   //   // When guess is too low
//   // } else if (guess < secretNumber) {
//   //   if (score > 1) {
//   //     document.querySelector('.message').textContent = '📉 Too low!';
//   //     score--;
//   //     document.querySelector('.score').textContent = score;
//   //   } else {
//   //     document.querySelector('.message').textContent = '💥 You lost the game!';
//   //     document.querySelector('.score').textContent = 0;
//   //   }
//   // }
// });

// document.querySelector('.again').addEventListener('click', function () {
//   score = 20;
//   secretNumber = Math.trunc(Math.random() * 20) + 1;

//   // document.querySelector('.message').textContent = 'Start guessing...';
//   displayMessage('Start guessing...');
//   document.querySelector('.score').textContent = score;
//   document.querySelector('.number').textContent = '?';
//   document.querySelector('.guess').value = '';

//   document.querySelector('body').style.backgroundColor = '#222';
//   document.querySelector('.number').style.width = '15rem';
// });

// >>> My Logic...

const again = document.querySelector('.again');
const check = document.querySelector('.check');
const highScore = document.querySelector('.highscore');
const score = document.querySelector('.score');
const number = document.querySelector('.number');
const msg = document.querySelector('.message');
const guess = document.querySelector('.guess');
const body = document.querySelector('body');

// >>> Creating a random seceret number which in certain range...
let rand = Math.trunc(Math.random() * 100 + 1);
console.log('random', rand);
let x = -1;
let y = -1;
let b;

//>>> functions....
function stopBodyblinking() {
  clearInterval(b);
}

function logic() {
  const guessVal = Number(guess.value);
  if (x !== guessVal) {
    x = guessVal;
    if (!guessVal) {
      msg.textContent = 'You have to type at least any Number !';
    } else {
      msg.textContent = 'Start guessing...';
      if (y === -1) {
        highScore.textContent = Number(100);
        y = 0;
      }
      if (guessVal === rand) {
        msg.textContent = '🎉 Woah you get the secret Number !';
        $('body').toggleClass('jqueG');
        number.textContent = rand;
        if (score.textContent > highScore.textContent) {
          highScore.textContent = score.textContent;
        }
      } else if (guessVal > rand) {
        $('body').removeClass('jqueB');
        b = setInterval(function () {
          $('body').toggleClass('jqueR');
          setTimeout(stopBodyblinking, 690);
        }, 225);
        msg.textContent = 'try smaller 📉 !';
        if (highScore.textContent === score.textContent) {
          score.textContent = Number(score.textContent) - 1;
          highScore.textContent = Number(highScore.textContent) - 1;
        } else {
          score.textContent = Number(score.textContent) - 1;
        }
      } else if (guessVal < rand) {
        $('body').removeClass('jqueB');
        b = setInterval(function () {
          $('body').toggleClass('jqueR');
          setTimeout(stopBodyblinking, 690);
        }, 225);
        msg.textContent = 'try higher 📈 !';
        if (highScore.textContent === score.textContent) {
          score.textContent = Number(score.textContent) - 1;
          highScore.textContent = Number(highScore.textContent) - 1;
        } else {
          score.textContent = Number(score.textContent) - 1;
        }
      }
    }
  } else {
    msg.textContent = `(⏳..Please try new Number..)`;
  }
}

again.addEventListener('click', function () {
  rand = Math.trunc(Math.random() * 100 + 1);
  $('body').removeClass('jqueG');
  $('body').toggleClass('jqueB');
  console.log('random', rand);
  msg.textContent = 'start guessing...';
  number.textContent = '?';
  guess.value = '';
  score.textContent = 100;
  x = -1;
});

check.addEventListener('click', logic);
document.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    logic();
  }
});

// >>> SetInterval for logic of blinking ...
// function stopP() {
//   clearInterval(p);
// }
// function stopQ() {
//   clearInterval(q);
// }

// function red() {
//   document.querySelector('body').style.backgroundColor = '#ef1818';

//   setTimeout(stopP, 100);
// }
// function black() {
//   document.querySelector('body').style.backgroundColor = '#222';
//   setTimeout(stopQ, 1100);
// }
// // q = setInterval(black, 550);
//         // p = setInterval(red, 600);
