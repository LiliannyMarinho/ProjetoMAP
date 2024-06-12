import { Router } from 'express';
import { query as _query } from '../config/db.js';

const router = Router();

router.post('/', async (req, res) => {
  const { VeterinarioID, AnimalID, DataTratamento, Tratamento } = req.body;
  try {
    const query = `
      INSERT INTO TRATA (VeterinarioID, AnimalID, DataTratamento, Tratamento)
      VALUES ($1, $2, $3, $4) RETURNING *;
    `;
    const result = await _query(query, [VeterinarioID, AnimalID, DataTratamento, Tratamento]);
    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const result = await _query('SELECT * FROM TRATA');
    res.status(200).json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put('/:veterinarioId/:animalId/:dataTratamento', async (req, res) => {
  const { veterinarioId, animalId, dataTratamento } = req.params;
  const { Tratamento } = req.body;
  try {
    const query = `
      UPDATE TRATA
      SET Tratamento = $1
      WHERE VeterinarioID = $2 AND AnimalID = $3 AND DataTratamento = $4 RETURNING *;
    `;
    const result = await _query(query, [Tratamento, veterinarioId, animalId, dataTratamento]);
    res.status(200).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete('/:veterinarioId/:animalId/:dataTratamento', async (req, res) => {
  const { veterinarioId, animalId, dataTratamento } = req.params;
  try {
    const query = 'DELETE FROM TRATA WHERE VeterinarioID = $1 AND AnimalID = $2 AND DataTratamento = $3 RETURNING *;';
    const result = await _query(query, [veterinarioId, animalId, dataTratamento]);
    res.status(200).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;