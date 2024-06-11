import { Router } from 'express';
import { query as _query } from '../config/db.js';

const router = Router();

router.post('/', async (req, res) => {
  const { IDAnimal, Nome, Especie, Raca, Idade, Sexo, ClienteID } = req.body;
  try {
    const query = `
      INSERT INTO ANIMAL (IDAnimal, Nome, Especie, Raca, Idade, Sexo, ClienteID)
      VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *;
    `;
    const result = await _query(query, [IDAnimal, Nome, Especie, Raca, Idade, Sexo, ClienteID]);
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
      SELECT * FROM ANIMAL
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
  const { Nome, Especie, Raca, Idade, Sexo, ClienteID } = req.body;
  try {
    const query = `
      UPDATE ANIMAL
      SET Nome = $1, Especie = $2, Raca = $3, Idade = $4, Sexo = $5, ClienteID = $6
      WHERE IDAnimal = $7 RETURNING *;
    `;
    const result = await _query(query, [Nome, Especie, Raca, Idade, Sexo, ClienteID, id]);
    res.status(200).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const query = 'DELETE FROM ANIMAL WHERE IDAnimal = $1 RETURNING *;';
    const result = await _query(query, [id]);
    res.status(200).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;