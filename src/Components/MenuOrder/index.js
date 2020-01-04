import React, { useState, useEffect } from 'react';
import Button from '../Button';
import Checkbox from '../Checkbox';
import './styles.css'

const MenuOrder = (props) => {

    const [menuType, setMenuType] = useState('');
    const [checkedItems, setCheckedItems] = useState({extra:[]});

    const handleClick = (e, menutype) => {
        setMenuType(menutype)
    }

    const addItem = (item) => {

        function showItemInList(itemInOrderList) {
            itemInOrderList.style.animation = 'color 2s linear'
            setTimeout(() => itemInOrderList.style.animation = 'none', 2000)
        }
       
        if(item.option.length !== 0) {


            if (checkedItems.option !== undefined) {

                const newBurguerOrder = {...item, option: checkedItems.option, extra: checkedItems.extra, price: item.price + checkedItems.extra.length, count:1};

                setCheckedItems({extra:[]});

                const itemInOrderList = document.getElementById('list-' + props.order.findIndex(el => el.option === checkedItems.option && el.extra.sort().join(',') === checkedItems.extra.sort().join(',')))

                return (props.order.some(el => el.option === checkedItems.option && el.extra.sort().join(',') === checkedItems.extra.sort().join(','))) 
                    ? showItemInList(itemInOrderList)
                    : props.setOrder([...props.order, newBurguerOrder])

            } else {

                setCheckedItems({extra:[]})

                return alert('Escolha o tipo de Hamburguer!')
                
            }

        } else {

            const itemInOrderList = document.getElementById('list-' + props.order.findIndex(el => el.name === item.name));

            return (props.order.some(el => el.name === item.name))
                ? showItemInList(itemInOrderList)
                : props.setOrder([...props.order, {...item, count:1}])
        } 
    }

    useEffect(() => props.setTotal(props.order.reduce((acc, obj) => acc + (obj.count*obj.price), 0)),[props])

    return (
        <>
            <div className='type-menu ui buttons'>
                <Button 
                class='btn-menu ui toggle button' 
                onClick={(e) => handleClick(e, 'Café-da-Manhã')} 
                title='Café-da-Manhã'
                />
                <Button 
                class='btn-menu ui toggle button' 
                onClick={(e) => handleClick(e, 'Almoço/Jantar')} 
                title='Almoço/Jantar'
                />
            </div>   
            <div className='order-menu'>
                <ul>
                    {props.menu.map((item, index) =>
                        (menuType === 'Café-da-Manhã' && item.breakfast === true)
                        ? (<li key={index}>
                                <Button 
                                class='btn-menu-items ui basic button' 
                                onClick={() => addItem(item)} 
                                title={item.name + ' R$' + item.price} 
                                />
                            </li>)
                        : (menuType === 'Almoço/Jantar' && item.breakfast === false)
                        ? (<li key={index}>
                                {(item.option.length !== 0) 
                                    ? <Checkbox item={item} checkedItems={checkedItems} setCheckedItems={setCheckedItems} /> 
                                    : ''}
                                <Button 
                                class='btn-menu-items ui attached basic button' 
                                onClick={() => addItem(item)} 
                                title={item.name + ' R$' + item.price} />
                            </li>)
                        : ''
                    )}
                </ul>
            </div>
        </>
    )
}

export default MenuOrder