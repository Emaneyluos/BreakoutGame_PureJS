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

    speed = 10;

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

 
}