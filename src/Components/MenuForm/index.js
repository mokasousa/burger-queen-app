import React, { useState } from 'react';
import firebase from '../../config/firebase.js';
import Button from '../Button';
import './styles.css'

const OrderForm = (props) => {
    const [name, setName] = useState('');
    const [table, setTable] = useState('');

    function onSubmit(e) {
        e.preventDefault();

        if(name.length > 0 && +table > 0 && props.total > 0) {

           return firebase
                .firestore()
                .collection('Orders')
                .add({
                    name: name,
                    order: props.order,
                    table: +table,
                    total: props.total,
                    timeOrder: new Date()//firebase.firestore.Timestamp.fromDate(new Date())
                })
                .then(() =>{
                    setName('')
                    setTable('')
                    props.setTotal(0)
                    props.setOrder([])
                })

        } else {

           return alert('Insira o nome, a mesa e o pedido do cliente!')
        }
    }

    return (
        <form class='ui form' onSubmit={onSubmit}>
            <div class="field">
                <label>Cliente:</label>
                <input 
                type='text' 
                value={name}
                placeholder='Nome' 
                onChange={ e => setName(e.currentTarget.value)}>
                </input>
            </div>
            <div class="field">
                <label>Mesa:</label>
                <input 
                type='text' 
                value={table} 
                placeholder='Mesa' 
                onChange={ e => setTable(e.currentTarget.value)}>
                </input>
            </div>
            <Button 
            class='ui button'
            title='Enviar'
            />
        </form>
    )
} 

export default OrderForm;