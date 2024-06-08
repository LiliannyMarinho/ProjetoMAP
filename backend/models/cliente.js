const { pool } = require('../config/db');

const createClienteTable = async () => {
    const query = `
        CREATE TABLE IF NOT EXISTS CLIENTE (
            IDCliente SERIAL PRIMARY KEY,
            Nome VARCHAR(100) NOT NULL,
            CPF CHAR(11) NOT NULL,
            Endereco JSONB NOT NULL,
            Telefone VARCHAR(20) NOT NULL,
            Email VARCHAR(100) NOT NULL
        );
    `;
    try {
        await pool.query(query);
        console.log("Tabela CLIENTE criada com sucesso");
    } catch (error) {
        console.error("Erro ao criar tabela CLIENTE", error);
    }
};

module.exports = { createClienteTable };