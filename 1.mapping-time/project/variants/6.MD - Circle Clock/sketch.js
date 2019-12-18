//Planets clock

function setup() {
  createCanvas(800, 800);
  angleMode(DEGREES);
}

function draw() {
  background('#EAEFBD');

  translate(width / 2, height / 2);
  rotate(-90);

  var now = clock();
  
  var seasonmark = 1; 

  var yearRot = now.progress.year * 360;
  var monthRot = now.progress.month * 360;
  var dayRot = now.progress.day * 360;
  var seasonRot = now.progress.season * 360;

  let hour = map(now.progress.hour, 0, 1, 0, 360);
  let day = map(now.progress.day, 0, 1, 0, 360);
  let month = map(now.progress.month, 0, 1, 0, 360);

  noFill();

  strokeWeight(8);
  stroke('#001011');
  arc(0, 0, 640, 640, 0, 360);
  stroke('#B42335');
  ellipse(0, 0, 10, 10);

  push();
  rotate(seasonRot);
  stroke('#B42335');
  line(0, 0, 60, 0);
  stroke('#001011');
  ellipse(0, 0, 120, 120);
  pop();
  
  push();
  rotate(yearRot);
  stroke('#C14B59');
  line(0, 0, 120, 0);
  stroke('#001011');
  ellipse(0, 0, 240, 240);
  pop();

  push();
  rotate(monthRot);
  stroke('#CF737E');
  line(0, 0, 220, 0);
  stroke('#001011');
  ellipse(0, 0, 440, 440);
  pop();

  push();
  rotate(dayRot);
  stroke('#DC9BA3');
  line(0, 0, 320, 0);
  stroke('#001011');
  pop();
  
  
}