import React from 'react';
import '../styles/sobre.css'; 

const Sobre: React.FC = () => {
    return (
        <>
            <div className='about_container'>
                <div className='imgbg'></div>
                <div className="text">
                    <h2>Sobre Nós</h2>
                    <p>
                        Bem-vindo ao <strong>Meu Petshop Online</strong>, o destino ideal para todos os cuidados e produtos para o seu pet! Nossa missão é fornecer uma experiência de compra fácil, conveniente e confiável, oferecendo uma ampla gama de produtos e serviços para todos os tipos de pets.
                    </p>
                    <p>
                        Fundado com amor pelos animais, o Meu Petshop Online se dedica a garantir que você encontre tudo o que precisa para manter seu pet saudável e feliz. Desde alimentos e brinquedos até cuidados veterinários e serviços de estética, estamos aqui para apoiar todas as necessidades do seu pet.
                    </p>
                    <p>
                        Com uma interface de usuário amigável e uma logística eficiente, nosso objetivo é tornar sua experiência de compra a mais agradável possível. Oferecemos entregas rápidas, uma política de devolução flexível e uma equipe de atendimento ao cliente pronta para ajudar com qualquer dúvida ou preocupação.
                    </p>
                    <p>
                        Além de produtos de alta qualidade, também oferecemos serviços como:
                    </p>
                    <ul>
                        <li><strong>Banho e Tosa:</strong> Cuidados completos de higiene para seu pet.</li>
                        <li><strong>Consultas Veterinárias:</strong> Atendimento especializado para a saúde do seu pet.</li>
                        <li><strong>Produtos Exclusivos:</strong> Uma seleção cuidadosamente curada de alimentos, acessórios e mais.</li>
                    </ul>
                    <p>
                        Estamos comprometidos com a satisfação do cliente e com o bem-estar dos pets, e nos esforçamos para ser seu parceiro de confiança em todas as etapas do cuidado com seu animal de estimação.
                    </p>
                    <a target="_blank" rel="noopener noreferrer" href="./assets/downloads/Catalogo-Produtos.pdf">Catálogo de Produtos</a>
                </div>
            </div>
        </>
    );
};

export default Sobre;
