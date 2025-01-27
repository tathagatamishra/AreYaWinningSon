const canvas1 = document.getElementById("canvas1");
const canvas2 = document.getElementById("canvas2");

const ctx1 = canvas1.getContext("2d");
const ctx2 = canvas2.getContext("2d");

const text = document.getElementById("text");
const color = document.getElementById("color");

// set canvas width and height
canvas1.width = window.innerWidth/2;
canvas1.height = window.innerHeight/2;

canvas2.width = window.innerWidth/2;
canvas2.height = window.innerHeight/2;

let x;
let y;

let hue = Math.random() * 360;
ctx1.strokeStyle = `hsl(${hue}, 100%, 50%)`;

canvas1.addEventListener("mousemove", (e) => {
  // find current mouse position on canvas
  x = e.offsetX;
  y = e.offsetY;

  text.textContent = `x: ${x}, y: ${y}`;

  // color is changing randomly
  hue = Math.random() * 360;
  ctx1.strokeStyle = `hsl(${hue}, 100%, 50%)`;

  // set background color of the color
  color.textContent = `Hue: ${Math.floor(hue)}`;
  color.style.backgroundColor = `hsl(${hue}, 100%, 50%)`;

  // ctx.strokeStyle = "red";
  // smooth egdes
  ctx1.lineJoin = "round";
  // set stroke width
  ctx1.lineWidth = 5;
  ctx1.lineTo(x, y);
  ctx1.stroke();
});

// -----------------second canvas-------------------

canvas2.addEventListener("mousedown", (e) => {
    canvas2.addEventListener("mousemove", (e) => {
        // find current mouse position on canvas
        x = e.offsetX;
        y = e.offsetY;
    
        text.textContent = `x: ${x}, y: ${y}`;
        ctx2.fillRect(x, y, 5, 5);
    });
});

canvas2.addEventListener("mouseup", (e) => {
    canvas2.removeEventListener("mousemove", (e) => {
        
    });
});