import React, { useContext } from 'react';
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


    const ordersHistory = useContext(OrdersContext)
    
    return(
        <>
        <Header />
        <div style={styleContent}>
        {(ordersHistory.length > 0)
            ? <ListOrders ordersHistory={ordersHistory} />
            : ''}
        <Footer />
        </div>
        </>
    )
}

export default OrderHistory;