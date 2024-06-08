import React, { useState, useEffect } from 'react';
import { getProdutos } from '../api'; // Altere a importação para a função que busca os produtos

function Home() {
    const [produto, setProdutos] = useState([]);

    useEffect(() => {
        async function fetchProdutos() {
            try {
                const data = await getProdutos();
                setProdutos(data);
            } catch (error) {
                console.error('Erro ao buscar produtos', error);
            }
        }
        fetchProdutos();
    }, []);

    return (
        <div>
            <h1>Produtos</h1>
            <ul>
                {produto.map(produto => (
                    <li key={produto.id}>{produto.nome} - {produto.preco}</li>
                ))}
            </ul>
        </div>
    );
}

export default Home;