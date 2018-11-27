


var coinImage = new Image();
coinImage.src = "coin.png";

var canvas = document.getElementById("coinAnimation");
canvas.width = 200;
canvas.height = 200;

var coin = sprite({
    context: canvas.getContext("2d"),
    width: 100,
    height: 100,
    image: coinImage
});


coinImage.addEventListener("load", loadImage, false);

function loadImage(e) {
    coin.render();
}







function sprite(options) {


    var that = {};
    that.context = options.context;
    that.width = options.width;
    that.height = options.height;
    that.image = options.image;
    that.render = function () {

        // Draw the animation
        that.context.drawImage(
            that.image,
            0,
            0,
            that.width,
            that.height,
            0,
            0,
            that.width,
            that.height);
    };


    return that;

}

