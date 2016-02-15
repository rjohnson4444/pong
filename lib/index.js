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
    animate(step);
};


document.getElementById('start').addEventListener('click', function() {
    animate(step);
    // game.reset_scores()
})

document.getElementById('restart').addEventListener('click', function() {
    // animate(step);
})
