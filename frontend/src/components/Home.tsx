import React from 'react';
import '../styles/home.css';

const Home = () => {
    return (
        <>
          <article id="home" className="banner">
              <h1>Bem-vindo (a)!</h1>
              <p>Somos o PataNaPorta. Os melhores produtos e serviços para o seu pet.</p>
              <a href="#" className="cta-button">Saiba Mais</a>
              <a href="#" className="cta-button" id="open-modal">Cadastre-se</a>
              <a href="#" className="cta-button" id="open-login">Login</a>
          </article>    
        </>
    );
};

export default Home;