const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var umB, background_img;
var drops = [];
var maxDrops = 100;

function preload() {
    background_img = loadImage("background.jpg");
}

function setup() {
    var canvas = createCanvas(500, 500);
    engine = Engine.create();
    world = engine.world;

    umB = new Umbrella(180, 270);

}

function draw() {
    background(background_img);
    Engine.update(engine);

    //umB.display();


    if (frameCount % 1 === 0) {
        drops.push(new Drop(random(0, 500), 0));
    }

    for (var p = 0; p < drops.length; p++) {
        drops[p].display();
    }


}

