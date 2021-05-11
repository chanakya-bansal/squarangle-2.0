 
//starting matter.js
let engine = Matter.Engine.create();
let Events = Matter.Events;
let Bodies = Matter.Bodies;
let Body=Matter.Body;
let Detecter=Matter.Detector;
let Bounds = Matter.Bounds;
let Composites=Matter.Composites;


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
























// // ///////////////////////////////////////////////// draw function (only updated)
Events.on(engine, "beforeTick", function(event) {


  
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
if(render.bounds.max.y!==2100){
    Bounds.translate(render.bounds, {x:0,y:2});
    }


 })
 // end draw function







//running everything and adding bodies
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

Matter.Engine.run(engine);
Matter.Render.run(render);
