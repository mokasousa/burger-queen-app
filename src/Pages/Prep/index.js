import React, { useState, useEffect } from 'react';
import firebase from '../../config/firebase.js';
import PrepOrders from '../../Components/PrepOrders';

const Prep = () => {

    const [ordersToPrep, setOrdersToPrep] = useState([]);

    useEffect(() => {
        firebase
            .firestore()
            .collection('Orders')
            .where('status', '==', 'Pedido Pendente')
            // .orderBy('timeOfOrder', 'desc')
            .onSnapshot((snapshot) => {
                let itensOrders = [];
                snapshot.docs.forEach(item => {
                    itensOrders.push({...item.data(), id:item.id})})
                setOrdersToPrep(itensOrders);
            })
    }, [])

    return(
        <>
            <PrepOrders ordersToPrep={ordersToPrep} setOrdersToPrep={setOrdersToPrep}/>
        </>
    )
}

export default Prep;