var globe
var shale
var quakes
var morequakes
var production

const width = window.innerWidth;
const height = 0.35*window.innerHeight;

function preload() {
  shale = loadJSON("data/shale.json")
  quakes = loadTable("data/2.5_month.csv", 'csv', 'header')
  morequakes = loadJSON("morequakes.json")
  production = loadTable("production.csv", 'csv', 'header')
  
  sel = createSelect();
  sel.position(875, 590);
  sel.option('Permian');
  sel.option('Niobrara');
  sel.option('Monterey');
  sel.option('San Joaquin');
  sel.option('Marcellus');
  sel.changed(mySelectEvent);
  
}

function setup() {
  let canvas = createCanvas(width, height);
  canvas.parent("#canvas"); 
  background(0);
  fill(0);
  noStroke();
  stroke("white")
  
  let xOrigin = 400;
  let yOrigin = 20;
  let chartWidth = 700;
  let chartHeight = 225;
  
  let yAxisOriginX = xOrigin+30;
  let yAxisOriginY = yOrigin+20;
  let yAxisEndY = yOrigin+155;
  let xAxisEndY = yAxisEndY+(window.innerWidth*0.8);
  
  //AXIS LINES
  
  // stroke("white")
  // fill('black')
  // // rect(xOrigin, yOrigin, chartWidth, chartHeight)
  // strokeWeight(4)
  // line(yAxisOriginX, yAxisOriginY, yAxisOriginX, yAxisEndY)
  // line(yAxisOriginX, yAxisEndY, xAxisEndY, yAxisEndY)
  
  //get production data
  
  var years = [];
  var oklahoma = [];
  var dakota = [];
  var nm = [];
  var texas = [];
  var rockies = [];
  var california = [];
  
  for (var r=0; r<production.getRowCount(); r++){
    var sum = 0;
    var year = production.getString(r, 0);
    var oklh = production.getNum(r, 1);
    var dako = production.getNum(r, 2);
    var nmo = production.getNum(r, 3);
    var tex = production.getNum(r, 4);
    var rock = production.getNum(r, 5);
    var calif = production.getNum(r, 6);
    for (var c=1; c<production.getColumnCount(); c++){
      sum += production.getNum(r, c)
    }
    
    years.push(year);
    oklahoma.push(oklh);
    dakota.push(dako);
    nm.push(nmo);
    texas.push(tex);
    rockies.push(rock);
    california.push(calif);
  }
  
console.log(years[9], oklahoma[9], california[9]);

var yearspacing = 10; 
var barx = 450;
var bary = 50;

fill("white")
stroke("white")
text("Permian (Texas-New Mexico)", 700, 35);
text("The outer circle represents total production in the basin, the inner circle represents the number of earthquakes that have occurred within the basin during the year.", 450, 200);
noFill();


stroke("white");
ellipse(500, 100, 90, 90);
fill("red");
ellipse(500, 100, 10, 10);
fill("white");
text("2018", 490, 162);
noFill();

ellipse(600, 100, 70, 70);
fill("red");
ellipse(600, 100, 5, 5);
fill("white");
text("2017", 590, 155);
noFill();

ellipse(700, 100, 60, 60);
fill("red");
ellipse(700, 100, 7, 7);
fill("white");
text("2016", 690, 150);
noFill();

ellipse(800, 100, 55, 55);
fill("red");
ellipse(800, 100, 18, 18);
fill("white");
text("2015", 790, 150);
noFill();

ellipse(900, 100, 50, 50);
fill("red");
ellipse(900, 100, 16, 16);
fill("white");
text("2014", 890, 150);
noFill();

ellipse(1000, 100, 45, 45);
fill("red");
ellipse(1000, 100, 23, 23);
fill("white");
text("2013", 990, 150);
noFill();

ellipse(1100, 100, 40, 40);
fill("red");
ellipse(1100, 100, 6, 6);
fill("white");
text("2012", 1090, 150);
noFill();


    // first, create a leaflet map (look in the html's style tag to set its dimensions)
  globe = L.map('quake-map', {worldCopyJump:true}).setView([39.4561, -98.1062], 4.75);
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox.dark',
        accessToken: 'pk.eyJ1IjoiZHZpYTIwMTciLCJhIjoiY2o5NmsxNXIxMDU3eTMxbnN4bW03M3RsZyJ9.VN5cq0zpf-oep1n1OjRSEA'
    }).addTo(globe);

    var icon = L.icon({
    iconUrl: 'epicenter.png',
    iconSize: [40, 40], // size of the icon // size of the shadow
    });

    // step through the features and create a layer for each
    for (var i=0; i<shale.features.length; i++){
      var feature = shale.features[i]
      var play = feature.properties.Shale_play
      var name = feature.properties.Basin

      var region = L.geoJSON(feature)
                    .setStyle({weight:2, color:'white', fillColor:'#F9A03F', fillOpacity:.33, radius:3})
                    .bindTooltip(`${play}: ${name}`)
                    .addTo(globe)
    }

    // for (var r=0; r<morequakes.features.length; r++) {
    //   // console.log(morequakes.features[r].geometry.coordinates);
    //   var quakeLat = morequakes.features[r].geometry.coordinates[0];
    //   var quakeLng = morequakes.features[r].geometry.coordinates[1];
    //   console.log(quakeLat, quakeLng);
    //   var basin = findFeature(shale, quakeLat, quakeLng);
    //   if (basin){
    //     var play = basin.properties.Shale_play;
    //     var name = basin.properties.Basin;
    //     console.log(play, name, quakeLat, quakeLng);

    //     var dot = L.marker([quakeLat, quakeLng], {icon: icon})
    //               // .setStyle({weight:0, fillColor:'#EF0707', fillOpacity:1, radius:4})
    //               .bindTooltip(`<b>${quakeMag} magnitude quake in the ${play}, ${name}`)
    //               .addTo(globe);
    //   }
      
    //   else {
    //     var dot = L.marker([quakeLat, quakeLng], {icon: icon})
    //               .bindTooltip('Not in a Shale Basin!')
    //               .addTo(globe);
    //     console.log("Not in a basin!");
    //   }
      
    // }
    
    for (var r=0; r<quakes.getRowCount(); r++){
      var row = quakes.getRow(r)

      var quakeLat = row.getNum('latitude')
      var quakeLng = row.getNum('longitude')
      var quakeMag = row.getNum('mag')

      // search through the list of features in the geojson file for one that contains this quake's location
      var basin = findFeature(shale, quakeLat, quakeLng)

      // if the quake is located within one of the basin outlines, findFeature() will have given us a geojson 
      // feature object with .geometry and .properties attributes. if the quake is outside of all the basins, 
      // it will return 'null' to signal that. by checking to make sure 'basin!=null' we make sure to only
      // add markers for earthquakes that are within a basin
      if (basin){
        var play = basin.properties.Shale_play
        var name = basin.properties.Basin

        var dot = L.marker([quakeLat, quakeLng], {icon: icon})
                  // .setStyle({weight:0, fillColor:'#EF0707', fillOpacity:1, radius:4})
                  .bindTooltip(`<b>${quakeMag} magnitude quake in the ${play}, ${name}`)
                  .addTo(globe)
      }
    }

}

function findFeature(geoJsonData, lat, lng){
  // first make sure the coordinates are even in the continental u.s.
  var top=49.3457868, left=-124.7844079, right=-66.9513812, bottom=24.7433195;
  if (lng>=left && lng<=right && lat<=top && lat>=bottom){

    // then test the coords against each of the geojson features in turn. 
    // if we find a match, return it immediately
    for (var f=0; f<geoJsonData.features.length; f++){
      var feature = geoJsonData.features[f]
      if (d3.geoContains(feature, [lng, lat])){
        return feature
      }
    }
  }
  // otherwise, if we didn't find any matches within the for-loop, return null
  return null
}

function mySelectEvent() {
  console.log("clicked!");
}