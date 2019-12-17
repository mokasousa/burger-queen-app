import React from 'react';
import Button from '../../Components/Button';

const OrderList = (props) => {

    return (
        <>
            <ul>
                {props.orders.map((item, index) => <li key={Math.random()} id={index}>{item} <Button class='delete' onClick={props.deleteFunction} title='X' /></li>)}
            </ul>
        </>
    )
}

export default OrderList;