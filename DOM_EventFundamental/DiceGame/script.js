'use strict';

const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const winner = document.querySelector('.winner');

const diceEl = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNew = document.querySelector('.btn--new');

const closeModal = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');
const btnRule = document.querySelector('.btn--rule');
const modal = document.querySelector('.modal');

let scores, currentScore, activePlayer, playing;
const start = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  if (
    player1El.classList.contains('player--winner') ||
    player0El.classList.contains('player--winner')
  ) {
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
  }
  document.querySelector('.waviy-0').style.bottom = '500px';
  document.querySelector('.waviy-1').style.bottom = '500px';

  diceEl.classList.add('hidden');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};
start();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

btnRoll.addEventListener('click', function () {
  if (playing) {
    let diceNum = Math.trunc(Math.random() * 6) + 1;
    console.log(diceNum);

    diceEl.src = `dice-${diceNum}.png`;
    diceEl.classList.remove('hidden');

    if (diceNum === 1) {
      switchPlayer();
    } else {
      currentScore += diceNum;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    }
  }
});

function openModal() {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}

function shutModal() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

overlay.addEventListener('click', shutModal);

btnRule.addEventListener('click', openModal);

closeModal.addEventListener('click', shutModal);

document.addEventListener('keydown', function (e) {
  
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    
    shutModal();
  }
})

btnHold.addEventListener('click', function () {
  if (playing) {
    scores[activePlayer] += currentScore;
    console.log(scores[`${activePlayer}`]);

    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 100) {
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.toggle('player--winner');
      document.querySelector(`.waviy-${activePlayer}`).style.bottom = '50px';
      diceEl.classList.add('hidden');
    } else {
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', start);

var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
if (!isMobile) {
  console.log('it is window');
  
}
else {
  alert('You Should Activate Your Desktop Mode ..');
}
