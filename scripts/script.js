






var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var canvasWidth = 1280;
var canvasHeight = 720;

var barIniX = 540;
var barIniY = 690;
var barX = 540;
var barY = 690;
var barWidth = 200;
var barHeight = 20;
var barSpeed = 15;

ctx.fillRect(barX, barY, barWidth, barHeight);

document.addEventListener('keydown', keyIsPress);

function keyIsPress (e)
{
    if (e.keyCode == 39){
        moveRight (ctx);
    }

    else if (e.keyCode == 37){
        moveLeft ();
    }


}

function moveRight ()
{
    ctx.clearRect(0, barIniY, canvasWidth, (canvasHeight - barHeight)); //Remove the bar
    barX += barSpeed; //Deplace the X
    ctx.fillRect(barX, barY, barWidth, barHeight); //Redraw the bar
    
}

function moveLeft ()
{
    ctx.clearRect(0, barIniY, canvasWidth, (canvasHeight - barHeight)); //Remove the bar
    barX -= barSpeed; //Deplace the X
    ctx.fillRect(barX, barY, barWidth, barHeight); //Redraw the bar
}