let Bullet = function (xPosition, yPosition, width, height) {
    this.xPosition = xPosition;
    this.yPosition = yPosition;
    this.width = width;
    this.height = height;
    this.speed = 5;

    this.draw = function () {
        let imgBullet = document.getElementById('imgBullet');
        ctx.drawImage(imgBullet, this.xPosition, this.yPosition, this.width, this.height);
    };

    this.move = function () {
        this.yPosition -= this.speed;
    }
};