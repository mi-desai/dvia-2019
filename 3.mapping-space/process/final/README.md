### Documentation for Stones Unturned Project

The idea behind this project was to map earthquakes within shale oil and gas basins in the continental US. The chart below the map would show the proportion of earthquakes within a PARTICULAR basin over the course of a year, compared with the total production from that basin in terms of oil or gas (whichever commodity it primarily produces). 

There is a lot of data processing and complicated data structures to achieve the ends of this project and I ran out of time to fully bring all the functionality that I wanted into the project. However, I was able to create a full version of the entire design for submission. 

## Design

I wanted a dark color scheme with reds to emphasize points of interest. A light orange/transparent brown was used to map the polygons, which hopefully communicates that these formations are subterranean. 

Reds were used to map the actual earthquakes on the map, emphasize the title typography, and the circular proportion of earthquakes within each basin in the chart. 

## Functionality

Because of the huge size of the geoJSON's returned from the API, I've come to the conclusion that I can't use P5 if I want to incorporate all the functionality I want into this project. The files are simply too large and slow down the page too much. 

Additionally, functionality is more hamstrung in P5 than it is in jQuery, so I was only able to do a static mock-up of the final design in P5. However, everything is mapped to data. 

For my professional portfolio, I plan to redo this project from the ground-up using jQuery, Leaflet, and D3. 
