import React, { useState, useEffect } from 'react';
import firebase from '../../config/firebase.js';
import { Link } from 'react-router-dom';
import { Image, Menu } from 'semantic-ui-react';
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

    const path = pathname === '/'
    ? 'Pedidos'
    : pathname.substr(1);

    const [activeItem, setActiveItem] = useState(path);
    const [workIn, setWorkIn] = useState('');

    const handleItemClick = (e, {name}) => setActiveItem(name);

    useEffect(() => {

        const currUser = firebase.auth().currentUser.uid;

        firebase
            .firestore()
            .collection('Users')
            .doc(currUser)
            .get()
            .then((resp) => setWorkIn(resp.data().workIn))
    }, [])

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
                {(workIn === 'Salão')
                ? (<Menu.Item
                name='Menu'
                active={activeItem === 'Menu'}
                onClick={handleItemClick}
                as={Link}
                to='/Menu'
                />)
                :''}

                {(workIn === 'Cozinha')
                ? (<Menu.Item
                name='Preparos'
                active={activeItem === 'Preparos'}
                onClick={handleItemClick}
                as={Link}
                to='/Preparos'
                />)
                : ''}

                <Menu.Item
                name='Pedidos'
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


