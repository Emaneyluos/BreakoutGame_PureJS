class MovingObject {

    x = 0;
    y = 0;

    iniX = 0;
    iniY = 0;

    speedX = 0;
    speedY = 0;

    setPos(xPos, yPos){
        this.x = xPos;
        this.y = yPos;
    }

    setIni(inX, inY){
        this.iniX = inX;
        this.iniY = inY;
    }

    setSpeed(xSpe, ySpe){
        this.speedX = xSpe;
        this.speedY = ySpe
    }



}

class Bar extends MovingObject {

    width = 200;
    height = 20;

    speed= 10;

    move (canvas, way = "auto"){
        if (this.x > 0 && way == "left"){ //Stop the progress of the bar at the end of the canvas

            this.x -= this.speed; //Move the bar

            if (this.x < 0){ //Avoid the lost of the bar
                this.x = 0; 
            }
        }

        if (this.x < (canvas.width - this.width) && way == "right"){
            this.x += this.speed
            if (this.x > (canvas.width - this.width)){ //Prevent the bar to be a little out of canvas
                this.x = canvas.width - this.width;
            }
        }
    }

    draw (ctx){
        ctx.fillRect(this.x, this.y, this.width, this.height); 
    }

 
}

class Ball extends MovingObject {

    speedX = 10;
    speedY = 8;
    radius = 15; //Size of the ball
    pi = 3 * 2;

    draw (ctx){
        ctx.arc(this.x,this.y, this.radius, 0, this.pi,  0);
        ctx.fill();
    }

    move (canvas, way = "auto"){

        this.x += this.speedX;
        this.y += this.speedY;

        if ((this.x - (this.radius/2)) < 0){ //Avoid lost the ball
            this.x = 0 + (this.radius/2);
            this.speedX *= -1;
        }

        else if ((this.x + (this.radius/2)) > canvas.width){ //Prevent the ball to be out
            this.x = canvas.width - (this.radius/2);
            this.speedX *= -1;
        }

        if ((this.y - (this.radius/2) < 0)){
            this.y = 0 + (this.radius/2);
            this.speedY *= -1;
        }

        else if ((this.y + (this.radius/2)) > canvas.height){ //Prevent the ball to be out
            this.y = canvas.height - (this.radius/2);
            this.speedY *= -1;
            //alert("you loose!");
        }
    }

}