import React from 'react';
import Button from '../Button';

const OrderList = (props) => {
    
    function deleteItem(item) {
        props.setOrder(props.order.filter(i => i !== item))
    }

            
    return (
        <div className='order-list'>
            <ul>
                {props.order.map((el, index) => <li key={index} id={index}>{el.name} <Button class='delete' onClick={() => deleteItem(el)} title='X' /></li>)}
            </ul>
        </div>
    )
}

export default OrderList;