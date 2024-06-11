import React, { useEffect, useState } from 'react';
import '../styles/produto.css';
import img from '../assets/pets.webp';
import ApiService from '../services/ApiService';

const apiService = new ApiService('http://localhost:3000');

interface Produto {
  idproduto: number;
  nome: string;
  descricao: string;
  preco: string;
  quantidade: string;
}


const Produto = () => {
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
    <div className="articles-container">
      {produtos.map(produto => (
        <article key={produto.idproduto} className="produto">
          <img src={img} alt={produto.nome} className="info-image" />
          <h3>{produto.nome}</h3>
          <p>{produto.descricao}</p>
        </article>
      ))}
    </div>
  );
};

export default Produto;
