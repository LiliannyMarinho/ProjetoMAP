import React from 'react';
import '../styles/servico.css';
import estetica from '../assets/images/estetica.webp';
import vet from '../assets/images/vet.webp';
import produto from '../assets/images/kit-pet-cachorro.webp';

const Servico = () => {
    return (
        <>            
            <div className="articles-container">
                <article className="servico">
                    <img src={estetica} alt="estetica" />
                    <h3>Banho e Tosa</h3>
                    <p>Deixe seu pet limpo e cheiroso com nossos serviços de banho e tosa.</p>
                </article>
                <article className="servico">
                    <img src={vet} alt="vet" />
                    <h3>Veterinário</h3>
                    <p>Cuidados veterinários de qualidade para a saúde do seu pet.</p>
                </article>
                <article className="servico">
                    <img src={produto} alt="shampoo" />
                    <h3>Produtos</h3>
                    <p>Garanta a melhor qualidade em produtos para seu pet.</p>
                </article>
                <article className="servico">
                    <img src={estetica} alt="estetica" />
                    <h3>Banho e Tosa</h3>
                    <p>Deixe seu pet limpo e cheiroso com nossos serviços de banho e tosa.</p>
                </article>
                <article className="servico">
                    <img src={vet} alt="vet" />
                    <h3>Veterinário</h3>
                    <p>Cuidados veterinários de qualidade para a saúde do seu pet.</p>
                </article>
                <article className="servico">
                    <img src={produto} alt="shampoo" />
                    <h3>Produtos</h3>
                    <p>Garanta a melhor qualidade em produtos para seu pet.</p>
                </article>
            </div>
        </>
    );
};

export default Servico;
