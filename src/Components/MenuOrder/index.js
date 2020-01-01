import React, { useState, useEffect } from 'react';
import Button from '../Button';
import Checkbox from '../Checkbox';

const MenuOrder = (props) => {

    const [menuType, setMenuType] = useState('');
    const [checkedItems, setCheckedItems] = useState({extra:[]});

    function addItem(item) {
       
        if(item.option.length !== 0) {

            if (checkedItems.option !== undefined) {

                const newBurguerOrder = {...item, option: checkedItems.option, extra: checkedItems.extra, price: item.price + checkedItems.extra.length, count:1};

                setCheckedItems({extra:[]});

                return (!props.order.some(el => el.option === checkedItems.option && el.extra.sort().join(',') === checkedItems.extra.sort().join(','))) 
                    ?  props.setOrder([...props.order, newBurguerOrder])
                    : false

            } else {

                setCheckedItems({extra:[]})

                return alert('Escolha o tipo de Hamburguer!')
                
            }

        } else {

            return (!props.order.some(el => el.name === item.name))
                ? props.setOrder([...props.order, {...item, count:1}])
                : false
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
                                <Button class='btn-menu-items' onClick={() => addItem(item)} title={item.name + ' R$' + item.price} />
                            </li>)
                        : (menuType === 'Almoço/Jantar' && item.breakfast === false)
                        ? (<li key={index}>
                                {(item.option.length !== 0) 
                                    ? <Checkbox item={item} checkedItems={checkedItems} setCheckedItems={setCheckedItems} /> 
                                    : ''}
                                <Button class='btn-menu-items' onClick={() => addItem(item)} title={item.name + ' R$' + item.price} />
                            </li>)
                        : ''
                    )}
                </ul>
            </div>
        </>
    )
}

export default MenuOrder