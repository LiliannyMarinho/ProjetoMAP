const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'projeto_map',
    password: 'Thmpv07',
    port: 5432,
});

pool.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados PostgreSQL', err);
    } else {
        console.log('Conectado ao banco de dados PostgreSQL');
    }
});

module.exports = { pool };
