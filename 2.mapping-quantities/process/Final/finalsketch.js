var table
var img
var films

//1950's films
var dayearthstoodstill
var godzilla
var them
var invasionbodysnatchers
var onthebeach
var worldfleshdevil
var twilightzone

//1960's films
var timemachine
var daytheearthcaughtfire
var manchuriancandidate
var drno
var panicinyearzero
var ladybug
var failsafe
var strangelove
var goldfinger
var bedford
var thunderball
var oldwargame
var startrek

//1970's films
var planetoftheapes
var bedsittingroom
var beneathplanetapes
var zardoz
var aboyandhisdog
var logansrun
var madmax

//1980's films
var roadwarrior
var escapefromnewyork
var atomiccafe
var terminator
var dayafter
var wargames
var deadzone
var testament
var threads
var reddawn
var terminator
var beyondthunderdome
var invasionusa
var sacrifice
var windblows
var fourthprotocol
var miraclemile
var akira

//1990's films
var bydawnsearlylight
var redoctober
var terminatortwo
var crimsontide
var escapefromla

//2000's films
var sumofallfears
var terminatorthree
var theroad
var terminatorsalvation

//2010's films
var bookofeli
var chernobyl

function preload(){
  table = loadTable('data/totals.csv', 'csv', 'header')
  films = loadTable('data/films.csv', 'csv', 'header')
//1950's films
  dayearthstoodstill = loadImage('posters/50earthstoodstill.jpg')
  godzilla = loadImage('posters/50godzilla.jpg')
  them = loadImage('posters/50them.jpg')
  invasionbodysnatchers = godzilla = loadImage('posters/50bodysnatchers.jpg')
  onthebeach = loadImage('posters/50onthebeach.jpg')
  worldfleshdevil = loadImage('posters/50worldfleshdevil.jpg')
  twilightzone = loadImage('posters/50twilightzone.jpg')
//1960's films
  drno = loadImage('posters/60drno.jpg')
  timemachine = loadImage('posters/60timemachine.jpg')
  failsafe = loadImage('posters/60failsafe.jpg')
  goldfinger = loadImage('posters/60goldfinger.jpg')
  ladybug = loadImage('posters/60ladybug.jpg')
  manchuriancandidate = loadImage('posters/60manchuriancandidate.jpg')
  panicinyearzero = loadImage('posters/60panicinyearzero.jpg')
  startrek = loadImage('posters/60startrek.jpg')
  strangelove = loadImage('posters/60strangelove.jpg')
  oldwargame = loadImage('posters/60thewargame.jpg')
  thunderball = loadImage('posters/thunderball.jpg')
  bedford = loadImage('posters/60bedfordincident.jpg')
  daytheearthcaughtfire = loadImage('posters/60dayearthcaughtfire.jpg')
//1970's films
  planetoftheapes = loadImage('posters/70planetofapes.jpg')
  bedsittingroom = loadImage('posters/70bedsittingroom.jpg')
  beneathplanetapes = loadImage('posters/70beneathplanetofapes.jpg')
  madmax = loadImage('posters/70madmax.jpg')
  zardoz = loadImage('posters/70zardoz.jpg')
  aboyandhisdog = loadImage('posters/70aboyandhisdog.jpg')
  logansrun = loadImage('posters/70logansrun.jpg')
//1980's films
  roadwarrior = loadImage('posters/80roadwarrior.jpg')
  escapefromnewyork = loadImage('posters/80escapeny.jpg')
  atomiccafe = loadImage('posters/80atomiccafe.jpg')
  terminator = loadImage('posters/80terminator.jpg')
  dayafter = loadImage('posters/80dayafter.jpg')
  wargames = loadImage('posters/80wargames.jpg')
  deadzone = loadImage('posters/80deadzone.jpg')
  threads = loadImage('posters/80threads.jpg')
  beyondthunderdome = loadImage('posters/80beyondthunderdome.jpg')
  invasionusa = loadImage('posters/80invasionusa.jpg')
  sacrifice = loadImage('posters/80sacrifice.jpg')
  windblows = loadImage('posters/80whenthewindblows.jpg')
  fourthprotocol = loadImage('posters/80fourthprotocol.jpg')
  miraclemile = loadImage('posters/80miraclemile.jpg')
  akira = loadImage('posters/80akira.jpg')
//1990's films
  bydawnsearlylight = loadImage('posters/90bydawnearlylight.jpg')
  redoctober = loadImage('posters/90redoctober.jpg')
  terminatortwo = loadImage('posters/90terminator2.jpg')
  crimsontide = loadImage('posters/90crimsontide.jpg')
  escapefromla = loadImage('posters/90escapefromla.jpg')
//2000's films
  sumofallfears = loadImage('posters/00sumofallfears.jpg')
  terminatorthree = loadImage('posters/00terminator3.jpg')
  theroad = loadImage('posters/00theroad.jpg')
  terminatorsalvation = loadImage('posters/00terminator4.jpg')
//2010's films
  bookofeli = loadImage('posters/10bookofeli.jpg')
  chernobyl = loadImage('posters/10chernobyl.jpg')

}

let height = 2000; 
let width = 2200; 
let transformer = 3; 

function setup(){
  createCanvas(width, height)
  background(0)
  noStroke()
  textAlign(CENTER)
  textSize(14)

  // calculate the total number of tests per year (and also the max in any given year)
  var years = []
  var totals = []
  var usa = []
  var russia = []
  var lowest = 0
  var highest = 0
  for (var r=0; r<table.getRowCount(); r++){
    var sum = 0
    var us
    var ussr
    var year = table.getString(r, 0)
    us = table.getNum(r, 1)
    ussr = table.getNum(r, 2)
    for (var c=1; c<table.getColumnCount(); c++){
      sum += table.getNum(r, c)
    }

    years.push(year)
    totals.push(sum)
    usa.push(us)
    russia.push(ussr)
    
  }

/* questions for christian

1. how do I get totals by USSR/USA per year from the above loop?
2. how should I load in / draw each poster image on the left side?
3. how can I change the text alignment in the center y axis?

*/

console.log(russia[12]);
console.log(usa[12]); 

//draw the years on the y-axis
var x = 1600
var y = 120
var dim = 55
var spacing = 25

//draw central y-axis, start at i=4 to start at 1950
for (var i=5; i<years.length; i++) {
  rect(x, y, dim, dim)
  stroke("black")
  text(years[i], x+spacing, y+spacing-5)
  textAlign(CENTER)
  y+=spacing
}

//bar variables
var barx = x+55
var bary = 120
var usabarx = x+55
var usabary = 120
var usaspacing = 12.5
var russiabarx = x+55
var russiabary = usabary+25
var russiaspacing = 12.5

fill("black")
stroke("white")
rect(1655, 120, 2000, 2000)

//draw each bar on the y-axis for total number of tests in each year
for (var i=5; i<totals.length; i++) {
  rect(barx, bary, totals[i]*transformer, spacing, 0, 20, 20, 0); 
  fill("black")
  stroke("white")
  bary+=spacing
}

//draw small blue bar within the bigger bar above
for (var i=5; i<usa.length; i++) {
  rect(usabarx, usabary, usa[i]*transformer, usaspacing, 0, 20, 20, 0); 
  fill("#5074C1")
  stroke("white")
  usabary+=spacing
}

//draw small red bar within the bigger bar above
for (var i=5; i<russia.length; i++) {
  rect(russiabarx, russiabary+russiaspacing, russia[i]*transformer, russiaspacing, 0, 20, 20, 0); 
  fill("#c16150")
  stroke("white")
  russiabary+=spacing
}

//decade boxes for film bins

fill("black")
stroke("white")
rect(x-1600, 120, 1600, 250)
rect(x-1600, 370, 1600, 250)
rect(x-1600, 620, 1600, 250)
rect(x-1600, 870, 1600, 250)
rect(x-1600, 1120, 1600, 250)
rect(x-1600, 1370, 1600, 250)
rect(x-1600, 1620, 1600, 229)

var movieSpacing = 5;
var moviey = 150;
var moviex = 1520;
var posterwidth = 75;
var posterheight = 130;

//50's movies

image(dayearthstoodstill, moviex, moviey, posterwidth, posterheight); 
textSize(8)
fill("white")
text("The Day the Earth", moviex+35, moviey+150)
text("Stood Still", moviex+35, moviey+160)

image(godzilla, moviex-posterwidth-movieSpacing, moviey, posterwidth, posterheight); 
textSize(8)
fill("white")
text("Godzilla", moviex-posterwidth-movieSpacing+35, moviey+150)

image(onthebeach, moviex-(posterwidth*2)-(movieSpacing*2), moviey, posterwidth, posterheight); 
textSize(8)
fill("white")
text("On the Beach", moviex-(posterwidth*2)-(movieSpacing*2)+35, moviey+150)


image(invasionbodysnatchers, moviex-(posterwidth*3)-(movieSpacing*3), moviey, posterwidth, posterheight); 
textSize(8)
fill("white")
text("Invasion of the", moviex-(posterwidth*3)-(movieSpacing*3)+35, moviey+150)
text("Body Snatchers", moviex-(posterwidth*3)-(movieSpacing*3)+35, moviey+160)

image(them, moviex-(posterwidth*4)-(movieSpacing*4), moviey, posterwidth, posterheight); 
textSize(8)
fill("white")
text("Them!", moviex-(posterwidth*4)-(movieSpacing*4)+35, moviey+150)


image(worldfleshdevil, moviex-(posterwidth*5)-(movieSpacing*5), moviey, posterwidth, posterheight); 
textSize(8)
fill("white")
text("The World, the", moviex-(posterwidth*5)-(movieSpacing*5)+35, moviey+150)
text("Flesh, and the", moviex-(posterwidth*5)-(movieSpacing*5)+35, moviey+160)
text("Devil", moviex-(posterwidth*5)-(movieSpacing*5)+35, moviey+170)

image(twilightzone, moviex-(posterwidth*6)-(movieSpacing*6), moviey, posterwidth, posterheight); 
textSize(8)
fill("white")
text("The Twilight Zone", moviex-(posterwidth*6)-(movieSpacing*6)+35, moviey+150)

//60's movies

image(drno, moviex, moviey+250, posterwidth, posterheight); 
textSize(8)
fill("white")
text("Dr. No", moviex+35, moviey+250+150)

image(timemachine, moviex-posterwidth-movieSpacing, moviey+250, posterwidth, posterheight); 
textSize(8)
fill("white")
text("Time Machine", moviex-posterwidth-movieSpacing+35, moviey+250+150)

image(failsafe, moviex-(posterwidth*2)-(movieSpacing*2), moviey+250, posterwidth, posterheight); 
textSize(8)
fill("white")
text("Failsafe", moviex-(posterwidth*2)-(movieSpacing*2)+35, moviey+250+150)

image(goldfinger, moviex-(posterwidth*3)-(movieSpacing*3), moviey+250, posterwidth, posterheight); 
textSize(8)
fill("white")
text("Goldfinger", moviex-(posterwidth*3)-(movieSpacing*3)+35, moviey+250+150)

image(thunderball, moviex-(posterwidth*4)-(movieSpacing*4), moviey+250, posterwidth, posterheight); 
textSize(8)
fill("white")
text("Thunderball", moviex-(posterwidth*4)-(movieSpacing*4)+35, moviey+250+150)

image(ladybug, moviex-(posterwidth*5)-(movieSpacing*5), moviey+250, posterwidth, posterheight); 
textSize(8)
fill("white")
text("Ladybug Ladybug", moviex-(posterwidth*5)-(movieSpacing*5)+35, moviey+250+150)

image(manchuriancandidate, moviex-(posterwidth*6)-(movieSpacing*6), moviey+250, posterwidth, posterheight); 
textSize(8)
fill("white")
text("The Manchurian", moviex-(posterwidth*6)-(movieSpacing*6)+35, moviey+250+150)
text("Candidate", moviex-(posterwidth*6)-(movieSpacing*6)+35, moviey+250+160)


image(panicinyearzero, moviex-(posterwidth*7)-(movieSpacing*7), moviey+250, posterwidth, posterheight); 
textSize(8)
fill("white")
text("Panic in", moviex-(posterwidth*7)-(movieSpacing*7)+35, moviey+250+150)
text("Year Zero", moviex-(posterwidth*7)-(movieSpacing*7)+35, moviey+250+160)

image(startrek, moviex-(posterwidth*8)-(movieSpacing*8), moviey+250, posterwidth, posterheight); 
textSize(8)
fill("white")
text("Star Trek", moviex-(posterwidth*8)-(movieSpacing*8)+35, moviey+250+150)

image(strangelove, moviex-(posterwidth*9)-(movieSpacing*9), moviey+250, posterwidth, posterheight);
textSize(8)
fill("white")
text("Dr. Strangelove", moviex-(posterwidth*9)-(movieSpacing*9)+35, moviey+250+150)

image(oldwargame, moviex-(posterwidth*10)-(movieSpacing*10), moviey+250, posterwidth, posterheight); 
textSize(8)
fill("white")
text("The War Game", moviex-(posterwidth*10)-(movieSpacing*10)+35, moviey+250+150)


image(bedford, moviex-(posterwidth*11)-(movieSpacing*11), moviey+250, posterwidth, posterheight);
textSize(8)
fill("white")
text("The Beford Incident", moviex-(posterwidth*11)-(movieSpacing*11)+35, moviey+250+150)

image(daytheearthcaughtfire, moviex-(posterwidth*12)-(movieSpacing*12), moviey+250, posterwidth, posterheight);
textSize(8)
fill("white")
text("The Day the", moviex-(posterwidth*12)-(movieSpacing*12)+35, moviey+250+150)
text("Earth Caught Fire", moviex-(posterwidth*12)-(movieSpacing*12)+35, moviey+250+160)

image(twilightzone, moviex-(posterwidth*13)-(movieSpacing*13), moviey+250, posterwidth, posterheight); 
textSize(8)
fill("white")
text("The Twilight Zone", moviex-(posterwidth*13)-(movieSpacing*13)+35, moviey+250+150)

//70's movies

image(planetoftheapes, moviex, moviey+500, posterwidth, posterheight); 
textSize(8)
fill("white")
text("Planet of the", moviex+35, moviey+500+150)
text("Apes", moviex+35, moviey+500+160)

image(bedsittingroom, moviex-posterwidth-movieSpacing, moviey+500, posterwidth, posterheight);
textSize(8)
fill("white")
text("The Bed", moviex-posterwidth-movieSpacing+35, moviey+500+150)
text("Sitting Room", moviex-posterwidth-movieSpacing+35, moviey+500+160)

image(beneathplanetapes, moviex-(posterwidth*2)-(movieSpacing*2), moviey+500, posterwidth, posterheight); 
textSize(8)
fill("white")
text("Beneath the Planet",moviex-(posterwidth*2)-(movieSpacing*2)+35, moviey+500+150)
text("of the Apes", moviex-(posterwidth*2)-(movieSpacing*2)+35, moviey+500+160)

image(zardoz, moviex-(posterwidth*3)-(movieSpacing*3), moviey+500, posterwidth, posterheight); 
textSize(8)
fill("white")
text("Zardoz", moviex-(posterwidth*3)-(movieSpacing*3)+35, moviey+500+150)

image(madmax, moviex-(posterwidth*4)-(movieSpacing*4), moviey+500, posterwidth, posterheight);
textSize(8)
fill("white")
text("Mad Max", moviex-(posterwidth*4)-(movieSpacing*4)+35, moviey+500+150)


image(aboyandhisdog, moviex-(posterwidth*5)-(movieSpacing*5), moviey+500, posterwidth, posterheight); 
textSize(8)
fill("white")
text("A Boy and",moviex-(posterwidth*5)-(movieSpacing*5)+35, moviey+500+150)
text("His Dog", moviex-(posterwidth*5)-(movieSpacing*5)+35, moviey+500+160)

image(logansrun, moviex-(posterwidth*6)-(movieSpacing*6), moviey+500, posterwidth, posterheight);
textSize(8)
fill("white")
text("Logan's Run", moviex-(posterwidth*6)-(movieSpacing*6)+35, moviey+500+150)

//80's movies

image(roadwarrior, moviex, moviey+750, posterwidth, posterheight); 
textSize(8)
fill("white")
text("Road Warrior", moviex+35, moviey+750+150)

image(escapefromnewyork, moviex-posterwidth-movieSpacing, moviey+750, posterwidth, posterheight); 
textSize(8)
fill("white")
text("Escape From", moviex-posterwidth-movieSpacing+35, moviey+750+150)
text("New York", moviex-posterwidth-movieSpacing+35, moviey+750+160)

image(atomiccafe, moviex-(posterwidth*2)-(movieSpacing*2), moviey+750, posterwidth, posterheight); 
textSize(8)
fill("white")
text("Atomic Cafe", moviex-(posterwidth*2)-(movieSpacing*2)+35, moviey+750+150)

image(terminator, moviex-(posterwidth*3)-(movieSpacing*3), moviey+750, posterwidth, posterheight); 
textSize(8)
fill("white")
text("Terminator", moviex-(posterwidth*3)-(movieSpacing*3)+35, moviey+750+150)


image(dayafter, moviex-(posterwidth*4)-(movieSpacing*4), moviey+750, posterwidth, posterheight); 
textSize(8)
fill("white")
text("The Day After", moviex-(posterwidth*4)-(movieSpacing*4)+35, moviey+750+150)


image(wargames, moviex-(posterwidth*5)-(movieSpacing*5), moviey+750, posterwidth, posterheight); 
textSize(8)
fill("white")
text("WarGames", moviex-(posterwidth*5)-(movieSpacing*5)+35, moviey+750+150)


image(deadzone, moviex-(posterwidth*6)-(movieSpacing*6), moviey+750, posterwidth, posterheight); 
textSize(8)
fill("white")
text("The Dead Zone", moviex-(posterwidth*6)-(movieSpacing*6)+35, moviey+750+150)

image(threads, moviex-(posterwidth*7)-(movieSpacing*7), moviey+750, posterwidth, posterheight); 
textSize(8)
fill("white")
text("Threads", moviex-(posterwidth*7)-(movieSpacing*7)+35, moviey+750+150)

image(beyondthunderdome, moviex-(posterwidth*8)-(movieSpacing*8), moviey+750, posterwidth, posterheight);
textSize(8)
fill("white")
text("Mad Max:", moviex-(posterwidth*8)-(movieSpacing*8)+35, moviey+750+150)
text("Beyond Thunderdome", moviex-(posterwidth*8)-(movieSpacing*8)+35, moviey+750+160)


image(invasionusa, moviex-(posterwidth*9)-(movieSpacing*9), moviey+750, posterwidth, posterheight); 
textSize(8)
fill("white")
text("Invasion USA", moviex-(posterwidth*9)-(movieSpacing*9)+35, moviey+750+150)


image(sacrifice, moviex-(posterwidth*10)-(movieSpacing*10), moviey+750, posterwidth, posterheight); 
textSize(8)
fill("white")
text("The Sacrifice", moviex-(posterwidth*10)-(movieSpacing*10)+35, moviey+750+150)


image(windblows, moviex-(posterwidth*11)-(movieSpacing*11), moviey+750, posterwidth, posterheight); 
textSize(8)
fill("white")
text("When the Wind", moviex-(posterwidth*11)-(movieSpacing*11)+35, moviey+750+150)
text("Blows", moviex-(posterwidth*11)-(movieSpacing*11)+35, moviey+750+160)

image(fourthprotocol, moviex-(posterwidth*12)-(movieSpacing*12), moviey+750, posterwidth, posterheight); 
textSize(8)
fill("white")
text("The Fourth", moviex-(posterwidth*12)-(movieSpacing*12)+35, moviey+750+150)
text("Protocol", moviex-(posterwidth*12)-(movieSpacing*12)+35, moviey+750+160)


image(miraclemile, moviex-(posterwidth*13)-(movieSpacing*13), moviey+750, posterwidth, posterheight); 
textSize(8)
fill("white")
text("Miracle Mile", moviex-(posterwidth*13)-(movieSpacing*13)+35, moviey+750+150)

image(akira, moviex-(posterwidth*14)-(movieSpacing*14), moviey+750, posterwidth, posterheight); 
textSize(8)
fill("white")
text("Akira", moviex-(posterwidth*14)-(movieSpacing*14)+35, moviey+750+150)



//90's movies

image(bydawnsearlylight, moviex, moviey+1000, posterwidth, posterheight); 
textSize(8)
fill("white")
text("By the Dawn's", moviex+35, moviey+1000+150)
text("Early Light", moviex+35, moviey+1000+160)

image(redoctober, moviex-posterwidth-movieSpacing, moviey+1000, posterwidth, posterheight); 
textSize(8)
fill("white")
text("The Hunt for", moviex-posterwidth-movieSpacing+35, moviey+1000+150)
text("Red October", moviex-posterwidth-movieSpacing+35, moviey+1000+160)


image(terminatortwo, moviex-(posterwidth*2)-(movieSpacing*2), moviey+1000, posterwidth, posterheight); 
textSize(8)
fill("white")
text("Terminator 2:", moviex-(posterwidth*2)-(movieSpacing*2)+35, moviey+1000+150)
text("Judgement Day", moviex-(posterwidth*2)-(movieSpacing*2)+35, moviey+1000+160)

image(crimsontide, moviex-(posterwidth*3)-(movieSpacing*3), moviey+1000, posterwidth, posterheight); 
textSize(8)
fill("white")
text("Crimson Tide", moviex-(posterwidth*3)-(movieSpacing*3)+35, moviey+1000+150)

image(escapefromla, moviex-(posterwidth*4)-(movieSpacing*4), moviey+1000, posterwidth, posterheight); 
textSize(8)
fill("white")
text("Escape from LA", moviex-(posterwidth*4)-(movieSpacing*4)+35, moviey+1000+150)

//00's movies

image(sumofallfears, moviex, moviey+1250, posterwidth, posterheight); 
textSize(8)
fill("white")
text("The Sum of", moviex+35, moviey+1250+150)
text("All Fears", moviex+35, moviey+1250+160)

image(terminatorthree, moviex-posterwidth-movieSpacing, moviey+1250, posterwidth, posterheight); 
textSize(8)
fill("white")
text("Terminator 3: Rise", moviex-posterwidth-movieSpacing+35, moviey+1250+150)
text("of the Machines", moviex-posterwidth-movieSpacing+35, moviey+1250+160)

image(theroad, moviex-(posterwidth*2)-(movieSpacing*2), moviey+1250, posterwidth, posterheight);
textSize(8)
fill("white")
text("The Road", moviex-(posterwidth*2)-(movieSpacing*2)+35, moviey+1250+150)

image(terminatorsalvation, moviex-(posterwidth*3)-(movieSpacing*3), moviey+1250, posterwidth, posterheight); 
textSize(8)
fill("white")
text("Terminator Salvation", moviex-(posterwidth*3)-(movieSpacing*3)+35, moviey+1250+150)


//10's movies

image(bookofeli, moviex, moviey+1500, posterwidth, posterheight);
textSize(8)
fill("white")
text("The Book", moviex+35, moviey+1500+150)
text("of Eli", moviex+35, moviey+1500+160)

image(chernobyl, moviex-posterwidth-movieSpacing, moviey+1500, posterwidth, posterheight);
textSize(8)
fill("white")
text("Chernobyl", moviex-posterwidth-movieSpacing+35, moviey+1500+150)


//title, labels, legends

textSize(24)
fill("white")
text("COMPARING CULTURE AND REALITY OF NUCLEAR WAR:", 1500, 40)
textSize(20)
text("An exploration through histograms", 1500, 60)
textSize(12)
text("Number of films dealing with nuclear war binned by decade", 400, 115)
text("Year", 1620, 115)
text("Number nuclear tests conducted binned by year", 1900, 115)
fill("#5074C1")
ellipse(2000, 20, 20, 20)
text("USA Nuclear Tests", 2075, 25)

fill("#c16150")
ellipse(2000, 50, 20, 20)
text("Russia Nuclear Tests", 2075, 50)

fill("black")
ellipse(2000, 80, 20, 20)
text("Worldwide Total Tests", 2080, 80)

}


