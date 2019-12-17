import React from 'react';

const OrderList = (props) => {

    return (
        <>
            <ul>
                {props.orders.map((item, index) => {
                    <li key={index}>{item}</li>
                })}
            </ul>
        </>
    )
}

export default OrderList