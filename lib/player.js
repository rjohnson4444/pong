const Paddle = require('./paddle');

function Player(context, x, y) {
    this.x = x;
    this.y = y;
    this.paddle = new Paddle(context, this.x,this.y);
}

Player.prototype.render = function () {
    this.paddle.render();
};

Player.prototype.update = function (num) {
    this.paddle.move(num);
};

module.exports = Player;
