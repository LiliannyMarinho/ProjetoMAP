import { Router } from 'express';
import { query as _query } from '../config/db.js';

const router = Router();

router.post('/', async (req, res) => {
  const { IDVenda, ClienteID, DataVenda, Total } = req.body;
  try {
    const query = `
      INSERT INTO VENDAS (IDVenda, ClienteID, DataVenda, Total)
      VALUES ($1, $2, $3, $4) RETURNING *;
    `;
    const result = await _query(query, [IDVenda, ClienteID, DataVenda, Total]);
    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const result = await _query('SELECT * FROM VENDAS');
    res.status(200).json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { ClienteID, DataVenda, Total } = req.body;
  try {
    const query = `
      UPDATE VENDAS
      SET ClienteID = $1, DataVenda = $2, Total = $3
      WHERE IDVenda = $4 RETURNING *;
    `;
    const result = await _query(query, [ClienteID, DataVenda, Total, id]);
    res.status(200).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const query = 'DELETE FROM VENDAS WHERE IDVenda = $1 RETURNING *;';
    const result = await _query(query, [id]);
    res.status(200).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;