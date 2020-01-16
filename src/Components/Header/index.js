import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Image, Menu } from 'semantic-ui-react';
import { UserContext, OrdersContext } from '../UserContext';
import './styles.css';

const styleTabular = {
    margin: '1.5em auto',
    borderBottom: '2px solid #545353'
}

const styleImage = {
    margin: '1em',
    minWidth: '7rem'
}

const styleNav = {
    marginRight: '1em',
    fontSize: 'medium'
}


const Header = () => {

    const pathname = window.location.pathname;

    const path = pathname.substr(1);

    const [activeItem, setActiveItem] = useState(path);

    const handleItemClick = (e, {name}) => setActiveItem(name.replace(/ .*/, ''));

    const currUser = useContext(UserContext)
    const orders = useContext(OrdersContext)
    const readyOrders = orders.filter(el => el.status === 'Pronto')

    return (
        <> 
        <Menu tabular attached='top' style={styleTabular}>
            <Image 
            style={styleImage}
            src={require('../../Images/Burger-Queen-Logo.png')} 
            alt='Burger Queen Logo' 
            size='small'
            />

            <Menu.Menu position='right' style={styleNav}>
                {currUser.workIn === 'Salão'
                ? (<Menu.Item
                name='Menu'
                active={activeItem === 'Menu'}
                onClick={handleItemClick}
                as={Link}
                to='/Menu'
                />)
                :''}

                {currUser.workIn === 'Cozinha'
                ? (<Menu.Item
                name='Preparos'
                active={activeItem === 'Preparos'}
                onClick={handleItemClick}
                as={Link}
                to='/Preparos'
                />)
                : ''}

                <Menu.Item
                name={`Pedidos (${readyOrders.length})`}
                active={activeItem === 'Pedidos'}
                onClick={handleItemClick}
                as={Link}
                to='/Pedidos'
                />
            </Menu.Menu>
        </Menu>
        </>
    )
}

export default Header;


