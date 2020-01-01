import React, { useState } from 'react';
import firebase from '../../config/firebase.js';

const OrderForm = (props) => {
    const [name, setName] = useState('');
    const [table, setTable] = useState('');

    function onSubmit(e) {
        console.log('name: ' + name + ', table: ' + table)
        e.preventDefault();
        if(name.length > 0 && +table > 0) {
           return firebase
                .firestore()
                .collection('Orders')
                .add({
                    name: name,
                    order: props.order,
                    table: +table,
                    total: props.total,
                    timeOrder: firebase.firestore.Timestamp.fromDate(new Date())
                })
                .then(() =>{
                    setName('')
                    setTable('')
                    props.setTotal(0)
                    props.setOrder([])
                })
        } else {
           return alert('Insira o nome e a mesa do cliente!')
        }
    }

    return (
        <form onSubmit={onSubmit}>
            <label>Nome</label>
            <input type='text' value={name} onChange={ e => setName(e.currentTarget.value)}></input>
            <label>Mesa</label>
            <input type='text' value={table} onChange={ e => setTable(e.currentTarget.value)}></input>
            <button>Enviar</button>
        </form>
    )
} 

export default OrderForm;