import React, { useState, useEffect } from 'react';
import CheckboxElement from '../Checkbox';
import { Button, Icon, Segment, Confirm } from 'semantic-ui-react';
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

const styleCheckboxItem = {
    border: '2px solid #545353',
    width: '100%',
    maxWidth: '621px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    order: 99,
    marginBottom: 0
}

const styleOrderMenu = {
    margin: '1.5em auto',
    maxWidth: '700px',
    display: 'flex',
    flexWrap: 'wrap',
    alignContent: 'flex-start',
    alignItems: 'center',
    listStyleType: 'none',
    justifyContent: 'space-evenly'
}

const styleTypeMenuButton = {
    backgroundColor: 'rgb(192, 171, 149, 0.3)',
    border: '2px solid #545353',
    fontWeight: 'bold',
    fontSize: 'medium'
}

const MenuOrder = (props) => {

    const [menuType, setMenuType] = useState('Café-da-Manhã');
    const [checkedItems, setCheckedItems] = useState({extra:[]});
    const [checkbox, setCheckbox] = useState(false);
    const [alert, setAlert] = useState(false)

    function show() {setAlert(true)};
    function handleConfirm() {setAlert(false)};


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

            const itemInOrderList = document.getElementById('list-' + props.order.findIndex(el => el.name === item.name && el.option === checkedItems.option && el.extra.sort().join(',') === checkedItems.extra.sort().join(',')))

            return (props.order.some(el => el.name === item.name && el.option === checkedItems.option && el.extra.sort().join(',') === checkedItems.extra.sort().join(','))) 
                ? showItemInList(itemInOrderList)
                : props.setOrder([...props.order, newBurguerOrder])

        } else {

            setCheckedItems({extra:[]})
            show()            
        }
    }

    function showItemInList(itemInOrderList) {

        itemInOrderList.style.animation = 'color 2s linear'

        setTimeout(() => itemInOrderList.style.animation = 'none', 2000)
    }


    useEffect(() => props.setTotal(props.order.reduce((acc, obj) => acc + (obj.count*obj.price), 0)),[props])

    return (
        <>
        <div className='menu-buttons' style={{margin: '0 auto'}}>
        <div className='ui buttons' >
    
            <Button 
            style={styleTypeMenuButton}
            className={menuType === 'Café-da-Manhã' 
            ? 'type-menu active' 
            : 'type-menu'}
            onClick={() => {
                setMenuType('Café-da-Manhã');
                setCheckbox({});
                setCheckedItems({extra:[]});
            }} 
            content='Café-da-Manhã'
            />

            <Button 
            style={styleTypeMenuButton}
            className={menuType === 'Almoço/Jantar' 
            ? 'type-menu active' 
            : 'type-menu'}
            onClick={() => setMenuType('Almoço/Jantar')}
            content='Almoço/Jantar'
            />

        </div>   
        
        <ul style={styleOrderMenu}>
            {props.menu.map((item, index) => {
                return (
                    <>
                    {
                        (menuType === 'Café-da-Manhã' && item.breakfast === true) || (menuType === 'Almoço/Jantar' && item.breakfast === false)
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
                        ? <Segment horizontal='true' className='checkbox-item' key={index} style={styleCheckboxItem}>
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
                            <Confirm
                            open={alert}
                            content='Escolha o tipo de Hamburguer!'
                            onConfirm={handleConfirm}
                            cancelButton=''
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