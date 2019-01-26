var myData;

function preload() {
  // put preload code here
  myData = loadJSON('assets/china pop.json')
  myImage = loadImage("./assets/Chinamap.png");

}
var balls = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

  for (var i = 0; i < myData.population.length; i++) {
    var pop = myData.population[i];
    var x = random(width);
    var y = random(height);
    var d = pop.value;
    var l = pop.date;
    var newBall = new Ball(x, y, d, l);
    balls.push(newBall);



    console.log(pop);

  }
}





function draw() {
  background(230)
  image(myImage, 0, 0, myImage.width, myImage.height);
  fill('blue');
  textSize(50);
  textStyle(BOLD);
  textAlign(CENTER);
  text('Chinese Population', width / 3, height / 4);
  for (var j = 0; j < balls.length; j++) {
    balls[j].move();
    balls[j].display();
  }
}

function Ball(_x, _y, _diameter, _label) {
  // Properties defined by constructor
  this.size = _diameter / 10000000;
  this.x = _x;
  this.y = _y;
  this.label = _label;
  this.m = _diameter;
  // Hardcoded properties
  this.color = '#F4D03F';
  this.speed = 1;

  this.yDir = 1;
  this.xDir = 1;
  // Methods
  this.move = function() {
    this.x += this.speed * this.xDir;
    this.y += this.speed * this.yDir;

    if (this.y >= height || this.y <= 0) {
      // if 1, set to -1, if -1, set to 1
      this.yDir *= -1;
    }

    if (this.x >= width || this.x <= 0) {
      this.xDir *= -1;
    }
  }

  this.display = function() {
    fill(this.color);
    ellipse(this.x - 5, this.y, this.size);
    fill('black');
    textSize(20);
    text(this.label + '=' + this.m, this.x, this.y);

  }


}
