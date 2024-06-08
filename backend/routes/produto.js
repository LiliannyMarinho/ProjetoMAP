const express = require('express');
const router = express.Router();
const { pool } = require('../config/db');

router.get('/', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM produtos');
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erro ao buscar produtos.' });
    }
});

router.post('/', async (req, res) => {
    const { nome, descricao, preco, quantidade } = req.body;
    try {
        const result = await pool.query(
            'INSERT INTO produto (nome, descricao, preco, quantidade) VALUES ($1, $2, $3, $4) RETURNING *',
            [nome, descricao, preco, quantidade]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erro ao adicionar produto.' });
    }
});

router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { nome, descricao, preco, quantidade } = req.body;
    try {
        const result = await pool.query(
            'UPDATE produto SET nome = $1, descricao = $2, preco = $3, quantidade = $4 WHERE id = $5 RETURNING *',
            [nome, descricao, preco, quantidade, id]
        );
        res.status(200).json(result.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erro ao atualizar produto.' });
    }
});

router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query(
            'DELETE FROM produto WHERE id = $1 RETURNING *',
            [id]
        );
        res.status(200).json({ message: 'Produto deletado com sucesso', produto: result.rows[0] });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erro ao deletar produto.' });
    }
});

module.exports = router;