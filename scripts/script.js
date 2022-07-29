var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var div = document.getElementById("fps");

var canvasWidth = 1280;
var canvasHeight = 720;

var perf1 =performance.now();
var perf2 =0;
var i = 0;
x = 0;
var fps = 0;

/*var bar.width = 200;
var bar.height = 20;
var barIniX = (canvas.width - bar.width) / 2;
var barIniY = canvas.height - bar.height - 10;
var bar.x = barIniX;
var bar.y = barIniY;
var barSpeed = 10;*/
var xball =0;

const bar = new Bar();
const ball = new Ball();

bar.setPos((canvas.width - bar.width)/2, canvas.height - bar.height - 10);
ball.setPos ((canvas.width/2), (canvas.height/2));


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
    bar.draw(ctx); //Redraw the bar
    
    ball.move(canvas, "auto", ctx);
    ball.draw(ctx);

    i++;
    if (i >= 60){ //FPS coounter
        perf2 = performance.now();
        fps = i / ((perf2 - perf1)/1000);
                                // millisec to sec

        var mycounter = document.createElement('p'); //Create counter
        mycounter.innerText = i;
        if (div.hasChildNodes()) { //Flush the old counter
            div.removeChild(div.firstChild);
        }
       div.appendChild(mycounter); //Add the node the page

        perf1= performance.now();
        i = 0;
    }
    
   
    window.requestAnimationFrame(refresh);
}

