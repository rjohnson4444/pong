const Game = require('./game');

let canvas = document.getElementById('canvas');
let context = canvas.getContext('2d');
let request;

let game = new Game(context, canvas, request);

let newGame = (context, canvas, request) => {
    game = new Game(context, canvas, request);
    game.renderScore();
    animate(step);
}

let animate = window.requestAnimationFrame

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
    newGame(context, canvas, request);
}


document.getElementById('start').addEventListener('click', () => {
    if (!request) {
        animate(step);
    }
})

document.getElementById('restart').addEventListener('click', () => {
    restartGame();
})

game.render();
