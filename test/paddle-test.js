const assert = require('chai').assert;
const Paddle   = require('../lib/paddle');

describe('Paddle', function() {
  context('with default attributes', function() {

    var paddle = new Paddle(null, 5, 5, 10, 40);

    it('should assign an x coordinate', function() {
      assert.equal(paddle.x, 5);
    });

    it('should assign a y coordinate', function() {
      assert.equal(paddle.y, 5);
    });

    it('should assign a height', function(){
      assert.equal(paddle.height, 40);
    });

    it('should assign a width', function(){
      assert.equal(paddle.width, 10);
    });

    it('should assign a y_speed', function(){
      assert.equal(paddle.y_speed, 0);
    });
  });

   describe('move()', function() {
     context('should', function() {

         var paddle = new Paddle(null, 10, 20);
         var currentYPosition = paddle.y;

         it('move paddle up', function() {
           assert.equal(paddle.y, currentYPosition);
           paddle.move(-5);
           assert.equal(paddle.y, currentYPosition - 5);
         });

         it('move paddle down', function() {
           var currentYPosition = paddle.y;
           assert.equal(paddle.y, currentYPosition);
           paddle.move(5);
           assert.equal(paddle.y, currentYPosition + 5);
         });
       });
     });

   describe('ifAtTop()', function() {
     context('should', function() {

         var canvas = { height: 600 }
         var paddle = new Paddle (null, 10, -1);
         paddle.y_speed = -10
         var currentYspeed = paddle.y_speed;

         it('stop movement of paddle', function() {
           assert.equal(paddle.y_speed, currentYspeed);
           paddle.ifAtTop();
           assert.equal(paddle.y_speed, 0);
         });

       });
     });

   describe('ifAtBottom()', function() {
     context('should', function() {

         var canvas = { height: 400 }
         var paddle = new Paddle (null, 10, 401);
         paddle.y_speed = 10
         var currentYspeed = paddle.y_speed;

         it('stop movement of paddle', function() {
           assert.equal(paddle.y_speed, currentYspeed);
           paddle.ifAtBottom();
           assert.equal(paddle.y_speed,0);
         });

       });
     });
});
