var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;

var particles;
var plinkos = [];
var divisions = [];
var divisionHeight = 300;
var score = 0;
var turns = 5;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width / 2, height, width, 20);


  for (var k = 0; k <= width; k = k + 80) {
    divisions.push(new Divisions(k, height - divisionHeight / 2, 10, divisionHeight));
  }


  for (var j = 75; j <= width; j = j + 50) {

    plinkos.push(new Plinko(j, 75));
  }

  for (var j = 50; j <= width - 10; j = j + 50) {

    plinkos.push(new Plinko(j, 175));
  }

  for (var j = 75; j <= width; j = j + 50) {

    plinkos.push(new Plinko(j, 275));
  }

  for (var j = 50; j <= width - 10; j = j + 50) {

    plinkos.push(new Plinko(j, 375));
  }
 particles=new Particle(200,20,10);
 if(particles.y>500){
if(particles.x>0&&particles.x<80){
score=score+500;
turns=turns-1;
}
if(particles.x>80&&particles.x<160){
  score=score+1000;
  turns=turns-1;
}
if(particles.x>160&&particles.x<240){
  score=score+100;
  turns=turns-1;
}
if(particles.x>240&&particles.x<320){
  score=score+500;
  turns=turns-1;
  }
  if(particles.x>320&&particles.x<400){
    score=score+1000;
    turns=turns-1;
  }
  if(particles.x>400&&particles.x<480){
    score=score+100;
    turns=turns-1;
  }
  if(particles.x>480&&particles.x<560){
    score=score+500;
    turns=turns-1;
    }
    if(particles.x>560&&particles.x<640){
      score=score+1000;
      turns=turns-1;
    }
    if(particles.x>640&&particles.x<720){
      score=score+100;
      turns=turns-1;
    }
    if(particles.x>720&&particles.x<800){
      score=score+200;
      turns=turns-1;
    }
}
}
function draw() {
  background("black");
  textSize(20)
  text("Score : " + score, 20, 30);
  Engine.update(engine);

particles.display();
  for (var i = 0; i < plinkos.length; i++) {

    plinkos[i].display();

  }
  for (var k = 0; k < divisions.length; k++) {

    divisions[k].display();
  }
}