const { pool } = require('../config/db');

const createProdutoTable = async () => {
    const query = `
        CREATE TABLE IF NOT EXISTS PRODUTO (
            IDProduto INT PRIMARY KEY UNIQUE NOT NULL,
            Nome VARCHAR(100) NOT NULL,
            Descricao VARCHAR(250) NOT NULL,
            Preco DECIMAL(10, 2) NOT NULL,
            Quantidade INT NOT NULL
        );
    `;
    try {
        await pool.query(query);
        console.log("Tabela PRODUTO criada com sucesso");
    } catch (error) {
        console.error("Erro ao criar tabela PRODUTO", error);
    }
};

module.exports = { createProdutoTable };