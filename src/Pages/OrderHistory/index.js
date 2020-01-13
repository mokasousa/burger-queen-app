import React, { useState, useEffect } from 'react';
import firebase from '../../config/firebase.js';
import ListOrders from '../../Components/ListOrders';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';

const OrderHistory = () => {

    const [ordersHistory, setOrdersHistory] = useState([]);

    useEffect(() => {
        firebase
            .firestore()
            .collection('Orders')
            .orderBy('ordenate', 'asc')
            .orderBy('timeOfOrder', 'asc')
            .onSnapshot((snapshot) => {
                let itensOrders = [];
                snapshot.docs.forEach(item => itensOrders.push({...item.data(), id:item.id}))
                setOrdersHistory(itensOrders);
            })
    }, [])
    
    return(
        <>
        <Header />
        {(ordersHistory.length > 0)
            ? <ListOrders ordersHistory={ordersHistory} />
            : ''}
        <Footer />
        </>
    )
}

export default OrderHistory;