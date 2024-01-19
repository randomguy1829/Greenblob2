const canvas = document.getElementById('gameArea');
const ctx = canvas.getContext('2d');

console.log("hi")
//vars in jars :)

let x = 100;
let y = 100;
let radius = 50;
let speed = 10;

let downPressed = false;
let upPressed = false;
let leftPressed = false;
let rightPressed = false;

//game loop 
function drawGame() {
    
    requestAnimationFrame(drawGame);
    clearScreen();
    inputs();
    boundrycheck();
    drawGreeenBlob();
}

function boundrycheck() {
    //up b check
    if(y < radius) {
        y = radius;
    }
    //left b check
    if(x < radius) {
        x = radius;
    }
    //down radius check
    if( y > canvas.height - radius) {
         y = canvas.height - radius;
    }
    
}

//key inputs
function inputs() {
    if(rightPressed){
        x = x + speed
    }

    if(leftPressed){
        x = x - speed
    }

    if(upPressed){
        y = y - speed;
    }
    if(downPressed){
        y = y + speed;
    }
}

function drawGreeenBlob() {
    ctx.fillStyle = "green";
    ctx.beginPath();
    ctx.arc(x,y, radius,0, Math.PI * 2);
    ctx.fill();
}

function clearScreen(){
    ctx.fillStyle = "black";
ctx.fillRect(0, 0, canvas.width, canvas.height);
}

document.body.addEventListener("keydown", keyDown);
document.body.addEventListener("keyup", keyUp);

function keyDown(event) {
    if(event.keyCode == 40) {
        downPressed = true;
    }
    if(event.keyCode == 38) {
        upPressed = true;
    }
    if(event.keyCode == 37) {
        leftPressed = true;
    }
    if(event.keyCode == 39) {
        rightPressed = true;
    }
    
}
function keyUp(event) {
    if(event.keyCode == 40) {
        downPressed = false;
    }
    if(event.keyCode == 38) {
        upPressed = false;
    }
    if(event.keyCode == 37) {
        leftPressed = false;
    }
    if(event.keyCode == 39) {
        rightPressed = false;
    }
    
    
    
}
  
    



drawGame();