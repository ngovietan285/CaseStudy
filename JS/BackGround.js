let canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext('2d');

let Background = function () {
    let backGroundImg = ["img/background.jpg", "img/background1.jpg", "img/background2.jpg", "img/background3.jpg"];
    this.img = "";
    this.setImg = function () {
        let temp = backGroundImg[Math.floor(Math.random() * backGroundImg.length)];
        if (this.img === temp) {
            temp = backGroundImg[Math.floor(Math.random() * backGroundImg.length)];
        } else {
            this.img = temp;
        }
    };

    this.draw = function () {
        let imgBackGround = new Image();
        imgBackGround.src = this.img;
        ctx.drawImage(imgBackGround, 0, 0);
    }
};