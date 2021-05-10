const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

//object variable declared here
var hammer;
var eraser, rock;
var iron;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    //created the plane here
    plane = new Plane(600,height,1200,20);

    //created the objects here
    hammer = new Hammer(10,100);
    eraser = new Rubber(200,580,55);
    rock = new Stone(300,580,60,60);
    iron = new Iron(400,580,60,60);
  


}

function draw(){
    background("lightBlue");
    Engine.update(engine);

    //displayed the plane here
    plane.display();

    //displayed the objects here 
    hammer.display();
    eraser.display();
    rock.display();
    iron.display();

    
 
}