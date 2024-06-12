import { Router } from 'express';
import { query as _query } from '../config/db.js';

const router = Router();

router.post('/', async (req, res) => {
  const { IDFuncionario, Nome, CPF, Cargo, Telefone, Email, Salario } = req.body;
  try {
    const query = `
      INSERT INTO FUNCIONARIO (IDFuncionario, Nome, CPF, Cargo, Telefone, Email, Salario)
      VALUES ($1, $2, $3, $4, $5) RETURNING *;
    `;
    const result = await _query(query, [IDFuncionario, Nome, CPF, Cargo, Telefone, Email, Salario]);
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
      SELECT * FROM FUNCIONARIO
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
  const { Nome, CPF, Cargo, Telefone, Email, Salario } = req.body;
  try {
    const query = `
      UPDATE FUNCIONARIO
      SET Nome = $1, CPF = $2 Cargo = $3, Telefone = $4, Email = $5, Salario = $6
      WHERE IDFuncionario = $5 RETURNING *;
    `;
    const result = await _query(query, [Nome, CPF, Cargo, Telefone, Email, Salario, id]);
    res.status(200).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const query = 'DELETE FROM FUNCIONARIO WHERE IDFuncionario = $1 RETURNING *;';
    const result = await _query(query, [id]);
    res.status(200).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;