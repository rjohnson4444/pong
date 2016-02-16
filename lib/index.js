const Game = require('./game');

let canvas = document.getElementById('canvas');
let context = canvas.getContext('2d');

let game = new Game(context, canvas);
let request;

let newGame = function(context, canvas) {
    game = new Game(context, canvas);
    game.renderScore();
    animate(step);
}

let animate = window.requestAnimationFrame || function (callback) {
    window.setTimeout(callback, 1000 / 60)
};

let step = () => {
    game.render();
    game.update();
    request = animate(step);
};

document.getElementById('start').addEventListener('click', function() {
    if (!request) {
        animate(step);
    }
})

document.getElementById('restart').addEventListener('click', function() {
    window.cancelAnimationFrame(request);
    newGame(context, canvas);
})

game.render();
