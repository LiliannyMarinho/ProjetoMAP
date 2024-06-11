import React from 'react';
import '../styles/servico.css';
import estetica from '../html/imagens/estetica.webp';
import vet from '../html/imagens/vet(1).png';
import shampoocondicionador from '../html/imagens/shampoocondicionador.webp';

const Servicos: React.FC = () => {
    return (
        <body>
            <main>
                <section id="s1" className="servicos">
                    <h2><i className="fa-solid fa-hand-holding-heart"></i> Nossos Serviços</h2>
                    <div className="articles-container">
                        <article id="a1" className="servico">
                            <img src={estetica} alt="BanhoTosa" />
                            <h3>Banho e Tosa</h3>
                            <p>Deixe seu pet limpo e cheiroso com nossos serviços de banho e tosa.</p>
                        </article>
                        <article id="a2" className="servico">
                            <img src={vet} alt="Veterinário" />
                            <h3>Veterinário</h3>
                            <p>Cuidados veterinários de qualidade para a saúde do seu pet.</p>
                        </article>
                        <article id="a3" className="servico">
                            <img src={shampoocondicionador} alt="Produtos" />
                            <h3>Produtos</h3>
                            <p>Garanta a melhor qualidade em produtos para seu pet.</p>
                        </article>
                    </div>
                </section>
            </main>
        </body>
    );
};

export default Servico;
