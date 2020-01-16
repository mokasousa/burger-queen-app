import React, { useState, useEffect, useContext } from 'react';
import firebase from '../../config/firebase.js';
import PrepOrders from '../../Components/PrepOrders';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import { OrdersContext } from '../../Components/UserContext'


const styleContent = {
    display:'flex', 
    flexDirection:'column', 
    justifyContent:'space-between',
    height:'100vh'
}

const Prep = () => {

    //const [ordersToPrep, setOrdersToPrep] = useState([]);

    // useEffect(() => {
    //     firebase
    //         .firestore()
    //         .collection('Orders')
    //         .orderBy('timeOfOrder', 'asc')
    //         .onSnapshot((snapshot) => {
    //             let itensOrders = [];
    //             snapshot.docs.forEach(item => itensOrders.push({...item.data(), id:item.id}))
    //             const orderlist = itensOrders.filter(item => item.status !== 'Pronto' && item.status !== 'Finalizado')
    //             setOrdersToPrep(orderlist);
    //         })
    // }, [])

    const orders = useContext(OrdersContext)
    const ordersToPrep = orders.filter(item => item.status !== 'Pronto' && item.status !== 'Finalizado')
    
    return(
        <>
        {/* <Header /> */}
        <div style={styleContent}>
        {(ordersToPrep.length > 0)
            ? <PrepOrders ordersToPrep={ordersToPrep} />
            : 'Não há pedidos para preparação...'}
        {/* <Footer /> */}
        </div>
        </>
    )
}

export default Prep;
