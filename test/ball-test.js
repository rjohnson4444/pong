const assert = require('chai').assert;
const Ball   = require('../lib/ball');
const Paddle = require('../lib/paddle');

describe('Ball', function() {
  context('with default attributes', function() {

    let ball = new Ball();

    it('should assign an x coordinate', function() {
      assert.equal(ball.x, 0);
    });

    it('should assign a y coordinate', function() {
      assert.equal(ball.y, 0);
    });

    it('should assign a default x_speed', function(){
      assert.equal(ball.x_speed, 5);
    });

    it('should assign a default y_speed', function(){
      assert.equal(ball.y_speed, 0);
    });

    it('should assign a default radius', function(){
      assert.equal(ball.radius, 10);
    });
  });


   describe('detectPlayer1()', function() {
     context('should', function() {
        let ballX = 300;
        let ballY = 200;
        let paddleX = 10;
        let paddleY = 300;
        let game = { width: 400, height: 600 };
        let paddle = new Paddle(null, paddleX, paddleY);
        let right  = 15;
        let left   = 5;
        let top    = 300;
        let bottom = 310;
        let ball = new Ball(ballX, ballY, null, game);

        ball.x_speed = -3;

       it('reverse x_speed of ball if in contact with paddle of player 1', function() {
         assert.equal(ball.x_speed,-3);
         ball.detectPlayer1(paddle, left, right, top, bottom);
         assert.equal(ball.x_speed, 3);
       });

       it('not reverse x_speed if ball is not in contact with paddle of player 1', function() {
         ball.x_speed = -3;
         left = 20;
         top = 250;
         bottom = 310;

         assert.equal(ball.x_speed,-3);
         ball.detectPlayer1(paddle, left, right, top, bottom);
         assert.equal(ball.x_speed,-3);
       });
     });
   });

   describe('detectPlayer2()', function() {
     context('should', function() {
        let ballX = 300;
        let ballY = 200;
        let paddleX = 390;
        let paddleY = 300;
        let paddle = new Paddle(null, paddleX, paddleY);
        let game = { width: 400, height: 600 };
        let right  = 400;
        let left   = 410;
        let top    = 290;
        let bottom = 310;
        let ball = new Ball(ballX, ballY, null, game);

        ball.x_speed = 3;

       it('reverse x_speed of ball if in contact with paddle of player 2', function() {
         assert.equal(ball.x_speed, 3);
         ball.detectPlayer2(paddle, left, right, top, bottom);
         assert.equal(ball.x_speed, -3);
       });

       it('not reverse x_speed of ball if in contact with paddle of player 2', function() {
         ball.x_speed = 3;
         left = 20;
         top = 250;
         bottom = 310;

         assert.equal(ball.x_speed,3);
         ball.detectPlayer2(paddle, left, right, top, bottom);
         assert.equal(ball.x_speed,-3);
       });
     });
   });

   describe('detectCeiling()', function() {
     context('should', function() {

        let game = { width: 400, height: 600 };
        let ball = new Ball(200, -1, null, game);
        ball.y_speed = -5;

       it('reverse trajectory of ball if it hits the ceiling', function() {
         assert.equal(ball.y_speed,-5);
         ball.detectCeiling();
         assert.equal(ball.y_speed, 5);
       });

       it('not reverse trajectory of ball if it does not hit the ceiling', function() {
         ball.y = 20;
         ball.y_speed = -5;

         assert.equal(ball.y_speed,-5);
         ball.detectCeiling();
         assert.equal(ball.y_speed, -5);
       });
     });
   });

   describe('detectFloor()', function() {
     context('should', function() {

       let game = { width: 600, height: 400 };
       let ball = new Ball(200, -1, null, game);

       ball.y = 399;
       ball.y_speed = 5;

       it('reverse trajectory of ball if it hits the floor', function() {
         assert.equal(ball.y_speed, 5);
         ball.detectFloor();
         assert.equal(ball.y_speed, -5);
       });

       it('not reverse trajectory of ball if it does not hit the floor', function() {
         ball.y = 200;

         assert.equal(ball.y_speed, -5);
         ball.detectFloor();
         assert.equal(ball.y_speed, -5);
       });
     });
   });

   describe('detectScore()', function() {
     context('should', function() {

       let game = { width: 400, height: 600, scorekeeper: { scores: { player1: 0, player2: 0 } } };
       let ball = new Ball(600, 200, null, game);

       xit('detect if player 1 scores', function() {
           debugger;
         ball.detectScore();
         assert.equal(ball.x, 0);
       });

       xit('detect if player 2 scores', function() {
         assert.equal(ball.y, 0);
       });
     });
   });
});
