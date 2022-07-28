var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var canvasWidth = 1280;
var canvasHeight = 720;

/*var bar.width = 200;
var bar.height = 20;
var barIniX = (canvas.width - bar.width) / 2;
var barIniY = canvas.height - bar.height - 10;
var bar.x = barIniX;
var bar.y = barIniY;
var barSpeed = 10;*/
var xball =0;

const bar = new Bar ();

bar.setPos((canvas.width - bar.width)/2, canvas.height - bar.height - 10);



ctx.fillRect(bar.x, bar.y, bar.width, bar.height);
ctx.arc(10,200, 15, 0, Math.PI * 2, 0);
ctx.fill();



document.addEventListener('keydown', keyIsPress);

function keyIsPress (e)
{
    if (e.keyCode == 39){
        bar.move (canvas, "right");
    }

    else if (e.keyCode == 37){
         bar.move (canvas, "left");
    }


}

window.requestAnimationFrame(refresh);

function refresh (){

    ctx.beginPath(); //return at the beginning of canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height); //Clear canvas
    ctx.fillRect(bar.x, bar.y, bar.width, bar.height); //Redraw the bar
    ctx.arc(xball,200, 15, 0, Math.PI * 2, 0);
    ctx.fill();

    window.requestAnimationFrame(refresh);
}

