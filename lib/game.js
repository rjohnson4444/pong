const Player      = require('./player');
const Ball        = require('./ball');
const Scorekeeper = require('./scorekeeper');

let keysDown = {};

window.addEventListener("keydown", function (event) {
    keysDown[event.keyCode] = true;
});

window.addEventListener("keyup", function (event) {
    delete keysDown[event.keyCode];
});

let player1Score = document.getElementById("player-1-score");
let player2Score = document.getElementById("player-2-score");

let Game = function (context, canvas, request) {
    this.context = context;
    this.request = request;
    this.width = canvas.width;
    this.height = canvas.height;
    this.player1 = new Player(context, 10, (canvas.height / 2) - 40, this);
    this.player2 = new Player(context, canvas.width - 20, (canvas.height / 2) - 40, this);
    this.ball = new Ball(this.width / 2, this.height / 2, this.context, this);
    this.scorekeeper = new Scorekeeper(this.player1, this.player2);
    this.gameObjects = [this.player1, this.player2];
};

// Game.prototype.collisionDetection = function () {
//     for (let i = 0; i < this.gameObjects.length; i++) {
//         let obj = gameObjects[i]
//         this.checkCollisionWithBall(obj);
//     }
// }

// Game.prototype.checkCollisionWithBall = function (obj) {
//     if obj.
//}

Game.prototype.render = function() {
    this.context.fillStyle = "#AFFFFF";
    this.context.fillRect(0, 0, this.width, this.height);
    this.ball.render();
    this.gameObjects.forEach( (object) => object.render() );
};

Game.prototype.moveTo = function (keysDown) {
    let moveDown = [0, 4];
    let moveUp   = [0,-4];
    let moveRight = [4, 0];
    let moveLeft = [-4, 0];

    for (var key in keysDown) {
        var value = Number(key);
        if (value === 40) {
            this.player2.update(moveDown);
        } else if (value === 38) {
            this.player2.update(moveUp);
        } else if (value === 87) {
            this.player1.update(moveUp);
        } else if (value === 83) {
            this.player1.update(moveDown);
        } else if (value === 39 ) {
            this.player2.update(moveRight);
        } else if (value === 37) {
            this.player2.update(moveLeft);
        } else if (value === 81) {
            this.player1.update(moveLeft);
        } else if (value === 69) {
            this.player1.update(moveRight);
        }
    }
};

Game.prototype.update = function() {
    this.moveTo(keysDown);
    this.ball.update(this.player1.paddle, this.player2.paddle);
};

Game.prototype.score = function(player) {
    this.scorekeeper.increaseScore(player);
    this.renderScore();
    this.serveBall();
};

Game.prototype.over = function() {
    if (this.scorekeeper.scores.player1 > 9) {
        return this.endgame("Player 1");
    } else if (this.scorekeeper.scores.player2 > 9) {
        return this.endgame("Player 2");
    } else {
        return false;
    }
};

Game.prototype.endgame = function(player) {
    this.renderScore();
    alert(`Game over, ${player} won`);
    return true;
};

Game.prototype.renderScore = function() {
    let p1 = this.scorekeeper.scores.player1;
    let p2 = this.scorekeeper.scores.player2;
    player1Score.innerHTML = p1;
    player2Score.innerHTML = p2;
};

Game.prototype.serveBall = function() {
    this.ball.x = this.width / 2;
    this.ball.y = this.height / 2;
    this.ball.x_speed = 5;
    this.ball.y_speed = 0.7;
};

module.exports = Game;
