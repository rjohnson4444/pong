const Game = require('./game');

let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let request;

let game = new Game(ctx, canvas, request);

let newGame = (ctx, canvas, request) => {
    game = new Game(ctx, canvas, request);
    game.renderScore();
    animate(step);
};

let animate = window.requestAnimationFrame;

let step = () => {
    if (game.over()) {
        restartGame();
    }
    game.render();
    game.update();
    request = animate(step);
};

function restartGame() {
    window.cancelAnimationFrame(request);
    newGame(ctx, canvas, request);
}


document.getElementById('start').addEventListener('click', () => {
    if (!request) {
        animate(step);
    }
});

document.getElementById('restart').addEventListener('click', () => {
    restartGame();
});

game.render();
