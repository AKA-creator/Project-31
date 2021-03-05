const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, Groundbody, plink;
var particles = [];
var plinkos = [];

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
    world = engine.world;
  Groundbody = new Ground(240, 795, 500, 20);
  //ACTUALLY SPELLED DIVISION
  divison1 = new Ground(10, 680, 2, 200);
  divison2 = new Ground(90, 680, 2, 200);
  divison3 = new Ground(170, 680, 2, 200);
  divison4 = new Ground(250, 680, 2, 200);
  divison5 = new Ground(330, 680, 2, 200);
  divison6 = new Ground(410, 680, 2, 200);
  divison7 = new Ground(490, 680, 2, 200);
  //for first value in for loop, switch between 40 and 10
  for (var j = 40; j <=480; j = j+50)
{
  plinkos.push((new Plinko(j, 75)));
}
for (var a = 10; a <=480; a = a+50)
{
  plinkos.push((new Plinko(a, 175)));
}
for (var b = 49; b <=480; b = b+50)
{
  plinkos.push((new Plinko(b, 275)));
}
for (var c = 40; c <=480; c = c+50)
{
  plinkos.push((new Plinko(c, 375)));
}


}

function draw() {
  background("black");  
  Engine.update(engine);
  Groundbody.display();
  //ACTUALLY SPELLED DIVISION
  divison1.display();
  divison2.display();
  divison3.display();
  divison4.display();
  divison5.display();
  divison6.display();
  divison7.display();
  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-10, width/2+10), 10,10))
  
  }
  for(var i = 0; i<plinkos.length; i++)
  {
    plinkos[i].display();
  };

  for(var x = 0; x < particles.length; x++) {

    particles[x].display();
  }
}