class Ball extends MovingObject {

    minSpeedX = 400;
    maxSpeedX = 650;

    speedX = 400;
    speedY = 300;

    radius = 15; //Size of the ball
    pi = Math.PI * 2;
    scope = [];

    constructor(canvas){
        super();
        this.setPos((canvas.width/2), (canvas.height/2));
    }

    draw (ctx){
        ctx.arc(this.x,this.y, this.radius, 0, this.pi,  0);
        ctx.fill();
    }

   


    move (canvas, time){

        this.x += (this.speedX * time);
        this.y += (this.speedY * time);

        if ((this.x - (this.radius)) < 0){ //Avoid lost the ball
            this.x = 0 + (this.radius);
            this.speedX *= -1;
        }

        else if ((this.x + (this.radius)) > canvas.width){ //Prevent the ball to be out
            this.x = canvas.width - (this.radius);
            this.speedX *= -1;
        }

        if ((this.y - (this.radius) < 0)){
            this.y = 0 + (this.radius);
            this.speedY *= -1;
        }

        else if ((this.y + (this.radius)) > canvas.height){ //Prevent the ball to be out
            this.y = canvas.height - (this.radius);
            this.speedY *= -1;
            //alert("you loose!");
        }

        this.scopeRefresh();
    }

    getScope (element, index, array){ 

    
        if (index <= (array.length/4)){ //Down right
           return 1;
        }

        else if (index >  (array.length/4) && index <= (array.length/2)){ //Down left
            return 2;
        }

        else if (index > (array.length/2) && index < ((array.length/4)*3)){ //Up left
            return 3;
        }

        else{ //Up right
            return 4;
        }
        
       }

   scopeRefresh (){ // The array scope own all the dot of the perimeter of the ball
        
        this.scope = []; //Purge array
        

        for (let i=1; i <= (this.radius * 2)  ; i++)
        {
            let angle = (i/this.radius) * Math.PI  ;

            let x = this.round(this.x + (this.radius * Math.cos(angle)));
            let y =this.round(this.y + (this.radius * Math.sin(angle)));
            
            
            let dot = [x, y];
            this.scope.push(dot);
        }
        
        
    }

    touch (barPos, barSize){ 


        let barThird = barSize[0] / 3;
        
        this.scope.some(function (element) { 

        if (element[1] >= barPos[1]){ //Is ball under the bar
            
            
            if (element[0] >= barPos[0] && element[0] <= (barPos[0] + barThird)) 
            //Left part of the bar
            {
                this.speedY *= -1;
                
                this.y = barPos[1] - this.radius; //Prevent the ball to get in the bar
                
                if (this.speedX < 0){ //If the ball is in right direction
                    this.speedUpX();
                }
                else{ //If the ball is in counter direction
                    this.speedReverseX ();
                }
                
                return true;
            }

            else if (element[0] >= (barPos[0] + barThird) && element[0] <= (barPos[0] + barThird*2)) 
            //Center part of the bar
            {
                this.speedY *= -1;
                this.speedDownX();
                this.y = barPos[1] - this.radius; //Prevent the ball to get in the bar
                
                return true;


            }

            else if (element[0] >= barPos[0] + barThird*2 && element[0] <= (barPos[0] + barThird*3)) 
            //Right part of the bar
            {
                this.speedY *= -1;
                this.y = barPos[1] - this.radius; //Prevent the ball to get in the bar
                
                if (this.speedX > 0){ //If the ball is in right direction
                   this.speedUpX();
                }
                else{ //If the ball is in counter direction
                    this.speedReverseX ();
                }

                if (this.speedX > this.maxSpeedX) {this.speedX = this.maxSpeedX;}
                else if (this.speedX < -this.maxSpeedX) {this.speedX = -this.maxSpeedX;}
                
                return true;


            }

        } }, this);

        
    }

    
    speedUpX (){ //Methode for increase speed of ball, in a controlled way

        this.speedX *= 1.33;

        if (Math.sign(this.speedX) == 1)
        {
            if (this.speedX > this.maxSpeedX) {this.speedX = this.maxSpeedX;}
            else if (this.speedX < this.minSpeedX) {this.speedX = this.minSpeedX;}
        }
               
        else if (Math.sign(this.speedX) == -1)
        {

            if (this.speedX < -this.maxSpeedX) {this.speedX = -this.maxSpeedX;}
            else if (this.speedX > -this.minSpeedX) {this.speedX = -this.minSpeedX;}
        }
    }

    speedReverseX (){ //Methode for reverse speed of ball, in a controlled way

        this.speedX *= -0.8;

        if (Math.sign(this.speedX) == 1)
        {
           if (this.speedX < this.minSpeedX) {this.speedX = this.minSpeedX;}
        }
               
        else if (Math.sign(this.speedX) == -1)
        {
            if (this.speedX > -this.minSpeedX) {this.speedX = -this.minSpeedX;}
        }
    }

    speedDownX (){
        this.speedX *= 0.8;

        if (Math.sign(this.speedX) == 1)
        {
           if (this.speedX < this.minSpeedX) {this.speedX = this.minSpeedX;}
        }
               
        else if (Math.sign(this.speedX) == -1)
        {
            if (this.speedX > -this.minSpeedX) {this.speedX = -this.minSpeedX;}
        }

    }



    round (num){
        num *= 1000;
        num = Math.round(num); 
        return num/1000;

    }

   
}