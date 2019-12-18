var maxRadius = 700;
var minRadius = 50;

function setup() {
  createCanvas(800, 800);
}

var colors = [
  "#C97064" /*fall*/,
  "#F39C6B" /*fall*/,
  "#CC978E" /*fall*/,
  "#012A36" /*winter*/,
  "#56A3A6" /*winter*/,
  "#A9BCD0" /*winter*/,
  "#8FC0A9" /*spring*/,
  "#C8D5B9" /*spring*/,
  "#FAF3DD" /*spring*/,
  "#17EFE2" /*summer*/,
  "#0FE5B8" /*summer*/,
  "#58FA58" /*summer*/
];

var gradient = chroma.scale(colors).domain([1,12]).mode("lab");
function colorForProgress(month) {
  return gradient(month).hex();
  console.log(gradient(month).hex())
}

function draw() {
  translate(width / 2, height / 2);
  var now = clock();
  var color = colorForProgress(now.month); //to see what month
  let radius = map(now.month, 1, 12, minRadius, maxRadius); //to see what days
  fill(color);
  ellipse(0, 0, radius, radius);
}
  