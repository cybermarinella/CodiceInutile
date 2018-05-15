/*
 * Codice Inutile
 * www.codiceinutile.org
 *
*/
var a
var base
var angle = 0
var x, y
var orient
var mytint 
var mylook 
var mymouse 

function setup() {

  createCanvas(windowWidth, windowHeight)
  a = windowHeight/30
  base = a*3
  logoLato = base*4+a
  colorMode(HSB, 100, 100, 100, 100)
  noStroke()
  frameRate(20)
  background(10)
}

function draw() {
  background(10)
  orient = int(randomGaussian(0,255))
  translate(width/2+logoLato/2, height/2+logoLato/2)
  blendMode(BLEND)
  logo()

}


function logo() {
  logoTop(0)
  logoTop(PI)
}

function logoTop(angle){
  rotate(angle)
  translate(-logoLato, -logoLato-a)
  
  bigModule(0, a)
  bigModule(base, a)
  bigModule(base*2+a, a)
  bigModule(base*3+a, a)
  bigModule(base*3+a, base+a)
  smallModule(0, base+a, base, a)
  smallModule(base*3+a, 0, base, a)
  smallModule(base*2, a, a, base)
  smallModule(base*3+a, base*2+a, base, a)

}

function bigModule(x, y){
  orient = int(randomGaussian(0,100))
  var isHidden = 255
  //console.log(orient)
  if(orient >= orient/2){
    smallModule(x, y, a, base)
    smallModule(x+a, y, a, base)
    smallModule(x+a*2, y, a, base)
  }else{
    smallModule(x, y, base, a)
    smallModule(x, y+a, base, a)
    smallModule(x, y+a*2, base, a)
  }
}

function smallModule(x, y, modWidth, modHeight){
    mytint = random(0,100)
    if(get_mouseX() > logoLato/2){
      fill(0, 0, 0, 30)
    }else{
      fill(mytint, 90, 90, 100)
    }
    mymouse = get_mouseX()/4
    var mylook = random(0,100)
    if (mylook < mymouse){
      rect(x, y, modWidth, modHeight)
    }else if (mylook > mymouse*2){
      rect(x, y, modWidth/1.618, modHeight/1.618)
    }else{
      if(modWidth == a){
        //push()
        ellipse(x+a/2, y+a/2, a, a)
        fill(mytint-10, 90, 90, 90); 
        ellipse(x+a/2, y+a/2+a, a, a)
        fill(mytint-20, 90, 90, 90); 
        ellipse(x+a/2, y+a/2+ a*2, a, a)
        //pop()
      }else{
        //push()
        ellipse(x+a/2, y+a/2, a, a)
        fill(mytint+10, 90, 90, 90); 
        ellipse(x+a/2+a, y+a/2, a, a)
        fill(mytint+20, 90, 90, 90); 
        ellipse(x+a/2+a*2, y+a/2, a, a)
       // pop()
      }
    }

}

function get_mouseX() {
  return int(abs(map(mouseX, 0, width, -width/2, width/2)))
}

function get_mouseY() {
  return int(abs(map(mouseY, 0, height, -height/2, height/2)))
}
