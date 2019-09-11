### Sketch #1

This idea was the simplest. There are three layers of rectangles. 

![alt text](https://github.com/mi-desai/dvia-2019/blob/master/process/sketch1.jpg)

The first, bottom-most layer, represents the number of hours that have passed in the current day. The plan is to define a line within the rectangle that moves along the point defined by the property now.progress.day. Additionally, the color of the amount past (whatever 1 - now.progress.day is), will be colored differently to draw the eye, using the hue retinal variable as well as shape to communicate time. 

The second layer in the middle will have a smaller area rectangle representing the number of minutes that have passed in the current hour. Again, the idea is to define a line within the rectangle that reflects the property now.progress.hour. The retinal variables are the same.  
The last, top-most, layer will be a yet smaller rectangle representing the number of seconds that have passed in the current minute. Again, the idea is to define a line within the rectangle that reflects the property now.progress.minute. The retinal variables are the same.

### Sketch #2

In this sketch, there are three layers of arcs. 

![alt text](https://github.com/mi-desai/dvia-2019/blob/master/process/sketch2.jpg)

The first, bottom-most arc, represents the progress that has been made in seconds towards the next minute, defined as now.progress.minute in radians. The color fill area will again have to be defined as 1-now.progress.minute, in radians. 

The second and third arcs will be defined in the same way, as progress towards the next hour in minutes, using now.progress.hour and now.progress.day. 

The retinal variables used are shape and hue. 

### Sketch #3

![alt text](https://github.com/mi-desai/dvia-2019/blob/master/process/sketch3.jpg)

The final sketch has expanding concentric circles, whose expanding diameters are defined in terms of each other. The lower limit of the outermost circle representing progress in seconds towards the next minute is the upper limit of the middle circle, representing progress in minutes towards the next hour. In turn, the lower limit of the middle circle is the upper limit of the hour circle representing progress towards the completion of a twenty four hour day.

