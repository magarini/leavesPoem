let leaf;
let tree;
let nest;
let thoughts=['now feels like eternity',
              'we escaped through a bug in time',
              'a bug that allowed us to be',
              'a perfect bug'
              
             ];

function preload(){
  leaf=loadImage("leaf.png");
  tree=loadImage("tree.jpg");
  nest=loadImage("nest.jpg");


}

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(1);
  push();
  tint(255, 200);
  image(tree,0,0);
  pop();
  fill('white');
  textSize(20);
  textFont('monospace');
   let thought=random(thoughts);
  text(thought,width/2,height/2);
  
}

function draw() {
  //background(220);
  
   
  //angleMode(DEGREES);
   push();
  tint(255, 150);
  scale(1.5);
  rotate(random(2)*HALF_PI);

  imageMode(CENTER);
  image(tree, random(width),random(height));
   pop();
  let thought=random(thoughts);
  textAlign(CENTER);
  text(thought,mouseX,mouseY);

}

function mouseClicked() {
  clear();

  // push();
  // tint(255, 200);

  image(tree,0,0);
  // pop();
  
  
  imageMode(CENTER);
  image(nest,width/2,height/2);
  let thought=random(thoughts);
  text(thought,width/2,height/2);
  //text('we escaped in a bug of time',width/4,height/2+36);
  
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);  
  
}