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












// ///////////////////////////////////////////////// draw function (only updated)
Events.on(engine, "beforeTick", function(event) {




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
  if(wb1_2.position.x!==5){
    Matter.Body.setPosition(wb1_2,{x:wb1_2.position.x+1,y:wb1_2.position.y})
    Matter.Body.setPosition(wb2_2,{x:wb2_2.position.x-1,y:wb1_2.position.y})
   
  }
  if(wb1_2.position.x===5){
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


//// taking camera down because its the second level which is made at 1400 y
if(render.bounds.max.y!==1400){
    Bounds.translate(render.bounds, {x:0,y:2});
    }






Matter.Body.rotate(rotor_2,0.15)


})





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



Matter.Engine.run(engine);
Matter.Render.run(render);



