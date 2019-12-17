import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';

const Header = () => {
    
    return (
        <header id="main-header">
            <img src={require("../../Images/Burger-Queen-Logo.png")}/>
            <BrowserRouter>
                <nav>
                    <ul>
                        <li><Link to='/menu'>Menu</Link></li>
                        <li><Link to='/preparos'>Preparos</Link></li>
                        <li><Link to='/lista-de-pedidos'>Pedidos</Link></li>
                    </ul>
                </nav>
            </BrowserRouter>
        </header>
    )
}

export default Header;