const { app, expect } = require('../setup');

describe('/players', function () {
    describe('GET', function () {
        describe('200 case', function () {
            const expectedResStatus = 200;
            it(`returns status ${expectedResStatus} and a body containing a list of players`, async function () {
                const res = await app().get('/players');
                expect(res.status).to.equal(expectedResStatus);
                expect(res.body).to.be.an('array');
                expect(res.body).to.all.have.property('name');
            });
        });
    });

    describe('/{id}', function () {
        const reqParamId = 'Craig';
        const players = [
            {
                name: 'Craig', score: 1088, wins: 34, losses: 24, deltas: [-15, 17, 16, 13, -14, -13, 14, 14, 16, -16, 17, -16, -13, -18, 10, 13, -14, 19, -19, 18, -16, 17, 14, 16, -15, -19, 15, 16, 15, -16, 11, 11, 19, -20, 13, 14, 18, 16, -20, 10, -18, 14, 16, -20, 15, -21, 13, -20, -19, 12, -18, -18, -21, 15, -15, 16, 14, 15],
            }, {
                name: 'Richard', score: 1081, wins: 10, losses: 5, deltas: [16, -15, -13, 18, -16, 17, -17, 16, 15, 19, -15, 15, 14, 12, 15],
            }, {
                name: 'Jack', score: 1051, wins: 16, losses: 13, deltas: [-16, -17, -15, -14, -13, -14, 16, 16, 16, 16, 13, 18, 15, -14, -19, 19, 17, -18, 15, -16, -20, 15, -12, 19, 17, 14, -17, 16, 14],
            }, {
                name: 'Luke', score: 1049, wins: 14, losses: 10, deltas: [16, 15, 16, -16, -18, 14, 19, 19, 17, -18, 15, -17, 20, 12, -16, -19, -17, 13, 15, 11, 17, -19, -16, -14],
            }, {
                name: 'Nik', score: 1034, wins: 14, losses: 14, deltas: [-15, 18, 15, -13, -17, 20, -15, -16, -15, -15, 18, 16, 20, -19, -17, -13, 21, -13, -20, 19, -12, -18, 18, 21, 15, 15, 17, 19],
            }, {
                name: 'James', score: 1015, wins: 1, losses: 0, deltas: [15],
            }, {
                name: 'Matt', score: 1001, wins: 18, losses: 16, deltas: [16, -15, 14, 14, -22, -20, -17, 14, -16, -15, 19, -15, 16, 15, 16, 17, 18, 11, -19, 20, 13, 12, -14, -18, -16, 10, 18, -14, -19, -15, -18, 15, 11, -15],
            }, {
                name: 'Judith', score: 985, wins: 16, losses: 21, deltas: [-17, -16, -13, -14, -16, -16, -13, -10, 22, 20, -14, -15, -16, -11, -11, 19, 20, -12, 18, 16, 20, -10, -18, -14, 15, 18, 21, 13, 20, 19, 12, 18, 18, -21, -15, -15, -17],
            }, {
                name: 'Liam', score: 966, wins: 10, losses: 13, deltas: [-16, 15, 13, -14, -16, -16, 17, -16, -15, -10, 22, 16, 17, -15, -17, -11, 18, 15, -18, -20, 18, 13, -14],
            }, {
                name: 'Matthew', score: 950, wins: 27, losses: 29, deltas: [16, 15, 15, 13, 14, 13, 16, -17, 16, 13, 10, 13, 14, -19, -19, -17, -22, -20, 16, -17, 17, -16, 15, -19, 15, -15, -17, 11, -18, -11, -19, -20, -13, -12, -14, -15, 18, -10, 18, 14, 19, -21, -13, 20, -19, -12, 18, -18, 21, -15, -15, -14, 17, 19, -14, 15],
            }, {
                name: 'Danny', score: 949, wins: 8, losses: 11, deltas: [-16, -16, 17, 16, 14, -15, -14, 16, 17, -18, -16, -19, 19, 17, -15, 14, -17, -19, -16],
            }, {
                name: 'Beth', score: 917, wins: 1, losses: 7, deltas: [-16, -13, -14, -17, 20, -11, -17, -15],
            }, {
                name: 'Jamie', score: 914, wins: 3, losses: 9, deltas: [-13, 12, -18, -16, -18, -12, 19, -15, -18, -13, -11, 17],
            },
        ];
        describe('GET', function () {
            describe('200 case', function () {
                const expectedResStatus = 200;
                const expectedResBody = players.find(player => player.name === 'Craig');
                it(`returns status ${expectedResStatus} and a body containing a single player`, async function () {
                    const res = await app()
                        .get(`/players/${reqParamId}`)
                        .send(players);
                    expect(res.status).to.equal(expectedResStatus);
                    expect(res.body).to.deep.equal(expectedResBody);
                });
            });
        });
    });
});
