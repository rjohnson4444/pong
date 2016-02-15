const Player = require('./player');
const Ball = require('./ball');

let Game = function (context, canvas) {
    this.context = context;
    this.width = canvas.width
    this.height = canvas.height
    this.player1 = new Player(context, 10, canvas.height - 40)
    this.player2 = new Player(context, canvas.width - 20, canvas.height - 40)
    this.ball = new Ball(300, 200, this.context)
    this.gameObjects = [this.player1, this.ball, this.player2];
}


Game.prototype.render = function () {
    this.context.fillStyle = "#AFFFFF";
    this.context.fillRect(0, 0, this.width, this.height);

    this.gameObjects.forEach( (object) => {
        object.render();
    })
};

Game.prototype.update = function () {
    this.player1.update();
    this.player2.update();
    this.ball.update(this.player1.paddle, this.player2.paddle);
};

module.exports = Game;
