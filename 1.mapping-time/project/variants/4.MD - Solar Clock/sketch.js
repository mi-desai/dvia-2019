//Planets clock
let myData;

function setup() {
  createCanvas(800, 800);
  angleMode(DEGREES);
}

function draw() {
  background(0);
  stroke(255);

  var now = clock();

  var monthsArc = map(now.month, 0, 12, 0, 360);
  var dayArc = map(now.day, 0, 30, 0, 360);
  var moonArc = map(now.progress.moon, 0, 1, 0, 360);
  
  var r = 80;
  var m = 30;

  //earth
  translate(width / 2, height / 2);
  noStroke();
  fill('#CE8147');
  ellipse(0, 0, 25, 25);

  //sun's totation
  stroke(255, 164, 36);
  strokeWeight(2);
  noFill();
  arc(0, 0, 400, 400, 360, 360);
  pop();

  //month progress line
  push();
  rotate(dayArc);
  fill('#CE8147');
  line(0, 0, 200, 100);
  pop();

  //year ellipse
  push();
  rotate(monthsArc);
  fill(208, 20, 70);
  ellipse(0, 200, r, r);
  line(0, 200, 0, 0);
  pop();
  
  //moon ellipse
  push();
  rotate(moonArc);
  fill('#EDE3A6');
  ellipse(0, 50, m, m);
  pop();

  
}