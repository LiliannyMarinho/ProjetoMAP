import React from 'react';
import Home from './Home';
import Contato from './Contato';
import Servico from './Servico';
import '../styles/main.css';

const Main: React.FC = () => {
  return (
    <main>
      <section id='home'>
        {Home()}
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
        {Servico()}
      </section>
      <section id='contact'>
        {Contato()}
      </section>
    </main>
  );
};

export default Main;