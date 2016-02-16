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

    it('should assign a x_speed', function(){
      assert.equal(paddle.x_speed, 0);
    });

    it('should assign a y_speed', function(){
      assert.equal(paddle.y_speed, 0);
    });
  });

  // describe('moveUp()', function() {
  //   context('On table', function() {
  //
  //       var paddle = new Paddle({});
  //       var currentYPosition = paddle.y;
  //
  //       it('should move paddle up', function() {
  //         assert.equal(paddle.y, currentYPosition);
  //         paddle.moveUp();
  //         assert.equal(paddle.y, currentYPosition - 1);
  //       });
  //
  //     });
  //   });
  //
  // describe('moveDown()', function() {
  //   context('On table', function() {
  //
  //       var paddle = new Paddle ({});
  //       var currentYPosition = paddle.y;
  //
  //       it('should move paddle down', function() {
  //         assert.equal(paddle.y, currentYPosition);
  //         paddle.moveDown();
  //         assert.equal(paddle.y,currentYPosition + 1);
  //       });
  //
  //     });
  //   });
});
