const slider = document.querySelector('.items');

let isPressed = false, startX, scrollLeft;

slider.addEventListener('mousedown', (e) => {
  isPressed = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft; // startX, scrollLeft will be used in mousemove
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
  isPressed = false;
  slider.classList.remove('active');
});

slider.addEventListener('mouseup', () => {
  isPressed = false;
  slider.classList.remove('active');
});

slider.addEventListener('mousemove', (e) => {
  if(!isPressed) {
    return;
  }
  e.preventDefault();

  // walk = current_pos - how_much_slided
  const offsetToMove = e.pageX - slider.offsetLeft;
  const walk = (offsetToMove - startX) * 2; // to double the slide pace
  slider.scrollLeft = scrollLeft - walk;
});
