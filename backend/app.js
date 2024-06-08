const express = require('express');
const cors = require('cors');
const clientesRouter = require('./routes/clientes');
const produtoRouter = require('./routes/produto');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/clientes', clientesRouter);
app.use('/api/produto', produtoRouter);

module.exports = app;