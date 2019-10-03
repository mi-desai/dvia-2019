// circle clock

let upperLimit = 100;
let lowerLimit = 0;


function setup() {
	createCanvas(720, 720);
  
  }

function draw() {
    var now = clock(); 
    let readout = "Time: " + now.timestamp;
    let month = map(now.month, 0, 1, lowerLimit, upperLimit);
    let season = now.season; 
    let moon = now.progress.moon; 
    let v = p5.Vector.fromAngle(month, 225);
  background(0);

//moon fullness arc, not working correctly 
  stroke(0);
  fill("yellow");
  ellipse(width/2, height/2, 100, 100);
  if (now.weekday === 6 || now.weekday === 7) {
    stroke(255)
    arc(width/2, height/2, 100, 50, PI + QUARTER_PI, 3 * PI / 2, OPEN);
  } else {
    arc(width/2, height/2, 100, 80, PI, 3*PI, OPEN); 
  }
//For season lines dividing screen
  stroke(0);
  line(width/2, height, width/2, 0);
  line(0, height/2, width, height/2); 
  
  if (now.season == 1) {
    fill("green");
  } else {
    fill(0);
  }
  
  
//For month "ticker"
  
  ellipseMode(CENTER);
  translate(width / 2, height / 2);
  translate(p5.Vector.fromAngle(month, 225));
  fill(255);
  ellipse(0, 0, 40, 40);
  

}