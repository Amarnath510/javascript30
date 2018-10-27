const player = document.querySelector('.player');
const video = document.querySelector('.player__video');
const progress = document.querySelector('.progress');
const progressBar = document.querySelector('.progress__filled');
const toggle = document.querySelector('.toggle');
const skipButtons = document.querySelectorAll('[data-skip]');
const ranges = document.querySelectorAll('.player__slider');


function togglePlay() {
  video.paused ? video.play() : video.pause();
}

function updateVideoStatusIcon() {
  const icon = this.paused ? '►' : '❚ ❚';
  toggle.textContent = icon;
}

function skipVideo() {
  video.currentTime += parseFloat(this.dataset.skip);
}

function handleRange() {
  video[this.name] = this.value;
}

function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

function dragProgress(e) {
  const dragPoint = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = dragPoint;
}

// Click on video
video.addEventListener('click', togglePlay);
video.addEventListener('pause', updateVideoStatusIcon);
video.addEventListener('play', updateVideoStatusIcon);
video.addEventListener('timeupdate', handleProgress);

// Click on Play/Pause button
toggle.addEventListener('click', () => {
  togglePlay();
  updateVideoStatusIcon();
});

// skip video backward/forward
skipButtons.forEach(button => {
  button.addEventListener('click', skipVideo);
});

// Volume, PlayBack Rate
ranges.forEach(range => {
  range.addEventListener('change', handleRange);
});

// Progress drag
progress.addEventListener('click', dragProgress);
