import React, { useEffect} from 'react';
import { Icon } from 'semantic-ui-react';
import './styles.css'

const styleOrderList = {
    padding: '1em 0.5em',
    fontWeight: 'bold',
    textAlign: 'right',
    minWidth: '280px',
    maxWidth: '100%',
    borderRadius: '2px',
    flexGrow: 10
}

const styleUl = {
    listStyle: 'none',
    minWidth: '280px',
    maxWidth: '430px'
}
const styleLi = {
    display:'flex',
    flexWrap: 'wrap',
    justifyContent: 'right',
    margin: '1.2em 0.3em',
    borderRadius: '2px'
}
const styleIcon = {
    margin: '0 0.5em',
    color: '#545353'
}

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
        <div className='order-list' style={styleOrderList}>
            <ul style={styleUl}>
                {props.order.map((el, index) =>
                    <li key={index} id={'list-' + index} style={styleLi}>
                        <div>
                        {(el.option.length !== 0) 
                        ? el.name +' ' + el.option +' ' + el.extra.join(' ')
                        : el.name}
                        </div>
                        <div>
                        <Icon 
                        style={styleIcon}
                        size='large'
                        name='minus square outline' 
                        onClick={() => updateItemQuantity(el, -1)}
                        />
                        {el.count}
                        <Icon 
                        style={styleIcon}
                        size='large'
                        name='plus square outline' 
                        onClick={() => updateItemQuantity(el, 1)}
                        />
                        R$ {el.count*el.price} 
                        <Icon 
                        style={styleIcon}
                        size='large'
                        name='trash alternate outline' 
                        onClick={() => deleteItem(el)}
                        />
                        </div>
                    </li>
                )}
                <li className='total' style={{backgroundColor: 'rgb(192, 171, 149, 0.4)'}}>Total: R$ {props.total} </li>
            </ul>
        </div>
    )
}

export default OrderList;