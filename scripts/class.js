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

    speed= 20;

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

    speedX = 2;
    speedY = 1;
    radius = 150; //Size of the ball
    pi = Math.PI * 2;
    scope = [];

    draw (ctx){
        ctx.arc(this.x,this.y, this.radius, 0, this.pi,  0);
        ctx.fill();
    }

   


    move (canvas, way = "auto", ctx){

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

        ctx.fillStyle = '#FFA500';
        this.scopeRefresh();
        
        this.scope.forEach(element => {
            ctx.fillRect(element[0], element[1], 1 ,20);

            
        });
        
        ctx.fillStyle = "#696969";
        ctx.fillRect(this.x, this.y,-1000, 1);
        // géréer l'affichage selon le coté du cercle, sinon les rectangles sont cachés par le cercle

        ctx.fillStyle = '#000000';
       
    }

   scopeRefresh (){
        
        this.scope = []; //Purge array
        

        for (let i=1; (i <= this.radius * 4) ; i++)
        {
            let angle = (i/this.radius) * (Math.PI*2)  ;

            let x = this.arrondir(this.x + (this.radius * Math.cos(angle)));
            let y =this.arrondir(this.y + (this.radius * Math.sin(angle)));
            
            
            let dot = [x, y, " \n"];
            this.scope.push(dot);
        }
        
        
    }

    arrondir (num){
        num *= 1000;
        Math.round(num);
        return num/1000;

    }

   
}