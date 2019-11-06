var poster

function preload(){
   poster = loadImage('posters/poster.jpg'); 
}

let height = 500;
let width = 500; 

function setup() {
    createCanvas(width, height); 
    background(0); 
    noStroke(); 
    image(poster, 100, 100, 100, 150); 
}