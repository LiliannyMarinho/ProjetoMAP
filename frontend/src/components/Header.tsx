import React from 'react';
import '../styles/header.css';
import Logo from './Logo';
import Menu from './Menu';
import Nav from './Nav';

const Header: React.FC = () => {
  return (
    <header className='header'>
      <section>
        <Logo />
        <Menu />
        <Nav />
      </section>
    </header>
  );
};

export default Header;