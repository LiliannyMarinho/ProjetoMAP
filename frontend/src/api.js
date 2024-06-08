import axios from 'axios';

const API_URL = 'http://localhost:3001/clientes';

export const getClientes = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error('Erro ao buscar clientes', error);
        throw error;
    }
};

export const addCliente = async (cliente) => {
    try {
        const response = await axios.post(API_URL, cliente);
        return response.data;
    } catch (error) {
        console.error('Erro ao adicionar cliente', error);
        throw error;
    }
};