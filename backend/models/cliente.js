const pool = require('../config/db');

const createClienteTable = async () => {
    const query = `
        CREATE TYPE IF NOT EXISTS ENDERECO AS (
            Rua VARCHAR(100),
            Bairro VARCHAR(50),
            Cidade VARCHAR(50),
            Estado CHAR(2),
            CEP CHAR(8)
        );

        CREATE TABLE IF NOT EXISTS CLIENTE (
            IDCliente SERIAL PRIMARY KEY,
            Nome VARCHAR(100) NOT NULL,
            CPF CHAR(11) NOT NULL,
            Endereco ENDERECO NOT NULL,
            Telefone VARCHAR(20) NOT NULL,
            Email VARCHAR(100) NOT NULL
        );
    `;
    await pool.query(query);
};

const getClientes = async () => {
    const query = 'SELECT * FROM CLIENTE';
    const res = await pool.query(query);
    return res.rows;
};

const addCliente = async (cliente) => {
    const query = `
        INSERT INTO CLIENTE (Nome, CPF, Endereco, Telefone, Email)
        VALUES ($1, $2, $3, $4, $5)
        RETURNING *;
    `;
    const values = [
        cliente.nome,
        cliente.cpf,
        cliente.endereco,
        cliente.telefone,
        cliente.email,
    ];
    const res = await pool.query(query, values);
    return res.rows[0];
};

module.exports = {
    createClienteTable,
    getClientes,
    addCliente,
};