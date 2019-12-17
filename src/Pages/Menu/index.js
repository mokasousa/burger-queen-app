import React, { useState, useEffect } from 'react';
import firebase from '../../config/firebase.js'
import Button from '../../Components/Button'
import OrderList from '../../Components/OrderList'
import OrderMenu from '../../Components/OrderMenu'

const Menu = () => {
    const [menu, setMenu] = useState([]);
    const [menuType, setMenuType] = useState('');
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

    function switchButton(e) {
        order.includes(e.target.innerHTML)
        ? setOrder(order)
        : setOrder([...order, e.target.innerHTML])
    }

    function deleteItem(e) {
        const item = order[e.target.parentNode.id]
        setOrder(order.filter(i => i != item))
    }
 
    return(
        <>
            <div>
                <Button class='btn-menus' onClick={() => setMenuType('Café da Manhã')} title={'Café da Manhã'} />
                <Button class='btn-menus' onClick={() => setMenuType("Almoço/Jantar")} title={"Almoço/Jantar"} />
            </div>        
            <OrderMenu key={Math.random()} menu={menu} menuType={menuType} function={switchButton}/>
            <div className='order-list'>
                <h2>Pedido:</h2>  
                <OrderList orders={order} deleteFunction={deleteItem}/>
            </div>
        </>
    )
}

export default Menu