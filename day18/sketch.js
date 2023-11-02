function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  background(122, 0, 0);
  rectMode(CORNER);
}

function draw() {
  fill(255);
  box(width/2, height/2)

}

function windowResized() {
    fill(255,0,255);
    stroke(0,255,180);
    strokeWeight(2);

    push();
    translate(mouseX-mouseY,mouseY-height/2)
    rotateX(mouseY)
    rotateY(mouseY);

    box(width/4,height/4,30);
    pop();
    


}
