class GoalKeeper {
    constructor() {

        this.positionX = 600;
        this.score = 0;
        this.skin = 1;

        this.goalKeeper = createSprite(this.positionX, 200, 50, 50);
        this.image = loadImage("../assets/6.png");
        this.goalKeeper.addImage(this.image);
       
    }
    move(){
       
          if(keyIsDown(LEFT_ARROW) && this.positionX > width/2 - 300){
            this.positionX -= 10;
            console.log("Izquierda");
            //player.update();  
          }
          if(keyIsDown(RIGHT_ARROW) && this.positionX < width/2 + 300){
            this.positionX += 10;
            console.log("Derecha");
            //player.update();  
          }
          this.goalKeeper.position.x = this.positionX 
    }
}  
