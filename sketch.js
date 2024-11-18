let player;
let walls;
function setup() {
    createCanvas (700, 600);
    world.gravity.y = 10;
    player = new Sprite(100,100,20,20)
    player.color = "blue"
    player.rotationLock = true;


    walls = new Group();
    walls.w = 30;
    walls.h = 30; 
    walls.tile = "=";
    walls.collider = 'static';

    new Tiles(
        [
        '=====================',
        '=...................=',
        '=...................=',
        '=...................=',
        '=...................=',
        '=...................=',
        '=...................=',
        '=...................=',
        '=...................=',
        '=...==..............=',
        '=...................=',
        '=...................=',
        '=...................=',
        '=.............======',
        '=......==....==',
        '=............=',
        '=...........==',
        '=...=....====',
        '==========',
        ],
        25,
        25,
        walls.w,
        walls.h,

    )
}

function draw() {
    clear();
    background("gray");
    if(keyIsDown(LEFT_ARROW))
{
player.x -= 5;
}
else if(keyIsDown(RIGHT_ARROW))
{
player.x += 5;
}
else if(keyIsDown(UP_ARROW))
{
player.vel.y = -5;
}
}