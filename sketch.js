var marImg;
var ship1, ship2, ship3, ship4;
var sea;
var ship;

function preload() {
  ship1 = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png");
  marImg = loadImage("sea.png");
}

function setup() {
  createCanvas(400, 400);

  sea = createSprite(200, 200, 400, 400);
  sea.addImage("mar", marImg);
  sea.scale = 1;

  ship = createSprite(200, 350, 100, 50);
  ship.addAnimation( "animacion de mar",ship1);
  ship.scale = 0.1;
}

function draw() {
  background(255);

  sea.velocityX = -1;

  if (sea.x < 0) {
    sea.x = sea.width / 2;
  }

  drawSprites();
}
