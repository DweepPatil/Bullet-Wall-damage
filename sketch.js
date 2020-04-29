//creating variables for all values and objects
var bullet,bulletWeight,bulletSpeed,wall,wallThickness;
//creating variable for measuring damage
var damage;
function setup() {
  //creating canvas
  createCanvas(1600,400);

  // creating sprite for bullet
  bullet=createSprite(200, 200, 50, 25);
  bullet.velocityX=20;
  
 //assingning bullet a random weight property 
  bulletWeight=random(32,50);
  
  // assingning car a random speed property
  bulletSpeed=random(223,321);

//creating sprite for wall
  wall=createSprite(1500,200,60,400);

  //assigning wall a thickness property
  wallThickness=random(22,83);

  //wall's color
  wall.shapeColor=color(80,80,80);
}

function draw() {
  if (bullet.isTouching(wall)) {   
    //calculating damage
    damage=0.5*bulletWeight*bulletSpeed*bulletSpeed/wallThickness*wallThickness*wallThickness;
  
    //making the wall red if damage is greater than or 10
    if (damage>=10) {
      wall.shapeColor=color(255,0,0);
    }
    
    
    //making the wall green if damage is lesser than 10
    if (damage<10) {
      wall.shapeColor=color(0,255,0);
    }
   
//making the bulet stop
    bullet.velocityX=0;
    
  }else{
    //making bullet white if not touching wall
    bullet.shapeColor=color(255,255,255);
  }
 //background black
  background(0); 
  
  //drawing sprites
  drawSprites();
}