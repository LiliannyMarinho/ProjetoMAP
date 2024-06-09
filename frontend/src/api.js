import axios from 'axios';

const API_URL = 'http://localhost:3001/produto';

export const getProduto = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error('Erro ao buscar produto', error);
        throw error;
    }
};