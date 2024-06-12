import { Router } from 'express';
import { query as _query } from '../config/db.js';

const router = Router();

router.post('/', async (req, res) => {
  const { IDProduto, Nome, Descricao, Preco, Estoque } = req.body;
  try {
    const query = `
      INSERT INTO PRODUTO (IDProduto, Nome, Descricao, Preco, Estoque)
      VALUES ($1, $2, $3, $4, $5) RETURNING *;
    `;
    const result = await _query(query, [IDProduto, Nome, Descricao, Preco, Estoque]);
    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/', async (req, res) => {
  const limit = parseInt(req.query.limit) || 10;
  const offset = parseInt(req.query.offset) || 0;

  try {
    const query = `
      SELECT * FROM PRODUTO
      LIMIT $1 OFFSET $2;
    `;
    const result = await _query(query, [limit, offset]);
    res.status(200).json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { Nome, Descricao, Preco, Estoque } = req.body;
  try {
    const query = `
      UPDATE PRODUTO
      SET Nome = $1, Descricao = $2, Preco = $3, Estoque = $4
      WHERE IDProduto = $5 RETURNING *;
    `;
    const result = await _query(query, [Nome, Descricao, Preco, Estoque, id]);
    res.status(200).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const query = 'DELETE FROM PRODUTO WHERE IDProduto = $1 RETURNING *;';
    const result = await _query(query, [id]);
    res.status(200).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;