import { Router } from 'express';
import { query as _query } from '../config/db.js';

const router = Router();

router.post('/', async (req, res) => {
  const { IDFornecedor, Nome, Telefone, Endereco } = req.body;
  try {
    const query = `
      INSERT INTO FORNECEDOR (IDFornecedor, Nome, Telefone, Endereco)
      VALUES ($1, $2, $3, $4) RETURNING *;
    `;
    const result = await _query(query, [IDFornecedor, Nome, Telefone, Endereco]);
    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const result = await _query('SELECT * FROM FORNECEDOR');
    res.status(200).json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { Nome, Telefone, Endereco } = req.body;
  try {
    const query = `
      UPDATE FORNECEDOR
      SET Nome = $1, Telefone = $2, Endereco = $3
      WHERE IDFornecedor = $4 RETURNING *;
    `;
    const result = await _query(query, [Nome, Telefone, Endereco, id]);
    res.status(200).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const query = 'DELETE FROM FORNECEDOR WHERE IDFornecedor = $1 RETURNING *;';
    const result = await _query(query, [id]);
    res.status(200).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;