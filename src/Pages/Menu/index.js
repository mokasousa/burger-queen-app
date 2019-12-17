import React, { useState, useEffect } from 'react';
import firebase from '../../config/firebase.js'
import Button from '../../Components/Button'
//import OrderList from '../../Components/OrderList'


const Menu = () => {
    const [menu, setMenu] = useState([]);
    const [order, setOrder] = useState([])

    useEffect(() => {
        firebase
            .firestore()
            .collection('Menu')
            .get()
            .then((response) => {
                const produtos = [];
                response.forEach(item => produtos.push(item.data()))
                setMenu(produtos);
            })
    }, [])

    //const [menuType, setMenuType] = useState("Café da Manhã");

    function toggleButton(e) {
        order.includes(e.target.innerHTML)
        ? setOrder(order)
        : setOrder([...order, e.target.innerHTML])
    }
 
    return(
        <>
            {/* <Button onClick={() => setMenuType("Café da Manhã")} title={"Café da Manhã"} 
            <Button onClick={() => setMenuType("Almoço/Jantar")} title={"Almoço/Jantar"}*/}
            <ul>
                {menu.map((item, index) =>
                    <li key={index}>
                        {/* {menuType === "Café da Manhã" 
                        ? item.breakfast 
                        ? <button onClick=''>{item.name} R$ {item.price}</button>
                        : <button onClick=''>{item.name} R$ {item.price}</button>} */}
                        <Button class='btn-menu-items' onClick={toggleButton} title={item.name + ' R$' + item.price}/>
                    </li> 
                )}
            </ul>
            <div className='order-list'>
                <h2>Pedido:</h2>  
                <ul>   
                    {order.map((item, index) => 
                        <li key={index}>
                            {item}
                        </li> 
                    )}
                </ul>
            </div>
        </>
    )
}

export default Menu