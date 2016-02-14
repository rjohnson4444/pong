function Ball(x = 0, y = 0, context) {
    this.context = context;
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

Ball.prototype.update = function (paddle1) {
    this.x += this.x_speed; // Ball motion left/right
    this.y += this.y_speed; // Ball motion up/down
    var left_x = this.x - this.radius;
    var left_y = this.y - this.radius;
    var right_x = this.x + this.radius;
    var right_y = this.y + this.radius;

    // Calculate speeds
    if (this.y - 10 < 0) { // Top wall detection
        this.y = 10;
        this.y_speed = -this.y_speed;
    } else if (this.y + 10 > 400) { // Bottom wall detection
        this.y = 395;
        this.y_speed = -this.y_speed;
    }

    // Score detection
    if (this.x < 0 || this.x > 600) {
        this.x_speed = 3;
        this.y_speed = 0.7;

        // Reset ball for serve
        this.x = 300;
        this.y = 200;
    }

    // Left and Right paddle collision handling
    // if (left_x > 300) {
    //     if (left_x < (paddle1.y + paddle1.height) && bottom_y > paddle1.y && top_x < (paddle1.x + paddle1.width) && bottom_x > paddle1.x) {
    //         this.y_speed = -3;
    //         this.x_speed += (paddle1.x_speed / 2);
    //         this.y += this.y_speed;
    //     }
    // } else {
    //     // Handle player 2 paddle
    // }
};

module.exports = Ball;
