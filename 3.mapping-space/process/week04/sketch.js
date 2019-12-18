// the data loaded from a USGS-provided CSV file
var table;

// my leaflet.js map
var mymap;

function preload() {
    // load the CSV data into our `table` variable and clip out the header row
    table = loadTable("data/all_month.csv", "csv", "header");
    shale = loadJSON("shale.json");
}

function setup() {
    // first, create a leaflet map (look in the html's style tag to set its dimensions)
    mymap = L.map('quake-map').setView([39.0997, -94.5786], 4.5);

    // load a set of map tiles – choose from the different providers demoed here:
    // https://leaflet-extras.github.io/leaflet-providers/preview/
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox.streets',
        accessToken: 'pk.eyJ1IjoibWljaGFlbHNkZXNhaSIsImEiOiJjazM3dzhoZXAwM2E2M2JvYW9jM2pieHl2In0._rdrVCdsrNNjfSuQkk_r4w'
    }).addTo(mymap);
    
    var basins = L.geoJSON(shale).setStyle({
        fillOpacity: 0.4,
        color: 'orange',
        }).addTo(mymap);
    // basins.addData(shale);

    // step through the rows of the table and add a dot for each event
    for (var i=0; i<table.getRowCount(); i++){
        var row = table.getRow(i)

        // skip over any rows where the magnitude data is missing
        if (row.get('mag')==''){
            continue
        }

        // create a new dot
        var circle = L.circle([row.getNum('latitude'), row.getNum('longitude')], {
            color: '#DE3C4B',      // the dot stroke color
            fillColor: '#F58A07', // the dot fill color
            fillOpacity: 0.25,  // use some transparency so we can see overlaps
            radius: row.getNum('mag') * 10000
        })

        // place the new dot on the map
        circle.addTo(mymap);
        circle.bindPopup("Earthquake Location 2017")
    }

   //TESTING AND RETRIEVING FROM GEOJSON
   
    for (let x = 0; x < shale.features.length; x++) {
            console.log(shale.features[x].properties.Shale_play);
            console.log(shale.features[x].properties.Area_sq_mi.toFixed(1)); 
    }
    
    try {
        console.log(shale.features[0].geometry.coordinates[0][0]);
    }
    
    catch(err) {
        console.log("Invalid!!"); 
    }

    //Pop-up for Lat-longs

    // var popup = L.popup();
    
    // function onClick(e) {
    //     popup
    //         .setLatLng(e.latlng)
    //         .setContent("You clicked the map at " + e.latlng.toString())
    //         .openOn(mymap)
    //     console.log(e.latlng.toString()); 
    // }
    
    // mymap.on('click', onClick); 
    
    var myIcon = L.icon({
    iconUrl: 'my-icon.png',
    iconSize: [200, 200],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
    });
    
    
    function onEachFeature(geoJSON, layer) {
    if (geoJSON.properties && geoJSON.properties.Shale_play) {
        layer.bindTooltip("Shale play: " + geoJSON.properties.Shale_play + ", Total Square Mileage: " + geoJSON.properties.Area_sq_mi);
        // layer.setIcon(myIcon); 
        }
    }
    
    L.geoJSON(shale, {
        onEachFeature: onEachFeature
    }).addTo(mymap);
    
    
    var myIcon = L.icon({
        iconUrl: 'my-icon.png',
        iconSize: [50, 50],
        iconAnchor: [22, 94],
        popupAnchor: [-3, -76],
    });
    
    L.marker([39.0997, -94.5786], {icon: myIcon}).addTo(mymap);
    // L.marker([-87.37001799899997, 33.014572000000044], {icon: myIcon}).addTo(mymap); 
    

}