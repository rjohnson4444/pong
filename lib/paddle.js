function Paddle(context, x, y , width = 10, height = 80) {
    this.context = context;
    this.y = y;
    this.x = x;
    this.width = width;
    this.height = height;
    this.y_speed = 0;
}

Paddle.prototype.render = function () {
    this.context.fillStyle = "#0000FF";
    this.context.fillRect(this.x, this.y, this.width, this.height);
};

Paddle.prototype.move = function (y) {
    this.y += y;
    this.y_speed = y;
    this.ifAtTop();
    this.ifAtBottom();
};

Paddle.prototype.ifAtTop = function () {
    if (this.y < 0) {
        this.y = 0;
        this.y_speed = 0;
    }
}

Paddle.prototype.ifAtBottom = function () {
    if (this.y + this.height > 400) {
        this.y = 400 - this.height;
        this.y_speed = 0;
    }
}

module.exports = Paddle;
