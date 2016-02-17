const assert = require('chai').assert;
const Ball   = require('../lib/ball');

describe('Ball', function() {
  context('with default attributes', function() {

    let ball = new Ball();

    it('should assign an x coordinate', function() {
      assert.equal(ball.x, 0);
    });

    it('should assign a y coordinate', function() {
      assert.equal(ball.y, 0);
    });

    it('should assign a x_speed', function(){
      assert.equal(ball.x_speed, 5);
    });

    it('should assign a y_speed', function(){
      assert.equal(ball.y_speed, 0);
    });

    it('should assign a default radius', function(){
      assert.equal(ball.radius, 10);
    });
  });


   describe('detectPlayer1()', function() {
     context('should', function() {

        let ball = new Ball();

       it('should assign an x coordinate', function() {
         assert.equal(ball.x, 0);
       });

       it('should assign a y coordinate', function() {
         assert.equal(ball.y, 0);
       });
     });
   });

   describe('detectPlayer2()', function() {
     context('should', function() {

        let ball = new Ball();

       it('should assign an x coordinate', function() {
         assert.equal(ball.x, 0);
       });

       it('should assign a y coordinate', function() {
         assert.equal(ball.y, 0);
       });
     });
   });

   describe('adjustSpeed()', function() {
     context('should', function() {

        let ball = new Ball();

       it('should assign an x coordinate', function() {
         assert.equal(ball.x, 0);
       });

       it('should assign a y coordinate', function() {
         assert.equal(ball.y, 0);
       });
     });
   });

   describe('detectCeiling()', function() {
     context('should', function() {

        let ball = new Ball();

       it('should assign an x coordinate', function() {
         assert.equal(ball.x, 0);
       });

       it('should assign a y coordinate', function() {
         assert.equal(ball.y, 0);
       });
     });
   });

   describe('detectFloor()', function() {
     context('should', function() {

        let ball = new Ball();

       it('should assign an x coordinate', function() {
         assert.equal(ball.x, 0);
       });

       it('should assign a y coordinate', function() {
         assert.equal(ball.y, 0);
       });
     });
   });

   describe('detectScore()', function() {
     context('should', function() {

        let ball = new Ball();

       it('should assign an x coordinate', function() {
         assert.equal(ball.x, 0);
       });

       it('should assign a y coordinate', function() {
         assert.equal(ball.y, 0);
       });
     });
   });
});
