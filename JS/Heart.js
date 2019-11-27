let hearts = [];
let Heart = function (xPosition, yPosition, width, height, speed) {
    this.xPosition = xPosition;
    this.yPosition = yPosition;
    this.width = width;
    this.height = height;
    this.isLive = true;
    this.speed = speed;

    this.draw = function () {
        let imgHeart = document.getElementById('imgHeart');
        if (this.isLive) {
            ctx.drawImage(imgHeart, this.xPosition, this.yPosition, this.width, this.height);
        }
    };
    this.move = function () {
        this.yPosition += this.speed
    }
};
// Khởi tạo Heart.
function createHeart() {
    let speed = Math.random() * 1.3 + 0.5;
    let xHeart = Math.random() * (canvas.width - HEART_WIDTH + 1);
    let yHeart = Math.random() * (0 - canvas.height);
    let heart = new Heart(xHeart, yHeart, HEART_WIDTH, HEART_HEIGHT, speed);
    hearts.push(heart);
    heart.draw();
}

//Khởi tạo 10 heart.
function creatMultipleHeart() {
    for (let i = 0; i < 10; i++) {
        createHeart();
    }
}
creatMultipleHeart();

//Hiển thị 10 Heart
function showHeart() {
    for (let i = 0; i < hearts.length; i++) {
        hearts[i].move();
        hearts[i].draw();
    }
}