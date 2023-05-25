function setup() {
  createCanvas(700, 500);
}

function draw() {
  colorMode(RGB);
  background(150, 200, 250);

  //hair
  fill(0, 0, 255);
  ellipse(210, 250, 60, 50);
  ellipse(180, 260, 70, 50);
  ellipse(150, 260, 60, 60);
  ellipse(120, 280, 60, 50);
  ellipse(80, 300, 60, 40);
  ellipse(60, 330, 60, 40);
  ellipse(60, 390, 40, 60);
  ellipse(250, 250, 60, 50);
  ellipse(310, 255, 70, 50);
  ellipse(360, 275, 60, 60);
  ellipse(390, 290, 60, 50);
  ellipse(420, 310, 60, 40);
  ellipse(450, 330, 60, 40);
  ellipse(430, 390, 40, 60);
  rect(70, 400, 350, 300);
  ellipse(430, 440, 40, 60);
  ellipse(430, 470, 40, 60);
  ellipse(60, 440, 40, 60);
  ellipse(60, 480, 40, 60);

  //left ear
  fill(255, 190, 185);
  rect(20, 330, 40, 40, 20, 10);
  //right ear
  fill(255, 190, 185);
  rect(435, 330, 40, 40, 10, 20);

  //earring
  fill(255, 16, 0);
  ellipse(50, 380, 20, 40);
  fill(255, 16, 0);
  ellipse(450, 380, 20, 40);

  //arms
  stroke(255, 200, 185);
  strokeWeight(35);
  noFill();
  curve(10, 100, 300, 520, 605, 400, 600, 400);

  //hand
  circle(620, 390, 20);

  //tattoo
  stroke(0);
  strokeWeight(1);
  noFill();
  ellipse(550, 430, 10, 10);
  ellipse(520, 450, 30, 10);
  beginShape();
  vertex(490, 455);
  vertex(500, 480);
  vertex(520, 440);
  endShape();

  //face
  noStroke();
  fill(255, 200, 185);
  ellipse(250, 360, 400, 200, 200);

  //neck
  rect(225, 400, 40, 100);

  //lashes
  strokeWeight(3);
  stroke(0);
  line(150, 290, 170, 295);
  stroke(0);
  line(360, 290, 390, 280);

  //left eye
  strokeWeight(2);
  fill(255, 180, 200);
  ellipse(200, 300, 80, 40);

  //right eye
  fill(255, 180, 200);
  ellipse(350, 300, 80, 40);
  fill(20, 150, 0, 240, 200);
  //pupils
  noStroke();
  ellipse(355, 300, 30, 30);
  fill(20, 150, 0, 240, 200);
  ellipse(200, 300, 30, 30);

  //lips
  fill(200, 60, 100);
  //arc(290, 375, 160, 20, PI)
  arc(290, 375, 160, 20, 0, PI);

  //teeth
  noStroke();
  fill(255);
  text("this is harder than it looks", 222, 380);

  //nose
  fill(200, 30, 0);
  ellipse(270, 320, 10, 10);
  fill(200, 30, 0);
  ellipse(285, 320, 10, 10);
}
