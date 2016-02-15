const Game = require('./game');

let canvas = document.getElementById('canvas');
let context = canvas.getContext('2d');

let game = new Game(context, canvas);

let animate = window.requestAnimationFrame || function (callback) {
    window.setTimeout(callback, 1000 / 60)
};

let step = () => {
    game.update();
    game.render();
    game.score();
    animate(step);
};

animate(step);
