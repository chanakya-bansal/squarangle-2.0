
    
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
      console.log(wb1_2.position.x)
    }
    
    //////////////////next level
    if(counter>=450){
        if(render.bounds.max.y!==1400){
        Bounds.translate(render.bounds, {x:0,y:2});
        }
        if(render.bounds.max.y==1398){
            Matter.World.clear(engine.world,false)
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
    