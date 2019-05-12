const tableName = 'leagues';
const data = require('../test/api/v2/data/leagues.data');

exports.seed = async function (knex) {
    await knex(tableName).del();
    await knex(tableName).insert(data.seed);
};