var canvas = document.querySelector("#myCanvas");
var context = canvas.getContext("2d");

var myImage = new Image();
myImage.src = "coin.png";
myImage.addEventListener("load", loadImage, false);

function loadImage(e) {
    animate();
}

var shift = 0;
var frameWidth = 99;
var frameHeight = 200;
var totalFrames = 10;
var currentFrame = 0;

function animate() {
    // context.clearRect(120, 25, 95, 95);
    context.clearRect(120, 25, frameWidth, frameHeight);

    //draw each frame + place them in the middle
    context.drawImage(myImage, shift, 0, frameWidth, frameHeight,
        120, 25, frameWidth, frameHeight);
    shift += frameWidth + 1;

    /*
      Start at the beginning once you've reached the
      end of your sprite!
    */
    if (currentFrame == totalFrames) {
        shift = 0;
        currentFrame = 0;
    }

    currentFrame++;

    
        requestAnimationFrame(animate);
    

  
}