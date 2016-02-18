function Paddle(context, x, y, game, width = 10, height = 80) {
    this.context = context;
    this.y = y;
    this.x = x;
    this.game = game;
    this.width = width;
    this.height = height;
    this.y_speed = 0;
    this.x_speed = 0;
}

Paddle.prototype.render = function () {
    this.context.fillStyle = "#0000FF";
    this.context.fillRect(this.x, this.y, this.width, this.height);
};

Paddle.prototype.move = function (x, y) {
    this.y += y;
    this.x += x;
    this.y_speed = y;
    this.x_speed = x;
    this.ifAtTop();
    this.ifAtBottom();
    this.isInBox();
};

Paddle.prototype.ifAtTop = function () {
    if (this.y < 0) {
        this.y = 0;
        this.y_speed = 0;
    }
};

Paddle.prototype.ifAtBottom = function () {
    if (this.y + this.height > 400) {
        this.y = 400 - this.height;
        this.y_speed = 0;
    }
};

Paddle.prototype.isInBox = function () {
    if (this.x < this.game.width / 2) {
        if (this.x < 10) {
            this.x = 10;
            this.x_speed = 0;
        } else if (this.x > this.game.width / 4) {
            this.x = this.game.width / 4;
            this.x_speed = 0;
        }
    } else if (this.x > this.game.width / 2) {
        if (this.x > this.game.width - 20) {
            this.x = this.game.width - 20;
            this.x_speed = 0;
        } else if (this.x < this.game.width * 0.75) {
            this.x = this.game.width * 0.75;
            this.x_speed = 0;
        }
    }
};

module.exports = Paddle;
