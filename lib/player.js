const Paddle = require('./paddle');
const keyboardMaster = require('./keyboardMaster');
let keys = keyboardMaster.keysDown

function Player(context) {
    this.paddle = new Paddle(context, 580, 160, 10, 80);
}

Player.prototype.render = function () {
    this.paddle.render();
};

Player.prototype.update = function () {
    for (var key in keys) {
        var value = Number(key);
        if (value == 38) {
            this.paddle.move(-4, 0);
        } else if (value == 40) {
            this.paddle.move(4, 0);
        } else {
            this.paddle.move(0, 0);
        }
    }
};

module.exports = Player;
