import { Router } from 'express';
import { query as _query } from '../config/db.js';

const router = Router();

// Inserir um cliente
router.post('/', async (req, res) => {
  const { IDCliente, Nome, CPF, Endereco, Telefone, Email } = req.body;
  try {
    const query = `
      INSERT INTO CLIENTE (IDCliente, Nome, CPF, Endereco, Telefone, Email)
      VALUES ($1, $2, $3, $4, $5, $6) RETURNING *;
    `;
    const result = await _query(query, [IDCliente, Nome, CPF, Endereco, Telefone, Email]);
    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Obter todos os clientes
router.get('/', async (req, res) => {
  try {
    const result = await _query('SELECT * FROM CLIENTE');
    res.status(200).json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Atualizar um cliente
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { Nome, CPF, Endereco, Telefone, Email } = req.body;
  try {
    const query = `
      UPDATE CLIENTE
      SET Nome = $1, CPF = $2, Endereco = $3, Telefone = $4, Email = $5
      WHERE IDCliente = $6 RETURNING *;
    `;
    const result = await _query(query, [Nome, CPF, Endereco, Telefone, Email, id]);
    res.status(200).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Remover um cliente
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const query = 'DELETE FROM CLIENTE WHERE IDCliente = $1 RETURNING *;';
    const result = await _query(query, [id]);
    res.status(200).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;