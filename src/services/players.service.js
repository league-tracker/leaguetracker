const players = require('../data/players');

const getPlayers = () => players;

const getPlayer = name => getPlayers().find(player => player.name === name);

function createPlayer(
    name,
    score = 1000,
    wins = 0,
    losses = 0,
) {
    return {
        name,
        score,
        wins,
        losses,
        rank: undefined,
    };
}

module.exports = {
    getPlayers,
    getPlayer,
    createPlayer,
};
