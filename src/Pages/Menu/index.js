import React, { useState, useEffect } from 'react';
import firebase from '../../config/firebase.js'
//import Button from '../../Components/Button'
import OrderList from '../../Components/OrderList'
import MenuOrder from '../../Components/MenuOrder'

const Menu = () => {
    const [menu, setMenu] = useState([]);
    const [order, setOrder] = useState([]);

    useEffect(() => {
        firebase
            .firestore()
            .collection('Menu')
            .get()
            .then((response) => {
                const itensMenu = [];
                response.forEach(item => itensMenu.push(item.data()))
                setMenu(itensMenu);
            })
    }, [])
 
    return(
        <>     
            <MenuOrder menu={menu} order={order} setOrder={setOrder}/>
            <OrderList order={order} setOrder={setOrder} />
        </>
    )
}

export default Menu