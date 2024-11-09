let player;
let walls;
function setup() {
    createCanvas (500, 500);
    world.gravity.y = 10;
    player = new Sprite(100,100,25,25)
    player.color = "blue"

    walls = new Group();
    walls.w = 30;
    walls.h = 30; 
    walls.tile = "=";
    walls.collider = 'static';

    new Tiles(
        [
        '================',
        '=..............=',
        '=..............=',
        '=..............=',
        '=..............=',
        '=...==.........=',
        '=..............=',
        '=..............=',
        '=..............=',
        '=..........=====',
        '=......==..=',
        '=..........=',
        '=..........=',
        '=...=....===',
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
    if(kb.pressing('a'))
{
player.x -= 5;
}
else if(kb.pressing('d'))
{
player.x += 5;
}
else if(kb.pressing('space'))
{
player.vel.y = -5;
}
}