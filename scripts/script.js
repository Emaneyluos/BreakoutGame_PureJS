var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");


var barWidth = 200;
var barHeight = 20;
var barIniX = (canvas.width - barWidth) / 2;
var barIniY = canvas.height - barHeight - 10;
var barX = barIniX;
var barY = barIniY;
var barWidth = 200;
var barHeight = 20;
var barSpeed = 10;

ctx.fillRect(barX, barY, barWidth, barHeight);

document.addEventListener('keydown', keyIsPress);

function keyIsPress (e)
{
    if (e.keyCode == 39){
        moveRight ();
    }

    else if (e.keyCode == 37){
        moveLeft ();
    }


}

function moveRight ()
{
    if (barX < (canvas.width - barWidth)) //Stop the progress of the bar at the end of the canvas
    {
        ctx.clearRect(0, barIniY, canvas.width, (canvas.height - barHeight)); //Remove the bar
        barX += barSpeed; //Deplace the X
        ctx.fillRect(barX, barY, barWidth, barHeight); //Redraw the bar

        if (barX > (canvas.width - barWidth)){ //Prevent the bar to be a little out of canvas
            barX = canvas.width - barWidth;
        }
    }

    
}

function moveLeft ()
{
    if (barX > 0) //Stop the progress of the bar at the end of the canvas
    {
        ctx.clearRect(0, barIniY, canvas.width, (canvas.height - barHeight)); //Remove the bar
        barX -= barSpeed; //Deplace the X
        ctx.fillRect(barX, barY, barWidth, barHeight); //Redraw the bar

        if (barX < 0){ //Prevent the bar to be a little out of canvas
            barX = 0;
        }
    }

}