const express = require('express');
const cors = require('cors');
const { createClienteTable } = require('./models/cliente');
const clienteRoutes = require('./routes/clientes');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Rotas
app.use('/clientes', clienteRoutes);

const startServer = async () => {
    try {
        await createClienteTable();
        app.listen(port, () => {
            console.log(`Servidor rodando na porta ${port}`);
        });
    } catch (error) {
        console.error("Erro ao iniciar o servidor", error);
    }
};

startServer();