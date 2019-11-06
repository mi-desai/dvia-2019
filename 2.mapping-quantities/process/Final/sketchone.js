var table

function preload(){
  table = loadTable('data/totals.csv', 'csv', 'header')
  // fetchimages(table)
}

let height = 2000; 
let width = 1800; 
let transformer = 6; 

function setup(){
  createCanvas(width, height)
  background(0)
  noStroke()
  textAlign(CENTER)
  textSize(14)

  // calculate the total number of tests per year (and also the max in any given year)
  var years = []
  var totals = []
  var lowest = 0
  var highest = 0
  var yearbins = []; 
  var totalbins = [];
  for (var r=0; r<table.getRowCount(); r++){
    var sum = 0
    var year = table.getString(r, 0)
    for (var c=1; c<table.getColumnCount(); c++){
      sum += table.getNum(r, c)
    }

    years.push(year)
    totals.push(sum)
    
  }

//need another function to sort stuff into bins of two to five years and then decades
console.log(years); 
console.log(totals); 
console.log(totals[11]); 

//draw the years on the y-axis
var x = 1000
var y = 50
var dim = 55
var spacing = 25

//start at i=4 to start at 1950
for (var i=4; i<years.length; i++) {
  rect(x, y, dim, dim)
  fill('white')
  text(years[i], x+spacing, y+spacing)
  textAlign(CENTER)
  fill(0)
  stroke("white")
  y+=spacing
}

var barx = x+55
var bary = height*0.05

//draw each bar on the y-axis
// rect(x+55, height*0.05, totals[11]*transformer, spacing, 20); 

for (var i=4; i<totals.length; i++) {
  rect(barx, bary, totals[i]*transformer, spacing, 0, 20, 20, 0); 
  fill("red")
  stroke("white")
  bary+=spacing
}

// decadebarx = x-55
// decadebary = height*0.15

// for (var i=4; i<years.length; i+10) {
//   rect(decadebarx, decadebary, width-(x-55), 1)
//   fill("black")
//   stroke("white")
//   decadebary+=1
// }


}


//   // draw a box for each year and set its color based on the total number of tests
//   var x = 100
//   var y = 100
//   var dim = 50
//   var numberOfShades = 9
//   var palette = Brewer.sequential('BuPu', numberOfShades, lowest, highest)

//   for (var i=0; i<years.length; i++){
//     // draw the box
//     var color = palette.colorForValue(totals[i])
//     fill(color)
//     rect(x, y, dim, dim)

//     // draw the year number on top
//     fill('white')
//     text(years[i], x+dim*.5, y+dim*.6)
//     y+=dim
//   }

// }

