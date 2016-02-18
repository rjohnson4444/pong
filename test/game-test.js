 const assert = require('chai').assert;
 const Game   = require('../lib/game');

 describe('Game', function() {
   context('has attributes', function() {

     let canvas = { width: 600, height: 400 };
     let context = {};
     let request = {};

     var game = new Game(context, canvas, request);

     it('context', function() {
       assert(game.context);
     });

     it('request', function() {
       assert(game.request);
     });

     it('width', function() {
       assert.equal(game.width, 600);
     });

     it('height', function() {
       assert.equal(game.height,400);
     });

     it('player1', function() {
       assert(game.player1.paddle);
     });

     it('player2', function() {
       assert(game.player2.paddle);
     });

     it('ball', function() {
       assert(game.ball);
     });

     it('scorekeeper', function() {
       assert(game.scorekeeper);
     });

     it('gameObjects', function() {
       assert.equal(game.gameObjects.length, 3);
     });
   });

   describe('moveTo()', function() {
     context('should', function() {

       let canvas = { width: 600, height: 400 };
       let context = {};
       let request = {};
       var game = new Game(context, canvas, request);

       it('moves player2 down', function() {
         let keysDown = { 40: true };
         let player2CurrentY = game.player2.y;
         game.moveTo(keysDown);

         assert.equal(game.player2.paddle.y, player2CurrentY + 4);
       });

       it('moves player1 down', function() {
         let keysDown = { 83: true };
         let player1CurrentY = game.player1.y;
         game.moveTo(keysDown);

         assert.equal(game.player1.paddle.y, player1CurrentY + 4);
       });

       it('moves player2 up', function() {
         let keysDown = { 38: true };
         let player2CurrentY = game.player2.paddle.y;
         game.moveTo(keysDown);

         assert.equal(game.player2.paddle.y, player2CurrentY - 4);
       });

       it('moves player1 up', function() {
         let keysDown = { 87: true };
         let player1CurrentY = game.player1.paddle.y;
         game.moveTo(keysDown);

         assert.equal(game.player1.paddle.y, player1CurrentY - 4);
       });
    });
  });
});
