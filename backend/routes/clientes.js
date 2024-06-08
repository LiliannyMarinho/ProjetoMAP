const express = require('express');
const router = express.Router();
const { pool } = require('../config/db');

// Definindo uma rota de exemplo
router.get('/', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM CLIENTE');
        res.status(200).json(result.rows);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar clientes' });
    }
});

module.exports = router;