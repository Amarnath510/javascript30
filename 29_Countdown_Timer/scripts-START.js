const timeLeft = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const timerBtns = document.querySelectorAll('[data-time]'); // anything that has date-time
const customInputForm = document.querySelector('#custom');

let countDownTimer;

function timer(seconds) {

  // clear timer before starting anything.
  // So that two timers won't run at the same time
  clearInterval(countDownTimer);

  const now = Date.now();
  const then = now + seconds * 1000;

  displayTimeLeft(seconds);
  displayEndTime(then);

  // Run for every second
  countDownTimer = setInterval(() => {
    const secondsLeft = Math.round( (then - Date.now()) / 1000 );

    if (secondsLeft < 0) {
      clearInterval(countDownTimer);
      return;
    }

    displayTimeLeft(secondsLeft);
  }, 1000);
}

function displayTimeLeft(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  timeLeft.textContent = `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
}

function displayEndTime(timeStamp) {
  const end = new Date(timeStamp);
  const hour = end.getHours();
  const hourIn12 = hour > 12 ? hour - 12 : hour;
  const minutes = end.getMinutes();
  endTime.textContent = `Be Back At ${hourIn12}:${minutes < 10 ? '0' : ''}${minutes}`;
}

function startTimer() {
  const duration = parseInt(this.dataset.time);
  timer(duration);
}

timerBtns.forEach(button => { button.addEventListener('click', startTimer) });
customInputForm.addEventListener('submit', function(e) {
  e.preventDefault();
  timer(this.minutes.value * 60);
  this.reset();
});
