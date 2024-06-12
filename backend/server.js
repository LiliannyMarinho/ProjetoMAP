import express from 'express';
import cors from 'cors';
import clienteRoutes from './routes/cliente.js';
import animalRoutes from './routes/animal.js';
import adquireRoutes from './routes/adquire.js';
import veterinarioRoutes from './routes/veterinario.js';
import trataRoutes from './routes/trata.js';
import vendasRoutes from './routes/vendas.js';
import produtoRoutes from './routes/produto.js';
import contemRoutes from './routes/contem.js';
import consultaRoutes from './routes/consulta.js';
import fornecedorRoutes from './routes/fornecedor.js';
import ofereceRoutes from './routes/oferece.js';
import { setupDatabase } from './setupDatabase.js';

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/cliente', clienteRoutes);
app.use('/animal', animalRoutes);
app.use('/adquire', adquireRoutes);
app.use('/veterinario', veterinarioRoutes);
app.use('/trata', trataRoutes);
app.use('/vendas', vendasRoutes);
app.use('/produto', produtoRoutes);
app.use('/contem', contemRoutes);
app.use('/consulta', consultaRoutes);
app.use('/fornecedor', fornecedorRoutes);
app.use('/oferece', ofereceRoutes);

const startServer = async () => {
    try {
        await setupDatabase();

        app.listen(port, () => {
            console.log(`Servidor rodando na porta ${port}`);
        });
    } catch (error) {
        console.error("Erro ao iniciar o servidor", error);
    }
};

startServer();