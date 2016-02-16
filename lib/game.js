const Player      = require('./player');
const Ball        = require('./ball');
const Scorekeeper = require('./scorekeeper');

let player1Score = document.getElementById("player-1-score");
let player2Score = document.getElementById("player-2-score");

let Game = function (context, canvas) {
    this.context = context;
    this.width = canvas.width;
    this.height = canvas.height;
    this.player1 = new Player(context, 10, (canvas.height / 2) - 40);
    this.player2 = new Player(context, canvas.width - 20, (canvas.height / 2) - 40);
    this.ball = new Ball(this.width / 2, this.height / 2, this.context, this);
    this.scorekeeper = new Scorekeeper(this.player1, this.player2);
    this.gameObjects = [this.player1, this.ball, this.player2];
}

Game.prototype.render = function() {
    this.context.fillStyle = "#AFFFFF";
    this.context.fillRect(0, 0, this.width, this.height);

    this.gameObjects.forEach( (object) => object.render() );
};

Game.prototype.update = function() {
    this.player1.update();
    this.player2.update();
    this.ball.update(this.player1.paddle, this.player2.paddle);
};

Game.prototype.score = function(player) {
    this.scorekeeper.increaseScore(player)
    this.renderScore();
    this.serveBall();
};

Game.prototype.renderScore = function() {
    let p1 = this.scorekeeper.scores.player1;
    let p2 = this.scorekeeper.scores.player2;
    player1Score.innerHTML = p1
    player2Score.innerHTML = p2
}

Game.prototype.serveBall = function() {
    this.ball.x = this.width / 2;
    this.ball.y = this.height / 2;

    this.ball.x_speed = 5;
    this.ball.y_speed = 0.7;
}

module.exports = Game;
