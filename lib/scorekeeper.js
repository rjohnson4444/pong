let Scorekeeper = function (player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
    this.scores = { player1: 0,
                    player2: 0 };
}

Scorekeeper.prototype.increaseScore = function (player) {
    if (player.x == this.player1.x) {
        this.scores.player2 += 1;
    } else {
        this.scores.player1 += 1;
    }
}

Scorekeeper.prototype.clearScores = function () {
    let player1 = this.player1
    let player2 = this.player2
    this.scores = { player1: 0,
                    player2: 0 };
}

module.exports = Scorekeeper;

