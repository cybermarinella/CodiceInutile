// setup colors
var chiaro
var scuro

//setup space
var lg_diam
var lg_rad
var a //atan

var starRadius

function setup(){
  createCanvas(windowWidth, windowHeight)
  noStroke()
  myrandom()
}

function draw(){
  a = atan2(pmouseY-height/2, pmouseX-width/2)
  chiaro = map(mouseX, width/2, width/2, 25, 250)
  scuro = map (mouseX, 0, width/2, width/2, 250, 25)
  lg_diam = width +100
  lg_rad = lg_diam / 2

  background(scuro)
  fill(chiaro)
  rotateCerchio()

  console.log("mysize: "+ mysize + " ,distance: "+ distance + " ,poligono: "+ poligono + " ,divisor: "+ divisor)

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
}

function rotateCerchio(){
  translate(width/2, height/2)
  cerchio_01(a)
  cerchio_01(-a)
}

// star pattern star(x, y, radius1, radius2, npoints)
function cerchio_01(rotation){
  push()
  rotate(rotation)
  for (var x = -lg_rad; x <= lg_diam; x+=distance) {
    for (var y = -lg_rad; y <= lg_diam; y+=distance) {
      star(x, y, mysize, divisor, poligono)
    }
  }
  pop()
}

function star(x, y, radius1, radius2, npoints) {
  var angle = TWO_PI / npoints;
  var halfAngle = angle/2.0;
  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius2;
    var sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a+halfAngle) * radius1;
    sy = y + sin(a+halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

function mousePressed() {
  myrandom()
}

function myrandom(){
  mysize = int(random(21,89))
  distance = int(random(mysize*1.618, mysize*3))
  poligono = int(random(2,8))
  divisor = random(mysize*1.618,  mysize/distance)
}
