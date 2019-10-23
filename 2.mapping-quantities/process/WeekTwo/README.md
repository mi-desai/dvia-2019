## Process

Description of the contents of this folder, a prose description of your ideas for how to represent
the nuclear testing time series, and links to external data sources you'll be incorporating into
the project.

External Data Sources: 
<link></link>
<link></link>
<link></link>

### Sketch #1 - Cultural Timeline and Histogram

This idea incorporated my love of film into the subject matter of nuclear weaponry. The Cold War and the prospect of nuclear war inspired a huge amount of dystopian and disaster films, as well as thrillers, science fiction, and action movies. Using IMBD's Top 20 films about nuclear war as well as few of my own additions, I envision the following for my first sketch: 

An x-axis going through the middle of the canvas, with a histogram on the bottom showing the frequency of testing grouped by bins of two years. 

Along the top of the x-axis, lines connecting to the appropriate year with a movie poster jpeg file showing each movie or TV series, as well as a caption with the name. Ironically, in my research I discovered that most of the "classics" of depictions of nuclear war in film were in the 1980's, when nuclear stockpiles were at their height, but nuclear testing had begun to decline. 

Each decade will have its own "color block" in the x-axis which I wanted 

External Data Source: 


Sketch: 

![alt text]()

The first, bottom-most layer, represents the number of hours that have passed in the current day. The plan is to define a line within the rectangle that moves along the point defined by the property now.progress.day. Additionally, the color of the amount past (whatever 1 - now.progress.day is), will be colored differently to draw the eye, using the hue retinal variable as well as shape to communicate time. 

The second layer in the middle will have a smaller area rectangle representing the number of minutes that have passed in the current hour. Again, the idea is to define a line within the rectangle that reflects the property now.progress.hour. The retinal variables are the same.  
The last, top-most, layer will be a yet smaller rectangle representing the number of seconds that have passed in the current minute. Again, the idea is to define a line within the rectangle that reflects the property now.progress.minute. The retinal variables are the same.

### Sketch #2 - Area & Line Chart

In this sketch, there are three layers of arcs. 

![alt text]()

The first, bottom-most arc, represents the progress that has been made in seconds towards the next minute, defined as now.progress.minute in radians. The color fill area will again have to be defined as 1-now.progress.minute, in radians. 

The second and third arcs will be defined in the same way, as progress towards the next hour in minutes, using now.progress.hour and now.progress.day. 

The retinal variables used are shape and hue. 

### Sketch #3 - Close Call Timeline

![alt text]()

The final sketch has expanding concentric circles, whose expanding diameters are defined in terms of each other. The lower limit of the outermost circle representing progress in seconds towards the next minute is the upper limit of the middle circle, representing progress in minutes towards the next hour. In turn, the lower limit of the middle circle is the upper limit of the hour circle representing progress towards the completion of a twenty four hour day.

