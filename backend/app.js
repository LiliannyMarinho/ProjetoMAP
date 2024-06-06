const express = require('express');
const app = express();
const dotenv = require('dotenv');

dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
const petRoutes = require('./routes/petRoutes');
app.use('/api/pets', petRoutes);

module.exports = app;