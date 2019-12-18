// circle clock

function setup() {
	createCanvas(720, 400);
  let radius = min(width, height) / 2;
  secondsRadius = radius * 0.71;
  minutesRadius = radius * 0.6;
  hoursRadius = radius * 0.5;
  clockDiameter = radius * 1.7;
  cx = width / 2;
  cy = height / 2;
  }

function draw() {
  var now = clock();
  background(230);

  // Draw the clock background
  noStroke();
  fill('#636363');
  ellipse(cx, cy, clockDiameter + 25, clockDiameter + 25);
  fill('#85C7F2');
  ellipse(cx, cy, clockDiameter, clockDiameter);

  // Angles for sin() and cos() start at 3 o'clock;
  // subtract HALF_PI to make them start at the top
  let s = map(now.sec, 0, 60, 0, TWO_PI) - HALF_PI;
  let m = map(now.min + norm(now.sec, 0, 60), 0, 60, 0, TWO_PI) - HALF_PI;
  let h = map(now.hour + norm(now.min, 0, 60), 0, 24, 0, TWO_PI * 2) - HALF_PI;

  // Draw the hands of the clock
  stroke('#4C4C4C');
  strokeWeight(1);
  line(cx, cy, cx + cos(s) * secondsRadius, cy + sin(s) * secondsRadius);
  strokeWeight(2);
  line(cx, cy, cx + cos(m) * minutesRadius, cy + sin(m) * minutesRadius);
  strokeWeight(4);
  line(cx, cy, cx + cos(h) * hoursRadius, cy + sin(h) * hoursRadius);
  

}