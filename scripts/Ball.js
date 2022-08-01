class Ball extends MovingObject {

    speedX = 8;
    speedY = 4;
    radius = 15; //Size of the ball
    pi = Math.PI * 2;
    scope = [];

    draw (ctx){
        ctx.arc(this.x,this.y, this.radius, 0, this.pi,  0);
        ctx.fill();
    }

   


    move (canvas, ctx){

        this.x += this.speedX;
        this.y += this.speedY;

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

    touch (barPos, barSize){ //

        let barThird = barSize[0] / 3;
        
        this.scope.some(function (element) { 

        if (element[1] >= barPos[1]){ //Is ball under the bar
            
            
            if (element[0] >= barPos[0] && element[0] <= (barPos[0] + barThird)) 
            //Left part of the bar
            {
                this.speedY *= -0.8;
                this.y = barPos[1] - this.radius; //Prevent the ball to get in the bar
                
                if (this.speedX < 0){ //If the ball is in right direction
                    this.speedX *= 1.33;
                }
                else{ //If the ball is in counter direction
                    this.speedX *= -0.8;
                }

                //alert(this.speedX);
                
                return true;


            }

            else if (element[0] >= (barPos[0] + barThird) && element[0] <= (barPos[0] + barThird*2)) 
            //Center part of the bar
            {
                this.speedY *= -1.5;
                this.y = barPos[1] - this.radius; //Prevent the ball to get in the bar
                
                return true;


            }

            else if (element[0] >= barPos[0] + barThird*2 && element[0] <= (barPos[0] + barThird*3)) 
            //Right part of the bar
            {
                this.speedY *= -0.8;
                this.y = barPos[1] - this.radius; //Prevent the ball to get in the bar
                
                if (this.speedX > 0){ //If the ball is in right direction
                    this.speedX *= 1.33;
                }
                else{ //If the ball is in counter direction
                    this.speedX *= -0.8;
                }

                //alert(this.speedX);
                
                return true;


            }

        }
            
            
            //Selon le rebond sur la raquette différents cgangements de vitesse
            //milieu speedy * -1.5
            //milieu excentré speedy * -1 et speedx * 0.75 plus la direction (podsitif ou négatif)
            // cotés speedy *-0.8  et speedx *1.33 plus la direction             
        }, this);

        
    }

    //Add function for increase speed who manage that, for have limit.





    

    round (num){
        num *= 1000;
        num = Math.round(num); 
        return num/1000;

    }

   
}