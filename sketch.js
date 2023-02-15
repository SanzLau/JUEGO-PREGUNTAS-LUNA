//VARIABLES GLOBALES
var game;
function preload() {
  
}
function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
 game= new Game;
 game.start();
}

function draw() {
  background("black");
 
 
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
