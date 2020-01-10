import React, { useState, useEffect } from 'react';
import Button from '../Button';
import Checkbox from '../Checkbox';
import { Icon, Segment } from 'semantic-ui-react';
import './styles.css'

const MenuOrder = (props) => {

    const [menuType, setMenuType] = useState('Café-da-Manhã');
    const [checkedItems, setCheckedItems] = useState({extra:[]});
    const [checkbox, setCheckbox] = useState(false)


    const addItem = (item) => {
       
        if(item.option.length !== 0) {

            setCheckbox(true)

        } else {

            setCheckbox(false)

            const itemInOrderList = document.getElementById('list-' + props.order.findIndex(el => el.name === item.name));

            return (props.order.some(el => el.name === item.name))
                ? showItemInList(itemInOrderList)
                : props.setOrder([...props.order, {...item, count:1}])
        } 
    }

    const confirmOptions = (item) => {
        if (checkedItems.option !== undefined) {

            const newBurguerOrder = {...item, option: checkedItems.option, extra: checkedItems.extra, price: item.price + checkedItems.extra.length, count:1};

            setCheckedItems({extra:[]});
            setCheckbox(false);

            const itemInOrderList = document.getElementById('list-' + props.order.findIndex(el => el.option === checkedItems.option && el.extra.sort().join(',') === checkedItems.extra.sort().join(',')))

            return (props.order.some(el => el.option === checkedItems.option && el.extra.sort().join(',') === checkedItems.extra.sort().join(','))) 
                ? showItemInList(itemInOrderList)
                : props.setOrder([...props.order, newBurguerOrder])

        } else {

            setCheckedItems({extra:[]})

            return alert('Escolha o tipo de Hamburguer!')                
        }
    }

    function showItemInList(itemInOrderList) {

        itemInOrderList.style.animation = 'color 2s linear'

        setTimeout(() => itemInOrderList.style.animation = 'none', 2000)
    }


    useEffect(() => props.setTotal(props.order.reduce((acc, obj) => acc + (obj.count*obj.price), 0)),[props])

    return (
        <>
        <div className='type-menu ui buttons'>

            <Button 
            class={menuType === 'Café-da-Manhã' 
            ? 'btn-menu ui button active' 
            : 'btn-menu ui button'}
            onClick={() => {
                setMenuType('Café-da-Manhã');
                setCheckbox(false);
            }} 
            title='Café-da-Manhã'
            />

            <Button 
            class={menuType === 'Almoço/Jantar' 
            ? 'btn-menu ui button active' 
            : 'btn-menu ui button'}
            onClick={() => setMenuType('Almoço/Jantar')}
            title='Almoço/Jantar'
            />

        </div>   
        <div className='order-menu'>
        <ul>
            {props.menu.map((item, index) => {
                return (
                    <>
                    {
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
                                <Button 
                                class='btn-menu-items ui basic button' 
                                onClick={() => addItem(item)} 
                                title={item.name + ' R$' + item.price} 
                                />
                                </li>)
                            : ''
                    } {
                        (menuType === 'Almoço/Jantar' && item.option.length !== 0 && checkbox === true)
                        ? <Segment horizontal className='checkbox-item'>
                        {/* <li> */}
                            <Checkbox 
                            item={item} checkedItems={checkedItems} setCheckedItems={setCheckedItems} 
                            />
                            
                            <Icon 
                            name='huge check circle outline' 
                            onClick={() => confirmOptions(item)}
                            />
                        {/* </li> */}
                        </Segment>
                        : null
                    }
                    </>)
            })}      
        </ul>
        </div>
        </>
    )
}

export default MenuOrder

//flex-order 99