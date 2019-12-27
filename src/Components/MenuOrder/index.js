import React, { useState, useEffect } from 'react';
import Button from '../Button';
import Checkbox from '../Checkbox';

const MenuOrder = (props) => {

    const [menuType, setMenuType] = useState('');
    const [checkbox, setCheckbox] = useState(false);

    function switchButton(item) {

        if(item.name === 'Hamburguer simples'){
            setCheckbox(true);
            console.log(item.option, item.extra);
        } else if(props.order.find(e => e.name === item.name) === undefined){
            props.setOrder([...props.order, {...item, count:1}])
        } 
    }

    useEffect(() => props.setTotal(props.order.reduce((acc, obj) => acc + (obj.count*obj.price), 0)),[props])

    return (
        <>
            <div className='type-menu'>
                <Button class='btn-menus' onClick={() => setMenuType('Café da Manhã')} title={'Café da Manhã'} />
                <Button class='btn-menus' onClick={() => setMenuType('Almoço/Jantar')} title={'Almoço/Jantar'} />
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
                                {checkbox && item.name === 'Hamburguer simples' ? <Checkbox item={item} /> : ''}
                            </li>)
                        : ''
                    )}
                </ul>
            </div>
        </>
    )
}

export default MenuOrder