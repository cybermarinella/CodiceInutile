var lg_diam;
var lg_rad;
var chiaro = 25;
var scuro;
var riempimento;
var cx;
var cy;
var pallino = 40;
var nbr_circles = 11;
var on = false;

var mov_angle = 35;
var offset = 60;
var scalar = 10;
var speed = 0.1
var timer = speed*200;
var nextTime = timer;
var bgColor = 20

function setup(){
  createCanvas(windowWidth, windowHeight, WEBGL);
  lg_diam = windowHeight-100;
  lg_rad = lg_diam / 2;
  frameRate(100);
}

function draw(){
  cx= width/2;
  cy = height/2;
  chiaro = map(mouseX, width/2-lg_rad/2, width/2+lg_rad/2, 0, height);
  scuro = color(mouseY, height-mouseX/2, height/1.618);
  riempimento =  color(mouseY, height-mouseX/2, height/1.618);
  camera(0, 0, lg_diam-200);
  noStroke();
  fill(100);
  fill(bgColor);
  orbitControl();
  if (keyIsPressed === true) {
    rotateZ(frameCount);
  } else {
    rotateZ(0);
  }
  cerchione_01();
  mov_angle += speed;
  basicMaterial(riempimento);
  if(millis() > nextTime){  //effetto cinema
   //bgColor+=-20;
   nextTime = millis() + timer;
   scale(width*2, height);
   fill(0)
   //plane(cx, cy, width, height);
  }
}

function cerchione_01(){
    ambientLight(200);
    ambientMaterial(250);
    push();
    torus(lg_diam, pallino/1.618, 60);
    pop();
    for (var i = 1; i <= nbr_circles; i++) {
      angle = i * TWO_PI / nbr_circles;
      var dx = cy/1.2 + sin(mov_angle);
      var x = cx + cos(angle) * dx;
      var y = cy + sin(angle) * dx;
      var exi = i;
      push();
      translate(x-width/2, y-height/2, lg_diam+pallino);
      sphere(pallino/2); 
      pop();
      push();
      translate(x-width/2, y-height/2, -lg_diam*2*i/2);
      sphere(pallino); 
      pop();
      stroke(100);
      line(x-width/2, y-height/2, -lg_diam*2*i/2, x-width/2, y-height/2, lg_diam+pallino);
      push();
      translate(x-width/2, y-height/2, lg_rad);
      push();
      rotateY(angle);
      torus(lg_diam/nbr_circles+pallino/2, 5, 30);
      pop();
      scale(1)
      fill(scuro);
      rotateZ(angle);
        fill(100);
        triangle( 0, 0, i, -30, -51.962, i, 30, -51.962, i);
        fill(150)
        triangle( 0, 0, i, 30, -51.962, i, 60, 0, i);
        fill(100);
        triangle( 0, 0, i, 60, 0, i, 30, 51.962, i);
        fill(150)
        triangle( 0, 0, i, 30, 51.962, i, -30, 51.962, i);
        fill(100);
        triangle( 0, 0, i, -30, 51.962, i, -60, 0, i);
        fill(150)
        triangle( 0, 0, i, -60, 0, i, -30, -51.962, i);
      pop();
      }
}

function keyPress() {
  if(key==="A"){
    rotateZ(frameCount*3);    
  } else {
    rotateZ(0);
  }
}

/*function keyPress() {
  if (on) {
    if(key==="A"){
      rotateZ(0);    
    }
  } else {
    if(key==="A"){
      rotateZ(frameCount*3);    
    }
  }
  on = !on;
  //console.log(on);
}*/


//https://github.com/processing/p5.js/wiki/Getting-started-with-WebGL-in-p5