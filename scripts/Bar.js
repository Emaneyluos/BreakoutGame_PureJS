class Bar extends MovingObject {

    width = 200;
    height = 20;

    speed= 40;

    

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

    getPos (){

        var pos = [];
        pos.push(this.x);
        pos.push(this.y);

        return pos;
        
    }

    getSize (){

        var size = [];
        size.push(this.width);
        size.push(this.height);

        return size;
        
    }
 
}