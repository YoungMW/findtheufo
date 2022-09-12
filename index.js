const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

//changing canvas size to size of window screen
canvas.width = 700;
canvas.height = 700;

const gravity = 0.5; //creating "gravity" acceleration

//==========================================================
//===================PLAYER CREATION========================
//==========================================================
class Player {
  constructor() {
    //player's properties
    this.speed = 6;
    this.speedY = 10;
    this.position = {
      //player's starting position (object)
      x: 200,
      y: 480,
    };
    this.width = 66;
    this.height = 120;
    this.velocity = {
      //creating gravity for the player
      x: 0,
      y: 0,
    };
    this.image = createImage("./img/Maskedhero.png");
    this.frames = 0;
  }

  draw() {
    //If you define a function called "draw" in your code, then that function will get called repeatedly, about 60 times per second.
    c.drawImage(
      this.image,
      200 * this.frames, //flipping image through a sprite sheet, 200px per frame
      0,
      200, //cropping image from sprite sheet
      400, //cropping image from sprite sheet
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }

  update() {
    //updating player's y position with gravity on the canvas
    this.draw();
    // this.frames += 1;
    // if (this.frames > 19) this.frames = 0;
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
    if (this.position.y + this.height + this.velocity.y <= canvas.height) {
      this.velocity.y += gravity; //acceleration to "gravity"
    }
  }
}

//==========================================================
//=================PLATFORM CREATION========================
//==========================================================

class Platform {
  //platform's properties
  constructor({ x, y, image }) {
    //platform's starting position (object)
    this.position = {
      x: x,
      y: y,
    };

    this.image = image;

    this.width = image.width;
    this.height = image.height;
  }
  draw() {
    c.drawImage(this.image, this.position.x, this.position.y);
    // c.fillStyle = "blue";
    // c.fillRect(this.position.x, this.position.y, this.width.w, this.height.h);
  }
}

//==========================================================
//==================BOULDER CREATION========================
//==========================================================

class Boulder {
  constructor({ x, y, image }) {
    //platform's starting position (object)
    this.position = {
      x: x,
      y: y,
    };
    this.velocity = {
      x: 0,
      y: 0.8,
    };
    this.image = image;
    this.width = image.width;
    this.height = image.height;
  }
  draw() {
    c.drawImage(this.image, this.position.x, this.position.y);
  }

  update() {
    this.draw();
    this.position.y += this.velocity.y;
    this.position.x += this.velocity.x;
    // if (this.position.y <= canvas.height) {
    //   this.velocity.y += 0.2;
    // }
  }
}

//==========================================================
//==================DECORATIVE CLASS========================
//==========================================================

class DecorativeObjects {
  constructor({ x, y, image }) {
    this.position = {
      x: x,
      y: y,
    };

    this.image = image;

    this.width = image.width;
    this.height = 8192;
  }
  draw() {
    c.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }
}

//==========================================================
//====================WINNING OBJECT========================
//==========================================================

class WinningObject {
  constructor({ x, y, image }) {
    this.position = {
      x: x,
      y: y,
    };

    this.image = image;
    this.width = image.width;
    this.height = image.height;
  }
  draw() {
    c.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }
}

//==========================================================
//====================Image Creation========================
//==========================================================
function createImage(imageSrc) {
  const image = new Image();
  image.src = imageSrc;
  return image;
}
// const image = new Image();
const backgroundImage = createImage("./img/castletest.png");
const platformImage = createImage("./img/Wooden_Platform.png");
const platformImage2 = createImage("./img/Platform barrel.png");
const platformImage3 = createImage("./img/stonewall.png");
const winningImage = createImage("./img/alien.png");
const boulderImage = createImage("./img/boulder.png");

//==========================================================
//============Implement the player class====================
//==========================================================
let player = new Player();

//==========================================================
//============Implement the winning class===================
//==========================================================
let winningObject = [
  new WinningObject({
    x: 100,
    y: -4550,
    image: winningImage,
  }),
];

//==========================================================
//============Implement the platform class==================
//==========================================================

let platforms = [
  new Platform({ x: -100, y: 650, image: platformImage }),
  new Platform({ x: 100, y: 500, image: platformImage2 }),
  new Platform({ x: 200, y: 400, image: platformImage2 }),
  new Platform({ x: 300, y: 300, image: platformImage2 }),
  new Platform({ x: 500, y: 200, image: platformImage3 }),
  new Platform({ x: 300, y: 000, image: platformImage2 }),
  new Platform({ x: 100, y: -100, image: platformImage2 }),
  new Platform({ x: 200, y: -300, image: platformImage2 }),
  new Platform({ x: 500, y: -450, image: platformImage2 }),
  new Platform({ x: 300, y: -550, image: platformImage2 }),
  new Platform({ x: 150, y: -650, image: platformImage2 }),
  new Platform({ x: 0, y: -750, image: platformImage2 }),
  new Platform({ x: 0, y: -950, image: platformImage2 }),
  new Platform({ x: 200, y: -950, image: platformImage2 }),
  new Platform({ x: 400, y: -950, image: platformImage2 }),
  new Platform({ x: 600, y: -950, image: platformImage2 }),
  new Platform({ x: 600, y: -1150, image: platformImage2 }),
  new Platform({ x: 600, y: -1350, image: platformImage2 }),
  new Platform({ x: 400, y: -1550, image: platformImage2 }),
  new Platform({ x: 200, y: -1650, image: platformImage2 }),
  new Platform({ x: 0, y: -1650, image: platformImage2 }),
  new Platform({ x: 100, y: -1750, image: platformImage2 }),
  new Platform({ x: 250, y: -1900, image: platformImage3 }),
  new Platform({ x: 450, y: -1900, image: platformImage3 }),
  new Platform({ x: 0, y: -2050, image: platformImage3 }),
  new Platform({ x: 250, y: -2050, image: platformImage3 }),
  new Platform({ x: -100, y: -2200, image: platformImage3 }),
  new Platform({ x: -200, y: -2350, image: platformImage3 }),
  new Platform({ x: 200, y: -2400, image: platformImage2 }),
  new Platform({ x: 450, y: -2450, image: platformImage3 }),
  new Platform({ x: 550, y: -2600, image: platformImage3 }),
  new Platform({ x: 650, y: -2750, image: platformImage3 }),
  new Platform({ x: 450, y: -2900, image: platformImage2 }),
  new Platform({ x: 350, y: -3050, image: platformImage2 }),
  new Platform({ x: 250, y: -3200, image: platformImage2 }),
  new Platform({ x: 150, y: -3350, image: platformImage2 }),
  new Platform({ x: 250, y: -3500, image: platformImage2 }),
  new Platform({ x: 350, y: -3650, image: platformImage2 }),
  new Platform({ x: 450, y: -3800, image: platformImage2 }),
  new Platform({ x: 550, y: -3950, image: platformImage2 }),
  new Platform({ x: 450, y: -4100, image: platformImage2 }),
  new Platform({ x: 420, y: -4250, image: platformImage3 }),
  new Platform({ x: 140, y: -4400, image: platformImage3 }),
  new Platform({ x: -140, y: -4550, image: platformImage3 }),
]; //creation of an array of platforms

//==========================================================
//============Implement the boulder class===================
//==========================================================
let boulderObject = [
  new Boulder({
    x: 50,
    y: 0,
    image: boulderImage,
  }),
  new Boulder({
    x: 300,
    y: -300,
    image: boulderImage,
  }),
  new Boulder({
    x: 0,
    y: -600,
    image: boulderImage,
  }),
  new Boulder({
    x: 400,
    y: -750,
    image: boulderImage,
  }),
  new Boulder({
    x: 300,
    y: -900,
    image: boulderImage,
  }),
  new Boulder({
    x: 600,
    y: -1300,
    image: boulderImage,
  }),
];

//==========================================================
//==============Implement Decorative class==================
//==========================================================
let decorativeObjects = [
  new DecorativeObjects({
    x: 0, //leftmost part of screen
    y: -7492, //topmost part of screen
    image: backgroundImage,
  }),
];

//==========================================================
//====================Implement Keys========================
//==========================================================
//(Keys Objects) right and left keys pressed down, return true, else false, tagged with Event Listener.
const keys = {
  right: {
    pressed: false,
  },
  left: {
    pressed: false,
  },
  up: {
    pressed: false,
  },
  down: {
    pressed: false,
  },
};

let scrollOffset = 0;
let scrollOffsetY = 0;

//==========================================================
//========================GAME RESET========================
//==========================================================
function restartGame() {
  player = new Player();

  platforms = [
    new Platform({ x: -100, y: 650, image: platformImage }),
    new Platform({ x: 100, y: 500, image: platformImage2 }),
    new Platform({ x: 200, y: 400, image: platformImage2 }),
    new Platform({ x: 300, y: 300, image: platformImage2 }),
    new Platform({ x: 500, y: 200, image: platformImage3 }),
    new Platform({ x: 300, y: 000, image: platformImage2 }),
    new Platform({ x: 100, y: -100, image: platformImage2 }),
    new Platform({ x: 200, y: -300, image: platformImage2 }),
    new Platform({ x: 500, y: -450, image: platformImage2 }),
    new Platform({ x: 300, y: -550, image: platformImage2 }),
    new Platform({ x: 150, y: -650, image: platformImage2 }),
    new Platform({ x: 0, y: -750, image: platformImage2 }),
    new Platform({ x: 0, y: -950, image: platformImage2 }),
    new Platform({ x: 200, y: -950, image: platformImage2 }),
    new Platform({ x: 400, y: -950, image: platformImage2 }),
    new Platform({ x: 600, y: -950, image: platformImage2 }),
    new Platform({ x: 600, y: -1150, image: platformImage2 }),
    new Platform({ x: 600, y: -1350, image: platformImage2 }),
    new Platform({ x: 400, y: -1550, image: platformImage2 }),
    new Platform({ x: 200, y: -1650, image: platformImage2 }),
    new Platform({ x: 0, y: -1650, image: platformImage2 }),
    new Platform({ x: 100, y: -1750, image: platformImage2 }),
    new Platform({ x: 250, y: -1900, image: platformImage3 }),
    new Platform({ x: 450, y: -1900, image: platformImage3 }),
    new Platform({ x: 0, y: -2050, image: platformImage3 }),
    new Platform({ x: 250, y: -2050, image: platformImage3 }),
    new Platform({ x: -100, y: -2200, image: platformImage3 }),
    new Platform({ x: -200, y: -2350, image: platformImage3 }),
    new Platform({ x: 200, y: -2400, image: platformImage2 }),
    new Platform({ x: 450, y: -2450, image: platformImage3 }),
    new Platform({ x: 550, y: -2600, image: platformImage3 }),
    new Platform({ x: 650, y: -2750, image: platformImage3 }),
    new Platform({ x: 450, y: -2900, image: platformImage2 }),
    new Platform({ x: 350, y: -3050, image: platformImage2 }),
    new Platform({ x: 250, y: -3200, image: platformImage2 }),
    new Platform({ x: 150, y: -3350, image: platformImage2 }),
    new Platform({ x: 250, y: -3500, image: platformImage2 }),
    new Platform({ x: 350, y: -3650, image: platformImage2 }),
    new Platform({ x: 450, y: -3800, image: platformImage2 }),
    new Platform({ x: 550, y: -3950, image: platformImage2 }),
    new Platform({ x: 450, y: -4100, image: platformImage2 }),
    new Platform({ x: 420, y: -4250, image: platformImage3 }),
    new Platform({ x: 140, y: -4400, image: platformImage3 }),
    new Platform({ x: -140, y: -4550, image: platformImage3 }),
  ]; //creation of an array of platforms

  decorativeObjects = [
    new DecorativeObjects({
      x: 0, //leftmost part of screen
      y: -7492, //topmost part of screen
      image: backgroundImage,
    }),
  ];

  winningObject = [
    new WinningObject({
      x: 100,
      y: -4550,
      image: winningImage,
    }),
  ];

  boulderObject = [
    new Boulder({
      x: 50,
      y: 0,
      image: boulderImage,
    }),
    new Boulder({
      x: 300,
      y: -300,
      image: boulderImage,
    }),
    new Boulder({
      x: 0,
      y: -600,
      image: boulderImage,
    }),
    new Boulder({
      x: 400,
      y: -750,
      image: boulderImage,
    }),
    new Boulder({
      x: 300,
      y: -900,
      image: boulderImage,
    }),
    new Boulder({
      x: 600,
      y: -1300,
      image: boulderImage,
    }),
    new Boulder({
      x: 550,
      y: -1700,
      image: boulderImage,
    }),
    new Boulder({
      x: 250,
      y: -1900,
      image: boulderImage,
    }),
    new Boulder({
      x: 150,
      y: -2100,
      image: boulderImage,
    }),
    new Boulder({
      x: 300,
      y: -2250,
      image: boulderImage,
    }),
    new Boulder({
      x: 450,
      y: -2400,
      image: boulderImage,
    }),
  ];

  scrollOffset = 0;
}

//==========================================================
//=======================ANIMATIONS=========================
//==========================================================
function animate() {
  this.toggleScreen("startScreen", false);
  this.toggleScreen("canvas", true);
  //animate loop
  requestAnimationFrame(animate); //requestAnimationFrame() method tells the browser that you wish to perform an animation and requests that the browser calls a specified function to update an animation before the next repaint. The method takes a callback as an argument to be invoked before the repaint.
  c.fillStyle = "white";
  c.fillRect(0, 0, canvas.width, canvas.height); //function to clear canvas
  //Updating/call the platform's draw function (style and fill)

  decorativeObjects.forEach((decorativeObject) => {
    decorativeObject.draw();
  });

  platforms.forEach((platform) => {
    platform.draw();
  });

  winningObject.forEach((winningObject) => {
    winningObject.draw();
  });

  boulderObject.forEach((boulderObject) => {
    boulderObject.update();
  });

  player.update(); //Updating/call the draw function and player new position

  //===============KEY PRESS CONDITIONS======================
  if (keys.right.pressed && player.position.x < 634) {
    player.velocity.x = player.speed;
  } else if (keys.left.pressed && player.position.x > 0) {
    player.velocity.x = -player.speed;
  } else {
    player.velocity.x = 0;
  }

  if (keys.up.pressed) {
    platforms.forEach((platform) => {
      platform.position.y += 0.4 * player.speedY;
    });
    decorativeObjects.forEach((decorativeObject) => {
      decorativeObject.position.y += player.speedY * 0.4;
    });
    winningObject.forEach((winningObject) => {
      winningObject.position.y += 0.4 * player.speedY;
    });
    boulderObject.forEach((boulderObject) => {
      boulderObject.position.y += 0.4 * player.speedY;
    });
    winningObject.forEach((object) => {
      scrollOffsetY = 4550 + object.position.y;
      let highscore = scrollOffsetY;
      document.querySelector("#highscore").innerHTML = highscore;
    });
  }

  //   console.log(scrollOffset);
  console.log(scrollOffsetY);

  //===========PLATFORM COLLISION DETECTION===================
  platforms.forEach((platform) => {
    if (
      player.position.y + player.height <= platform.position.y && //any y position above or equal the platform, player y velocity = 0
      player.position.y + player.height + player.velocity.y >= //any y position below or equal the platform, player y velocity = 0
        platform.position.y &&
      player.position.x + player.width >= platform.position.x &&
      player.position.x <= platform.position.x + platform.width
    ) {
      player.velocity.y = 0;
    }
  });

  //==========================================================
  //======================WIN SCENARIO========================
  //==========================================================
  //======================WIN  DETECTION
  if (scrollOffsetY >= 4750) {
    console.log("You win!");
    window.confirm("You Escaped! You Win!");
    restartGame();
  }
  // window.confirm("You Escaped! Well Done!");
  // restartGame();
  // console.log(`Your highscore is ${highscore}`);

  //==========================================================
  //======================LOSE SCENARIO========================
  //==========================================================

  //LOSE SCENARIO
  if (player.position.y + player.height * 0.3 > canvas.height) {
    // window.confirm(`You died! Your score is ${scrollOffsetY}!`);
    restartGame();
  }

  boulderObject.forEach((boulder) => {
    if (
      player.position.x + player.width >= boulder.position.x &&
      player.position.x <= boulder.position.x + boulder.width &&
      player.position.y + player.height >= boulder.position.y &&
      player.position.y <= boulder.position.y + boulder.height
    ) {
      // window.confirm(`You died! Your score is ${scrollOffsetY}!`);

      restartGame();
    }
  });
}

//==========================================================
//=======================START GAME=========================
//==========================================================
document.getElementById("startButton").addEventListener("click", startGame);

function startGame() {
  animate();
}

function toggleScreen(id, toggle) {
  let element = document.getElementById(id);
  let display = toggle ? "block" : "none"; //true = display: block, false = display: none
  element.style.display = display;
}

//==========================================================
//===========EVENT LISTENER - PLAYER MOVEMENTS==============
//==========================================================

addEventListener("keydown", ({ keyCode }) => {
  //finding the keycodes for each key.
  switch (keyCode) {
    case 65:
      console.log("left");
      keys.left.pressed = true;
      break;
    case 83:
      console.log("down");
      break;
    case 68:
      console.log("right");
      keys.right.pressed = true;
      break;
    case 87:
      console.log("up");
      if (player.velocity.y === 0) {
        keys.up.pressed = true;
        player.velocity.y -= player.speedY;
        // keys.up.pressed = false;
        break;
      }
  }
});

addEventListener("keyup", ({ keyCode }) => {
  //finding the keycodes for each key.
  switch (keyCode) {
    case 65:
      console.log("left");
      keys.left.pressed = false;
      break;
    case 83:
      console.log("down");
      break;
    case 68:
      console.log("right");
      keys.right.pressed = false;
      break;
    case 87:
      console.log("up");
      keys.up.pressed = false;
      player.velocity.y -= 0;
      break;
  }
});
