const express = require('express');
const router = express.Router();
const { pool } = require('../config/db');

// Exemplo de um endpoint GET
router.get('/', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM clientes');
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erro ao buscar clientes' });
    }
});

// Exemplo de um endpoint POST
router.post('/', async (req, res) => {
    const { nome, email, telefone } = req.body;
    try {
        const result = await pool.query(
            'INSERT INTO clientes (nome, email, telefone) VALUES ($1, $2, $3) RETURNING *',
            [nome, email, telefone]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erro ao adicionar cliente' });
    }
});

module.exports = router;