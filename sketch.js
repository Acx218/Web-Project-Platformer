// The tool I used is P5 Play.
// What I learned about this tool is how to create sprite that a player can control as well as make one that can be collected when the player's sprite overlaps it as well as create a level using the built in Tiles function
// I applied the beginner topics like the if statements to create the player controls as well as the the collision logic and coin logic

// How I applied the intermediate topics was by using variables for collecting a coin and have that variable read so a score can be displayed I also used conditional logic for the player controls so the player cant jump forever.
// I used iteration in the form of a if loop to create the coins in a random location on the canvas. I also used an array for the coins so that the player can collect any coin even after a new one is created.

// Variables
let player;
let walls;
let title;
let canJump = true;
let Timer;
let elapsedTime = 0;
let coins = [];
let collectedCoins = 0;
let timeRemaining = 60;
let timerStarted = false;
let lastTime = 0;
let gameOver = false;

function setup() {
    // Create canvas and setup gravity
    createCanvas(680, 590);
    world.gravity.y = 10;
    textAlign(CENTER, CENTER); 
    textSize(20);
    startTime = millis(); // time in milliseconds

    // Create player sprite
    player = new Sprite();
    player.width = 15;
    player.height = 15;
    player.color = "blue";
    player.stroke = "white";
    player.layer = 2;
    player.rotationLock = true;

    // Create background title
    title = new Sprite();
    title.width = 190;
    title.height = 50;
    title.textSize = 40;
    title.text = "Tile Jumper";
    title.color = "gray";
    title.stroke = "gray";
    title.collider = 'none';
    title.layer = 1;

    // Create gray walls
    walls = new Group();
    walls.w = 30;
    walls.h = 30; 
    walls.tile = "=";
    walls.collider = 'static';
    walls.color = '#313131';
    walls.stroke = '#313131';

    // Creates the layout for the gray walls
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
        walls.h
    );
}

function draw() {
    background("gray");

    // Start the timer when the game begins
    if (!timerStarted) {
        timerStarted = true;
        startTime = millis(); // Capture the start time when the game begins
    }

    // Remaining time
    elapsedTime = (millis() - startTime) / 1000;
    timeRemaining = 60 - elapsedTime; // Subtract time from 60 for countdown

    // Display the timer
    text("Timer: " + Math.max(0, timeRemaining.toFixed(0)) + "s", width / 2, height / 10);

    // Display collected coins
    text("Coins Collected: " + collectedCoins, width / 2, height / 7);

    // Player contorls
    if (kb.pressing(LEFT_ARROW)) {
        player.x -= 5;
    } else if (kb.pressing(RIGHT_ARROW)) {
        player.x += 5;
    }

    if (kb.presses(UP_ARROW) && canJump) {
        player.vel.y = -7;
        canJump = false;
    }

    // Game framerate
    frameRate(60);
    
    // Every 60 frames spawn a new coin and add to array
    if (frameCount % 60 === 0) { 
        let x = random(610, 70);
        let y = random(100, 530);
        let coin = new Sprite();
        coin.diameter = 30;
        coin.x = x;
        coin.y = y;
        coin.color = "yellow";
        coin.collider = 'static';
        coins.push(coin);
    }

    // Check for collisions with gray walls
    if (player.colliding(walls)) {
        canJump = true;
    }

    // Check for overlap with each coin in the coins array
    for (let i = coins.length - 1; i >= 0; i--) {
        let coin = coins[i];

        // Check player and coin overlap and removes it from array and adds colleted coin
        if (player.overlaps(coin)) {
            coin.remove(); 
            coins.splice(i, 1);
            collectedCoins++;
        }
    }

    // Game over screen and stops game
    if (timeRemaining <= 0 && !gameOver) {
        gameOver = true;
        text("Game Over!", width / 2, height / 3);
        noLoop();
    }
}
