import React, { useEffect, useState } from 'react';
import ApiService from '../services/ApiService';
import '../styles/main.css';

const apiService = new ApiService('http://localhost:3000/');

interface Produto {
  idproduto: number;
  nome: string;
  descricao: string;
  preco: string;
  quantidade: string;
}

const Main: React.FC = () => {
  const [produtos, setClientes] = useState<Produto[]>([]);

  useEffect(() => {
    const fetchClientes = async () => {
      try {
        const data = await apiService.get('/produto');
        setClientes(data);
      } catch (error) {
        console.error('Erro ao buscar clientes:', error);
      }
    };

    fetchClientes();
  }, []);

  return (
    <main>
      <section id='home'>
        <h1>Site em construção</h1>
        <ul>
        {produtos.map(cliente => (
          <li key={cliente.idproduto}>
            {cliente.nome} - {cliente.preco}
          </li>
        ))}
        </ul>        
      </section>
      <section id='about'>
        <h1>Site em construção</h1>
        <h1>Sobre</h1>
      </section>
      <section id='products'>
        <h1>Site em construção</h1>
        <h1>Produtos</h1>
      </section>
      <section id='services'>
        <h1>Site em construção</h1>
        <h1>Site em Serviços</h1>
      </section>
      <section id='contact'>
        <h1>Site em construção</h1>
        <h1>Contato</h1>
      </section>
    </main>
  );
};

export default Main;