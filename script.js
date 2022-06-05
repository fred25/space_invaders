const gameBoard = document.querySelector('#gameBoard');
const ctx = gameBoard.getContext('2d');
const scoreTxt = document.querySelector('#scoreText');
const restartBtn = document.querySelector('#restartBtn');
const spriteSheet = document.querySelector("#spritesheet");

ctx.imageSmoothingEnabled = false;

// Width + Height
const gameWidth = gameBoard.width;
const gameHeight = gameBoard.height;

const spriteWidth = 11;
const spriteHeight = 8;

const scale = 6

//colors
const backgroundColor = 'black';
const bulletColor = 'lime';

const speed = 6;

var playerX = gameWidth/2-spriteWidth*scale/2

class Player{
    constructor(){

        this.sprite = spriteSheet;
    }

    move(event){
        const keyPressed = event.keyCode;

        const LEFT = 37;
        const RIGHT = 39;

        if(keyPressed == LEFT && playerX > 0){
            playerX -= speed;
        }else if(keyPressed == RIGHT && playerX < gameWidth-spriteWidth*scale){
            playerX += speed;
        }

    }

    draw(){
        ctx.drawImage(this.sprite, 0, 0, spriteWidth, spriteHeight, playerX, gameHeight-spriteHeight*scale+scale, spriteWidth*scale, spriteHeight*scale)
    }

    shoot(){

    }

}

class Bullet{
    constructor(){
        
    }
}

class Enemy{

}

const player = new Player()

window.addEventListener("keydown", player.move);
window.addEventListener("keydown", player.shoot);
restartBtn.addEventListener("click", resetGame);

var loadedImage = false

var isRunning = false;

var score = 0;

spriteSheet.onload = setLoaded()


function setLoaded(){  
    loadedImage = true
}

function startGame(){
    isRunning = true
    scoreTxt.textContent = score;
    nextTick();
}

function nextTick(){
    if(isRunning && loadedImage){
        setTimeout(()=>{
            clearCanvas()
            player.draw()
            nextTick()
        }, 75);
    }
    else{
        displayGameOver();
    }
}

function clearCanvas(){
    ctx.fillStyle = backgroundColor
    ctx.fillRect(0, 0, gameWidth, gameHeight)
}

function displayGameOver(){

}

function resetGame(){

}

startGame();