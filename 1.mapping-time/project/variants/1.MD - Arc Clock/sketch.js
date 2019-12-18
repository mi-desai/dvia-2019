function setup() {
	// set the width & height of the sketch
	createCanvas(600, 600);
	angleMode(DEGREES);

  }

  function draw() {
	var now = clock();
	
	//change background to white or black depending on am or pm property
	
	if (now.pm) {
    background(0)
  }
  else {
    background(255)
  }
  
  //center the center of the arcs
  
	translate (300, 300);
	rotate(90);
	
	//map the progress between seconds, minutes, hours, days, months onto range between 0 and 360

	var secondArc = map(now.progress.sec, 0, 1, 0, 360); 
	var minuteArc= map(now.progress.min, 0, 1, 0, 360); 
	var hourArc= map(now.progress.hour, 0, 1, 0, 360); 
	var dayArc = map(now.progress.day, 0, 1, 0, 360); 
	var monthCircles = map(now.month, 1, 12, 1, 12); 

//Seconds, minutes, hours, progress of current day, as arcs

	noFill();
	strokeWeight(12);
	strokeCap(ROUND);
	stroke(255, 204, 50);
	arc(0, 0, 345, 345, 0, secondArc);
	stroke(255, 150, 300);
	arc(0, 0, 375, 375, 0, minuteArc);
	stroke(150, 300, 150);
	arc (0, 0, 405, 405, 0, hourArc);
	stroke(200,75,85);
	arc(0, 0, 435, 435, 0, dayArc);

//current month, progress of current month, as rectangles

  }