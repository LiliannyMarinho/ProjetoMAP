import { Router } from 'express';
import { query as _query } from '../config/db.js';

const router = Router();

router.post('/', async (req, res) => {
  const { FornecedorID, ProdutoID, Preco } = req.body;
  try {
    const query = `
      INSERT INTO OFERECE (FornecedorID, ProdutoID, Preco)
      VALUES ($1, $2, $3) RETURNING *;
    `;
    const result = await _query(query, [FornecedorID, ProdutoID, Preco]);
    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const result = await _query('SELECT * FROM OFERECE');
    res.status(200).json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put('/:fornecedorId/:produtoId', async (req, res) => {
  const { fornecedorId, produtoId } = req.params;
  const { Preco } = req.body;
  try {
    const query = `
      UPDATE OFERECE
      SET Preco = $1
      WHERE FornecedorID = $2 AND ProdutoID = $3 RETURNING *;
    `;
    const result = await _query(query, [Preco, fornecedorId, produtoId]);
    res.status(200).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete('/:fornecedorId/:produtoId', async (req, res) => {
  const { fornecedorId, produtoId } = req.params;
  try {
    const query = 'DELETE FROM OFERECE WHERE FornecedorID = $1 AND ProdutoID = $2 RETURNING *;';
    const result = await _query(query, [fornecedorId, produtoId]);
    res.status(200).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;