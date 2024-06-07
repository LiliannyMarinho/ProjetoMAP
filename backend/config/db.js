const { Pool } = require('pg');

const pool = new Pool({
    user: 'root',
    host: 'localhost',
    database: 'projeto_map',
    password: 'Thmpv07',
    port: 5432,
});

pool.on('connect', () => {
    console.log('Conectado ao banco de dados PostgreSQL');
});

module.exports = pool;