let x = 700;
let y = 750;
let spacing = 60;

function setup() {
	createCanvas(800, 800);
	ellipseMode(CENTER);
  }
  
  function draw() {
	
	background(255);
	translate (0, 0);
	
	var now = clock()
	
	noFill();
	
//months

	ellipse(x,y,50,50);
		if (now.month == 1) {
			fill("blue");
		}
	ellipse(x-spacing,y,50,50);
		if (now.month == 2) {
			fill("blue");
		}
	ellipse(x-spacing-spacing,y,50,50);
		if (now.month == 3) {
			fill("blue");
		}
	ellipse(x-spacing-spacing-spacing,y,50,50);
		if (now.month == 4) {
			fill("green");
		}
	ellipse(x-spacing-spacing-spacing-spacing,y,50,50);
		if (now.month == 5) {
			fill("green");
		}
	ellipse(x-spacing-spacing-spacing-spacing-spacing,y,50,50);
		if (now.month == 6) {
			fill("green");
		}
	ellipse(x-spacing-spacing-spacing-spacing-spacing-spacing,y,50,50);
		if (now.month == 7) {
			fill("orange");
		}
	ellipse(x-spacing-spacing-spacing-spacing-spacing-spacing-spacing,y,50,50);
		if (now.month == 8) {
			fill("orange");
		}
	ellipse(x-spacing-spacing-spacing-spacing-spacing-spacing-spacing-spacing,y,50,50);
		if (now.month == 9) {
			fill("orange");
		}
	ellipse(x-spacing-spacing-spacing-spacing-spacing-spacing-spacing-spacing-spacing,y,50,50);
		if (now.month == 10) {
			fill("brown");
		}
	ellipse(x-spacing-spacing-spacing-spacing-spacing-spacing-spacing-spacing-spacing-spacing,y,50,50);
		if (now.month == 11) {
			fill("brown");
		}
	ellipse(x-spacing-spacing-spacing-spacing-spacing-spacing-spacing-spacing-spacing-spacing-spacing, y,50,50);
		if (now.month == 12) {
			fill("brown");
		}

//weekdays
	
	rect(x-185, y-85, 50, 50);
		if (now.weekday == 1) {
			fill(255); 
			stroke(8);
		}
	rect(x-185-spacing, y-85, 50, 50);
		if (now.weekday == 2) {
			fill(255); 
			stroke(8);
		}
	rect(x-185-spacing-spacing, y-85, 50, 50);
		if (now.weekday == 3) {
			fill(255); 
			stroke(8);
		}
	rect(x-185-spacing-spacing-spacing, y-85, 50, 50);
		if (now.weekday == 4) {
			fill(255); 
			stroke(8); 
		}
	rect(x-185-spacing-spacing-spacing-spacing, y-85, 50, 50);
		if (now.weekday == 5) {
			fill(255); 
		}
	rect(x-185-spacing-spacing-spacing-spacing-spacing, y-85, 50, 50);
		if (now.weekday == 6) {
			fill(255); 
		}
	rect(x-185-spacing-spacing-spacing-spacing-spacing-spacing, y-85, 50, 50);
		if (now.weekday == 7) {
			fill(255);
		}

// am - pm

	rect(x-285, y-155, 125, 50);
		if (now.text.ampm === "A.M.") {
			fill("yellow");
		} 
	rect(x-490, y-155, 125, 50);
		if (now.text.ampm === "P.M.") {
			fill("black");
		}
		
	translate (400, 400);
	rotate(90);

//second, minute hour, day arcs

	let secondArc = map(now.progress.sec, 0, 1, 0, 360);
	let minuteArc= map(now.progress.min, 0, 1, 0, 360);
	let hourArc= map(now.progress.hour, 0, 1, 0, 360);
	let dayArc = map(now.progress.day, 0, 1, 0, 360);

//Seconds, minutes, hours, progress of current day, as arcs

	noFill();
	strokeCap(ROUND);
	arc(0, 0, 345, 345, 0, secondArc);
	stroke(255, 150, 300);
	arc(0, 0, 375, 375, 0, minuteArc);
	stroke(150, 300, 150);
	arc (0, 0, 405, 405, 0, hourArc);
	stroke(200,75,85);
	arc(0, 0, 435, 435, 0, dayArc);


  }
  