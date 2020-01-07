import React, { useState } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import { Image, Menu } from 'semantic-ui-react';
import './styles.css';

const Header = () => {

    const pathname = window.location.pathname;

    const path = pathname === '/'
    ? 'Menu'
    : pathname.substr(1);

    const [activeItem, setActiveItem] = useState(path);

    const handleItemClick = (e, {name}) => setActiveItem(name);

    return (
        <> 
        <Menu position='top' tabular>
            <Image 
                src={require('../../Images/Burger-Queen-Logo.png')} 
                alt='Burger Queen Logo' 
                size='small'
                />

            <BrowserRouter>
                <Menu.Menu position='right'>
                    <Menu.Item
                    className='nav'
                    name='Menu'
                    active={activeItem === 'Menu'}
                    onClick={handleItemClick}
                    as={Link}
                    to='/Menu'
                    />

                    <Menu.Item
                    className='nav'
                    name='Preparos'
                    active={activeItem === 'Preparos'}
                    onClick={handleItemClick}
                    as={Link}
                    to='/Preparos'
                    />

                    <Menu.Item
                    className='nav'
                    name='Pedidos'
                    active={activeItem === 'Pedidos'}
                    onClick={handleItemClick}
                    as={Link}
                    to='/Pedidos'
                    />
                </Menu.Menu>
            </BrowserRouter>
        </Menu>
        </>
    )
}

export default Header;

// import App from '../../App'
//     <App />