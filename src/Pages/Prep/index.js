import React, { useContext } from 'react';
import PrepOrders from '../../Components/PrepOrders';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import { OrdersContext } from '../../Components/UserContext'


const styleContent = {
    display:'flex', 
    flexDirection:'column', 
    justifyContent:'space-between',
    paddingBottom: '4rem'
}

const Prep = () => {

    const orders = useContext(OrdersContext)
    const ordersToPrep = orders.filter(item => item.status !== 'Pronto' && item.status !== 'Finalizado')
    
    return(
        <>
        <Header />
        <div style={styleContent}>
        {(ordersToPrep.length > 0)
            ? <PrepOrders ordersToPrep={ordersToPrep} />
            : <h3>Não há pedidos para preparação...</h3>}
        </div>
        <Footer />
        </>
    )
}

export default Prep;
