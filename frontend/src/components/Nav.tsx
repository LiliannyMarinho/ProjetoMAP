import React from 'react';
import '../styles/nav.css';

const Nav: React.FC = () => {
    return (
        <div className="nav">
            <span className="user">
                <i className="fa-solid fa-user"></i>
            </span>
            <span className="search" title="Buscar">
                <i className="fa-solid fa-magnifying-glass"></i>
            </span>
            <a href="#car" title="Carrinho de Compras">
                <i className="fa-solid fa-cart-shopping"></i>
            </a>            
        </div>
    );
};

export default Nav;