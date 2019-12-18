let monx = 800;
let mony = 700;
let weekx = monx - 175;
let weeky = mony - 100;
let moonposx = 400;
let moonpoxy = 400;
let spacing = 60;
let cx = 50;
let cy = 50;
let summer = '#368F8B'
let fall = '#AF7A6D'
let spring = '#80CFA9'
let winter = '#00A7E1'


function setup() {
	createCanvas(800, 800);
	ellipseMode(CENTER);
}

function draw() {

	var now = clock()
	
	if (now.am === true) {
		
	}
	background('#F2EFE9');
	translate(0, 0);

	var now = clock()

	//draw months and map seasons to colors of subsequent shapes
	for (let m = 1; m < 13; m++) {
		ellipse(monx - (spacing * m), mony, 50, 50);
		stroke(0);
		strokeWeight(2);

		if (now.month === 1 || now.month === 2 || now.month === 3) {
			fill(winter);
		}

		if (now.month === 4 || now.month === 5 || now.month === 6) {
			fill(spring);
		}

		if (now.month === 7 || now.month === 8 || now.month === 9) {
			fill(summer);
		}

		if (now.month === 10 || now.month === 11 || now.month === 12) {
			fill(fall);
		}

	}

	if (now.month === 1) {
		ellipse(monx - (60 * now.month), mony, 10, 10)
	}
	if (now.month === 2) {
		ellipse(monx - (60 * now.month), mony, 10, 10)
	}
	if (now.month === 3) {
		ellipse(monx - (60 * now.month), mony, 10, 10)
	}
	if (now.month === 4) {
		ellipse(monx - (60 * now.month), mony, 10, 10)
	}
	if (now.month === 5) {
		ellipse(monx - (60 * now.month), mony, 10, 10)
	}
	if (now.month === 6) {
		ellipse(monx - (60 * now.month), mony, 10, 10)
	}
	if (now.month === 7) {
		ellipse(monx - (60 * now.month), mony, 10, 10)
	}
	if (now.month === 8) {
		ellipse(monx - (60 * now.month), mony, 10, 10)
	}
	if (now.month === 9) {
		ellipse(monx - (60 * now.month), mony, 10, 10)
	}
	if (now.month === 10) {
		ellipse(monx - (60 * now.month), mony, 10, 10)
	}
	if (now.month === 11) {
		ellipse(monx - (60 * now.month), mony, 10, 10)
	}
	if (now.month === 12) {
		ellipse(monx - (60 * now.month), mony, 10, 10)
	}

	//draw weekdays

	for (let w = 1; w < 8; w++) {
		rect(weekx - (spacing * w), weeky, 50, 50);
	}

	if (now.weekday === 1) {
		ellipse(25 + weekx - (spacing * now.weekday), weeky + 25, 10, 10);
	}
	if (now.weekday === 2) {
		ellipse(25 + weekx - (spacing * now.weekday), weeky + 25, 10, 10);
	}
	if (now.weekday === 3) {
		ellipse(25 + weekx - (spacing * now.weekday), weeky + 25, 10, 10);
	}
	if (now.weekday === 4) {
		ellipse(25 + weekx - (spacing * now.weekday), weeky + 25, 10, 10);
	}
	if (now.weekday === 5) {
		ellipse(25 + weekx - (spacing * now.weekday), weeky + 25, 10, 10);
	}
	if (now.weekday === 6) {
		ellipse(25 + weekx - (spacing * now.weekday), weeky + 25, 10, 10);
	}
	if (now.weekday === 7) {
		ellipse(25 + weekx - (spacing * now.weekday), weeky + 25, 10, 10);
	}

	let moonArc = map(now.progress.moon, 0, 1, 0, TWO_PI);
	
	//draw moon
	arc(400, 400, 150, 150, 0, moonArc, PIE);

	translate(400, 400);
	rotate(90);

	//second, minute hour, day arcs

	let minuteArc = map(now.progress.min, 0, 1, 0, 235);
	let hourArc = map(now.progress.hour, 0, 1, 0, 235);
	let dayArc = map(now.progress.day, 0, 1, 0, 235);

	//Seconds, minutes, hours, progress of current day, as arcs

	noFill();
	arc(0, 0, 300, 300, 360, minuteArc);
	arc(0, 0, 345, 345, 360, hourArc);
	arc(0, 0, 375, 375, 360, dayArc);


}