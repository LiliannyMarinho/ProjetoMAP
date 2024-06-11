import React from 'react';
import '../styles/produto.css';
import racao from '../assets/racao.png';
import brinquedo from '../assets/brinquedo.png';
import acessorio from '../assets/acessorio.webp';


const Produto = () => {
    return (
        <>
            <div className="articles-container">
                <article id="a1" className="produto">
                    <img src={racao} alt="racao" className="info-image" />
                    <h3>Ração Premium</h3>
                    <p>A melhor nutrição para o seu pet.</p>
                </article>
                <article id="a2" className="produto">
                    <img src={brinquedo} alt="brinquedo" className="info-image" />
                    <h3>Brinquedos</h3>
                    <p>Diversão garantida com nossos brinquedos.</p>
                </article>
                <article id="a3" className="produto">
                    <img src={acessorio} alt="acessorio" className="info-image" />
                    <h3>Acessórios</h3>
                    <p>Tudo que seu pet precisa para o dia a dia.</p>
                </article>
            </div>            
        </>
    );
};

export default Produto;