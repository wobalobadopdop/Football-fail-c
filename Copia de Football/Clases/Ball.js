class Ball {
    constructor() {
        
        this.isShot = false;
        this.aim = 0;
        this.power = 0;
        
        this.ball = createSprite(600, 500, 50, 50);
        this.image = loadImage("../assets/BALL.png");
        this.ball.addImage(this.image);
        this.ball.scale = 0.1;

    }
    

    shot(){
        
        if(this.isShot == true) {

            this.ball.position.x += this.aim;
            this.ball.position.y += this.power;

        }
    }

    idle(){
        this.ball.position.x = 600;
        this.ball.position.y = 500;
        this.isShot = false;
        
    }
}
