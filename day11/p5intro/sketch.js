function setup () {
createCanvas (innerWidth,innerHeight)
background (200,100,0)
}

function draw () {
//background (0,200,100)
// line(x1,y1,x2,y2)
line (mouseX, mouseY, 20, 40)


let red = map(mouseX,0,width,0,255)
fill(red,0,0)
//noFill(255,0,0)
strokeWeight(1)
stroke (mouseX,mouseY,225)
rect(mouseX, mouseY,random(10,50),random(10,50))
//text("hey", mouseX, mouseY)
}

// an event listener that "listens" for when the page is resized. If it is...do whatever is in the function
function windowResized() {
    resizeCanvas(innerWidth,innerHeight)
    background (200,100,0)
}




