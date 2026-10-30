let ghost;
let spawnEvery = 60;
let score =0;

function setup() {
  createCanvas(400,400);
  spawnGhost();
  startTime = millis();
  
}
let duration = 30;
let startTime;
function draw(){
let elapsed = (millis() - startTime) / 1000;
let timeLeft = max(0, duration - elapsed);
  background("#061558");
  fill(255,255,255);
  fill("#C8C3BF");
  ellipse(300,100,100,100);
  fill("#5f5f5f");
  rect(0,340,480,200);
  fill("#FF0000")
  rect(15,90,50,250);
  fill("#FFFFFF");
  ellipse (150,30,5,5)
  ellipse (100,50,5,5)
  ellipse (150,80,5,5)
  ellipse (200,40,5,5)
  ellipse (250,60,5,5)
  ellipse (350,40,5,5)
  ellipse (400,0,5,5)
  ellipse (75,50,5,5)
  ellipse (50,20,5,5)
ellipse (80,90,5,5)
ellipse (120,120,5,5)
ellipse (180,100,5,5)
ellipse (220,90,5,5)
ellipse (270,30,5,5)
ellipse (300,70,5,5)
ellipse (330,100,5,5)
ellipse (380,80,5,5)
ellipse (420,50,5,5)
ellipse (450,100,5,5)
ellipse (60,50,5,5)
ellipse (100,80,5,5)
ellipse (150,50,5,5)
ellipse (200,70,5,5)
ellipse (250,40,5,5)
ellipse (200,80,5,5)
ellipse (350,50,5,5)
ellipse (400,70,5,5)
ellipse (450,200,5,5)
  ghost.x += random(-3, 3);
  ghost.y += random(-3, 3);
 if (frameCount % spawnEvery === 0) spawnGhost();
  drawGhost(ghost.x, ghost.y);

 // textAlign(TOP,TOP);
 fill(255);
textSize(16);
text('Score: ' + score, 70, 12); 
  textAlign(RIGHT, TOP);
text('Time: ' + ceil(timeLeft), width - 12, 10);
}
  function drawGhost(x, y) {
  noStroke();
  fill(220, 255, 230);
  ellipse(x, y, 60, 60);

  fill(20);
  ellipse(x - 12, y - 5, 10);
  ellipse(x + 12, y - 5, 10);
}
function mousePressed() {
  if (dist(mouseX, mouseY, ghost.x, ghost.y) < 30) {
    score++;
    drawGhost(ghost.x,ghost.y);
  }
}
function spawnGhost() {
  ghost = { x: random(40, width - 40), y: random(40, height - 40) };
}