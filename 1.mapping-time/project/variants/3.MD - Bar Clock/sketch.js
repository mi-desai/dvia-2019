var x= - 200
var y= 0 
var h= 500
var milsec

function setup() {
createCanvas(800, 800);
  noStroke();
  rectMode(CENTER)
}

function draw() {

background('#F2EFE9')
translate (200, 300)
var now = clock()

hour = h * now.progress.day
min = h* now.progress.hour
sec= h* now.progress.min
milsec = h * now.progress.sec

fill('#B42335')
rect(hour, y, 180, 25)

fill('#C14B59')
rect(min, y+75, 90, 25)

fill('#CF737E')
rect(sec, y+150, 45, 25)
 
fill ('#DC9BA3')
rect(milsec, y+225, 25, 25)

}