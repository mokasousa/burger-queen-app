import React, { useState, useEffect } from 'react';
//import Button from '../Button';
import CheckboxElement from '../Checkbox';
import { Button, Icon, Segment } from 'semantic-ui-react';
import './styles.css';

const styleMenuButtons = {
    backgroundColor:'#fff',
    border: '2px solid #545353',
    borderRadius: '2px',
    fontWeight: 'bold',
    width: '285px',
    margin: '0em 0.7em 0.4em 0.7em',
    fontSize: 'medium'
}

const MenuOrder = (props) => {

    const [menuType, setMenuType] = useState('Café-da-Manhã');
    const [checkedItems, setCheckedItems] = useState({extra:[]});
    const [checkbox, setCheckbox] = useState(false)


    const addItem = (item) => {
       
        if(item.option.length !== 0) {

            setCheckbox(item);

        } else {

            setCheckbox({});
            setCheckedItems({extra:[]});

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
            setCheckbox({});

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
            className={menuType === 'Café-da-Manhã' 
            ? 'active' 
            : ''}
            onClick={() => {
                setMenuType('Café-da-Manhã');
                setCheckbox({});
                setCheckedItems({extra:[]});
            }} 
            content='Café-da-Manhã'
            />

            <Button 
            className={menuType === 'Almoço/Jantar' 
            ? 'active' 
            : ''}
            onClick={() => setMenuType('Almoço/Jantar')}
            content='Almoço/Jantar'
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
                                style={styleMenuButtons}
                                className='btn-menu-items' 
                                onClick={() => addItem(item)} 
                                content={item.name + ' R$' + item.price} 
                                />
                                </li>)
                            : (menuType === 'Almoço/Jantar' && item.breakfast === false)
                            ? (<li key={index}>
                                <Button
                                style={styleMenuButtons}
                                className='btn-menu-items' 
                                onClick={() => addItem(item)} 
                                content={item.name + ' R$' + item.price} 
                                />
                                </li>)
                            : ''
                    } {
                        (menuType === 'Almoço/Jantar' && item.option.length !== 0 && checkbox === item)
                        ? <Segment horizontal='true' className='checkbox-item'>
                            <CheckboxElement
                            item={item}
                            checkedItems={checkedItems}
                            setCheckedItems={setCheckedItems} 
                            />
                            <Icon 
                            style={{margin:'0.2em'}}
                            name='check circle outline' 
                            size='huge'
                            onClick={() => confirmOptions(item)}
                            />
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