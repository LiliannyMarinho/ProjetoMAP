import { Router } from 'express';
import { query as _query } from '../config/db.js';

const router = Router();

router.post('/', async (req, res) => {
  const { IDConsulta, VeterinarioID, AnimalID, DataConsulta, Diagnostico, Tratamento } = req.body;
  try {
    const query = `
      INSERT INTO CONSULTA (IDConsulta, VeterinarioID, AnimalID, DataConsulta, Diagnostico, Tratamento)
      VALUES ($1, $2, $3, $4, $5, $6) RETURNING *;
    `;
    const result = await _query(query, [IDConsulta, VeterinarioID, AnimalID, DataConsulta, Diagnostico, Tratamento]);
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
      SELECT * FROM CONSULTA
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
  const { VeterinarioID, AnimalID, DataConsulta, Diagnostico, Tratamento } = req.body;
  try {
    const query = `
      UPDATE CONSULTA
      SET VeterinarioID = $1, AnimalID = $2, DataConsulta = $3, Diagnostico = $4, Tratamento = $5
      WHERE IDConsulta = $6 RETURNING *;
    `;
    const result = await _query(query, [VeterinarioID, AnimalID, DataConsulta, Diagnostico, Tratamento, id]);
    res.status(200).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const query = 'DELETE FROM CONSULTA WHERE IDConsulta = $1 RETURNING *;';
    const result = await _query(query, [id]);
    res.status(200).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;