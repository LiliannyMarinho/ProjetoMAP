import React from 'react';
import '../styles/menu.css';

const Menu: React.FC = () => {
  return (
    <nav className="menu">
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#abaout">Sobre</a></li>
        <li><a href="#products">Produtos</a></li>
        <li><a href="#services">Serviços</a></li>
        <li><a href="#contact">Contato</a></li>
      </ul>
      <div className='openmenu'>
        <i className="fa-solid fa-bars"></i>
      </div>
    </nav>
  );
};

export default Menu;