const express = require('express');
const { getClientes, addCliente } = require('../models/cliente');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const clientes = await getClientes();
        res.status(200).json(clientes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.post('/', async (req, res) => {
    try {
        const cliente = await addCliente(req.body);
        res.status(201).json(cliente);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;