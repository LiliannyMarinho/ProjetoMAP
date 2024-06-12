import { Router } from 'express';
import { query as _query } from '../config/db.js';

const router = Router();

router.post('/', async (req, res) => {
  const { IDVeterinario, Nome, CPF, Telefone, Especialidade } = req.body;
  try {
    const query = `
      INSERT INTO VETERINARIO (IDVeterinario, Nome, CPF, Telefone, Especialidade)
      VALUES ($1, $2, $3, $4, $5) RETURNING *;
    `;
    const result = await _query(query, [IDVeterinario, Nome, CPF, Telefone, Especialidade]);
    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const result = await _query('SELECT * FROM VETERINARIO');
    res.status(200).json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { Nome, CPF, Telefone, Especialidade } = req.body;
  try {
    const query = `
      UPDATE VETERINARIO
      SET Nome = $1, CPF = $2, Telefone = $3, Especialidade = $4
      WHERE IDVeterinario = $5 RETURNING *;
    `;
    const result = await _query(query, [Nome, CPF, Telefone, Especialidade, id]);
    res.status(200).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const query = 'DELETE FROM VETERINARIO WHERE IDVeterinario = $1 RETURNING *;';
    const result = await _query(query, [id]);
    res.status(200).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;