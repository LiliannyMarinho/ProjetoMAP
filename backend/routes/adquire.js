import { Router } from 'express';
import { query as _query } from '../config/db.js';

const router = Router();

router.post('/', async (req, res) => {
  const { ClienteID, ProdutoID, Quantidade, DataCompra } = req.body;
  try {
    const query = `
      INSERT INTO ADQUIRE (ClienteID, ProdutoID, Quantidade, DataCompra)
      VALUES ($1, $2, $3, $4) RETURNING *;
    `;
    const result = await _query(query, [ClienteID, ProdutoID, Quantidade, DataCompra]);
    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const result = await _query('SELECT * FROM ADQUIRE');
    res.status(200).json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put('/:clienteId/:produtoId', async (req, res) => {
  const { clienteId, produtoId } = req.params;
  const { Quantidade, DataCompra } = req.body;
  try {
    const query = `
      UPDATE ADQUIRE
      SET Quantidade = $1, DataCompra = $2
      WHERE ClienteID = $3 AND ProdutoID = $4 RETURNING *;
    `;
    const result = await _query(query, [Quantidade, DataCompra, clienteId, produtoId]);
    res.status(200).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


router.delete('/:clienteId/:produtoId', async (req, res) => {
  const { clienteId, produtoId } = req.params;
  try {
    const query = 'DELETE FROM ADQUIRE WHERE ClienteID = $1 AND ProdutoID = $2 RETURNING *;';
    const result = await _query(query, [clienteId, produtoId]);
    res.status(200).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;