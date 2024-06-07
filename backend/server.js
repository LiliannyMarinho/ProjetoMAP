const app = require('./app');
const { createClienteTable } = require('./models/cliente');

const PORT = process.env.PORT || 5000;

app.listen(PORT, async () => {
    await createClienteTable();
    console.log(`Servidor rodando na porta ${PORT}`);
});