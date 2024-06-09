const express = require('express');
const cors = require('cors');
const produtoRouter = require('./routes/produto');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/produto', produtoRouter);

module.exports = app;