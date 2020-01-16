import React, { useState, useEffect, useContext } from 'react';
import firebase from '../../config/firebase.js';
import ListOrders from '../../Components/ListOrders';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import { OrdersContext } from '../../Components/UserContext'

const styleContent = {
    display:'flex', 
    flexDirection:'column', 
    justifyContent:'space-between',
    height:'100vh'
}

const OrderHistory = () => {

    // const [ordersHistory, setOrdersHistory] = useState([]);

    // useEffect(() => {
    //     firebase
    //         .firestore()
    //         .collection('Orders')
    //         .orderBy('ordenate', 'asc')
    //         .orderBy('timeOfOrder', 'asc')
    //         .onSnapshot((snapshot) => {
    //             let itensOrders = [];
    //             snapshot.docs.forEach(item => itensOrders.push({...item.data(), id:item.id}))
    //             setOrdersHistory(itensOrders);
    //         })
    // }, [])

    const ordersHistory = useContext(OrdersContext)
    
    return(
        <>
        {/* 
        <Header /> */}
        <div style={styleContent}>
        {(ordersHistory.length > 0)
            ? <ListOrders ordersHistory={ordersHistory} />
            : ''}
        {/* <Footer /> */}
        </div>
        </>
    )
}

export default OrderHistory;