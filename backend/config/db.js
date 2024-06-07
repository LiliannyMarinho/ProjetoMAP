const { Pool } = require('pg');

const pool = new Pool({
    user: 'seu_usuario',
    host: 'localhost',
    database: 'seu_banco',
    password: 'sua_senha',
    port: 5432,
});

pool.on('connect', () => {
    console.log('Conectado ao banco de dados PostgreSQL');
});

module.exports = pool;