// Load tài nguyên
let picsNames = ["background.jpg", "background1.jpg", "background2.jpg", "background3.jpg", "bulletLove.png", "heart.png", "plane.png"];
let musicNames = ["bullet.mp3", "background.mp3", "silence.mp3"];
let picCount = 0;
let musicCount = 0;
let musics = [];

for (let i = 0; i < picsNames.length; i++) {
    let image = new Image();
    image.src = "img/" + picsNames[i];
    image.onload = function () {
        picCount++;
        if (picCount === picsNames.length) {
            loadMusic();
        }
    }
}

function loadMusic() {
    for (let i = 0; i < musicNames.length; i++) {
        let music = new Audio();
        music.src = "audio/" + musicNames[i];
        musics.push(music);
        music.onloadedmetadata = function () {
            musicCount++;
            if (musicCount === musicNames.length) {
                loadingDiv.style.display = "none";
                main();
                musics[4].volume = 0.5;
                musics[4].loop = true;
                musics[4].play();
            }
        }
    }
}

let background = new Background();
let plane = new Plane(canvas.width / 2 - PLANE_WIDTH / 2, canvas.height - (PLANE_HEIGHT + PLANE_DISTANCE_DEFAULT), PLANE_WIDTH, PLANE_HEIGHT, PLANE_SPEED, false, false, false);
let gameBoard = new GameBoard();
let isGameOver = false;

gameBoard.control();

//Bắt đầu game.
background.img = "img/" + picsNames[0];
background.draw();
plane.draw();
gameBoard.drawScore();
gameBoard.drawguide();

function startGame() {
    if (!isGameOver) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        background.draw();
        showHeart();
        plane.draw();
        plane.move();
        plane.shoot();
        gameBoard.checkCrash();
        //Xu ly ket thuc game.
        for (i = 0; i < hearts.length; i++) {
            if (hearts[i].yPosition > canvas.height) {
                isGameOver = true;
            }
        }
        gameBoard.drawScore();
        requestAnimationFrame(startGame);
    } else {
        alert('Kết thúc !' + gameBoard.score + 'điểm');
    }
}

function restart() {
    location.reload();
}