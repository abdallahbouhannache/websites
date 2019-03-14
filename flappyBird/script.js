var ctx = document.getElementById("canvas").getContext("2d");
var btn = document.querySelector('#btn');

var width = canvas.width, height = canvas.height;
var x =90;
var y =250,oldY=250;
var score = 0;
var recPosX = width,recPosY=160;
var recPosX1 = width+200,recPosY1=-(Math.floor((Math.random() * 60))+40) ;
var recPosX2 = width+400,recPosY2=-recPosY1;
var velocity = 0,gravity=0;
var recPosY = 0;
var bricks = new Image();
var t = 0, tunnel = 0;
var brickPosX = 0,brickPosX1=width,brickPosX=2;
var oldPx =  recPosX,  test = 0;
var speedX = 3, speedY = 2;
var start = 0;
var h = Math.floor((Math.random() * 500)), h1 = Math.floor((Math.random() * 500)), h2 = Math.floor((Math.random() * 500));
var time = new Date().getTime();
var timeC = 250,timeD=0;
var flipUp = false,isFalling=false,timeToFall=new Date().getTime(),degree=0,degUp=40;
var dif = 0, dif1 = 0, dif2 = 0;
var frame = null,frame1=null,alive=1;
var t1 = true; t2 = true; t3 = true;
var velocity = 0;
var newGame = 1;
var pipedown = new Image(); 
var pipeup = new Image(); 
var bird = new Image();
var bird1 = new Image();
var bird2 = new Image();
var bestScore = window.localStorage.getItem('bestScore')|| 0 ;


window.onload = () => {
    pipedown.src = "./ress/img/pipedown.png";
    pipeup.src = "./ress/img/pipeup.png";
    bird.src = "./ress/img/favicon.ico";
    bird1.src = "./ress/img/BRD1up.png";
    bird2.src = "./ress/img/BRD1down.png";
    bricks.src = "./ress/img/brick.png";
/* pipe.src = "https://mdn.mozillademos.org/files/1456/Canvas_sun.png"; */
ctx.beginPath();
ctx.font = "35px Comic Sans MS";
ctx.textAlign = "center";
ctx.fillText(this.score, width/2-10, height/2-220); 
frame1=window.requestAnimationFrame(initiating);

window.localStorage.setItem('bestScore', this.bestScore);
}

 //draw initative scene
function initiating() {
  
       
    drawScene();
        
    
          this.brickPosX -= 7;        
          this.brickPosX1 -= 7;        
     
     if (this.brickPosX <= -490) {
         this.brickPosX = width;
     }
     if (this.brickPosX1 <= -490) {
         this.brickPosX1= this.brickPosX+500;
     }
          frame1=requestAnimationFrame(initiating);
           
    

 }

//draw the scene
function drawScene() {

    if (!start) {
    
 
if (new Date().getTime() > this.time + 400  && this.y+10 <height ) {    
    (t) ? (t = 0 ) : (t = 1);
         this.time = new Date().getTime();
/* this.timeC = this.time; */
    
    } 
        (t) ? (this.y += 1) : (this.y -= 1);
    

        }   
   
    if (this.test) {
        this.y -= this.speedY;
        flipUp = true;
        this.timeD = new Date().getTime();
    } else {
        if (new Date().getTime() > this.timeD + 300  ) {
        
        this.flipUp = false;              
    }
    }
    
    if (this.y<=this.oldY-80 ) {
        this.test = 0;
        this.speedY = 2;        
    } 

        
    if (new Date().getTime() > this.timeC + 390  ) {
        this.timeC = new Date().getTime();
        this.velocity += 2;      
    }   
        

  /*   if (new Date().getTime() > this.timeD + 550  ) {
        this.timeD = new Date().getTime();
        this.flipUp = false;              
    } */
           ctx.clearRect(0, 0, width, height);                
        
    //drawing pipes First
           ctx.fillStyle = "green";
           ctx.drawImage(pipedown, this.recPosX, this.recPosY1,100,350);  
           ctx.drawImage(pipeup, this.recPosX, 400+this.recPosY2,100,300);  
    //second
           ctx.drawImage(pipedown, this.recPosX1,-100,100,350);  
           ctx.drawImage(pipeup, this.recPosX1, 400, 100, 300);  
     //third
           ctx.drawImage(pipedown, this.recPosX2, -100,100,350);  
           ctx.drawImage(pipeup, this.recPosX2, 400, 100, 300);
           //drawing the road
           ctx.drawImage(bricks,this.brickPosX,520,width,100);   
           ctx.drawImage(bricks,this.brickPosX1,520,width,100);   
           ctx.fillStyle = "white";
    

    //handling the process of moving upward and downard
    if (!flipUp) {
        if (!this.isFalling) {
        ctx.drawImage(bird, this.x, this.y, 60, 60);        
        } else {
             //falling Down
            this.degree += 1;
            ctx.save();        
            ctx.translate(this.x, this.y);
            ctx.rotate(this.degree * Math.PI / 180);
            ctx.drawImage(bird, 0, 0, 60, 60);
            ctx.restore();           
        }        

        
    } else {
            //jumping UP
        ctx.save(); 
        ctx.translate(this.x-18, this.y+25);
        ctx.rotate(-degUp * Math.PI / 180); 
        ctx.translate(0, 0);         
        ctx.drawImage(bird, 0, 0, 60, 60);     
        ctx.restore();  
    }

        
     
    
           
        

       
          
    
    
}


//move up with bar space
document.addEventListener('keydown', (e) => {

     if (!this.start && this.newGame) {
        cancelAnimationFrame(frame1);
        frame = window.requestAnimationFrame(main);
        this.start = 1;
        this.newGame = 0;
         this.isFalling = true;
         console.log('new game');
    }

 
    if (alive) {  
        this.degree = 0;
        
        
        this.test = 1;
        this.oldY = this.y;
           if (e.repeat) { 
        this.speedY = 9;           
           } else {
             
        this.speedY += 6;
            }
        this.velocity = 0;    
    } 
    

}) 

//move up with click
document.addEventListener('click', (e) => { 
    
    if (!this.start && this.newGame) {
        cancelAnimationFrame(frame1);
        frame = window.requestAnimationFrame(main);
        this.start = 1;
        this.newGame = 0;
         this.isFalling = true;
        console.log('new game')
    }

     
    if ( alive ) {     
        this.degree = 0;  
        

        this.test = 1;
        this.oldY = this.y;
        this.speedY += 6;
        this.velocity = 0;

        
    }      
    
})

//making new game
btn.addEventListener('click', () => {
    setTimeout(() => { 
        this.newGame = 1;
        this.isFalling = false;
        this.degree = 0;

    alive = 1;
    this.start=0;
    this.x = 90;
    this.y = 250;
    this.oldY=210;
    this.recPosX = width;
    this.recPosX1 = width+200;
    this.recPosX2 = width+400;
    this.dif = 0, dif1 = 0, dif2 = 0;
    this.t1 = true; this.t2 = true; this.t3 = true;
    this.score=0,this.test=0;
    this.velocity=0;
this.score = 0;
this.gravity=0;
this.recPosY = 0;
this.t = 0,this.tunnel = 0;
this.brickPosX = 0,this.brickPosX1=width,this.brickPosX=2;
this.oldPx =  recPosX;
this.speedX = 3,this.speedY = 2;
this.h = Math.floor((Math.random() * 500)), this.h1 = Math.floor((Math.random() * 500)), this.h2 = Math.floor((Math.random() * 500));
 this.time = new Date().getTime();
this.timeC = 250;
this.pattern = null;
this.frame = null,this.frame1=null;
this.t1 = true,this.t2 = true,this.t3 = true;

    btn.style.display = 'none';
    frame1 = window.requestAnimationFrame(initiating);
    }, 50);
})



//show the scene
function displayScore() {
    cancelAnimationFrame(frame1);
    cancelAnimationFrame(frame);
         ctx.fillStyle = '#ded895';
         ctx.strokeStyle = "black";
         ctx.lineWidth = 5;
         ctx.strokeRect(200, 120, 100, 150);
         ctx.fillRect(200, 120, 100, 150);
         ctx.fillStyle = '#000000';
        ctx.font = "25px Comic Sans MS";
         ctx.fillText('Score', 250, 150); 
         ctx.font = "35px Comic Sans MS";
         ctx.fillText(this.score, 250, 190); 
         ctx.font = "15px Comic Sans MS";
         ctx.fillText('Best', 250, 210);
         ctx.font = "35px Comic Sans MS";         
         ctx.fillText(this.bestScore, 250, 250); 
    btn.style.display = "block";
   
}


function fallingDown(){

          drawScene();
    
    if (this.y+130 > height) {
        displayScore();
    } else {
         this.y+= 15;
         frame = window.requestAnimationFrame(fallingDown);   
    }

}





    //counting the score
function scoreCount(params) {
     if (dif == 0) {
         dif = this.recPosX - this.x;
         /*200 the  tunnle hight*/
     if (dif <= 10 && dif >= 0 && (this.y - 200 <= 10 || this.y+200>500)) {
         /* alive = 0; */
         console.log('hit')
     } else
         if ((this.y - 200 > 10 || this.y + 200 < 500) && t1) {           
         this.score++;
         }else {
          dif = 0;
         
         }
    }
    

     if (dif1 == 0) {
         dif1 = this.recPosX1 - this.x;
         /*200 the  tunnle hight*/
     if (dif1 <= 10 && dif1 >= 0 && (this.y - 200 <= 10 || this.y+200>500)) {
         /* alive = 0; */
         console.log('hit')
         
     }else if((this.y - 200 > 10 || this.y+200<500) && t1){           
         this.score++;
         }else {
           dif1 = 0;
         
         }
     }
    

    if (dif2 == 0) {
        dif2 = this.recPosX1 - this.x;
        /*200 the  tunnle hight*/
        if (dif2 <= 10 && dif2 >= 0 && (this.y - 200 <= 10 || this.y + 200 > 500)) {
         console.log('hit')
            /* alive = 0; */

         
        } else
            if ((this.y - 200 > 10 || this.y + 200 < 500) && t1) {
            this.score++;
        } else {
            dif2 = 0;
         
        }
    }



}











 function main() {   
   
         if (!test) {
     if (new Date().getTime() > this.timeToFall + 300) {
         this.timeToFall = new Date().getTime();
        this.isFalling = true;   
         }
         
    }
    
     
    
     drawScene();
                     
     
          this.recPosX -= this.speedX;    
          this.recPosX1 -= this.speedX;
          this.recPosX2 -= this.speedX;        
          this.brickPosX -= 7;        
          this.brickPosX1 -= 7;        
     
     if (this.brickPosX <= -490) {
         this.brickPosX = width;
     }
     if (this.brickPosX1 <= -490) {
         this.brickPosX1= this.brickPosX+500;
     }

  

     //moving forward the scene road plus green tunnels
     if (this.recPosX < -100) {
       this.h = Math.floor((Math.random() * 100));
         this.recPosX = width;
         dif = 0;
         t1 = true;
         recPosY1 = -(Math.floor((Math.random() * 60)) + 30);
         recPosY2 = -recPosY1;
     }
     if (this.recPosX1 < -100) {
        this.h1 = Math.floor((Math.random() * 100));
         this.recPosX1 = width;
         dif1 = 0;
     }
     if (this.recPosX2 < -100) {
        this.h2 = Math.floor((Math.random() * 100));
         this.recPosX2 = width;
         dif2 = 0;
     }
     
     if ((this.y+130 > height  || !alive) ) {
         console.log('you lose');
         
         this.bestScore = (this.score > this.bestScore) ? this.score : this.bestScore;
         window.localStorage.setItem('bestScore', this.bestScore);
         
         alive = 0;
         ctx.fillStyle = 'black';    
         ctx.fillRect(0, 0, width, height);
         setTimeout(() => {
         fallingDown();   //when you lose
         }, 10);

     } else {
         if (!this.test) {         
             this.y +=  this.speedY +this.velocity;
             
         }
         ctx.fillText(this.score, width / 2 - 10, height / 2 - 220); 
         frame = window.requestAnimationFrame(main);   
         
     }
     /* scoreCount();    */
           
     
    
    

         

         
     
}
 



















