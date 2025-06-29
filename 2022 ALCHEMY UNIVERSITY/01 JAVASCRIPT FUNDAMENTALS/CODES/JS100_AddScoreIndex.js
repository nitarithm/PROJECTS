function addScore(players) {
    const result =
    players.map(function(player, i)
    {
        if (i <= 2) {
            return {
                id: player.id,
                score: player.score + 10
            }
        } else {
            return {
                id: player.id,
                score: player.score
            }
        }
    });

    return result;
}

module.exports = addScore;