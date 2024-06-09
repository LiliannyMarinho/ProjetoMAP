import React, { useState, useEffect } from 'react';
import { getProdutos } from '../api';

function Home() {
    const [produtos, setProdutos] = useState([]);

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
        <>
            <h1>Produtos:</h1>
            <ul>
                {produtos.map(produto => (
                    <li key={produto.id}>{produto.nome} - {produto.preco}</li>
                ))}
            </ul>
        </>
    );
}

export default Home;