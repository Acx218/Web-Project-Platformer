let player;
let walls;
function setup() {
    createCanvas (680, 590);
    world.gravity.y = 10;
    player = new Sprite();
	player.width = 15;
	player.height = 15;
    player.color = "blue"
    player.stroke ="white"
    player.rotationLock = true;


    walls = new Group();
    walls.w = 30;
    walls.h = 30; 
    walls.tile = "=";
    walls.collider = 'static';
    walls.color = '#313131';
    walls.stroke = '#313131';

    new Tiles(
        [
        '======================',
        '=....................=',
        '=....................=',
        '=....................=',
        '=....................=',
        '=....................=',
        '=....................=',
        '=....................=',
        '=....................=',
        '=....................=',
        '=....................=',
        '=....................=',
        '=....................=',
        '=....................=',
        '=....................=',
        '=....................=',
        '=....................=',
        '=....................=',
        '======================',
        ],
        25,
        25,
        walls.w,
        walls.h,

    )
}

function draw() {
    background("gray");
    if(keyIsDown(LEFT_ARROW))
{
player.x -= 5;
}
else if(keyIsDown(RIGHT_ARROW))
{
player.x += 5;
}

    if(keyIsDown(UP_ARROW))
{
player.vel.y = -5;
}

    frameRate(60);
  
  if (frameCount % 120 === 0){ 
    let x = random(610, 70);
    let y = random(100, 530);
    platform = new Sprite();
    platform.x = x;
    platform.y = y;
    platform.collider = 'static';
  }
  }