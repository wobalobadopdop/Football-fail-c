// const Engine = Matter.Engine;
// const World= Matter.World;
// const Bodies = Matter.Bodies;
var golcuacho;
var ball1;
var aimBar = 600;
var powerBar = 575;
var state = 0;
var goal;
var bulianoVertical = true;
var bulianoHorizontal = false;
var resultAim;
var resultPower;
var golcuachoScore = 0;
var aimActive = true;
var powerActive = true;
var field;
function preload(){



}

function setup(){
    var canvas = createCanvas(1200,600);
    
    // engine = Engine.create();
    // world = engine.world;

 goal = createSprite(600,100,400,50);
 golcuacho = new GoalKeeper();
 ball1 = new Ball();
 golcuachoScore = 0;

}

function draw(){
    background("blue");
    text("aim: "+ ball1.aim, 600,50);
    text("power: "+ ball1.power, 1000,50);
    text("score: "+ golcuachoScore, 500,50);
    rectMode(CENTER);
    rect(600,550,250,20)
    rect(740,450,20,250)
    //aim rectMode(CORNER);
    rect(aimBar,550,20,20);
    aimbar = 500;
     //power rectMode(CORNER);
    rect(740,powerBar,20,20);

    // Engine.update(engine);
   
    ball1.shot();
    golcuacho.move();
    console.log(golcuacho.positionX);
  
   // if(ball1.ball.isTouching(golcuacho.goalKeeper)){
   // console.log("is Working!!!!!");


   // }
    if(aimActive == true) {
    if(bulianoHorizontal === true){
        aimBar += 4;
       }else{
       aimBar -= 4;
       }
       if(aimBar > 725){
        bulianoHorizontal = false;
        }else if(aimBar < 475){
        bulianoHorizontal = true;
         }
      }

      if(powerActive == true) {
   if(bulianoVertical === false){
    powerBar += 4;
   }else{
   powerBar -= 4;
   }
   if(powerBar > 575){
   bulianoVertical = true;
   }else if(powerBar < 325){
    bulianoVertical = false;
    }
  }
   
    if(keyWentDown("SPACE")){
     if(state == 0 ){
       // ball1.aim = Math.round(random(20,-20));
       ball1.aim = ((aimBar - 600) *-15) / -125
       aimActive = false;
       
     }
     else if(state == 1){
        //ball1.power = Math.round(random(-1,-20));
        ball1.power = ((powerBar - 575) * -20) / -250
        ball1.isShot = true
        powerActive = false;
     } 

     state ++;  

     
  }
 function Touch(){
if(ball1.isTouching(golcuacho)){
 golcuachoScore += 1;
}
 }
  
    drawSprites();
}


//idle = quieto
