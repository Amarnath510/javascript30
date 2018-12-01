const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
const timer = document.querySelector('.timer');

let timeUp;
let timerCount = 10;
let gameInterval;
let gameStarted = false;
let score = 0;

function randTime(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function randHole(holes) {
  const holeIdx = Math.round( Math.random() * (0, holes.length - 1) );
  return holes[holeIdx];
}

function peep() {
  const time = randTime(200, 1000);
  const hole = randHole(holes);
  hole.classList.add('up');

  setTimeout(() => {
    hole.classList.remove('up');

    // Until time is completed keep peeping
    if (!timeUp) {
      peep();
    }

  }, time);
}

function startGame() {
  scoreBoard.textContent = score;
  timeUp = false;
  gameStarted = true;
  peep(); // trigger start
  timer.textContent = timerCount; // set timer

  gameInterval = setInterval( () => {
    if (timerCount <= 0) {
      clearInterval(gameInterval);
      return;
    }
    timerCount--;
    timer.textContent = timerCount;
  }, 1000);

  setTimeout( () => timeUp = true, 10000 );
}


function bonk(event) {
  if (!gameStarted || !event.isTrusted) {
    return;
  }

  score++;
  scoreBoard.textContent = score;
  this.classList.remove('up');
}

moles.forEach( mole => mole.addEventListener('click', bonk) );
