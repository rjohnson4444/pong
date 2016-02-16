const assert = require('chai').assert;
const Scorekeeper = require('../lib/scorekeeper');
const Player = require('../lib/player');

describe('Scorekeeper', function(){
    context('attribues should', function() {
      let player1_x = 0;
      let player2_x = 10;
      let player1_y = 0;
      let player2_y = 0;
      let player1 = new Player(player1_x, player1_y);
      let player2 = new Player(player2_x, player2_y);
      let scorekeeper = new Scorekeeper(player1, player2);

      it('assign a player 1', function() {
          assert.equal(scorekeeper.player1, player1);
      });

      it('assign a player 2', function() {
          assert.equal(scorekeeper.player2, player2);
      });

      it('have a player score defalut of 0', function() {
          assert.equal(scorekeeper.scores.player1, 0);
          assert.equal(scorekeeper.scores.player2, 0);
      });
    });


    describe('increaseScore()', function(){
        context('should', function() {
          let player1_x = 0;
          let player2_x = 10;
          let player1_y = 15;
          let player2_y = 15;
          let player1 = new Player(null, player1_x, player1_y);
          let player2 = new Player(null, player2_x, player2_y);
          let scorekeeper = new Scorekeeper(player1, player2);

          it('increase score of player that is not passed in by 1 point', function() {
              assert.equal(scorekeeper.scores.player2, 0);
              assert.equal(scorekeeper.scores.player1, 0);

              scorekeeper.increaseScore(player1);
              scorekeeper.increaseScore(player2);

              assert.equal(scorekeeper.scores.player1, 1);
              assert.equal(scorekeeper.scores.player2, 1);
          });

          it('increase each by 1 when called', function() {
              scorekeeper.scores.player1 = 0;
              scorekeeper.scores.player2 = 0;

              assert.equal(scorekeeper.scores.player1, 0);
              assert.equal(scorekeeper.scores.player2, 0);

              scorekeeper.increaseScore(scorekeeper.player1);
              scorekeeper.increaseScore(scorekeeper.player2);

              assert.equal(scorekeeper.scores.player1, 1);
              assert.equal(scorekeeper.scores.player2, 1);
          });

          it('increase score of player that is not passed in when called multiple times', function() {
              scorekeeper.scores.player1 = 0;
              scorekeeper.scores.player2 = 0;

              assert.equal(scorekeeper.scores.player1, 0);
              assert.equal(scorekeeper.scores.player2, 0);

              scorekeeper.increaseScore(player1);
              scorekeeper.increaseScore(player2);
              scorekeeper.increaseScore(player1);

              assert.equal(scorekeeper.scores.player2, 2);
              assert.equal(scorekeeper.scores.player1, 1);
          });

        });
    });

    describe('clearScores()', function(){
        context('should', function() {
          let player1_x = 0;
          let player2_x = 10;
          let player1_y = 0;
          let player2_y = 0;
          let player1 = new Player(player1_x, player1_y);
          let player2 = new Player(player2_x, player2_y);
          let scorekeeper = new Scorekeeper(player1, player2);

         xit('reset scores to 0 for both players', function() {
              scorekeeper.increaseScore(player1);
              scorekeeper.increaseScore(player2);
              scorekeeper.increaseScore(player1);

              assert.equal(scorekeeper.scores.player2, 2);
              assert.equal(scorekeeper.scores.player2, 1);

              scorekeeper.clearScores();

              assert.equal(scorekeeper.scores.player1, 0);
              assert.equal(scorekeeper.scores.player2, 0);
          });
        });
    });
});
