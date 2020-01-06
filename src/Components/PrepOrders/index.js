import React from 'react';
//import Button from '../Button';

const PrepOrders = (props) => {

    return (
        <>
        <div className='orders-prep'>
            <ul>
                {(props.ordersToPrep.length > 0) 
                ? (props.ordersToPrep.map((item, index) =>
                    <li key={index}>
                        <div 
                        className='order-info'>
                            <p>{item.timeOrder.toDate().toLocaleString('pt-BR').substr(0, 19)}</p>
                            <header>Cliente: {item.name}, Mesa: {item.table}</header>
                            <p>Pedido:</p>
                            <div className='selection-order'>
                                {item.order.map((el, index) => 
                                <div key={index}><p>{el.count + ' ' + el.name}</p></div>
                                )}
                            </div>
                        </div>
                    </li>
                    ))
                : 'Não há pedidos para preparação...'}
            </ul>
        </div>
        </>
    )
}

export default PrepOrders;