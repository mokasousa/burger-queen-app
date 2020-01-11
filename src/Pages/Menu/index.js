import React, { useState, useEffect } from 'react';
import firebase from '../../config/firebase.js'
import MenuOrderList from '../../Components/MenuOrderList'
import MenuOrder from '../../Components/MenuOrder'
import MenuForm from '../../Components/MenuForm'
import './styles.css'

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
                setMenu(itensMenu.sort((a,b) => a.name > b.name));
            })
    }, [])
 
    return(
        <>   
            <div className='menu'>
            <MenuOrder menu={menu} order={order} setOrder={setOrder} setTotal={setTotal}/>
            <div className='client-order'>
            <MenuOrderList order={order} setOrder={setOrder} total={total} setTotal={setTotal}/>
            <MenuForm order={order} setOrder={setOrder} total={total} setTotal={setTotal} />
            </div>
            </div>
        </>
    )
}

export default Menu