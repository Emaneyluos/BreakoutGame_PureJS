var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var div = document.getElementById("fps"); //FPS counter


//var timeSt =performance.now(); //For FPS counter 
//var oldTimeStamp = 0; //For FPS counter


var oldTimeStamp = 0;
var i = 0;
var paused = false;

var keyLeft = 0;
var keyRight = 0;

const bar = new Bar(canvas); 
const ball = new Ball(canvas);

document.addEventListener('keydown', keyIsPress);
document.addEventListener('keyup', keyIsUp);
window.requestAnimationFrame(refresh);


function keyIsPress (e)
{
    if (e.keyCode == 39){
        keyRight = 1;
    }

    else if (e.keyCode == 37){
         keyLeft = 1;
    }


    else if (e.keyCode == 27) //Set pause
    {
        if (!paused){
            paused = true;
        }
        else{
            paused = false;
        }

        //Bug quan on et pause la ball continue de bouger
    }


}

function keyIsUp (e)
{
    if (e.keyCode == 39){
        keyRight = 0;
    }

    else if (e.keyCode == 37){
        keyLeft = 0
    }


}


function refresh (timeStamp){

  

    if (!paused){
        ctx.beginPath(); //return at the start of canvas
        ctx.fillStyle = "rgba(255,255,255,0.8)";
        ctx.fillRect(0,0,canvas.width,canvas.height);
        ctx.fillStyle = "rgba(0,0,0,1)";

        

        // Calculate how much time has passed
            //For move the ball by time not by framerate
        let secondsPassed = (timeStamp - oldTimeStamp) / 1000;
        oldTimeStamp = timeStamp;

        
        bar.keyMove(keyLeft, keyRight);
        bar.move(canvas, secondsPassed);
        console.log(bar.speed);
        ball.move(canvas, secondsPassed);
        ball.touch(bar.getPos(), bar.getSize());

        bar.draw(ctx); //Redraw the bar
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

