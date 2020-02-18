import React, { useContext } from 'react';
import ListOrders from '../../Components/ListOrders';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import { OrdersContext } from '../../Components/UserContext'

const styleContent = {
    display:'flex', 
    flexDirection:'column', 
    justifyContent:'space-between',
    paddingBottom: '4rem'
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
        </div>
        <Footer />
        </>
    )
}

export default OrderHistory;