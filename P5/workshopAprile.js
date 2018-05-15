/*
  P5 Codepen Base Template
 *
*/
var t = 1
var line_num = 20

function setup() {
  createCanvas(windowWidth, windowHeight)
  background(20)
    colorMode(HSB, 255)

}

function draw() {
  background(20)
  translate(width/2, height/2)

  for(var i= 0.5; i < 8; i++){
    rotate(PI/4)
    stroke(i, 230, 230, 50)
    stroke(color(i * 24, 230, 230, 100))
    spicchio(t)
    noStroke()
    fill(color(i * 24, 230, 230, 200))
    ellipse(pos_X1(t/10), i*10, i*1.618)
    ellipse(-pos_X1(t/20), i*20, i)
  }

  t ++
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
}

function pos_X1(t){
  return sin(t/50)*100 + cos(t/10)*100 + sin(t/50)*20
}

function pos_Y1(t){
  return sin(t/10)*100 + sin(-t/50)*150
}

function pos_X2(t){
  return sin(t/50)*100 + tan(t/100)*50
}

function pos_Y2(t){
  return sin(t/10)*50 + sin(t/50)*150
}

function spicchio(t){
    for(var i=1; i<line_num; i++){
    strokeWeight(1)
    line(pos_X1(t+i), pos_Y1(t+i), pos_X2(t+i), pos_Y2(t+i))
  }
}
/*
_=r"""             )_(tnirp
gro.elituniecidoc #      ""
""                       ""
""                       ""
        )]1-::[_+_%      ""
""\"\"\s%"\"\"\r=_"      ""
""      (=_;""";_=(      ""
""      "_=r\"\"\"%s\"\"\""
""      %_+_[::-1])
""                       ""
""                       ""
""      # codiceinutile.org
print(_)
*/
