import React, { useState, useEffect } from 'react';
import firebase from '../../config/firebase.js';
import ListOrders from '../../Components/ListOrders';

const OrderHistory = () => {

    const [ordersHistory, setOrdersHistory] = useState([]);

    useEffect(() => {
        firebase
            .firestore()
            .collection('Orders')
            // .orderBy('ordenate', 'asc')
            .orderBy('timeOfOrder', 'asc')
            .onSnapshot((snapshot) => {
                let itensOrders = [];
                snapshot.docs.forEach(item => itensOrders.push({...item.data(), id:item.id}))
                setOrdersHistory(itensOrders);
            })
    }, [])
    
    return(
        <>
        {(ordersHistory.length > 0)
            ? <ListOrders ordersHistory={ordersHistory} />
            : 'Ainda não há pedidos hoje'}
        </>
    )
}

export default OrderHistory;