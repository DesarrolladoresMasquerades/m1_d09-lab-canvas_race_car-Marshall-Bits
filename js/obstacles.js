class Obstacles {
    constructor(ctx) {
        this.ctx = ctx

        this.vy = 4

        this.obstaclesArray = []
    }

    draw() {
        this.obstaclesArray.forEach(
            obstacle => {
                this.ctx.drawImage(
                    obstacle.sprite,
                    obstacle.x,
                    obstacle.y,
                    obstacle.width,
                    obstacle.height
                )
            }
        )
    }

    move() {
        this.obstaclesArray.forEach(obstacle => {
            obstacle.y += this.vy
        })
    }

    spawnNewObstacle() {
        const newObstacle = {
            sprite: new Image(),

            y: -50,
            x: Math.random() * (this.ctx.canvas.width - 40),

            width: 40,
            height: 50,
        }
        newObstacle.sprite.src = "images/obstacle.png"

        return newObstacle
    }

    pushObstacle(frameNumber) {
        if (frameNumber % 70 === 0) {
            this.obstaclesArray.push(this.spawnNewObstacle());
        }
    }
}