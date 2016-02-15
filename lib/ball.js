function Ball(x = 0, y = 0, context, game) {
    this.context = context;
    this.game = game
    this.x = x;
    this.y = y;
    this.radius = 10;
    this.x_speed = 3;
    this.y_speed = 0;
}

Ball.prototype.render = function () {
    this.context.beginPath();
    this.context.arc(this.x, this.y, this.radius, 2 * Math.PI, false);
    this.context.fillStyle = "#000000";
    this.context.fill();
};

Ball.prototype.update = function (paddle1, paddle2) {
    this.x += this.x_speed; // Ball motion left/right
    this.y += this.y_speed; // Ball motion up/down
    var left   = this.x - this.radius;
    var top    = this.y - this.radius;
    var right  = this.x + this.radius;
    var bottom = this.y + this.radius;

    this.detectScore();

    // Calculate speeds
    if (this.y - 10 < 0) { // Top wall detection
        this.y = 10;
        this.y_speed = -this.y_speed;
        // this.x_speed = -this.x_speed;
    } else if (this.y + 10 > 400) { // Bottom wall detection
        this.y_speed = -this.y_speed;
    }

    // player 2 collision handling
    if (right > 300) {
        if (right > paddle2.x && top < (paddle2.y + paddle2.height) && bottom > paddle2.y) {
            this.x_speed = -3;
            this.y_speed += (paddle2.y_speed / 2);
            this.x += this.x_speed;
        }
    } else {
        // player 1 collision handling
        if (left < (paddle1.x + 10) && top < (paddle1.y + paddle1.height) && bottom > paddle1.y) {
            this.x_speed = 3;
            this.y_speed += (paddle1.y_speed / 2);
            this.x += this.x_speed;
        }

    }
};

Ball.prototype.detectScore = function () {
    if (this.x + this.radius < 0) {
        this.game.score(this.game.player1)
    } else if (this.x - this.radius > 600) {
        this.game.score(this.game.player2)
    }
}

module.exports = Ball;
