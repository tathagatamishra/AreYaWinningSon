const W = document.querySelector(".W");
const Rook = document.querySelector(".rook");
const Body = document.body;

W.addEventListener("click", (e) => {
  x = e.offsetX;
  y = e.offsetY;
  console.log("x", x, "y", y);

  if (x <= 50 && y <= 50) {
    Rook.style.left = `${0}px`;
    Rook.style.top = `${0}px`;
  } else if (x >= 50 && x <= 100 && y <= 50) {
    Rook.style.left = `${50}px`;
    Rook.style.top = `${0}px`;
  } else if (x >= 100 && x <= 150 && y <= 50) {
    Rook.style.left = `${100}px`;
    Rook.style.top = `${0}px`;
  } else if (x >= 150 && x <= 200 && y <= 50) {
    Rook.style.left = `${150}px`;
    Rook.style.top = `${0}px`;
  } else if (x >= 200 && x <= 250 && y <= 50) {
    Rook.style.left = `${200}px`;
    Rook.style.top = `${0}px`;
  } else if (x >= 250 && x <= 300 && y <= 50) {
    Rook.style.left = `${250}px`;
    Rook.style.top = `${0}px`;
  } else if (x >= 300 && x <= 350 && y <= 50) {
    Rook.style.left = `${300}px`;
    Rook.style.top = `${0}px`;
  } else if (x >= 350 && x <= 400 && y <= 50) {
    Rook.style.left = `${350}px`;
    Rook.style.top = `${0}px`;
  } else if (x <= 50 && y >= 50 && y <= 100) {
    Rook.style.left = `${0}px`;
    Rook.style.top = `${50}px`;
  } else if (x >= 50 && x <= 100 && y >= 50 && y <= 100) {
    Rook.style.left = `${50}px`;
    Rook.style.top = `${50}px`;
  } else if (x >= 100 && x <= 150 && y >= 50 && y <= 100) {
    Rook.style.left = `${100}px`;
    Rook.style.top = `${50}px`;
  } else if (x >= 150 && x <= 200 && y >= 50 && y <= 100) {
    Rook.style.left = `${150}px`;
    Rook.style.top = `${50}px`;
  } else if (x >= 200 && x <= 250 && y >= 50 && y <= 100) {
    Rook.style.left = `${200}px`;
    Rook.style.top = `${50}px`;
  } else if (x >= 250 && x <= 300 && y >= 50 && y <= 100) {
    Rook.style.left = `${250}px`;
    Rook.style.top = `${50}px`;
  } else if (x >= 300 && x <= 350 && y >= 50 && y <= 100) {
    Rook.style.left = `${300}px`;
    Rook.style.top = `${50}px`;
  } else if (x >= 350 && x <= 400 && y >= 50 && y <= 100) {
    Rook.style.left = `${350}px`;
    Rook.style.top = `${50}px`;
  }
});
