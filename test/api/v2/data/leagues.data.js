const league1 = {
    id: 1,
    name: 'league 1',
    description: 'descriptive league 1',
};
const league2 = {
    id: 2,
    name: 'league 2',
    description: 'descriptive league 2',
};
const league3 = {
    id: 3,
    name: 'league 3',
    description: 'descriptive league 3',
};
const league4 = {
    id: 4,
    name: 'league 4',
    description: 'descriptive league 4',
};
const updatableLeague = {
    id: 1,
    name: 'premier league 1',
    description: 'premier descriptive league 1',
};

module.exports = {
    seed: [league1, league2, league3],
    existingLeague: league1,
    insertableLeague: league4,
    updatableLeague,
};