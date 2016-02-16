const Paddle = require('./paddle');

let keysDown = {};

window.addEventListener("keydown", function (event) {
    keysDown[event.keyCode] = true;
});

window.addEventListener("keyup", function (event) {
    delete keysDown[event.keyCode];
})

function Player(context, x, y) {
    this.x = x;
    this.y = y;
    this.paddle = new Paddle(context, this.x,this.y);
}

Player.prototype.render = function () {
    this.paddle.render();
};

Player.prototype.update = function () {
    for (var key in keysDown) {
        var value = Number(key);
        if (value == 38) {
            this.paddle.move(-4);
        } else if (value == 40) {
            this.paddle.move(4);
        } else {
            this.paddle.move(0);
        }
    }
};

module.exports = Player;
