import React, { useState, useEffect } from 'react';
import firebase from '../../config/firebase.js';
import PrepOrders from '../../Components/PrepOrders';

const Prep = () => {

    const [ordersToPrep, setOrdersToPrep] = useState([]);

    useEffect(() => {
        firebase
            .firestore()
            .collection('Orders')
            .orderBy('timeOfOrder', 'asc')
            .onSnapshot((snapshot) => {
                let itensOrders = [];
                snapshot.docs.forEach(item => itensOrders.push({...item.data(), id:item.id}))
                const orderlist = itensOrders.filter(item => item.status !== 'Pronto')
                setOrdersToPrep(orderlist);
            })
    }, [])
    
    return(
        <>
        {(ordersToPrep.length > 0)
            ? <PrepOrders ordersToPrep={ordersToPrep} setOrdersToPrep={setOrdersToPrep}/>
            : 'Não há pedidos para preparação...'}
        </>
    )
}

export default Prep;