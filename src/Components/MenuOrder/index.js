import React, { useState } from 'react';
import Button from '../Button';

const MenuOrder = (props) => {

    const [menuType, setMenuType] = useState('');

    function switchButton(item) {

        //console.log(props.order.includes(item.name))
  
        if(props.order.find(e => e.name === item.name) !== undefined){
            const updateOrder = props.order.map(el => {
                if(el.name === item.name){
                    return {...el, count: el.count + 1}
                } else {
                    return el
                }
            })
            props.setOrder(updateOrder)
        } else {
            props.setOrder([...props.order, {...item, count:1}])
        }

    }

    return (
        <>
            <div className='type-menu'>
                <Button class='btn-menus' onClick={() => setMenuType('Café da Manhã')} title={'Café da Manhã'} />
                <Button class='btn-menus' onClick={() => setMenuType("Almoço/Jantar")} title={"Almoço/Jantar"} />
            </div>   
            <div className='order-menu'>
                <ul>
                    {props.menu.map((item, index) =>
                        (menuType === 'Café da Manhã' && item.breakfast === true)
                        ? (<li key={index}>
                                <Button class='btn-menu-items' onClick={() => switchButton(item)} title={item.name + ' R$' + item.price} />
                            </li>)
                        : (menuType === 'Almoço/Jantar' && item.breakfast === false)
                        ? (<li key={index}>
                                <Button class='btn-menu-items' onClick={() => switchButton(item)} title={item.name + ' R$' + item.price} />
                            </li>)
                        : ''
                    )}
                </ul>
            </div>
        </>
    )
}

export default MenuOrder