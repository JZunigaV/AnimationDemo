
    function gameLoop() {

        window.requestAnimationFrame(gameLoop);

        coin.update();
        coin.render();
    }


    function sprite(options) {

        var that = {},
            frameIndex = 0,
            tickCount = 0,
            ticksPerFrame = options.ticksPerFrame || 0,
            numberOfFrames = options.numberOfFrames || 1;

        that.context = options.context;
        that.width = options.width;
        that.height = options.height;
        that.image = options.image;
        

        that.update = function () {

            tickCount += 1;

            if (tickCount > ticksPerFrame) {

                tickCount = 0;

                // If the current frame index is in range
                if (frameIndex < numberOfFrames - 1) {
                    //Go to the next Frame
                    frameIndex += 1;
                } else {
                    frameIndex = 0;
                }

            }
        };


        that.render = function () {

            // Clear the canvas
            that.context.clearRect(0, 0, that.width, that.height);

            // Draw the animation
            that.context.drawImage(
                that.image,
                frameIndex * that.width / numberOfFrames,
                0,
                that.width / numberOfFrames,
                that.height,
                0,
                0,
                that.width / numberOfFrames,
                that.height);
        };

        return that;
    }

    //Get canvas
    var canvas = document.getElementById("coinAnimation");
    canvas.width = 100;
    canvas.height = 100;


    //Create SpriteSheet
    var coinImage = new Image();


    //Create Sprite
    var coin = sprite({
        context: canvas.getContext("2d"),
        width: 1000,
        height: 100,
        image: coinImage,
        numberOfFrames: 10,
        ticksPerFrame: 3

    });

    // Load SpriteSheet
    coinImage.addEventListener("load", gameLoop);
    coinImage.src = "coin.png";
