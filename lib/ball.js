function Ball(x = 0, y = 0, context, game) {
    this.context = context;
    this.game = game
    this.x = x;
    this.y = y;
    this.radius = 10;
    this.x_speed = 5;
    this.y_speed = 0;
}

Ball.prototype.render = function () {
    this.context.beginPath();
    this.context.arc(this.x, this.y, this.radius, 2 * Math.PI, false);
    this.context.fillStyle = "#000000";
    this.context.fill();
};

Ball.prototype.update = function (paddle1, paddle2) {
    let left   = this.x - this.radius;
    let top    = this.y - this.radius;
    let right  = this.x + this.radius;
    let bottom = this.y + this.radius;
    this.x += this.x_speed;
    this.y += this.y_speed;

    this.detectScore();
    this.adjustSpeed();
    this.detectPlayer2(paddle2, right, top, bottom);
    this.detectPlayer1(paddle1, left, top, bottom);
};

Ball.prototype.detectPlayer2 = function (paddle2, right, top, bottom) {
    if (right > this.game.width / 2) {
        if (right > paddle2.x && top < (paddle2.y + paddle2.height) && bottom > paddle2.y) {
            this.x_speed = -3;
            this.y_speed += (paddle2.y_speed / 2);
            this.x += this.x_speed;
        }
    }
}

Ball.prototype.detectPlayer1 = function (paddle1, left, top, bottom) {
     if (left < this.game.width / 2){
        if (left < (paddle1.x + 10) && top < (paddle1.y + paddle1.height) && bottom > paddle1.y) {
            this.x_speed = 3;
            this.y_speed += (paddle1.y_speed / 2);
            this.x += this.x_speed;
        }
    }
}

Ball.prototype.adjustSpeed = function() {
    this.detectCeiling();
    this.detectFloor();
}

Ball.prototype.detectCeiling = function() {
    if (this.y - this.radius < 0) {
        this.y = this.radius;
        this.y_speed = -this.y_speed;
    }
}

Ball.prototype.detectFloor = function() {
    if (this.y + this.radius > this.game.height) {
        this.y_speed = -this.y_speed;
    }
}

Ball.prototype.detectScore = function () {
    if (this.x + this.radius < 0) {
        this.game.score(this.game.player1)
    } else if (this.x - this.radius > this.game.width) {
        this.game.score(this.game.player2)
    }
}


module.exports = Ball;
