import React, { useEffect} from 'react';
import { Icon } from 'semantic-ui-react';
//import Button from '../Button';
import './styles.css'


const OrderList = (props) => {

    function deleteItem(item) {
        props.setOrder(props.order.filter(el => el !== item))
    }

    function updateItemQuantity(item, quantity) {
        const updateOrder = props.order.map(el => {
            return (el.name === item.name && el.option === item.option && el.extra === item.extra)
            ? {...el, count: el.count + quantity}
            : el
        });
        props.setOrder(updateOrder.filter(elem => elem.count !== 0))
    }

    useEffect(() => props.setTotal(props.order.reduce((acc, obj) => acc + (obj.count*obj.price), 0)),[props])

    return (
        <div className='order-list'>
            <ul>
                {props.order.map((el, index) =>
                    <li key={index} id={'list-' + index} >
                        <div>
                        {(el.option.length !== 0) 
                        ? el.name +' ' + el.option +' ' + el.extra.join(' ')
                        : el.name}
                        </div>
                        <div>
                        <Icon 
                        size='large'
                        name='minus square outline' 
                        onClick={() => updateItemQuantity(el, -1)}
                        />
                        {el.count}
                        <Icon 
                        size='large'
                        name='plus square outline' 
                        onClick={() => updateItemQuantity(el, 1)}
                        />
                        R$ {el.count*el.price} 
                        <Icon 
                        size='large'
                        name='trash alternate outline' 
                        onClick={() => deleteItem(el)}
                        />
                        </div>
                    </li>
                )}
                <li className='total'>Total: R$ {props.total} </li>
            </ul>
        </div>
    )
}

export default OrderList;

// style={{transition: props.color + '3s linear'}}