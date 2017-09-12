var chiaro
var scuro
var colore
var diameter
var numpieces


function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL)

    chiaro = color(214, 198, 173)
    scuro = color(24)
    colore = color (43, 78, 110)
    diameter = height/1.618
    rad = diameter/2
    numpieces = 12

}

function draw() {
    background(chiaro)
    fill(scuro)
    torus(rad, rad/numpieces, 60)
    piece()
}

function piece(){
  var cx = 0; // x centro del cerchio
  var cy = 0; // y centro del cerchio

  for (var i = 0; i <= numpieces; ++i) {
    var angle = i * TWO_PI / numpieces
    var x = cy + cos(angle) * rad
    var y = cx + sin(angle) * rad
    ellipse(x, y, numpieces*5, numpieces*5)
    torus(rad/1.618, numpieces/3, 60)
  }
}
