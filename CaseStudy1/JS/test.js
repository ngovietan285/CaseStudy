let GameBoard = function () {
    this.score = 0;

    this.control = function () {
        //xử lý di chuyển mượt.
        document.addEventListener('keyup', function (event) {
            if (event.keyCode == LEFT_KEY) {
                plane.isMoveLeft = false;
            } else if (event.keyCode == RIGHT_KEY) {
                plane.isMoveRight = false;
            } else if (event.keyCode == SPACE_KEY) {
                plane.isShoot = false;
            }
        });

        document.addEventListener('keydown', function (event) {
            if (event.keyCode == LEFT_KEY) {
                plane.isMoveLeft = true;
            } else if (event.keyCode == RIGHT_KEY) {
                plane.isMoveRight = true;
            } else if (event.keyCode == SPACE_KEY) {
                plane.isShoot = true;
            }
        });

        document.addEventListener('keypress', function (event) {
            console.log(event);
            if (event.keyCode == ENTER_KEY) {
                startGame();
            } else if (event.keyCode == R_KEY) {
                restart();
            }
        });
    };

    this.drawguide = function () {
        ctx.beginPath();
        ctx.font = "50px arial";
        ctx.fillStyle = 'red';
        ctx.fillText('Press Enter to Start', 170, 100);
        ctx.fillText('Press Space to Shoot', 170, 150);
        ctx.fillText('Press R to Restart', 170, 200);
        ctx.closePath();
    };

    this.crash = function (enemy, bullet) { //điều kiện va trạm.
        let leftEnemy = enemy.xPosition;
        let rightEnemy = enemy.xPosition + enemy.width;
        let topEnemy = enemy.yPosition;
        let bottomEnemy = enemy.yPosition + enemy.height;
        let leftBullet = bullet.xPosition;
        let rightBullet = bullet.xPosition + bullet.width;
        let topBullet = bullet.yPosition;
        let bottomBullet = bullet.yPosition + bullet.height;
        if (rightEnemy < leftBullet || bottomEnemy < topBullet || leftEnemy > rightBullet || topEnemy > bottomBullet) {
            return false;
        } else {
            return true;
        }
    };

    this.checkCrash = function () { //kiểm tra điều kiện va trạm.
        for (let i = 0; i < enemys.length; i++) {
            for (let j = 0; j < plane.bullets.length; j++) {
                if (this.crash(enemys[i], plane.bullets[j])) {
                    enemys[i].isLive = false;
                }

            }
            if (!enemys[i].isLive) { //xử lý tính điểm.
                enemys.splice(i, 1);
                this.score++;
            }

            if (enemys.length == 0) {
                background.setImage();
                //tạo lại enemy khi bắn hết.
                creatMultipleEnemy();
                showEnemys();

            }
        }
    };

    this.drawScore = function () {
        ctx.beginPath();
        ctx.font = "20px arial";
        ctx.fillStyle = 'white';
        ctx.fillText('Điểm: ' + this.score, 20, 30);
        ctx.closePath();
    }
};

