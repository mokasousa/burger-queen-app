import React from 'react';
import Button from '../../Components/Button';

const OrderMenu = (props) => {

    return (
        <div className='order-menu'>
            <ul>
                {props.menu.map((item, index) =>
                    (props.menuType === 'Café da Manhã' && item.breakfast === true)
                    ? <li key={index}><Button class='btn-menu-items' onClick={props.function} title={item.name + ' R$' + item.price} /></li>
                    : (props.menuType === 'Almoço/Jantar' && item.breakfast === false)
                    ? <li key={index}><Button class='btn-menu-items' onClick={props.function} title={item.name + ' R$' + item.price} /></li>
                    : ''
                )}
            </ul>
        </div>
    )
}

export default OrderMenu