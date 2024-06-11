import React from 'react';
import '../styles/servico.css';
import estetica from '../assets/estetica.webp';
import vet from '../assets/vet(1).png';
import shampoocondicionador from '../assets/shampoocondicionador.webp';

const Servico: React.FC = () => {
    return (
        <>
            <main>
                <section id="s1" className="servicos">
                    <div className="articles-container">
                        <article id="a1" className="servico">
                            <img src={estetica} alt="estetica" className="info-image" />
                            <h3>Banho e Tosa</h3>
                            <p>Deixe seu pet limpo e cheiroso com nossos serviços de banho e tosa.</p>
                        </article>
                        <article id="a2" className="servico">
                            <img src={vet} alt="vet" className="info-image" />
                            <h3>Veterinário</h3>
                            <p>Cuidados veterinários de qualidade para a saúde do seu pet.</p>
                        </article>
                        <article id="a3" className="servico">
                            <img src={shampoocondicionador} alt="shampoo" className="info-image" />
                            <h3>Produtos</h3>
                            <p>Garanta a melhor qualidade em produtos para seu pet.</p>
                        </article>
                    </div>
                </section>
            </main>
        </>
    );
};

export default Servico;
