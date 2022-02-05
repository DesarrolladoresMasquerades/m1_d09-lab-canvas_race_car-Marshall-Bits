class Game {
    constructor(ctx, car) {
        this.ctx = ctx;
        this.frameNumber = null;
        this.car = car;
    }

    start() {
        this.frameNumber = 0;
        this.play();
    }

    play() {

        this.draw();
        this.move();

        if (this.frameNumber !== null) {
            this.frameNumber = requestAnimationFrame(this.play.bind(this));
        }
    }

    draw(){
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
        this.car.draw();
    }

    move(){
        this.car.move();
    }
}