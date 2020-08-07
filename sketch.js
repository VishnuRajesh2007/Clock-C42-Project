var hr,min,sec;
var secMovement,minMovement,hrMovement;

function setup() {
angleMode(DEGREES);
var cnv = createCanvas(1366,663);
cnv.position(0,0) 
}

function draw() {
  background(0);
  timeFormat();
  min=minute();
  sec=second();
  textSize(30);
  textStyle(BOLD);
  fill(255);
  digitalTime();
  analogTime();
  strokeWeight(8);
  stroke(255);
  noFill();
  arc(50,-50,400,400,0,360);
  arc(50,-50,360,360,0,360);
  arc(50,-50,440,440,0,360);
  
  arc(50,640,400,400,0,360);
  arc(50,640,360,360,0,360);
  arc(50,640,440,440,0,360);
  
  noStroke();

  fill(0,0,255);
  rect(20,520,20,20);
  text("Seconds",50,540);

  fill(148,0,211);
  rect(20,560,20,20);
  text("Minutes",50,580);

  fill(0,255,0);
  rect(20,600,20,20);
  text("Hours",50,620);

  drawSprites();
}


function timeFormat(){
  if(hour()>12){  
    hr=hour()-12;
    }
    else{
    hr=hour() 
    }
}


function digitalTime(){
   
  if(hour()>12){
    text(hr+':'+min+':'+sec+' PM',30,50);
    }
    else{
    text(hr+':'+min+':'+sec+' AM',30,50);
    
    }
}

function analogTime(){
push();
strokeWeight(8);
noFill();
translate(683,334);
rotate(-90);

stroke(0,0,255);
secMovement=map(sec,0,60,0,360);
arc(0,0,450,450,0,secMovement);  

stroke(148,0,211);
minMovement=map(min,0,60,0,360);
arc(0,0,425,425,0,minMovement);  

stroke(0,255,0);
hrMovement=map(hr,0,12,0,360);
arc(0,0,400,400,0,hrMovement);  


push();
stroke(0,0,255);
rotate(secMovement);
line(0,0,180,0);
pop();

push();
stroke(148,0,211);
rotate(minMovement);
line(0,0,150,0);
pop();

push();
stroke(0,0,255);
rotate(hrMovement);
line(0,0,80,0);
pop();

stroke(255);
point(0,0);
pop();
}