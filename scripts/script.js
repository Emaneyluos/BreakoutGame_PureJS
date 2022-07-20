






var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var canvasWidth = 1280;
var canvasHeight = 720;

var barX = 540;
var barY = 690;

ctx.fillRect(barX, barY, 200, 20);

document.addEventListener('keydown', keyIsPress);

function keyIsPress (e)
{
    //39 right // 37 left
    if (e.keyCode == 39){
        moveRight (ctx);
    }

    else if (e.keyCode == 37){
        moveLeft ();
    }


}

function moveRight ()
{
    ctx.clearRect(0, 690, 1280, 30);
    barX += 10;
    ctx.fillRect(barX, barY, 200, 20);
    
}

function moveLeft ()
{
    ctx.clearRect(0, 690, 1280, 30);
    barX -= 10;
    ctx.fillRect(barX, barY, 200, 20);
}