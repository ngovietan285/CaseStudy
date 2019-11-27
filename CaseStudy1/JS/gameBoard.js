let GameBoard = function () {
    this.score = 0;

    this.control = function () {
        //Xử lý di chuyển mượt
        document.addEventListener('keyup', function (event) {
            if (event.keyCode === LEFT_KEY) {
                plane.isMoveLeft = false;
            } else if (event.keyCode === RIGHT_KEY) {
                plane.isMoveRight = false;
            } else if (event.keyCode === SPACE_KEY) {
                plane.isShot = false;
            }
        });

        document.addEventListener('keydown', function (event) {
            if (event.keyCode === LEFT_KEY) {
                plane.isMoveLeft = true;
            } else if (event.keyCode === RIGHT_KEY) {
                plane.isMoveRight = true;
            } else if (event.keyCode === SPACE_KEY) {
                plane.isShoot = true;
            }
        });

        document.addEventListener('keypress', function (event) {
            console.log(event);
            if (event.keyCode === ENTER_KEY) {
                startGame();
            } else if (event.keyCode === R_KEY) {
                restart();
            }
        });
    };

    this.drawguide = function () {
        ctx.beginPath();
        ctx.font = "50px arial";
        ctx.fillStyle = 'red';
        ctx.fillText('Ấn "ENTER" Để Bắt Đầu ', 100, 150);
        ctx.fillText('Ấn "SPACE" Để Bắn', 100, 250);
        ctx.fillText('Ấn "R" Để Chơi Lại', 100, 350);
        ctx.closePath();
    };

    this.crash = function (heart, bullet) { // dieu khien va cham
        let leftHeart = heart.xPosition;
        let rightHeart = heart.xPosition + heart.width;
        let topHeart = heart.yPosition;
        let bottomHeart = heart.yPosition + heart.height;
        let leftBullet = bullet.xPosition;
        let rightBullet = bullet.xPosition + bullet.width;
        let topBullet = bullet.yPosition;
        let bottomBullet = bullet.yPosition + bullet.height;
        return !(rightHeart < leftBullet || bottomHeart < topBullet || leftHeart > rightBullet || topHeart > bottomBullet);
    };

    this.checkCrash = function () {
        for (let i = 0; i < hearts.length; i++) {
            for (let j = 0; j < plane.bullets.length; j++) {
                if (this.crash(hearts[i], plane.bullets[j])) {
                    hearts[i].isLive = false;
                }
            }
            if (!hearts[i].isLive) {
                hearts.splice(i, 1);
                this.score++;
            }
            if (hearts.length === 0) {
                background.setImg();
                // tao lai heart khi ban het
                creatMultipleHeart();
                showHeart();
            }
        }

    };

    this.drawScore = function () {
        ctx.beginPath();
        ctx.font = "20px arial";
        ctx.fillStyle = 'white';
        ctx.fillText('Điểm:' + this.score, 20, 30);
        ctx.closePath();
    }
};