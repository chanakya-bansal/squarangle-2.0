
var gameState=0
var LBback,LBfront,l=1,b=1,roboto,per,qwerty,bgMusic,z,zeq,c


var timer=120,x=650,y=0,next=false

function preload(){
 roboto=loadFont("Roboto-Light.ttf")
 bgMusic=loadSound("bgMusic.mp3")
}

function setup(){
  createCanvas(1500,700)
  c1=color(0,0,0)
  c2=color(255,255,255)
  per=1
  z=0
 zeq=true
 c=0
 
}

function draw(){
 if(gameState===0){
  background(220)
  
  rectMode(CENTER)
  noStroke()
  fill(180)
  LBback=rect(750,500+c,300,30,50)
  noStroke()
 
  
  if(l<50){
    fill(157,21,70)
  }else if(l>49 && l<100){
    fill(131,43,101)
  }else if(l>99 && l<150){
    fill(107,63,131)
  }else if(l>149 && l<200){
    fill(82,83,159)
  }else if(l>199 && l<250){
    fill(28,130,226)
  }else if(l>249 && l<300){
    fill(4,150,255)
  }
  if(l===300){
    fill(4,150,255)
  }



  if(per<100){
    per=per+0.32
  //per=per+1.5
  }
 

  


  LBfront=rect(600+b,500+c,l,30,50)
  if(l<300){
  l=l+1
  b=b+0.5
  }
  fill(220)
  textFont(roboto)
  textSize(15)
  if(z<=400){
  text(round(per)+"%",590+b,505+c)
  }else{
    text('PLAY',590+b,505+c)
  }


 if(round(per)===100){

  fill(157,21,70)
  textSize(80)
  text("S",600-50,-50+z)
  fill(144,32,85)
  text("Q",645-50,-50+z)
  fill(128,46,105)
  text("U",690-50,-50+z)
  fill(112,59,125)
  text("A",735-50,-50+z)
  fill(93,76,148)
  text("R",780-50,-50+z)
  fill(77,89,168)
  text("A",825-50,-50+z)
  fill(61,102,186)
  text("N",870-50,-50+z)
  fill(45,115,205)
  text("G",915-50,-50+z)
  fill(29,129,255)
  text("L",960-50,-50+z)
  fill(4,150,255)
  text("E",1000-50,-50+z)

  if(zeq===true){
  if(z<400){
    z=z+1.5
  }
}else{
  z=z+2
  c=c+2
}


 }

 if(c>500){
  resizeCanvas(1,1)
clear ()
bgMusic.play()
bgMusic.loop()
gameState=1
}



}


if(gameState===1){
  resizeCanvas(1500,700)
  background(220)



 
  if(frameCount%30===0){
    timer=timer-1
  }

  if(timer%2===0){
   fill(157,21,70)
  }else{
   fill(4,150,255)
  }
  if(timer===0){
    timer=120
  }
 
  text("LEVELS",x,y)
  if(y<100){
 y=y+2
  }


  if(next===true){
    resizeCanvas(1,1)
    clear ()
    gameState=2
  }

}







if(gameState===2){
  
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




  

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


noLoop() 

}



}




function mouseReleased() {
  if(gameState===0 && round(per)===100 && z===400.5){
  zeq=false
 
if(z>700){
  resizeCanvas(1,1)
clear ()
bgMusic.play()
gameState=2
}
  }

 if(gameState===1){
   next=true
 }




  
}


