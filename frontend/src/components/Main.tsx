import React from 'react';
import Home from './Home';
import Contato from './Contato';
import Servico from './Servico';
import Produto from './Produto';
import Sobre from './Sobre';
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
        {Sobre()}
      </section>
      <section id='products'>
        <h1>Site em construção</h1>
        <h1>Produtos</h1>
        {Produto()}
      </section>
      <section id='services'>
        <h2><i className="fa-solid fa-hand-holding-heart"></i> Nossos Serviços</h2>
        {Servico()}
      </section>
      <section id='contact'>
        {Contato()}
      </section>
    </main>
  );
};

export default Main;