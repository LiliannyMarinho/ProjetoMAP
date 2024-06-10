import React from 'react';
import '../styles/nav.css';

const Nav: React.FC = () => {
    return (
        <div className='nav'>
            <span className='user'>
                <i className="fa-solid fa-user"></i>
            </span>
            <span className='search'>
                <i className="fa-solid fa-magnifying-glass"></i>
            </span>
            <a href="#car">
                <i className="fa-solid fa-cart-shopping"></i>
            </a>            
        </div>
    );
};

export default Nav;