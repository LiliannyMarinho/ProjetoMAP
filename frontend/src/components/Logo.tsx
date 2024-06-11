import React from 'react';
import logo from '../assets/logo/logo.svg';

const Logo: React.FC = () => {
  return (
    <a href="/"><img src={logo} alt="Pata na Pota" className="logo" /></a>    
  );
};

export default Logo;