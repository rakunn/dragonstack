const { Pool } = require('pg');

const configuration = require('./secrets/configuration');

const pool = new Pool(configuration);

module.exports = pool;