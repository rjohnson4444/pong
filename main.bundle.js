/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Game = __webpack_require__(1);

	var canvas = document.getElementById('canvas');
	var ctx = canvas.getContext('2d');
	var request = undefined;

	var game = new Game(ctx, canvas, request);

	var newGame = function newGame(ctx, canvas, request) {
	    game = new Game(ctx, canvas, request);
	    game.renderScore();
	    animate(step);
	};

	var animate = window.requestAnimationFrame;

	var step = function step() {
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

	document.getElementById('start').addEventListener('click', function () {
	    if (!request) {
	        animate(step);
	    }
	});

	document.getElementById('restart').addEventListener('click', function () {
	    restartGame();
	});

	game.render();

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Player = __webpack_require__(2);
	var Ball = __webpack_require__(4);
	var Scorekeeper = __webpack_require__(5);

	var keysDown = {};

	window.addEventListener("keydown", function (event) {
	    keysDown[event.keyCode] = true;
	});

	window.addEventListener("keyup", function (event) {
	    delete keysDown[event.keyCode];
	});

	var player1Score = document.getElementById("player-1-score");
	var player2Score = document.getElementById("player-2-score");

	var Game = function Game(context, canvas, request) {
	    this.context = context;
	    this.request = request;
	    this.width = canvas.width;
	    this.height = canvas.height;
	    this.player1 = new Player(context, 10, canvas.height / 2 - 40);
	    this.player2 = new Player(context, canvas.width - 20, canvas.height / 2 - 40);
	    this.ball = new Ball(this.width / 2, this.height / 2, this.context, this);
	    this.scorekeeper = new Scorekeeper(this.player1, this.player2);
	    this.gameObjects = [this.player1, this.ball, this.player2];
	};

	Game.prototype.render = function () {
	    this.context.fillStyle = "#AFFFFF";
	    this.context.fillRect(0, 0, this.width, this.height);
	    this.gameObjects.forEach(function (object) {
	        return object.render();
	    });
	};

	Game.prototype.moveTo = function () {
	    var moveDown = [0, 4];
	    var moveUp = [0, -4];
	    var moveRight = [4, 0];
	    var moveLeft = [-4, 0];

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
	        } else if (value === 39) {
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

	Game.prototype.update = function () {
	    this.moveTo();
	    this.ball.update(this.player1.paddle, this.player2.paddle);
	};

	Game.prototype.score = function (player) {
	    this.scorekeeper.increaseScore(player);
	    this.renderScore();
	    this.serveBall();
	};

	Game.prototype.over = function () {
	    if (this.scorekeeper.scores.player1 > 9) {
	        return this.endgame("Player 1");
	    } else if (this.scorekeeper.scores.player2 > 9) {
	        return this.endgame("Player 2");
	    } else {
	        return false;
	    }
	};

	Game.prototype.endgame = function (player) {
	    this.renderScore();
	    alert('Game over, ' + player + ' won');
	    return true;
	};

	Game.prototype.renderScore = function () {
	    var p1 = this.scorekeeper.scores.player1;
	    var p2 = this.scorekeeper.scores.player2;
	    player1Score.innerHTML = p1;
	    player2Score.innerHTML = p2;
	};

	Game.prototype.serveBall = function () {
	    this.ball.x = this.width / 2;
	    this.ball.y = this.height / 2;
	    this.ball.x_speed = 5;
	    this.ball.y_speed = 0.7;
	};

	module.exports = Game;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Paddle = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./paddle\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	function Player(context, x, y) {
	    this.x = x;
	    this.y = y;
	    this.paddle = new Paddle(context, this.x, this.y);
	}

	Player.prototype.render = function () {
	    this.paddle.render();
	};

	Player.prototype.update = function (coordinates) {
	    this.paddle.move(coordinates[0], coordinates[1]);
	};

	module.exports = Player;

/***/ },
/* 3 */,
/* 4 */
/***/ function(module, exports) {

	"use strict";

	function Ball(x, y, context, game) {
	    this.context = context;
	    this.game = game;
	    this.x = x || 0;
	    this.y = y || 0;
	    this.radius = 10;
	    this.x_speed = 5;
	    this.y_speed = 0;
	}

	Ball.prototype.render = function () {
	    this.context.beginPath();
	    this.context.arc(this.x, this.y, this.radius, 2 * Math.PI, false);
	    this.context.fillStyle = "#000000";
	    this.context.fill();
	};

	Ball.prototype.update = function (paddle1, paddle2) {
	    var left = this.x - this.radius;
	    var top = this.y - this.radius;
	    var right = this.x + this.radius;
	    var bottom = this.y + this.radius;
	    this.x += this.x_speed;
	    this.y += this.y_speed;

	    this.detectScore();
	    this.adjustSpeed();
	    this.detectPlayer2(paddle2, left, right, top, bottom);
	    this.detectPlayer1(paddle1, left, right, top, bottom);
	};

	Ball.prototype.detectPlayer2 = function (paddle2, left, right, top, bottom) {
	    if (right > this.game.width / 2) {
	        if (right > paddle2.x && top < paddle2.y + paddle2.height && bottom > paddle2.y) {
	            this.x_speed = -3;
	            this.y_speed += paddle2.y_speed / 2;
	            this.x += this.x_speed;
	        }
	    }
	};

	Ball.prototype.detectPlayer1 = function (paddle1, left, right, top, bottom) {
	    if (left < this.game.width / 2) {
	        if (left < paddle1.x + 10 && top < paddle1.y + paddle1.height && bottom > paddle1.y && right < paddle1.x) {
	            this.x_speed = 3;
	            this.y_speed += paddle1.y_speed / 2;
	            this.x += this.x_speed;
	        }
	    }
	};

	Ball.prototype.adjustSpeed = function () {
	    this.detectCeiling();
	    this.detectFloor();
	};

	Ball.prototype.detectCeiling = function () {
	    if (this.y - this.radius < 0) {
	        this.y = this.radius;
	        this.y_speed = -this.y_speed;
	    }
	};

	Ball.prototype.detectFloor = function () {
	    if (this.y + this.radius > this.game.height) {
	        this.y_speed = -this.y_speed;
	    }
	};

	Ball.prototype.detectScore = function () {
	    if (this.x + this.radius < 0) {
	        this.game.score(this.game.player1);
	    } else if (this.x - this.radius > this.game.width) {
	        this.game.score(this.game.player2);
	    }
	};

	module.exports = Ball;

/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";

	var Scorekeeper = function Scorekeeper(player1, player2) {
	    this.player1 = player1;
	    this.player2 = player2;
	    this.scores = { player1: 0,
	        player2: 0 };
	};

	Scorekeeper.prototype.increaseScore = function (player) {
	    if (player.x === this.player1.x) {
	        this.scores.player2 += 1;
	    } else {
	        this.scores.player1 += 1;
	    }
	};

	Scorekeeper.prototype.clearScores = function () {
	    this.scores = { player1: 0,
	        player2: 0 };
	};

	module.exports = Scorekeeper;

/***/ }
/******/ ]);