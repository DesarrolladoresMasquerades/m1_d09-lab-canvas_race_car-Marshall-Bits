class Game {
    constructor(ctx, car, obstacles) {
        this.ctx = ctx;
        this.frameNumber = null;
        this.car = car;
        this.obstacles = obstacles;
    }

    start() {
        this.frameNumber = 0;
        this.play();
    }

    play() {

        this.draw();
        this.move();
        this.checkCollissions();

        if (this.frameNumber !== null) {
            this.frameNumber = requestAnimationFrame(this.play.bind(this));
        }
    }

    draw(){
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
        this.car.draw();
        this.obstacles.pushObstacle(this.frameNumber);
        this.obstacles.draw();
    }

    move(){
        this.car.move();
        this.obstacles.move();
    }

    checkCollissions(){
    
        this.obstacles.obstaclesArray.forEach(obstacle=>{
           
           if(this.car.collidesWith(obstacle)) this.gameOver();
          
        })
       
    }

    gameOver(){
        cancelAnimationFrame(this.frameNumber)
        this.frameNumber = null;
        document.getElementById("game-over").style.display = "block"

        setTimeout(() => {
            location.reload();
        }, 2000);
        
    }
}