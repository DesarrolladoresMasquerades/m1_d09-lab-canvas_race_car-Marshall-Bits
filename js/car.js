class Car {
    constructor(ctx) {
        this.ctx = ctx

        this.width = 40;
        this.height = 50;

        this.x = (this.ctx.canvas.width / 2) - (this.width / 2);
        this.y = this.ctx.canvas.height - (this.width * 2.5);

        this.sprite = new Image()

        this.sprite.src = "images/car.png"
    }
    draw() {
        this.ctx.drawImage(
            this.sprite,
            this.x,
            this.y,
            this.width,
            this.height
        )
    }

    getKey() {
        document.addEventListener("keyup", (e) => {
            return e.key
        });
    }





    move() {
        document.onkeydown = event => {
            const key = event.keyCode;
            const possibleKeystrokes = [37, 39];
            if (possibleKeystrokes.includes(key)) {
                event.preventDefault();
                switch (key) {
                    case 37:
                        this.x -= 40;
                        break;

                    case 39:
                        this.x += 40;
                        break;

                }
            }
        };
        if (this.x + this.width > this.ctx.canvas.width) this.x = this.ctx.canvas.width - this.width
        if (this.x < 0) this.x = 0
        if (this.y + this.height > this.ctx.canvas.height) this.y = this.ctx.canvas.height - this.height
        if (this.y < 0) this.y = 0
    }

    collidesWith(ele) {

        if (
            (this.y + 10 < ele.y + ele.height && this.x + 15 < ele.x + ele.width && this.x + this.width - 15 > ele.x) ||
            (ele.y + ele.height > this.y && ele.x < this.x + this.width && this.x < ele.x + ele.width)
        ) {
            return true
        }


    }

}