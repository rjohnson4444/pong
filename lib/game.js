const Player = require('./player');
const Ball = require('./ball');

let Game = function (context, canvas) {
    this.context = context;
    this.width = canvas.width
    this.height = canvas.height
    this.player = new Player(context)
    this.ball = new Ball(200, 300, this.context)
    this.gameObjects = [this.player, this.ball];
}


Game.prototype.render = function () {
    this.context.fillStyle = "#AFFFFF";
    this.context.fillRect(0, 0, this.width, this.height);

    this.gameObjects.forEach( (object) => {
        object.render();
    })
};

Game.prototype.update = function () {
    this.player.update();
    this.ball.update(this.player.paddle);
};

module.exports = Game;
