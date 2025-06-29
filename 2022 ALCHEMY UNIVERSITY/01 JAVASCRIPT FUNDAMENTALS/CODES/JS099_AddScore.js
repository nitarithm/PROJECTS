function addScore(players) {
    const result =
    players.map(function(players)
    {
        return {
            id: players.id,
            score: players.score + 10
        }
    });

    return result;
}

module.exports = addScore;