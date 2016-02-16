const Game = require('./game');

let canvas = document.getElementById('canvas');
let context = canvas.getContext('2d');

let game = new Game(context, canvas);
let request;

let newGame = (context, canvas) => {
    game = new Game(context, canvas);
    game.renderScore();
    animate(step);
}

let animate = window.requestAnimationFrame

let step = () => {
    game.render();
    game.update();
    request = animate(step);
};

document.getElementById('start').addEventListener('click', () => {
    if (!request) {
        animate(step);
    }
})

document.getElementById('restart').addEventListener('click', () => {
    window.cancelAnimationFrame(request);
    newGame(context, canvas);
})

game.render();
