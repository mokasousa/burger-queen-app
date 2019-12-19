import React from 'react';
import Button from '../Button';

const OrderList = (props) => {
    
    function deleteItem(item) {
        props.setOrder(props.order.filter(i => i !== item))
    }

    function updateItemQuantity(item, quantity) {
        const updateOrder = props.order.map(el => {
            if(el.name === item.name){
                return {...el, count: el.count + quantity}
            } else {
                return el
            }
        })
        props.setOrder(updateOrder.filter(elem => elem.count !== 0))
    }

            
    return (
        <div className='order-list'>
            <ul>
                {props.order.map((el, index) => <li key={index} id={index}>{el.name} <Button class='btn-add' onClick={() => updateItemQuantity(el, -1)} title='-' />{el.count}<Button class='btn-remove' onClick={() => updateItemQuantity(el, 1)} title='+' /> R$ {el.count*el.price}<Button class='btn-delete' onClick={() => deleteItem(el)} title='X' /></li>)}
                <li>Total: R$ {props.order.reduce((acc, obj) => acc + (obj.count*obj.price), 0)}</li>
            </ul>
        </div>
    )
}

export default OrderList;