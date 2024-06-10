import { Router } from 'express';
import { query as _query } from '../config/db.js';

const router = Router();

router.post('/', async (req, res) => {
  const { VendaID, ProdutoID, Quantidade } = req.body;
  try {
    const query = `
      INSERT INTO CONTEM (VendaID, ProdutoID, Quantidade)
      VALUES ($1, $2, $3) RETURNING *;
    `;
    const result = await _query(query, [VendaID, ProdutoID, Quantidade]);
    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const result = await _query('SELECT * FROM CONTEM');
    res.status(200).json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put('/:vendaId/:produtoId', async (req, res) => {
  const { vendaId, produtoId } = req.params;
  const { Quantidade } = req.body;
  try {
    const query = `
      UPDATE CONTEM
      SET Quantidade = $1
      WHERE VendaID = $2 AND ProdutoID = $3 RETURNING *;
    `;
    const result = await _query(query, [Quantidade, vendaId, produtoId]);
    res.status(200).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete('/:vendaId/:produtoId', async (req, res) => {
  const { vendaId, produtoId } = req.params;
  try {
    const query = 'DELETE FROM CONTEM WHERE VendaID = $1 AND ProdutoID = $2 RETURNING *;';
    const result = await _query(query, [vendaId, produtoId]);
    res.status(200).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;