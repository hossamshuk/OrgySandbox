var button;

function setup() {
  createCanvas(640, 480);
  background(0)
  //button = createButton('source');
  //button = createButton('click me');
  //button.position(19, 19);
}

function draw() {
  if (mouseIsPressed) {
    fill(0);
  } else {
    fill(255);
  }
  ellipse(mouseX, mouseY, 80, 80);
}