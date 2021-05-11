



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

    
//starting matter.js
let engine = Matter.Engine.create();
let Events = Matter.Events;
let Bodies = Matter.Bodies;
let Body=Matter.Body;
let Detecter=Matter.Detector;
let Bounds=Matter.Bounds;


//starting render
let render = Matter.Render.create({
    element: document.body,
    engine: engine,
    options: {
      width: 1500,
      height: 700, 
      wireframes: false,
      background: 'rgb(220,220,220)',
      hasBounds:true
  }
});

//starting mouse constraint
let mouse = Matter.Mouse.create(render.canvas);
let mouseConstraint = Matter.MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
          render: {visible: false}
      }
  });
render.mouse = mouse;

// limity jump height and can only jump while on ground

let squareContact=false
let triangleContact=false

///////////////////////////////////////// points
let point=0



// ///////////////////////////////////////////////// buttons


bn1=Matter.Bodies.trapezoid(1350,575,40,20,0.1,{
    isStatic:true,
    chamfer:1,
    friction:1,
    render: {
      fillStyle: 'rgb(0,137,255)',
     
  }
  })

bn2=Matter.Bodies.trapezoid(527,220,40,20,0.1,{
  isStatic:true,
  chamfer:1,
  friction:1,
  render: {
    fillStyle: 'rgb(255,247,0)',
   
}
})


bn3=Matter.Bodies.trapezoid(1075,220,40,20,0.1,{
    isStatic:true,
    chamfer:1,
    friction:1,
    render: {
      fillStyle: 'rgb(255,145,0)',
     
  }
  })

  Matter.World.add(engine.world,[bn1,bn2,bn3])


///////////////////////////////////////////////// walls



w1 = Matter.Bodies.rectangle(750,640,1500,120,{
    isStatic:true,
    chamfer:0,
    render: {
        fillStyle: 'rgb(180,180,180)'
       
    }
});

w2 = Matter.Bodies.rectangle(150,480,300,200,{
    isStatic:true,
    chamfer:0,
    render: {
        fillStyle: 'rgb(180,180,180)'
       
    }
});

w3 = Matter.Bodies.rectangle(600,300,300,150,{
    isStatic:true,
    chamfer:30,
    render: {
        fillStyle: 'rgb(180,180,180)'
       
    }
});

w4 = Matter.Bodies.rectangle(650,50,100,150,{
    isStatic:true,
    chamfer:30,
    render: {
        fillStyle: 'rgb(180,180,180)'
       
    }
});

w5 = Matter.Bodies.rectangle(1185,300,350,150,{
    isStatic:true,
    chamfer:30,
    render: {
        fillStyle: 'rgb(180,180,180)'
       
    }
});




Matter.World.add(engine.world,[w1,w2,w3,w4,w5])





///////////////////////////////////////////////// Cwalls

Cw1=Matter.Bodies.rectangle(150,370,350,25,{
    chamfer:10,
    isStatic:true,
    render: {
        fillStyle: 'rgb(255,0,68)'
       
    }
})

//1
Cw2=Matter.Bodies.rectangle(220,480,150,25,{
    chamfer:10,
    isStatic:true,
    render: {
        fillStyle: 'rgb(0,137,255)'
       
    }
})

Cw3=Matter.Bodies.rectangle(520,380,100,30,{
    chamfer:10,
    isStatic:true,
    render: {
        fillStyle: 'rgb(0,255,255)'
       
    }
})
//3
Cw4=Matter.Bodies.rectangle(650,175,30,100,{
    chamfer:10,
    isStatic:true,
    render: {
        fillStyle: 'rgb(255,145,0)'
       
    }
})
//2//565
Cw5=Matter.Bodies.rectangle(880,565,250,30,{
    chamfer:10,
    isStatic:true,
    render: {
        fillStyle: 'rgb(255,247,0)'
       
    }
})
//1
Cw6=Matter.Bodies.rectangle(525,280,150,25,{
    chamfer:10,
    isStatic:true,
    render: {
        fillStyle: 'rgb(0,137,255)'
       
    }
})

Cw7=Matter.Bodies.rectangle(1300,220,80,25,{
    chamfer:10,
    isStatic:true,
    render: {
        fillStyle: 'rgb(255,0,145)'
       
    }
})

////////////////////////////////////// covers
co1=Matter.Bodies.rectangle(220,480,160,40,{
    isStatic:true,
    render: {
        fillStyle: 'rgb(180,180,180)'
    }
})

co2=Matter.Bodies.rectangle(520,360,110,30,{
    isStatic:true,
    render: {
        fillStyle: 'rgb(180,180,180)'
    }
})

co3=Matter.Bodies.rectangle(650,70,40,110,{
    isStatic:true,
    render: {
        fillStyle: 'rgb(180,180,180)'
    }
})
co4=Matter.Bodies.rectangle(530,280,160,30,{
    isStatic:true,
    render: {
        fillStyle: 'rgb(180,180,180)'
    }
})

co5=Matter.Bodies.rectangle(1300,238,80,25,{
    isStatic:true,
    render: {
        fillStyle: 'rgb(180,180,180)'
    }
})

/////////////////////////////////////////// points

s1=Matter.Bodies.circle(100,230,25,{
    isStatic:true,
   render: { 
       sprite:{ 
           texture: 'star.png',
           xScale: 0.08,
           yScale: 0.08
       }
   }
})

s2=Matter.Bodies.circle(695,170,25,{
    isStatic:true,
   render: { 
       sprite:{ 
           texture: 'star.png',
           xScale: 0.08,
           yScale: 0.08
       }
   }
})

s3=Matter.Bodies.circle(1425,300,25,{
    isStatic:true,
   render: { 
       sprite:{ 
           texture: 'star.png',
           xScale: 0.08,
           yScale: 0.08
       }
   }
})



Matter.World.add(engine.world,[s1,s2,s3])



// ///////////////////////////////////////////////// making square and triangle


let square=Matter.Bodies.rectangle(600,500,40,40,{
  mass:1
})
let triangle=Matter.Bodies.polygon(1200,500,3,27.5,{
  mass:1
})

///////////////////////////////////////////////// exit


e=Matter.Bodies.rectangle(1200,160,45,45,{
    isStatic:true,
   render: { 
       sprite:{ 
           texture: 'exit.png',
           xScale: 0.1,
           yScale: 0.1
       }
   }
})

Matter.World.add(engine.world,[e])

///////////////////////////////////////////////// adding edges

e1=Matter.Bodies.rectangle(-10,350,20,700,{
    isStatic:true
})

e2=Matter.Bodies.rectangle(1510,350,20,700,{
    isStatic:true
})
e3=Matter.Bodies.rectangle(750,-10,1500,20,{
    isStatic:true
})




// ///////////////////////////////////////////////// key function

var keys = [];
document.body.addEventListener("keydown", function(e) {
  keys[e.keyCode] = true;
 
});
document.body.addEventListener("keyup", function(e) {
  keys[e.keyCode] = false;
});



// ///////////////////////////////////////////////// win blocks
// //10,250
wb1=Bodies.rectangle(-75,250,20,150,{
  isStatic:true,
  render: {
    fillStyle: 'rgb(4,150,255)',
  }
})
Matter.Body.rotate(wb1,-2)

wb2=Bodies.rectangle(1575,250,20,150,{
  isStatic:true,
  render: {
    fillStyle: 'rgb(216,17,89)',
  }
})
Matter.Body.rotate(wb2,2)


// ////////////////////////////////////////////////// counters for winning

let win=false



counter=0

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////level 
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////2
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



let square2Contact=false
let triangle2Contact=false

///////////////////////////////////////// point2s
let point2=0



// ///////////////////////////////////////////////// buttons

bn1_2=Matter.Bodies.trapezoid(150,1345,40,20,0.1,{
    isStatic:true,
    chamfer:1,
    friction:1,
    render: {
      fillStyle: 'rgb(1,38,34)',
     
  }
  })

bn2_2=Matter.Bodies.trapezoid(1180,820,40,20,0.1,{
  isStatic:true,
  chamfer:1,
  friction:1,
  render: {
    fillStyle: 'rgb(0,59,54)',
   
}
})


bn3_2=Matter.Bodies.trapezoid(600,940,40,20,0.1,{
    isStatic:true,
    chamfer:1,
    friction:1,
    render: {
      fillStyle: 'rgb(233,138,21)',
     
  }
  })


bn4_2=Matter.Bodies.trapezoid(1120,820,40,20,0.1,{
    isStatic:true,
    chamfer:1,
    friction:1,
    render: {
      fillStyle: 'rgb(89,17,77)',
     
  }
  })


bn5_2=Matter.Bodies.trapezoid(360,920,40,20,0.1,{
    isStatic:true,
    chamfer:1,
    friction:1,
    render: {
      fillStyle: 'rgb(187,68,48)',
     
  }
  })


  

  


// ///////////////////////////////////////////////// walls



w1_2 = Matter.Bodies.rectangle(400,1380,1000,60,{
    isStatic:true,
    chamfer:0,
    render: {
        fillStyle: 'rgb(180,180,180)'
       
    }
});

w2_2 = Matter.Bodies.rectangle(720,1355,250,200,{
    isStatic:true,
    chamfer:0,
    render: {
        fillStyle: 'rgb(180,180,180)'
       
    }
});
Matter.Body.rotate(w2_2,-0.65)

w3_2 = Matter.Bodies.rectangle(915,1300,310,200,{
    isStatic:true,
   
    render: {
        fillStyle: 'rgb(180,180,180)'
       
    }
});

w4_2 = Matter.Bodies.rectangle(1400,1310,310,220,{
    isStatic:true,
    chamfer:30,
    render: {
        fillStyle: 'rgb(180,180,180)'
       
    }
});

w5_2 = Matter.Bodies.rectangle(1070,1310,20,220,{
    isStatic:true,
    chamfer:30,
    render: {
        fillStyle: 'rgb(180,180,180)'
       
    }
});

w6_2 = Matter.Bodies.rectangle(290,1075,700,45,{
    isStatic:true,
    chamfer:30,
    render: {
        fillStyle: 'rgb(180,180,180)'
       
    }
});

w7_2 = Matter.Bodies.rectangle(515,1020,250,150,{
    isStatic:true,
    chamfer:30,
    render: {
        fillStyle: 'rgb(180,180,180)'
       
    }
});

w8_2 = Matter.Bodies.trapezoid(700,1020,260,110,0.5,{
    isStatic:true,
    chamfer:30,
    render: {
        fillStyle: 'rgb(180,180,180)'
       
    }
});

w9_2 = Matter.Bodies.rectangle(415,940,300,30,{
    isStatic:true,
    chamfer:30,
    render: {
        fillStyle: 'rgb(180,180,180)'
       
    }
});

w10_2 = Matter.Bodies.trapezoid(562,943,30,30,0.5,{
    isStatic:true,
    chamfer:30,
    render: {
        fillStyle: 'rgb(180,180,180)'
       
    }
});

w11_2 = Matter.Bodies.trapezoid(638,963,30,30,0.5,{
    isStatic:true,
    chamfer:30,
    render: {
        fillStyle: 'rgb(180,180,180)'
       
    }
});

w12_2 = Matter.Bodies.rectangle(50,875,200,160,{
    isStatic:true,
    chamfer:30,
    render: {
        fillStyle: 'rgb(180,180,180)'
       
    }
});

w13_2 = Matter.Bodies.rectangle(1100,910,80,125,{
    isStatic:true,
    chamfer:30,
    render: {
        fillStyle: 'rgb(180,180,180)'
       
    }
});

w14_2 = Matter.Bodies.polygon(1135,891,3,82,{
    isStatic:true,
    chamfer:30,
    render: {
        fillStyle: 'rgb(180,180,180)'
       
    }
});
Matter.Body.rotate(w14_2,0.53)

w15_2 = Matter.Bodies.trapezoid(1125,840,300,30,0.1,{
    isStatic:true,
    chamfer:30,
    render: {
        fillStyle: 'rgb(180,180,180)'
       
    }
});




/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////45-45,55,55


 
///////////////////////////////////////////////// tele

tele1_2 = Matter.Bodies.rectangle(950,1168,1,1,{
    isStatic:true,
    chamfer:30,
    render: {
        sprite:{ 
            texture: 'pl.png',
            xScale: 0.45,
            yScale: 0.45
        }
    }   
})

tele2_2 = Matter.Bodies.rectangle(50,1021,1,1,{
    isStatic:true,
    chamfer:30,
    render: {
        sprite:{ 
            texture: 'pl.png',
            xScale: 0.45,
            yScale: 0.45
        }
    }   
})

tele3_2 = Matter.Bodies.rectangle(450,890,1,1,{
    isStatic:true,
    chamfer:30,
    render: {
        sprite:{ 
            texture: 'pl2.png',
            xScale: 0.35,
            yScale: 0.35
        }
    }   
})

tele4_2 = Matter.Bodies.rectangle(1230,790,1,1,{
    isStatic:true,
    chamfer:30,
    render: {
        sprite:{ 
            texture: 'pl2.png',
            xScale: 0.35,
            yScale: 0.35
        }
    }   
})

tele1_2.collisionFilter.mask=200
tele1_2.collisionFilter.category=0x0008
tele2_2.collisionFilter.mask=200
tele2_2.collisionFilter.category=0x0008
tele3_2.collisionFilter.mask=200
tele3_2.collisionFilter.category=0x0008
tele4_2.collisionFilter.mask=200
tele4_2.collisionFilter.category=0x0008



///////////////////////////////////////////////// rotor_2_2

rotor_2=Matter.Bodies.rectangle(775,1140,20,110,{
    isStatic:true,
    chamfer:30,
    render: {
        fillStyle: 'rgb(255,188,66)'
       
    }

})


var options = {
    bodyA: rotor_2,
    pointB: {x:775,y:1140},
    stiffness: 0.04,
    length: 10
}

sling_2 = Matter.Constraint.create(options);


// ///////////////////////////////////////////////// Cwalls


// //10,250
Cw1_2=Matter.Bodies.rectangle(207.5,935,110,25,{
    chamfer:10,
    isStatic:true,
    render: {
        fillStyle: 'rgb(1,38,34)'
       
    }
})
//1
Cw2_2=Matter.Bodies.rectangle(700,910,25,150,{
    chamfer:10,
    isStatic:true,
    render: {
        fillStyle: 'rgb(0,59,54)'
       
    },
    angle:-0.5
})

Cw3_2=Matter.Bodies.rectangle(520,870,25,150,{
    chamfer:10,
    isStatic:true,
    render: {
        fillStyle: 'rgb(233,138,21)'
       
    }
})
// //3
Cw4_2=Matter.Bodies.rectangle(80,810,135,25,{
    chamfer:10,
    isStatic:true,
    render: {
        fillStyle: 'rgb(89,17,77)'
       
    }
})
// //2//565
Cw5_2=Matter.Bodies.rectangle(1400,1220,150,30,{
    chamfer:10,
    isStatic:true,
    render: {
        fillStyle: 'rgb(187,68,48)'
       
    }
})



// ////////////////////////////////////// covers
co1_2=Matter.Bodies.rectangle(775,1140,150,150,{
    isStatic:true,
    render: {
        fillStyle: 'rgb(220,220,220)'
    }
})

co1_2.collisionFilter.mask=200
co1_2.collisionFilter.category=0x00016

// /////////////////////////////////////////// point2s

s1_2=Matter.Bodies.circle(600,870,25,{
    isStatic:true,
   render: { 
       sprite:{ 
           texture: 'star.png',
           xScale: 0.08,
           yScale: 0.08
       }
   }
})

s2_2=Matter.Bodies.circle(895,1020,25,{
    isStatic:true,
   render: { 
       sprite:{ 
           texture: 'star.png',
           xScale: 0.08,
           yScale: 0.08
       }
   }
})

s3_2=Matter.Bodies.circle(1425,1000,25,{
    isStatic:true,
   render: { 
       sprite:{ 
           texture: 'star.png',
           xScale: 0.08,
           yScale: 0.08
       }
   }
})




// // ///////////////////////////////////////////////// making square2 and triangle2


let square2=Matter.Bodies.rectangle(200,1000,40,40,{
  mass:1,
  render: {
    fillStyle: 'rgb(4,150,255)'
   
}
})
let triangle2=Matter.Bodies.polygon(400,1200,3,27.5,{
  mass:1
})

// ///////////////////////////////////////////////// exit


e_2=Matter.Bodies.rectangle(50,720,45,45,{
    isStatic:true,
   render: { 
       sprite:{ 
           texture: 'exit.png',
           xScale: 0.1,
           yScale: 0.1
       }
   }
})

// ///////////////////////////////////////////////// adding edges

e1_2=Matter.Bodies.rectangle(-10,1050,20,700,{
    isStatic:true
})

e2_2=Matter.Bodies.rectangle(1510,1050,20,700,{
    isStatic:true
})
e3_2=Matter.Bodies.rectangle(750,-710,1500,20,{
    isStatic:true
})




// // ///////////////////////////////////////////////// key function

var keys = [];
document.body.addEventListener("keydown", function(e) {
  keys[e.keyCode] = true;
 
});
document.body.addEventListener("keyup", function(e) {
  keys[e.keyCode] = false;
});



// // ///////////////////////////////////////////////// win_2 blocks
// // //10,250
wb1_2=Bodies.rectangle(-75,950,20,150,{
  isStatic:true,
  render: {
    fillStyle: 'rgb(4,150,255)',
  }
})
Matter.Body.rotate(wb1_2,-2)

wb2_2=Bodies.rectangle(1575,950,20,150,{
  isStatic:true,
  render: {
    fillStyle: 'rgb(216,17,89)',
  }
})
Matter.Body.rotate(wb2_2,2)


// // ////////////////////////////////////////////////// counters for doors and walls

let win_2=false

counter_2=0






//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////level 
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////2
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// limity jump height and can only jump while on ground

let squareContact_3=false
let triangleContact_3=false

///////////////////////////////////////// points
let point_3=0


// ///////////////////////////////////////////////// buttons

bn1_3=Matter.Bodies.trapezoid(150,2045,40,20,0.3,{
    isStatic:true,
    chamfer:0,
    friction:1,
    render: {
      fillStyle: 'rgb(10,63,81)',
     
  }
  })

bn2_3=Matter.Bodies.trapezoid(50,1885,40,20,0.3,{
  isStatic:true,
  chamfer:0,
  friction:1,
  render: {
    fillStyle: 'rgb(26,113,126)',
   
}
})


bn3_3=Matter.Bodies.trapezoid(1200,2045,40,20,0.3,{
    isStatic:true,
    chamfer:0,
    friction:1,
    render: {
      fillStyle: 'rgb(26,144,168)',
     
  }
  })


bn4_3=Matter.Bodies.trapezoid(100,1705,40,20,0.3,{
    isStatic:true,
    chamfer:0,
    friction:1,
    render: {
      fillStyle: 'rgb(243,205,166)',
     
  }
  })





// // ///////////////////////////////////////////////// walls



w1_3 = Matter.Bodies.rectangle(750,2080,1500,60,{
    isStatic:true,
    chamfer:0,
    render: {
        fillStyle: 'rgb(180,180,180)'
       
    }
});

w2_3 = Matter.Bodies.rectangle(180,1900,375,20,{
    isStatic:true,
    chamfer:0,
    render: {
        fillStyle: 'rgb(180,180,180)'
       
    }
});

w3_3 = Matter.Bodies.rectangle(450,1982,250,20,{
    isStatic:true,  
   
    render: {
        fillStyle: 'rgb(180,180,180)'
       
    }
});
Matter.Body.rotate(w3_3,0.75)



w4_3 = Matter.Bodies.rectangle(125,1730,250,40,{
    isStatic:true,
    chamfer:0,
    render: {
        fillStyle: 'rgb(180,180,180)'
       
    }
});

w5_3 = Matter.Bodies.rectangle(350,1755,275,30,{
    isStatic:true,
    chamfer:0,
    render: {
        fillStyle: 'rgb(180,180,180)'
       
    }
});

w6_3 = Matter.Bodies.polygon(220,1760,3,35,{
    isStatic:true,
    chamfer:0,
    render: {
        fillStyle: 'rgb(180,180,180)'
       
    }
});
Matter.Body.rotate(w6_3,1.05)

w7_3 = Matter.Bodies.polygon(265,1740,3,35,{
    isStatic:true,
    chamfer:0,
    render: {
        fillStyle: 'rgb(180,180,180)'
       
    }
});
Matter.Body.rotate(w7_3,1.05)
w8_3 = Matter.Bodies.polygon(488,1750,3,20,{
    isStatic:true,
    chamfer:0,
    render: {
        fillStyle: 'rgb(180,180,180)'
       
    }
});
Matter.Body.rotate(w8_3,0.55)

w9_3 = Matter.Bodies.rectangle(150,1550,300,30,{
    isStatic:true,
    chamfer:0,
    render: {
        fillStyle: 'rgb(180,180,180)'
       
    }
});

w10_3 = Matter.Bodies.trapezoid(1300,1800,380,70,0.2,{
    isStatic:true,
    chamfer:0,
    render: {
        fillStyle: 'rgb(180,180,180)'
       
    }
});
Matter.Body.rotate(w10_3,3.15)

w11_3 = Matter.Bodies.trapezoid(1300,1865,190,30,0.35,{
    isStatic:true,
    chamfer:0,
    render: {
        fillStyle: 'rgb(180,180,180)'
       
    }
});
Matter.Body.rotate(w11_3,3.9)
w12_3 = Matter.Bodies.rectangle(1379,1748,220,50,{
    isStatic:true,
    chamfer:0,
    render: {
        fillStyle: 'rgb(180,180,180)'
       
    }
});

w13_3 = Matter.Bodies.polygon(1307,1702,3,45,{
    isStatic:true,
    chamfer:0,
    render: {
        fillStyle: 'rgb(180,180,180)'
       
    }
});
Matter.Body.rotate(w13_3,-0.5)

w14_3 = Matter.Bodies.rectangle(1368,1702,120,90,{
    isStatic:true,
    chamfer:0,
    render: {
        fillStyle: 'rgb(180,180,180)'
       
    }
});


w15_3 = Matter.Bodies.trapezoid(1422,1520,220,30,0.3,{
    isStatic:true,
    chamfer:0,
    render: {
        fillStyle: 'rgb(180,180,180)'
       
    }
});

w16_3 = Matter.Bodies.trapezoid(290,1440,220,30,0.3,{
    isStatic:true,
    chamfer:0,
    render: {
        fillStyle: 'rgb(180,180,180)'
       
    }
});
Matter.Body.rotate(w16_3,0.5)

w17_3 = Matter.Bodies.trapezoid(375,1395,220,30,0.3,{
    isStatic:true,
    chamfer:0,
    render: {
        fillStyle: 'rgb(180,180,180)'
       
    }
});
Matter.Body.rotate(w17_3,-1.5)

 
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////45-45,55,55


 
// ///////////////////////////////////////////////// tele

tele1_3 =  Matter.Bodies.rectangle(1200,1735,1,1,{
    isStatic:true,
    chamfer:30,
    render: {
        sprite:{ 
            texture: 'pl.png',
            xScale: 0.45,
            yScale: 0.45
        }
    }   
})

tele2_3 =  Matter.Bodies.rectangle(50,2020,1,1,{
    isStatic:true,
    chamfer:30,
    render: {
        sprite:{ 
            texture: 'pl.png',
            xScale: 0.45,
            yScale: 0.45
        }
    }   
})

tele3_3 =  Matter.Bodies.rectangle(50,1500,1,1,{
    isStatic:true,
    chamfer:30,
    render: {
        sprite:{ 
            texture: 'pl2.png',
            xScale: 0.35,
            yScale: 0.35
        }
    }   
})

tele4_3 =  Matter.Bodies.rectangle(600,2015,1,1,{
    isStatic:true,
    chamfer:30,
    render: {
        sprite:{ 
            texture: 'pl2.png',
            xScale: 0.35,
            yScale: 0.35
        }
    }   
})

tele1_3.collisionFilter.mask=200
tele1_3.collisionFilter.category=0x0008
tele2_3.collisionFilter.mask=200
tele2_3.collisionFilter.category=0x0008
tele3_3.collisionFilter.mask=200
tele3_3.collisionFilter.category=0x0008
tele4_3.collisionFilter.mask=200
tele4_3.collisionFilter.category=0x0008




// // ///////////////////////////////////////////////// Cwalls


// // //10,250
Cw1_3=Matter.Bodies.rectangle(1355,1985,25,150,{
    chamfer:0,
    isStatic:true,
    render: {
        fillStyle: 'rgb(10,63,81)'
       
    }
})
// //1
Cw2_3=Matter.Bodies.rectangle(1350,1590,25,140,{
    chamfer:0,
    isStatic:true,
    render: {
        fillStyle: 'rgb(26,113,128)'
       
    },

})

Cw3_3=Matter.Bodies.rectangle(150,1470,25,140,{
    chamfer:0,
    isStatic:true,
    render: {
        fillStyle: 'rgb(26,144,168)'
       
    }
})


/////////////////////////////////////////// last bridge




b1_3=Matter.Bodies.rectangle(500,1400,150,20,{
    isStatic:false,
    chamfer:0,
    render: {
        fillStyle: 'rgb(243,205,166)'
       
    }

})

b1c1_3 = Matter.Constraint.create({
    pointA: {x:440,y:1400},
    bodyB: b1_3,
    pointB:{x:-60,y:0},
    stiffness: 0.004,
    length: 0,
    render:{
        visible:true
    }
 });

b1c2_3 = Matter.Constraint.create({
    pointA: {x:560,y:1400},
    bodyB: b1_3,
    pointB:{x:+60,y:0},
    stiffness: 0.004,
    length: 0,
    render:{
        visible:true
    }
 }); 
///////////////////////////////////////////
 b2_3=Matter.Bodies.rectangle(650,1400,150,20,{
    isStatic:false,
    chamfer:0,
    render: {
        fillStyle: 'rgb(243,205,166)'
       
    }

})

b2c1_3 = Matter.Constraint.create({
    pointA: {x:590,y:1400},
    bodyB: b2_3,
    pointB:{x:-60,y:0},
    stiffness: 0.004,
    length: 0,
    render:{
        visible:true
    }
 });

b2c2_3 = Matter.Constraint.create({
    pointA: {x:710,y:1400},
    bodyB: b2_3,
    pointB:{x:+60,y:0},
    stiffness: 0.004,
    length: 0,
    render:{
        visible:true
    }
 });  
///////////////////////////////////////////
 b3_3=Matter.Bodies.rectangle(800,1400,150,20,{
    isStatic:false,
    chamfer:0,
    render: {
        fillStyle: 'rgb(243,205,166)'
       
    }

})

b3c1_3 = Matter.Constraint.create({
    pointA: {x:740,y:1400},
    bodyB: b3_3,
    pointB:{x:-60,y:0},
    stiffness: 0.004,
    length: 0,
    render:{
        visible:true
    }
 });

b3c2_3 = Matter.Constraint.create({
    pointA: {x:860,y:1400},
    bodyB: b3_3,
    pointB:{x:+60,y:0},
    stiffness: 0.004,
    length: 0,
    render:{
        visible:true
    }
 }); 
///////////////////////////////////////////
b4_3=Matter.Bodies.rectangle(950,1400,150,20,{
    isStatic:false,
    chamfer:0,
    render: {
        fillStyle: 'rgb(243,205,166)'
       
    }

})

b4c1_3 = Matter.Constraint.create({
    pointA: {x:890,y:1400},
    bodyB: b4_3,
    pointB:{x:-60,y:0},
    stiffness: 0.004,
    length: 0,
    render:{
        visible:true
    }
 });

b4c2_3 = Matter.Constraint.create({
    pointA: {x:1010,y:1400},
    bodyB: b4_3,
    pointB:{x:+60,y:0},
    stiffness: 0.004,
    length: 0,
    render:{
        visible:true
    }
 });  
///////////////////////////////////////////
b5_3=Matter.Bodies.rectangle(1100,1400,150,20,{
    isStatic:false,
    chamfer:0,
    render: {
        fillStyle: 'rgb(243,205,166)'
       
    }

})

b5c1_3 = Matter.Constraint.create({
    pointA: {x:1040,y:1400},
    bodyB: b5_3,
    pointB:{x:-60,y:0},
    stiffness: 0.004,
    length: 0,
    render:{
        visible:true
    }
 });

b5c2_3 = Matter.Constraint.create({
    pointA: {x:1160,y:1400},
    bodyB: b5_3,
    pointB:{x:+60,y:0},
    stiffness: 0.004,
    length: 0,
    render:{
        visible:true
    }
 }); 
///////////////////////////////////////////
b6_3=Matter.Bodies.rectangle(1250,1400,150,20,{
    isStatic:false,
    chamfer:0,
    render: {
        fillStyle: 'rgb(243,205,166)'
       
    }

})

b6c1_3 = Matter.Constraint.create({
    pointA: {x:1190,y:1400},
    bodyB: b6_3,
    pointB:{x:-60,y:0},
    stiffness: 0.004,
    length: 0,
    render:{
        visible:true
    }
 });

b6c2_3 = Matter.Constraint.create({
    pointA: {x:1310,y:1400},
    bodyB: b6_3,
    pointB:{x:+60,y:0},
    stiffness: 0.004,
    length: 0,
    render:{
        visible:true
    }
 });  



////////////////////////////////////////////rotor
//(247,62,59)(229,221,200)


r1_3=Matter.Bodies.rectangle(750,1900,175,20,{
    isStatic:false,
    chamfer:0,
    render: {
        fillStyle: 'rgb(247,62,59)'
       
    }

})



 con1_3 = Matter.Constraint.create({
    pointA: {x:750,y:1900},
    bodyB: r1_3,
    stiffness: 0.004,
    length: 10,
    render:{
        visible:true
    }
 });

 r2_3=Matter.Bodies.rectangle(750,1700,175,20,{
    isStatic:false,
    chamfer:0,
    render: {
        fillStyle: 'rgb(255,255,255)'
       
    }

})



 con2_3 = Matter.Constraint.create({
    pointA: {x:750,y:1700},
    bodyB: r2_3,
    stiffness: 0.004,
    length: 10,
    render:{
        visible:true
    }
 });





// // /////////////////////////////////////////// points

s1_3=Matter.Bodies.circle(400,2000,25,{
    isStatic:true,
   render: { 
       sprite:{ 
           texture: 'star.png',
           xScale: 0.08,
           yScale: 0.08
       }
   }
})

s2_3=Matter.Bodies.circle(200,1475,25,{
    isStatic:true,
   render: { 
       sprite:{ 
           texture: 'star.png',
           xScale: 0.08,
           yScale: 0.08
       }
   }
})

s3_3=Matter.Bodies.circle(1450,1700,25,{
    isStatic:true,
   render: { 
       sprite:{ 
           texture: 'star.png',
           xScale: 0.08,
           yScale: 0.08
       }
   }
})





// // // ///////////////////////////////////////////////// making square and triangle


let square_3=Matter.Bodies.rectangle(1400,2000,40,40,{
  mass:1,
  render: {
    fillStyle: 'rgb(4,150,255)'
   
}
})
let triangle_3=Matter.Bodies.polygon(350,1700,3,27.5,{
  mass:1,
  render: {
    fillStyle: 'rgb(216,17,89)'
   
}
})

// // ///////////////////////////////////////////////// exit


e_3=Matter.Bodies.rectangle(1450,1420,45,45,{
    isStatic:true,
   render: { 
       sprite:{ 
           texture: 'exit.png',
           xScale: 0.1,
           yScale: 0.1
       }
   }
})


// // ///////////////////////////////////////////////// adding edges

e1_3=Matter.Bodies.rectangle(-10,1750,20,700,{
    isStatic:true
})

e2_3=Matter.Bodies.rectangle(1510,1750,20,700,{
    isStatic:true
})
e3_3=Matter.Bodies.rectangle(750,1390,1500,20,{
    isStatic:true
})




// // // ///////////////////////////////////////////////// key function

var keys = [];
document.body.addEventListener("keydown", function(e) {
  keys[e.keyCode] = true;
 
});
document.body.addEventListener("keyup", function(e) {
  keys[e.keyCode] = false;
});



// // // ///////////////////////////////////////////////// win blocks
// // // //10,250
wb1_3=Bodies.rectangle(-75,1650,20,150,{
  isStatic:true,
  render: {
    fillStyle: 'rgb(4,150,255)',
  }
})
Matter.Body.rotate(wb1_3,-2)

wb2_3=Bodies.rectangle(1575,1650,20,150,{
  isStatic:true,
  render: {
    fillStyle: 'rgb(216,17,89)',
  }
})
Matter.Body.rotate(wb2_3,2)


// // // ////////////////////////////////////////////////// counters for doors and walls

 let win_3=false

 let counter_3=0





//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////level 
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////3
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
























// ///////////////////////////////////////////////// draw function (only updated)
Events.on(engine, "beforeTick", function(event) {



// /////////////////////////////////////////////////collision variables
// /////////////////////////////////////////////////C=collision, S=square, T=triangle, B=buttons, numbers indicate block

var CST = Matter.SAT.collides(square,triangle);
   

var CS1 = Matter.SAT.collides(square,w1);
var CS2 = Matter.SAT.collides(square,w2);
var CS3 = Matter.SAT.collides(square,w3);
var CS4 = Matter.SAT.collides(square,w4);
var CS5 = Matter.SAT.collides(square,w5);

var CS6 = Matter.SAT.collides(square,Cw1);
var CS7 = Matter.SAT.collides(square,Cw3);
var CS8 = Matter.SAT.collides(square,Cw5)
var CS9 = Matter.SAT.collides(square,Cw7);
var CS10 = Matter.SAT.collides(square,Cw2)
var CS11 = Matter.SAT.collides(square,Cw6);




var CS12 = Matter.SAT.collides(square,s1);
var CS13 = Matter.SAT.collides(square,s2);
var CS14 = Matter.SAT.collides(square,s3);


  
var CT1 = Matter.SAT.collides(triangle,w1);
var CT2 = Matter.SAT.collides(triangle,w2);
var CT3 = Matter.SAT.collides(triangle,w3);
var CT4 = Matter.SAT.collides(triangle,w4);
var CT5 = Matter.SAT.collides(triangle,w5);

var CT6 = Matter.SAT.collides(triangle,Cw1);
var CT7 = Matter.SAT.collides(triangle,Cw3);
var CT8 = Matter.SAT.collides(triangle,Cw5);
var CT9 = Matter.SAT.collides(triangle,Cw7);
var CT10 = Matter.SAT.collides(triangle,Cw2)
var CT11 = Matter.SAT.collides(triangle,Cw6);


var CT12 = Matter.SAT.collides(triangle,s1);
var CT13 = Matter.SAT.collides(triangle,s2);
var CT14 = Matter.SAT.collides(triangle,s3);


var CSB1=Matter.SAT.collides(square,bn1)
var CSB2=Matter.SAT.collides(square,bn2)
var CSB3=Matter.SAT.collides(square,bn3)

var CTB1=Matter.SAT.collides(triangle,bn1)
var CTB2=Matter.SAT.collides(triangle,bn2)
var CTB3=Matter.SAT.collides(triangle,bn3)


var WINS=Matter.SAT.collides(square,e)
var WINT=Matter.SAT.collides(triangle,e)


// // square colliders check
if (CS1.collided ||CS2.collided ||CS3.collided ||CS4.collided ||CS5.collided ||CS6.collided ||CS7.collided ||CS8.collided ||
CS9.collided ||CS10.collided ||CS11.collided ){
 
  squareContact=true

 }

// // triangle colliders check
if (CT1.collided ||CT2.collided ||CT3.collided ||CT4.collided ||CT5.collided ||CT6.collided ||CT7.collided ||CT8.collided ||
CT9.collided ||CT10.collided ||CT11.collided  ){
  
  triangleContact=true

 }
////////////////////// points
  if(CS12.collided || CT12.collided){
      s1.render.visible=false
      Matter.Body.setPosition(s1,{x:2000,y:20})
      point=point+1
  }
  if(CS13.collided || CT13.collided){
    s2.render.visible=false
    Matter.Body.setPosition(s2,{x:2000,y:20})
    point=point+1
  }
  if(CS14.collided || CT14.collided){
    s3.render.visible=false
    Matter.Body.setPosition(s3,{x:2000,y:20})
    point=point+1
  }



// // square key controls  

if(win===false){

if (keys[87] && squareContact) {
square.force={x:0,y:-0.004}
const func = () => {
squareContact=false
}
setTimeout(func, 0.125 * 1000);
if(keys[87]&&keys[65]){
square.force = {      x: -0.0025,      y:-0.0025 }
}
if(keys[87]&&keys[68]){
square.force = {      x: 0.0025,      y:-0.0025 }
}
}
if (keys[65] ) {
square.force = {      x: -0.004,      y:0 }
} 
if (keys[68] ) {
square.force = {      x: 0.004,      y: 0 }
}
   

// // triangle key controls
if (keys[38] && triangleContact) {
triangle.force = {      x: 0,      y: -0.004 };
const func = () => {
triangleContact=false
}
setTimeout(func, 0.125 * 1000);
if(keys[38]&&keys[37]){
triangle.force = {      x: -0.0025,      y:-0.0025 }
}
if(keys[38]&&keys[39]){
triangle.force = {      x: 0.0025,      y:-0.0025 }
}
}
if (keys[37] ) {
triangle.force = {      x: -0.0025,      y:0 }
} 
if (keys[39] ) {
triangle.force = {      x: 0.0025,      y: 0 }
}


}
      
// // button clicked
// //1st
if(CSB1.collided || CTB1.collided){
 // 575
    if(bn1.position.y!==600){
        Matter.Body.setPosition(bn1, { x:  bn1.position.x, y:bn1.position.y+0.5 });
    }
    if(bn1.position.y>=590){
     //220+ 525-
   
     if(Cw2.position.x!==350){
        Matter.Body.setPosition(Cw2, { x:  Cw2.position.x+2, y:Cw2.position.y });
     }

     if(Cw6.position.x>450){
        Matter.Body.setPosition(Cw6, { x:  Cw6.position.x-2, y:Cw6.position.y });
     }
    }

}else{

    if(bn1.position.y!==575){
        Matter.Body.setPosition(bn1, { x:  bn1.position.x, y:bn1.position.y-0.25 });
    }
    if(bn1.position.y<=588){
    if(Cw2.position.x!==220){
        Matter.Body.setPosition(Cw2, { x:  Cw2.position.x-2, y:Cw2.position.y });
     }
     if(Cw6.position.x<525){
        Matter.Body.setPosition(Cw6, { x:  Cw6.position.x+2, y:Cw6.position.y });
     }
    }


    
}

// // 2nd

if(CSB2.collided || CTB2.collided){
  if(bn2.position.y!==240){
    Matter.Body.setPosition(bn2, { x:  bn2.position.x, y:bn2.position.y+0.5 });
}
if(bn2.position.y>=235){   
    if(Cw5.position.y>=250){
        Matter.Body.setPosition(Cw5, { x:  Cw5.position.x, y:Cw5.position.y-2 });
     }
}
}else{
    if(bn2.position.y!==220){
        Matter.Body.setPosition(bn2, { x:  bn2.position.x, y:bn2.position.y-0.25 });
    }
    if(bn2.position.y<=235){
        if(Cw5.position.y!==565){
            Matter.Body.setPosition(Cw5, { x:  Cw5.position.x, y:Cw5.position.y+2 });
         }  
        }
 }

// // 3rd 

if(CSB3.collided || CTB3.collided){
 //220,175

 
 if(bn3.position.y!==240){
    Matter.Body.setPosition(bn3, { x:  bn3.position.x, y:bn3.position.y+0.5 });
}



if(bn3.position.y>=234){
    
    if(Cw4.position.y>=80){
        Matter.Body.setPosition(Cw4, { x:  Cw4.position.x, y:Cw4.position.y-2 });
     }


}





}
else{
 

    if(bn3.position.y!==220){
        Matter.Body.setPosition(bn3, { x:  bn3.position.x, y:bn3.position.y-0.25 });
    }


    if(bn3.position.y<=235){
        if(Cw4.position.y!==175){
            Matter.Body.setPosition(Cw4, { x:  Cw4.position.x, y:Cw4.position.y+2 });
         }
       
        }

}

///////////// winning condition
if(WINS.collided&&WINT.collided && point===3){
  win=true
}
if(win==true){
  counter+=1
  if(wb1.position.x!==10){
    Matter.Body.setPosition(wb1,{x:wb1.position.x+1,y:wb1.position.y})
    Matter.Body.setPosition(wb2,{x:wb2.position.x-1,y:wb1.position.y})
   
  }
  if(wb1.position.x===10){
  Matter.World.add(engine.world, [
    qled_2= Matter.Bodies.rectangle(75,220,20,10),
    oled= Matter.Bodies.rectangle(1425,220,20,10)
    
    ])
    qled_2.force={x:0.006,y:-0.003}
    oled.force={x:-0.0061,y:-0.003}
    qled_2.collisionFilter.mask=200
    qled_2.collisionFilter.category=0x0008
    wb1.collisionFilter.category=0x0008
    wb1.collisionFilter.mask=200
     oled.collisionFilter.mask=200
    oled.collisionFilter.category=0x0008
    wb2.collisionFilter.category=0x0008
    wb2.collisionFilter.mask=200
  
   
  }
 

 
}



if(keys[32]){
  console.log(win,win_2,win_3)
}






































// /////////////////////////////////////////////////collision variables
// /////////////////////////////////////////////////C=collision, S=square2, T=triangle2, B=buttons, numbers indicate block

var CST = Matter.SAT.collides(square2,triangle2);
 
var CS1_2 = Matter.SAT.collides(square2,w1_2);
var CS2_2 = Matter.SAT.collides(square2,w2_2);
var CS3_2 = Matter.SAT.collides(square2,w3_2);
var CS4_2 = Matter.SAT.collides(square2,w4_2);
var CS5_2 = Matter.SAT.collides(square2,w5_2);
var CS6_2 = Matter.SAT.collides(square2,w6_2);
var CS7_2 = Matter.SAT.collides(square2,w7_2);
var CS8_2 = Matter.SAT.collides(square2,w8_2);
var CS9_2 = Matter.SAT.collides(square2,w9_2);
var CS10_2 = Matter.SAT.collides(square2,w10_2);
var CS11_2 = Matter.SAT.collides(square2,w11_2);
var CS12_2 = Matter.SAT.collides(square2,w12_2);
var CS13_2 = Matter.SAT.collides(square2,w13_2);
var CS14_2 = Matter.SAT.collides(square2,w14_2);
var CS15_2 = Matter.SAT.collides(square2,w15_2);

var C1_2 = Matter.SAT.collides(square2,Cw1_2);
var C2_2 = Matter.SAT.collides(square2,Cw2_2);
var C3_2 = Matter.SAT.collides(square2,Cw3_2)
var C4_2 = Matter.SAT.collides(square2,Cw4_2);
var C5_2 = Matter.SAT.collides(square2,Cw5_2)





var Spoint1_2 = Matter.SAT.collides(square2,s1_2);
var Spoint2_2 = Matter.SAT.collides(square2,s2_2);
var Spoint3_2 = Matter.SAT.collides(square2,s3_2);


  
var CT1_2 = Matter.SAT.collides(triangle2,w1_2);
var CT2_2 = Matter.SAT.collides(triangle2,w2_2);
var CT3_2 = Matter.SAT.collides(triangle2,w3_2);
var CT4_2 = Matter.SAT.collides(triangle2,w4_2);
var CT5_2 = Matter.SAT.collides(triangle2,w5_2);
var CT6_2 = Matter.SAT.collides(triangle2,w6_2);
var CT7_2 = Matter.SAT.collides(triangle2,w7_2);
var CT8_2 = Matter.SAT.collides(triangle2,w8_2);
var CT9_2 = Matter.SAT.collides(triangle2,w9_2);
var CT10_2 = Matter.SAT.collides(triangle2,w10_2);
var CT11_2 = Matter.SAT.collides(triangle2,w11_2);
var CT12_2 = Matter.SAT.collides(triangle2,w12_2);
var CT13_2 = Matter.SAT.collides(triangle2,w13_2);
var CT14_2 = Matter.SAT.collides(triangle2,w14_2);
var CT15_2 = Matter.SAT.collides(triangle2,w15_2);

var CTI1_2 = Matter.SAT.collides(triangle2,Cw1_2);
var CTI2_2 = Matter.SAT.collides(triangle2,Cw2_2);
var CTI3_2 = Matter.SAT.collides(triangle2,Cw3_2)
var CTI4_2 = Matter.SAT.collides(triangle2,Cw4_2);
var CTI5_2 = Matter.SAT.collides(triangle2,Cw5_2)


var Tpoint1_2 = Matter.SAT.collides(triangle2,s1_2);
var Tpoint2_2 = Matter.SAT.collides(triangle2,s2_2);
var Tpoint3_2 = Matter.SAT.collides(triangle2,s3_2);


var CSB1_2=Matter.SAT.collides(square2,bn1_2)
var CSB2_2=Matter.SAT.collides(square2,bn2_2)
var CSB3_2=Matter.SAT.collides(square2,bn3_2)
var CSB4_2=Matter.SAT.collides(square2,bn4_2)
var CSB5_2=Matter.SAT.collides(square2,bn5_2)



var CTB1_2=Matter.SAT.collides(triangle2,bn1_2)
var CTB2_2=Matter.SAT.collides(triangle2,bn2_2)
var CTB3_2=Matter.SAT.collides(triangle2,bn3_2)
var CTB4_2=Matter.SAT.collides(triangle2,bn4_2)
var CTB5_2=Matter.SAT.collides(triangle2,bn5_2)



// // square2 colliders check
if (CS1_2.collided ||CS2_2.collided ||CS3_2.collided ||CS4_2.collided ||CS5_2.collided ||CS6_2.collided ||CS7_2.collided ||CS8_2.collided ||
    CS9_2.collided ||CS10_2.collided ||CS11_2.collided  ||CS13_2.collided ||CS14_2.collided ||CS15_2.collided ||C1_2.collided||
    C4_2.collided ||C5_2.collided ){
     
      square2Contact=true
    
     }
    
    if(CS12_2.collided){
        square2Contact=false
    } 
    
    // // triangle2 colliders check
    if (CT1_2.collided ||CT2_2.collided ||CT3_2.collided ||CT4_2.collided ||CT5_2.collided ||CT6_2.collided ||CT7_2.collided ||CT8_2.collided ||
    CT9_2.collided ||CT10_2.collided ||CT11_2.collided||CT12_2.collided ||CT13_2.collided ||CT14_2.collided ||CT15_2.collided ||CTI1_2.collided||
    CTI4_2.collided ||CTI5_2.collided  ){
      
      triangle2Contact=true
    
     }
    
    if(CTI2_2.collided){
        triangle2.frictionAir=0.5
    } else{
        triangle2.frictionAir=0.01
    }
////////////////////// point2s
  if(Spoint1_2.collided || Tpoint1_2.collided){
      s1_2.render.visible=false
      Matter.Body.setPosition(s1_2,{x:2000,y:720})
      point2=point2+1
  }
  if(Spoint2_2.collided || Tpoint2_2.collided){
    s2_2.render.visible=false
    Matter.Body.setPosition(s2_2,{x:2000,y:720})
    point2=point2+1
  }
  if(Spoint3_2.collided || Tpoint3_2.collided){
    s3_2.render.visible=false
    Matter.Body.setPosition(s3_2,{x:2000,y:720})
    point2=point2+1
  }



// // square2 key controls  

if(win_2===false){

if (keys[87] && square2Contact) {
square2.force={x:0,y:-0.004}
const func = () => {
square2Contact=false
}
setTimeout(func, 0.125 * 1000);
if(keys[87]&&keys[65]){
square2.force = {      x: -0.0025,      y:-0.0025 }
}
if(keys[87]&&keys[68]){
square2.force = {      x: 0.0025,      y:-0.0025 }
}
}
if (keys[65] ) {
square2.force = {      x: -0.004,      y:0 }
} 
if (keys[68] ) {
square2.force = {      x: 0.004,      y: 0 }
}
   

// // triangle2 key controls
if (keys[38] && triangle2Contact) {
triangle2.force = {      x: 0,      y: -0.004 };
const func = () => {
triangle2Contact=false
}
setTimeout(func, 0.125 * 1000);
if(keys[38]&&keys[37]){
triangle2.force = {      x: -0.0025,      y:-0.0025 }
}
if(keys[38]&&keys[39]){
triangle2.force = {      x: 0.0025,      y:-0.0025 }
}
}
if (keys[37] ) {
triangle2.force = {      x: -0.0025,      y:0 }
} 
if (keys[39] ) {
triangle2.force = {      x: 0.0025,      y: 0 }

}
}
if(keys[32]){
    
// // console.log(mouse.position)
// //Matter.World.remove(engine.world,[square2,triangle2,Cw1_2,Cw2_2,Cw3_2,Cw4_2,Cw5_2])
// Matter.World.clear(engine.world,false)
//  Matter.Engine.clear(engine)
// Matter.Render.stop(render)
// //Matter.render.options.width=100
// Bounds.translate(render.bounds, {x:0,y:1});
// console.log(render.bounds.max.y)
// // //render.options.width=200

 }

// if(keys[13]){
//     Matter.Engine.run(engine)
//     Matter.Render.run(render)
//     ball=Matter.Bodies.circle(200,200 ,40) 
//     Matter.World.add(engine.world,ball)
// }
      
// // button clicked
// //1st
if(CSB1_2.collided || CTB1_2.collided){
    // 575
       if(bn1_2.position.y!==1370){
           Matter.Body.setPosition(bn1_2, { x:  bn1_2.position.x, y:bn1_2.position.y+0.5 });
       }
       if(bn1_2.position.y>=1360){
        //220+ 525-
      
        if(Cw1_2.position.y!==1040){
           Matter.Body.setPosition(Cw1_2, { x:  Cw1_2.position.x, y:Cw1_2.position.y+1 });
        }
   
       
       }
   
   }
   else{
   
       if(bn1_2.position.y!==1345){
           Matter.Body.setPosition(bn1_2, { x:  bn1_2.position.x, y:bn1_2.position.y-0.25 });
       }
       if(bn1_2.position.y<=1358){
       if(Cw1_2.position.y!==935){
           Matter.Body.setPosition(Cw1_2, { x:  Cw1_2.position.x, y:Cw1_2.position.y-1 });
        }
      
        }
   
   
       
    }
   
   // // // 2nd
   
   if(CSB2_2.collided || CTB2_2.collided){
     if(bn2_2.position.y!==843){
       Matter.Body.setPosition(bn2_2, { x:  bn2_2.position.x, y:bn2_2.position.y+0.5 });
   }
   if(bn2_2.position.y>=833){  
       if(Cw2_2.position.y<=1030){
           Matter.Body.setPosition(Cw2_2, { x:  Cw2_2.position.x+0.5, y:Cw2_2.position.y+1 });
        }
   }
   }
   else{
       if(bn2_2.position.y!==820){
           Matter.Body.setPosition(bn2_2, { x:  bn2_2.position.x, y:bn2_2.position.y-0.25 });
       }
       if(bn2_2.position.y<=831){
           if(Cw2_2.position.y!==910){
               Matter.Body.setPosition(Cw2_2, { x:  Cw2_2.position.x-0.5, y:Cw2_2.position.y-1 });
            }  
           }
    }
   
   // // // 3rd 
   
   if(CSB3_2.collided || CTB3_2.collided){
    //220,175
   
    
    if(bn3_2.position.y!==950){
       Matter.Body.setPosition(bn3_2, { x:  bn3_2.position.x, y:bn3_2.position.y+1 });
   }
   
   
   
   if(bn3_2.position.y>=945){
       
       if(Cw3_2.position.y<=1000){
           Matter.Body.setPosition(Cw3_2, { x:  Cw3_2.position.x, y:Cw3_2.position.y+1 });
        }
   
   
   }
   
   }
   else{
    
   
       if(bn3_2.position.y!==940){
           Matter.Body.setPosition(bn3_2, { x:  bn3_2.position.x, y:bn3_2.position.y-0.5 });
       }
   
   
       if(bn3_2.position.y<=943){
           if(Cw3_2.position.y!==870){
               Matter.Body.setPosition(Cw3_2, { x:  Cw3_2.position.x, y:Cw3_2.position.y-1 });
            }
          
           }
   
    }
   
    ////// 4th
   
    if(CSB4_2.collided || CTB4_2.collided){
       // 575
          if(bn4_2.position.y<=843){
              Matter.Body.setPosition(bn4_2, { x:  bn4_2.position.x, y:bn4_2.position.y+0.5 });
          }
          if(bn4_2.position.y>=833){
           //220+ 525-
         
           if(Cw4_2.position.x!==920){
              Matter.Body.setPosition(Cw4_2, { x:  Cw4_2.position.x+2, y:Cw4_2.position.y });
              if(Cw4_2.position.x==920){
               Matter.Body.setVelocity(Cw4_2, { x: 0, y: 0 });
               }else{
                Matter.Body.setVelocity(Cw4_2, { x: 0.65, y: 0 });    
               }
           }
      
          
          }
      
      }
      else{
      
          if(bn4_2.position.y!==820){
              Matter.Body.setPosition(bn4_2, { x:  bn4_2.position.x, y:bn4_2.position.y-0.25 });
          }
          if(bn4_2.position.y<=831){
          if(Cw4_2.position.x!==80){
              Matter.Body.setPosition(Cw4_2, { x:  Cw4_2.position.x-1, y:Cw4_2.position.y });
              if(Cw4_2.position.x==80){
              Matter.Body.setVelocity(Cw4_2, { x: 0, y: 0 });
              }else{
               Matter.Body.setVelocity(Cw4_2, { x: -1, y: 0 });    
              }
           }
         
           }
      
      
          
       }
    
   // 5th
   
   if(CSB5_2.collided || CTB5_2.collided){
       // 575
          if(bn5_2.position.y!==943){
              Matter.Body.setPosition(bn5_2, { x:  bn5_2.position.x, y:bn5_2.position.y+0.5 });
          }
          if(bn5_2.position.y>=933){
           //220+ 525-
         
           if(Cw5_2.position.y!==840){
              Matter.Body.setPosition(Cw5_2, { x:  Cw5_2.position.x, y:Cw5_2.position.y-2 });
           }
      
          
          }
      
      }
      else{
      
          if(bn5_2.position.y!==920){
              Matter.Body.setPosition(bn5_2, { x:  bn5_2.position.x, y:bn5_2.position.y-0.25 });
          }
          if(bn5_2.position.y<=931){
          if(Cw5_2.position.y!==1220){
              Matter.Body.setPosition(Cw5_2, { x:  Cw5_2.position.x, y:Cw5_2.position.y+1 });
           }
         
           }
      
      
          
       }
//////////////////////////////////////////////////// teleportation




if(keys[13]){


if(square2.position.x>=25 && square2.position.x<=70 && square2.position.y<=1050 && square2.position.y>=990){
    Matter.Body.setPosition(square2,{x:tele1_2.position.x,y:tele1_2.position.y})
}else if(square2.position.x>=920 && square2.position.x<=970 && square2.position.y<1200){
    Matter.Body.setPosition(square2,{x:tele2_2.position.x,y:tele2_2.position.y})
}else if(square2.position.x>=430 && square2.position.x<=470 && square2.position.y<=925 && square2.position.y>=850){
    Matter.Body.setPosition(square2,{x:tele4_2.position.x,y:tele4_2.position.y})
}else if(square2.position.x>=1200 && square2.position.x<=1250 && square2.position.y<=820 && square2.position.y>=750){
    Matter.Body.setPosition(square2,{x:tele3_2.position.x,y:tele3_2.position.y})
} 


if(triangle2.position.x>=25 && triangle2.position.x<=70 && triangle2.position.y<=1050 && triangle2.position.y>=990){
    Matter.Body.setPosition(triangle2,{x:tele1_2.position.x,y:tele1_2.position.y})
}else if(triangle2.position.x>=920 && triangle2.position.x<=970 && triangle2.position.y<1200){
    Matter.Body.setPosition(triangle2,{x:tele2_2.position.x,y:tele2_2.position.y})
}else if(triangle2.position.x>=430 && triangle2.position.x<=470 && triangle2.position.y<=925 && triangle2.position.y>=850){
    Matter.Body.setPosition(triangle2,{x:tele4_2.position.x,y:tele4_2.position.y})
}else if(triangle2.position.x>=1200 && triangle2.position.x<=1250 && triangle2.position.y<=820 && triangle2.position.y>=750){
    Matter.Body.setPosition(triangle2,{x:tele3_2.position.x,y:tele3_2.position.y})
} 


}





// ///////////// win_2ning condition
if(square2.position.x>=0 && square2.position.x<=140 && square2.position.y>=730 && square2.position.y<=790 &&
    triangle2.position.x>=0 && triangle2.position.x<=140 && triangle2.position.y>=730 && triangle2.position.y<=790 && 
    point2===3){
   win_2=true
   
 }
 if(win_2==true){
    counter_2+=1
  if(wb1_2.position.x!==5){
    Matter.Body.setPosition(wb1_2,{x:wb1_2.position.x+1,y:wb1_2.position.y})
    Matter.Body.setPosition(wb2_2,{x:wb2_2.position.x-1,y:wb1_2.position.y})
   
  }
  if(wb1_2.position.x===5 && counter_2<=450){
     
  Matter.World.add(engine.world, [
    qled_2= Matter.Bodies.rectangle(75,920,20,10),
    oled_2= Matter.Bodies.rectangle(1425,920,20,10)
    
    ])
    qled_2.force={x:0.0063,y:-0.003}
    oled_2.force={x:-0.0063,y:-0.003}
    qled_2.collisionFilter.mask=200
    qled_2.collisionFilter.category=0x0008
    wb1_2.collisionFilter.category=0x0008
    wb1_2.collisionFilter.mask=200
     oled_2.collisionFilter.mask=200
    oled_2.collisionFilter.category=0x0008
    wb2_2.collisionFilter.category=0x0008
    wb2_2.collisionFilter.mask=200
  
   
  }
 

 
}

Matter.Body.rotate(rotor_2,0.15)











































  
// // /////////////////////////////////////////////////collision variables
// // /////////////////////////////////////////////////C=collision, S=square, T=triangle, B=buttons, numbers indicate block

// var CST = Matter.SAT.collides(square,triangle);
   
 


var CS1_3 = Matter.SAT.collides(square_3,w1_3);
var CS2_3 = Matter.SAT.collides(square_3,w2_3);
var CS3_3 = Matter.SAT.collides(square_3,w3_3);
var CS4_3 = Matter.SAT.collides(square_3,w4_3);
var CS5_3 = Matter.SAT.collides(square_3,w5_3);
var CS6_3 = Matter.SAT.collides(square_3,w6_3);
var CS7_3 = Matter.SAT.collides(square_3,w7_3);
var CS8_3 = Matter.SAT.collides(square_3,w8_3);
var CS9_3 = Matter.SAT.collides(square_3,w9_3);
var CS10_3 = Matter.SAT.collides(square_3,w10_3);
var CS11_3 = Matter.SAT.collides(square_3,w11_3);
var CS12_3 = Matter.SAT.collides(square_3,w12_3);
var CS13_3 = Matter.SAT.collides(square_3,w13_3);
var CS14_3 = Matter.SAT.collides(square_3,w14_3);
var CS15_3 = Matter.SAT.collides(square_3,w15_3);
var CS16_3 = Matter.SAT.collides(square_3,w16_3);
var CS17_3 = Matter.SAT.collides(square_3,w17_3);

var CSBR1_3 = Matter.SAT.collides(square_3,b1_3);
var CSBR2_3 = Matter.SAT.collides(square_3,b2_3);
var CSBR3_3 = Matter.SAT.collides(square_3,b3_3);
var CSBR4_3 = Matter.SAT.collides(square_3,b4_3);
var CSBR5_3 = Matter.SAT.collides(square_3,b5_3);
var CSBR6_3 = Matter.SAT.collides(square_3,b6_3);




var C1_3 = Matter.SAT.collides(square_3,Cw1_3);
var C2_3 = Matter.SAT.collides(square_3,Cw2_3);
var C3_3 = Matter.SAT.collides(square_3,Cw3_3)






var Spoint1_3 = Matter.SAT.collides(square_3,s1_3);
var Spoint2_3 = Matter.SAT.collides(square_3,s2_3);
var Spoint3_3 = Matter.SAT.collides(square_3,s3_3);



var CT1_3 = Matter.SAT.collides(triangle_3,w1_3);
var CT2_3 = Matter.SAT.collides(triangle_3,w2_3);
var CT3_3 = Matter.SAT.collides(triangle_3,w3_3);
var CT4_3 = Matter.SAT.collides(triangle_3,w4_3);
var CT5_3 = Matter.SAT.collides(triangle_3,w5_3);
var CT6_3 = Matter.SAT.collides(triangle_3,w6_3);
var CT7_3 = Matter.SAT.collides(triangle_3,w7_3);
var CT8_3 = Matter.SAT.collides(triangle_3,w8_3);
var CT9_3 = Matter.SAT.collides(triangle_3,w9_3);
var CT10_3 = Matter.SAT.collides(triangle_3,w10_3);
var CT11_3 = Matter.SAT.collides(triangle_3,w11_3);
var CT12_3 = Matter.SAT.collides(triangle_3,w12_3);
var CT13_3 = Matter.SAT.collides(triangle_3,w13_3);
var CT14_3 = Matter.SAT.collides(triangle_3,w14_3);
var CT15_3 = Matter.SAT.collides(triangle_3,w15_3);
var CT16_3 = Matter.SAT.collides(triangle_3,w16_3);
var CT17_3 = Matter.SAT.collides(triangle_3,w17_3);


var CTBR1_3 = Matter.SAT.collides(triangle_3,b1_3);
var CTBR2_3 = Matter.SAT.collides(triangle_3,b2_3);
var CTBR3_3 = Matter.SAT.collides(triangle_3,b3_3);
var CTBR4_3 = Matter.SAT.collides(triangle_3,b4_3);
var CTBR5_3 = Matter.SAT.collides(triangle_3,b5_3);
var CTBR6_3 = Matter.SAT.collides(triangle_3,b6_3);


var CTI1_3 = Matter.SAT.collides(triangle_3,Cw1_3);
var CTI2_3 = Matter.SAT.collides(triangle_3,Cw2_3);
var CTI3_3 = Matter.SAT.collides(triangle_3,Cw3_3)


var Tpoint1_3 = Matter.SAT.collides(triangle_3,s1_3);
var Tpoint2_3 = Matter.SAT.collides(triangle_3,s2_3);
var Tpoint3_3 = Matter.SAT.collides(triangle_3,s3_3);


var CSB1_3=Matter.SAT.collides(square_3,bn1_3)
var CSB2_3=Matter.SAT.collides(square_3,bn2_3)
var CSB3_3=Matter.SAT.collides(square_3,bn3_3)
var CSB4_3=Matter.SAT.collides(square_3,bn4_3)



var CTB1_3=Matter.SAT.collides(triangle_3,bn1_3)
var CTB2_3=Matter.SAT.collides(triangle_3,bn2_3)
var CTB3_3=Matter.SAT.collides(triangle_3,bn3_3)
var CTB4_3=Matter.SAT.collides(triangle_3,bn4_3)


var CSR1_3=Matter.SAT.collides(square_3,r1_3)
var CSR2_3=Matter.SAT.collides(square_3,r2_3)
var CTR1_3=Matter.SAT.collides(triangle_3,r1_3)
var CTR2_3=Matter.SAT.collides(triangle_3,r2_3)





// // // square colliders check
if (CS1_3.collided ||CS2_3.collided ||CS3_3.collided ||CS4_3.collided ||CS5_3.collided ||CS6_3.collided ||CS7_3.collided ||CS8_3.collided ||
    CS9_3.collided ||CS10_3.collided ||CS11_3.collided  ||CS13_3.collided ||CS14_3.collided ||CS15_3.collided ||C1_3.collided || CSR1_3.collided ||CSR2_3.collided
    ||CSBR1_3.collided||CSBR2_3.collided||CSBR3_3.collided||CSBR4_3.collided||CSBR5_3.collided||CSBR6_3.collided){
     
      squareContact_3=true
    
     }
    
    // // triangle colliders check
    if (CT1_3.collided ||CT2_3.collided ||CT3_3.collided ||CT4_3.collided ||CT5_3.collided ||CT6_3.collided ||CT7_3.collided ||CT8_3.collided ||
    CT9_3.collided ||CT10_3.collided ||CT11_3.collided||CT12_3.collided ||CT13_3.collided ||CT14_3.collided ||CT15_3.collided ||CTI1_3.collided ||
    CTR1_3.collided ||CTR2_3.collided||CTBR1_3.collided||CTBR2_3.collided||CTBR3_3.collided||CTBR4_3.collided||CTBR5_3.collided||CTBR6_3.collided){
      
      triangleContact_3=true
    
     }
    
    if(b1c1_3.length<=30 && (CSBR1_3.collided||CSBR2_3.collided||CSBR3_3.collided||CSBR4_3.collided||CSBR5_3.collided||CSBR6_3.collided)){
        Matter.Body.setPosition(square_3,{x:square_3.position.x,y:1450})
    }
    
    if(b1c1_3.length<=30 &&(CTBR1_3.collided||CTBR2_3.collided||CTBR3_3.collided||CTBR4_3.collided||CTBR5_3.collided||CTBR6_3.collided)){
        Matter.Body.setPosition(triangle_3,{x:triangle_3.position.x,y:1450})
    }
    
     
    
    
    // ////////////////////// points
    if(Spoint1_3.collided || Tpoint1_3.collided){
        s1_3.render.visible=false
        Matter.Body.setPosition(s1_3,{x:2000,y:20})
        point_3=point_3+1
    }
    if(Spoint2_3.collided || Tpoint2_3.collided){
      s2_3.render.visible=false
      Matter.Body.setPosition(s2_3,{x:2000,y:20})
      point_3=point_3+1
    }
    if(Spoint3_3.collided || Tpoint3_3.collided){
      s3_3.render.visible=false
      Matter.Body.setPosition(s3_3,{x:2000,y:20})
      point_3=point_3+1
    }
    

// // // square key controls  

if(win_3===false){

    if (keys[87] && squareContact_3) {
    square_3.force={x:0,y:-0.004}
    const func = () => {
    squareContact_3=false
    }
    setTimeout(func, 0.125 * 1000);
    if(keys[87]&&keys[65]){
    square_3.force = {      x: -0.0025,      y:-0.0025 }
    }
    if(keys[87]&&keys[68]){
    square_3.force = {      x: 0.0025,      y:-0.0025 }
    }
    }
    if (keys[65] ) {
    square_3.force = {      x: -0.004,      y:0 }
    } 
    if (keys[68] ) {
    square_3.force = {      x: 0.004,      y: 0 }
    }
       
    
    // // triangle_3 key controls
    if (keys[38] && triangleContact_3 ) {
    triangle_3.force = {      x: 0,      y: -0.004 };
    const func = () => {
    triangleContact_3=false
    }
    setTimeout(func, 0.125 * 1000);
    if(keys[38]&&keys[37]){
    triangle_3.force = {      x: -0.0025,      y:-0.0025 }
    }
    if(keys[38]&&keys[39]){
    triangle_3.force = {      x: 0.0025,      y:-0.0025 }
    }
    }
    if (keys[37] ) {
    triangle_3.force = {      x: -0.0025,      y:0 }
    } 
    if (keys[39] ) {
    triangle_3.force = {      x: 0.0025,      y: 0 }
    
     }
     if(keys[32]){
        
     //console.log(mouse.position)
    //console.log(bn1.position.y)
    //console.log(win)
    
    // b1c1.length=b1c1.length-1
    
     }
    }
    
    





// // // button clicked
// // //1st

if(CSB1_3.collided || CTB1_3.collided){
    // 575
       if(bn1_3.position.y!==2060){
           Matter.Body.setPosition(bn1_3, { x:  bn1_3.position.x, y:bn1_3.position.y+0.5 });
       }
       if(bn1_3.position.y>=2055){
        //220+ 525-
      
        if(Cw1_3.position.y!==2135){
           Matter.Body.setPosition(Cw1_3, { x:  Cw1_3.position.x, y:Cw1_3.position.y+1 });
        }
   
       
       }
   
   }
   else{
   
       if(bn1_3.position.y!==2045){
           Matter.Body.setPosition(bn1_3, { x:  bn1_3.position.x, y:bn1_3.position.y-0.25 });
       }
       if(bn1_3.position.y<=2052){
       if(Cw1_3.position.y!==1985){
           Matter.Body.setPosition(Cw1_3, { x:  Cw1_3.position.x, y:Cw1_3.position.y-1 });
        }
      
        }
   
   
       
    }
   
   // // // // 2nd
   
   if(CSB2_3.collided || CTB2_3.collided){
     if(bn2_3.position.y!==1900){
       Matter.Body.setPosition(bn2_3, { x:  bn2_3.position.x, y:bn2_3.position.y+0.5 });
   }
   if(bn2_3.position.y>=1890){  
       if(Cw2_3.position.y<=1730){
           Matter.Body.setPosition(Cw2_3, { x:  Cw2_3.position.x, y:Cw2_3.position.y+1 });
        }
   }
   }
   else{
       if(bn2_3.position.y!==1885){
           Matter.Body.setPosition(bn2_3, { x:  bn2_3.position.x, y:bn2_3.position.y-0.25 });
       }
       if(bn2_3.position.y<=1887){
           if(Cw2_3.position.y!==1590){
               Matter.Body.setPosition(Cw2_3, { x:  Cw2_3.position.x, y:Cw2_3.position.y-1 });
            }  
           }
    }
   
   // // // // 3rd 
   
   if(CSB3_3.collided || CTB3_3.collided){
       // 575
          if(bn3_3.position.y!==2058){
              Matter.Body.setPosition(bn3_3, { x:  bn3_3.position.x, y:bn3_3.position.y+0.5 });
          }
          if(bn3_3.position.y>=2055){
           //220+ 525-
         
           if(Cw3_3.position.y!==1330){
              Matter.Body.setPosition(Cw3_3, { x:  Cw3_3.position.x, y:Cw3_3.position.y-1 });
           }
      
          
          }
      
      }
      else{
      
          if(bn3_3.position.y!==2045){
              Matter.Body.setPosition(bn3_3, { x:  bn3_3.position.x, y:bn3_3.position.y-0.25 });
          }
          if(bn3_3.position.y<=2052){
          if(Cw3_3.position.y!==1470){
              Matter.Body.setPosition(Cw3_3, { x:  Cw3_3.position.x, y:Cw3_3.position.y+1 });
           }
         
          }
      
      
          
       }

//  ////// 4th

if(CSB4_3.collided || CTB4_3.collided){
    // 575
       if(bn4_3.position.y!==1720){
           Matter.Body.setPosition(bn4_3, { x:  bn4_3.position.x, y:bn4_3.position.y+0.5 });
       }
       if(bn4_3.position.y>=1710){
        //220+ 525-
     


      if(b1c1_3.length!==300){
          b1c1_3.length=b1c1_3.length+2
      }
      if(b1c2_3.length!==260){
         b1c2_3.length=b1c2_3.length+2
      }
      //
      if(b2c1_3.length<=250){
        b2c1_3.length=b2c1_3.length+2
    }
    if(b2c2_3.length<=210){
       b2c2_3.length=b2c2_3.length+2
    }
    //
    if(b3c1_3.length!==200){
        b3c1_3.length=b3c1_3.length+2
    }
    if(b3c2_3.length!==190){
       b3c2_3.length=b3c2_3.length+2
    }
    //
    if(b4c1_3.length!==200){
        b4c1_3.length=b4c1_3.length+2
    }
    if(b4c2_3.length!==230){
       b4c2_3.length=b4c2_3.length+2
    }
    //
    if(b5c1_3.length!==220){
        b5c1_3.length=b5c1_3.length+2
    }
    if(b5c2_3.length!==180){
       b5c2_3.length=b5c2_3.length+2
    }
    //
    if(b6c1_3.length!==170){
        b6c1_3.length=b6c1_3.length+2
    }
    if(b6c2_3.length!==130){
       b6c2_3.length=b6c2_3.length+2
    }
    
        
   
       
       }
   
   }
    else{
   
       if(bn4_3.position.y!==1705){
           Matter.Body.setPosition(bn4_3, { x:  bn4_3.position.x, y:bn4_3.position.y-0.25 });
       }
        if(bn4_3.position.y<=1708){
            if(b1c1_3.length!==0){
                counter_3=counter_3+1
                if(counter_3>=400){
                    if(b1c1_3.length!==0){
                        b1c1_3.length=b1c1_3.length-2
                    }
                    if(b1c2_3.length!==0){
                       b1c2_3.length=b1c2_3.length-2
                    }
                    //
                    if(b2c1_3.length!==0){
                      b2c1_3.length=b2c1_3.length-2
                  }
                  if(b2c2_3.length!==0){
                     b2c2_3.length=b2c2_3.length-2
                  }
                  //
                  if(b3c1_3.length!==0){
                      b3c1_3.length=b3c1_3.length-2
                  }
                  if(b3c2_3.length!==0){
                     b3c2_3.length=b3c2_3.length-2
                  }
                  //
                  if(b4c1_3.length!==0){
                      b4c1_3.length=b4c1_3.length-2
                  }
                  if(b4c2_3.length!==0){
                     b4c2_3.length=b4c2_3.length-2
                  }
                  //
                  if(b5c1_3.length!==0){
                      b5c1_3.length=b5c1_3.length-2
                  }
                  if(b5c2_3.length!==0){
                     b5c2_3.length=b5c2_3.length-2
                  }
                  //
                  if(b6c1_3.length!==0){
                      b6c1_3.length=b6c1_3.length-2
                  }
                  if(b6c2_3.length!==0){
                     b6c2_3.length=b6c2_3.length-2
                  }
                  if(b1c1_3.length==0){
                 
                      counter_3=0
                  }
                }
            }
          
      
         }
   
   
       
    }
 


// //////////////////////////////////////////////////// teleportation




if(keys[13]){


    if(square_3.position.x>=22 && square_3.position.x<=76 && square_3.position.y>=1980 && square_3.position.y<=2050){
        Matter.Body.setPosition(square_3,{x:tele1_3.position.x,y:tele1_3.position.y})
    }else if(square_3.position.x>=1170 && square_3.position.x<=1225 && square_3.position.y>=1700 &&square_3.position.y<=1765){
        Matter.Body.setPosition(square_3,{x:tele2_3.position.x,y:tele2_3.position.y})
    }else if(square_3.position.x>=20 && square_3.position.x<=75 && square_3.position.y>=1460 && square_3.position.y<=1530){
        Matter.Body.setPosition(square_3,{x:tele4_3.position.x,y:tele4_3.position.y})
    }else if(square_3.position.x>=565 && square_3.position.x<=630 && square_3.position.y>=1980 && square_3.position.y<=2040){
        Matter.Body.setPosition(square_3,{x:tele3_3.position.x,y:tele3_3.position.y})
    } 
    
    if(triangle_3.position.x>=22 && triangle_3.position.x<=76 && triangle_3.position.y>=1980 && triangle_3.position.y<=2050){
        Matter.Body.setPosition(triangle_3,{x:tele1_3.position.x,y:tele1_3.position.y})
    }else if(triangle_3.position.x>=1170 && triangle_3.position.x<=1225 && triangle_3.position.y>=1700 &&triangle_3.position.y<=1765){
        Matter.Body.setPosition(triangle_3,{x:tele2_3.position.x,y:tele2_3.position.y})
    }else if(triangle_3.position.x>=20 && triangle_3.position.x<=75 && triangle_3.position.y>=1460 && triangle_3.position.y<=1530){
        Matter.Body.setPosition(triangle_3,{x:tele4_3.position.x,y:tele4_3.position.y})
    }else if(triangle_3.position.x>=565 && triangle_3.position.x<=630 && triangle_3.position.y>=1980 && triangle_3.position.y<=2040){
        Matter.Body.setPosition(triangle_3,{x:tele3_3.position.x,y:tele3_3.position.y})
    } 
    


}


//////////////////////////////////////////rotor rotation
Matter.Body.rotate(r1_3,0.125)
Matter.Body.rotate(r2_3,0.125)

// // ///////////// winning condition
if(square_3.position.x>=1375  && square_3.position.y>=1400 && square_3.position.y<=1500 &&
    triangle_3.position.x>=1375  && triangle_3.position.y>=1400 && triangle_3.position.y<=1500 && 
    point_3===3){
   win_3=true
 }
if(win_3==true){
  if(wb1_3.position.x!==5){
    Matter.Body.setPosition(wb1_3,{x:wb1_3.position.x+1,y:wb1_3.position.y})
    Matter.Body.setPosition(wb2_3,{x:wb2_3.position.x-1,y:wb1_3.position.y})
   
  }
  if(wb1_3.position.x===5){
  Matter.World.add(engine.world, [
    qled= Matter.Bodies.rectangle(75,1620,20,10),
    oled= Matter.Bodies.rectangle(1425,1620,20,10)
    
    ])
    qled.force={x:0.006,y:-0.003}
    oled.force={x:-0.0061,y:-0.003}
    qled.collisionFilter.mask=200
    qled.collisionFilter.category=0x0008
    wb1_3.collisionFilter.category=0x0008
    wb1_3.collisionFilter.mask=200
     oled.collisionFilter.mask=200
    oled.collisionFilter.category=0x0008
    wb2_3.collisionFilter.category=0x0008
    wb2_3.collisionFilter.mask=200
  
   
  }
 

 
}




























if(counter>=450){
  if(render.bounds.max.y!==1400){
  Bounds.translate(render.bounds, {x:0,y:2});
  }
  if(render.bounds.max.y==1398){
    Matter.World.clear(engine.world,false)
    win=false
    Matter.World.add(engine.world,[bn1_2,bn2_2,bn3_2,bn4_2,bn5_2])
    Matter.World.add(engine.world, [tele1_2,tele2_2,tele3_2,tele4_2]);
    Matter.World.add(engine.world,sling_2);
    Matter.World.add(engine.world,[s1_2,s2_2,s3_2])
    Matter.World.add(engine.world,[e_2])
    Matter.World.add(engine.world, [Cw1_2,Cw2_2,Cw3_2,Cw4_2,Cw5_2,co1_2]);
    Matter.World.add(engine.world, [square2,triangle2,mouseConstraint]);
    Matter.World.add(engine.world,[w1_2,w2_2,w3_2,w4_2,w5_2,w6_2,w7_2,w8_2,w9_2,w10_2,w11_2,w12_2,w13_2,w14_2,w15_2])
    Matter.World.add(engine.world, [e1_2,e2_2,e3_2]);
    Matter.World.add(engine.world, [rotor_2,wb1_2,wb2_2]);
   
  }


}



if(counter_2>=450){
    counter=0
    win_2=false
    win=false
    if(render.bounds.max.y!==2100){
    Bounds.translate(render.bounds, {x:0,y:2});
    }
    if(render.bounds.max.y==2098){
      Matter.World.clear(engine.world,false)
     win_2=false
     win=false
      Matter.World.add(engine.world,[bn1_3,bn2_3,bn3_3,bn4_3])
Matter.World.add(engine.world, [tele1_3,tele2_3,tele3_3,tele4_3]);
Matter.World.add(engine.world,[Cw1_3,Cw2_3,Cw3_3])
Matter.World.add(engine.world,[b1_3,b1c1_3,b1c2_3,b2_3,b2c1_3,b2c2_3,b3_3,b3c1_3,b3c2_3,b4_3,b4c1_3,b4c2_3,b5_3,b5c1_3,b5c2_3,b6_3,b6c1_3,b6c2_3])
Matter.World.add(engine.world,[s1_3,s2_3,s3_3])
Matter.World.add(engine.world,[e_3])
Matter.World.add(engine.world,[w1_3,w2_3,w3_3,w4_3,w5_3,w6_3,w7_3,w8_3,w9_3,w10_3,w11_3,w12_3,w13_3,w14_3,w15_3,w16_3,w17_3])
Matter.World.add(engine.world,[r1_3,con1_3,r2_3,con2_3])
Matter.World.add(engine.world, [square_3,triangle_3,mouseConstraint]);
Matter.World.add(engine.world, [e1_3,e2_3,e3_3]);
Matter.World.add(engine.world, [wb1_3,wb2_3]);
     
    }
    if(render.bounds.max.y==2100){
        win_2=false
        win=false
    }
  
  
  }














 })
// // end draw function
// //10,250




//running everything and adding bodies



Matter.World.add(engine.world, [square,triangle]);
Matter.World.add(engine.world, [e1,e2,e3]);
Matter.World.add(engine.world, [wb1,wb2]);

Matter.World.add(engine.world, [Cw1,Cw2,Cw3,Cw4,Cw5,Cw6,Cw7,mouseConstraint]);
Matter.World.add(engine.world, [co1,co2,co3,co4,co5]);

Matter.Engine.run(engine);
Matter.Render.run(render);






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







