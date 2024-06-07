const express = require('express');
const cors = require('cors');
const clientesRouter = require('./routes/clientes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/clientes', clientesRouter);

module.exports = app;