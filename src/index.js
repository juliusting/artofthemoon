var canvas = document.getElementById("canvasScreen");
canvas.width = document.body.clientWidth;
canvas.height = document.body.clientHeight;

var ctx = canvas.getContext("2d");

var bg = new Image();
var pig = new Image();
var burger = new Image();
bg.src = "../images/bg.png";
pig.src = "../images/pig.png";
burger.src = "../images/burger.png";

var pig_scale = canvas.width * 0.0005;
var burger_scale = canvas.width * 0.0002;
var pig_width = pig.width * pig_scale;
var pig_height = pig.height * pig_scale;
var burger_width = burger.width * burger_scale;
var burger_height = burger.height * burger_scale;
var pig_vertical_position = canvas.height / 2;
var score = 0;
var start = false;
document.addEventListener("keydown", keydown);
document.addEventListener("touchstart", keydown);
window.addEventListener("resize", resize);

function keydown() {
    if (start) {
        pig_vertical_position -= 40;
        score += 1;
    } else {
        start = true;
    }
}

function resize() {
    canvas.width = document.body.clientWidth;
    canvas.height = document.body.clientHeight;
    pig_scale = canvas.width * 0.0005;
    burger_scale = canvas.width * 0.0002;
    pig_width = pig.width * pig_scale;
    pig_height = pig.height * pig_scale;
    burger_width = burger.width * burger_scale;
    burger_height = burger.height * burger_scale;
    pig_vertical_position = canvas.height / 2;
}

function draw() {
    // ctx.drawImage(bg, 0, 0, canvas.width, canvas.height);
    pig_vertical_position += 2;
    if (pig_vertical_position > canvas.height) {
        pig_vertical_position = canvas.height / 2;
    }
    var r1_width = 365 * 2;
    var r1_height = 200 * 2;
    var start_width = (canvas.width - r1_width) / 2;
    var start_height = (canvas.height - r1_height) / 2;
    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.rect(start_width, start_height / 2, r1_width, r1_height);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.strokeStyle = "red";
    ctx.rect(start_width, start_height / 2, 200, r1_height);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = "red";
    ctx.rect(start_width + 200, start_height / 2, 200, r1_height);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = "red";
    ctx.rect(start_width + 400, start_height / 2, 200, r1_height);
    ctx.stroke();



    // ctx.drawImage(pig, 0, pig_vertical_position, pig_width, pig_height);
    // ctx.drawImage(burger, canvas.width / 2, canvas.height / 2, burger_width, burger_width);
    ctx.beginPath();
    ctx.fillStyle = "#000";
    ctx.font = "20px Verdana";
    ctx.fillText("Score: " + score, canvas.width - 120, 20);
    ctx.closePath();
    requestAnimationFrame(draw);
}
setTimeout(() => { resize(); draw(); }, 0);

