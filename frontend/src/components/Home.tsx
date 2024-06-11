import React, { useEffect, useState } from 'react';
import ApiService from '../services/ApiService';

const apiService = new ApiService('http://localhost:3000');

interface Produto {
  idproduto: number;
  nome: string;
  descricao: string;
  preco: string;
  quantidade: string;
}

const Home = () => {
  const [produtos, setProdutos] = useState<Produto[]>([]);

  useEffect(() => {
    const fetchProdutos = async () => {
      try {
        const data = await apiService.get('/produto');
        setProdutos(data);
      } catch (error) {
        console.error('Erro ao buscar Produtos:', error);
      }
    };

    fetchProdutos();
  }, []);

  return (
    <>
        <ul>
        {produtos.map(produto => (
          <li key={produto.idproduto}>
            {produto.idproduto} - {produto.nome} - {produto.preco}
          </li>
        ))}
        </ul> 
    </>
  );
};

export default Home;