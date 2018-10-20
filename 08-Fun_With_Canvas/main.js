const canvas = document.querySelector("#draw");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const context = canvas.getContext("2d");
context.lineJoin = 'round';
context.lineCap = 'round';
context.lineWidth = 10; // thickness of the line.

let canDraw = false;
let posX = 0, posY = 0;
let hue = 0; // Used to change line width

function draw(e) {
  if(!canDraw) {
    return;
  }

  context.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  context.beginPath(); // for starting a new path
  context.moveTo(posX, posY); // Start from this point
  context.lineTo(e.offsetX, e.offsetY); // Go to this point
  context.stroke(); // adding color
  [posX, posY] = [e.offsetX, e.offsetY];

  hue++;
  if (hue >= 360) {
    hue = 0;
  }
}


canvas.addEventListener('mousedown', (e) => {
  canDraw = true;
  [posX, posY] = [e.offsetX, e.offsetY];
});

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => canDraw = false);
canvas.addEventListener('onmouseout', () => canDraw = false);
