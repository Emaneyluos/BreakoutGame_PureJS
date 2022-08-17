class Bar extends MovingObject {

    width = 200;
    height = 20;
    speed=0;
    minSpeed = 400;
    maxSpeed = 600;

    constructor(canvas){
        super();
        this.setPos((canvas.width-this.width)/2, canvas.height-this.height-10);
    }

    

    keyMove (left, right){

        if (left && !right)
        { 

            if (this.speed <= 0 && this.speed <= -this.minSpeed ) // If the bar is moving the right way
            {
                this.speed *= 1.02;
                if (Math.abs(this.speed) > this.maxSpeed) { this.speed = -this.maxSpeed;} 

            }

            else if (this.speed > 0)                     //If the bar is moving in the other way 
            {
                this.speed /= 1.25;
                if(this.speed < (this.minSpeed / 10)) {this.speed = 0;}
            }

            else  {this.speed = -this.minSpeed;}       //If the bar is stopped
           
        }

        else if ( !left && right){

            if (this.speed >=0 && this.speed >= this.minSpeed )  // If the bar is moving the right way
            {
                this.speed *= 1.02;
                if (this.speed > this.maxSpeed) { this.speed = this.maxSpeed; }

            }
           
            
            else if (this.speed < 0) //If the bar is moving in the other way 
            {
                this.speed /= 1.25;
                if(this.speed > (-this.minSpeed / 10)) {this.speed = 0;}
            }
            
             
            else //If the bar is stopped
            {
                
                this.speed = this.minSpeed;
            }
        }

        else if ( (left && right) || (!left && !right) ){
            this.speed /=1.035;
            if (Math.abs(this.speed) < this.minSpeed ) {this.speed = 0;}
            
        }
    }

    move (canvas, time){

        if (this.speed != 0)
        {

        this.x += (this.speed * time); //Move the bar

        if (this.x < 0){ //Avoid the lost of the bar
            this.x = 0; 
        }

        else if (this.x > (canvas.width - this.width)){ //Prevent the bar to be a little out of canvas
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