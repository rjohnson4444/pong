const Paddle = require('./paddle');

function Player(context, x, y, game) {
    this.x = x;
    this.y = y;
    this.game = game;
    this.paddle = new Paddle(context, this.x, this.y, game);
}

Player.prototype.render = function () {
    this.paddle.render();
};

Player.prototype.update = function (coordinates) {
    this.paddle.move(coordinates[0], coordinates[1]);
};

module.exports = Player;
