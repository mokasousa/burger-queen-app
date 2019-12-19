import React, { useState } from 'react';
import Button from '../Button';

const MenuOrder = (props) => {

    const [menuType, setMenuType] = useState('');

    function switchButton(item) {
        // let count = 1;
        // if (props.order.includes(item)) {
        //     console.log(item.count)
        // } else {
        //     props.setOrder([...props.order, {count: count, item: item}])
        // }
        (props.order.includes(item))
        ? props.setOrder(props.order)
        : props.setOrder([...props.order, item])
        // console.log(props.order)
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