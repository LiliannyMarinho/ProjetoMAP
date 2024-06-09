const express = require('express');
const cors = require('cors');
const { createProdutoTable } = require('./models/produto');
const produtoRoutes = require('./routes/produto');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/produto', produtoRoutes);

const startServer = async () => {
    try {
        await createProdutoTable();
        app.listen(port, () => {
            console.log(`Servidor rodando na porta ${port}`);
        });
    } catch (error) {
        console.error("Erro ao iniciar o servidor", error);
    }
};

startServer();