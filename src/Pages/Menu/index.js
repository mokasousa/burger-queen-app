import React, { useState, useEffect } from 'react';
import firebase from '../../config/firebase.js'
//import Button from '../../Components/Button'
import OrderList from '../../Components/OrderList'
import MenuOrder from '../../Components/MenuOrder'
import MenuForm from '../../Components/MenuForm'

const Menu = () => {
    const [menu, setMenu] = useState([]);
    const [order, setOrder] = useState([]);
    const [total, setTotal] = useState(0);

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
            <MenuOrder menu={menu} order={order} setOrder={setOrder} setTotal={setTotal}/>
            <OrderList order={order} setOrder={setOrder} total={total} setTotal={setTotal}/>
            <MenuForm order={order} setOrder={setOrder} total={total} setTotal={setTotal} />
        </>
    )
}

export default Menu