var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var div = document.getElementById("fps"); //FPS counter


//var timeSt =performance.now(); //For FPS counter 
//var oldTimeStamp = 0; //For FPS counter


var oldTimeStamp = 0;
var i = 0;
var paused = false;

const bar = new Bar(canvas); 
const ball = new Ball(canvas);


document.addEventListener('keydown', keyIsPress);
window.requestAnimationFrame(refresh);


function keyIsPress (e)
{
    //console.log(e.keyCode); //See the keyCode of key press

    if (e.keyCode == 39){
        bar.move (canvas, "right");
    }

    else if (e.keyCode == 37){
         bar.move (canvas, "left");
    }

    else if (e.keyCode == 27) //Set pause
    {
        if (!paused){
            paused = true;
        }
        else{
            paused = false;
        }
    }


}


function refresh (timeStamp){

  

    if (!paused){
        ctx.beginPath(); //return at the start of canvas
        ctx.fillStyle = "rgba(255,255,255,0.5)";
        ctx.fillRect(0,0,canvas.width,canvas.height);
        ctx.fillStyle = "rgba(0,0,0,1)";

        bar.draw(ctx); //Redraw the bar

        // Calculate how much time has passed
            //For move the ball by time not by framerate
        let secondsPassed = (timeStamp - oldTimeStamp) / 1000;
        oldTimeStamp = timeStamp;
        ball.move(canvas, secondsPassed);
        ball.touch(bar.getPos(), bar.getSize());
        ball.draw(ctx);

       // fpsCounter();
    }
    window.requestAnimationFrame(refresh);
}


/*function fpsCounter (){

    i++;
    if (i >= 60){ //FPS coounter
        oldTimeStamp = performance.now(); //Get time now
        let fps = i / ((oldTimeStamp - timeSt)/1000);
                                // millisec to sec

        var mycounter = document.createElement('p'); //Create counter
        mycounter.innerText = i;

        div.removeChild(div.lastChild); //Flush the old counter
        div.appendChild(mycounter); //Add the node to the page

        timeSt= performance.now(); //Reset timeSt
        i = 0;
    }

}*/

