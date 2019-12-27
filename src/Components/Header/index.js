import React, { useState } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import { Image, Menu } from 'semantic-ui-react';
//import './styles.css'

const Header = () => {

    const pathname = window.location.pathname;

    const path = pathname === '/' 
    ? 'Menu'
    : pathname.substr(1);

    const [activeItem, setActiveItem] = useState(path);

    const handleItemClick = (e, {name}) => setActiveItem(name);

    const menuStyle = {
        margin: '2em',
        color: '#4EC475'
    }

    return (
            
            <Menu attached='top' tabular style={menuStyle}>

                <Image 
                src={require('../../Images/Burger-Queen-Logo.png')} 
                alt='Burger Queen Logo' 
                size='small' 
                style={{margin: 10}}
                />

                <BrowserRouter>
                    <Menu.Menu position='right'>
                        <Menu.Item
                        className='nav'
                        name='Menu'
                        active={activeItem === 'Menu'}
                        onClick={handleItemClick}
                        as={Link}
                        to='/menu'
                        />

                        <Menu.Item
                        className='nav'
                        name='Preparos'
                        active={activeItem === 'Preparos'}
                        onClick={handleItemClick}
                        as={Link}
                        to='/preparos'
                        />

                        <Menu.Item
                        className='nav'
                        name='Pedidos'
                        active={activeItem === 'Pedidos'}
                        onClick={handleItemClick}
                        as={Link}
                        to='/lista-de-pedidos'
                        />
                    </Menu.Menu>
                </BrowserRouter>

            </Menu>
            


        // <header id="main-header">
        //     <img src={require("../../Images/Burger-Queen-Logo.png")} alt="Burger Queen Logo"/>
        //     <BrowserRouter>
        //         <nav>
        //             <ul>
        //                 <li><Link to='/menu'>Menu</Link></li>
        //                 <li><Link to='/preparos'>Preparos</Link></li>
        //                 <li><Link to='/lista-de-pedidos'>Pedidos</Link></li>
        //             </ul>
        //         </nav>
        //     </BrowserRouter>
        // </header>
    )
}

export default Header;