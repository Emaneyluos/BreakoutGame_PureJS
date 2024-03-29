var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var div = document.getElementById("fps"); //FPS counter


var perf1 =performance.now(); //For FPS counter 
var perf2 =0; //For FPS counter
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


function refresh (){

    if (!paused){
        ctx.beginPath(); //return at the start of canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height); //Clear canvas
        
        bar.draw(ctx); //Redraw the bar
        ball.move(canvas, ctx);
        ball.touch(bar.getPos(), bar.getSize());
        ball.draw(ctx);

        fpsCounter();
    }
    window.requestAnimationFrame(refresh);
}


function fpsCounter (){

    i++;
    if (i >= 60){ //FPS coounter
        perf2 = performance.now(); //Get time now
        let fps = i / ((perf2 - perf1)/1000);
                                // millisec to sec

        var mycounter = document.createElement('p'); //Create counter
        mycounter.innerText = i;

        div.removeChild(div.lastChild); //Flush the old counter
        div.appendChild(mycounter); //Add the node to the page

        perf1= performance.now(); //Reset perf1
        i = 0;
    }

}

