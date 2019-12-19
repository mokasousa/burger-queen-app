import React, { useState } from 'react';
import firebase from '../../config/firebase.js';

const OrderForm = (props) => {
    const [name, setName] = useState('');
    const [table, setTable] = useState('');

    function onSubmit(e) {
        e.preventDefault();
        firebase
            .firestore()
            .collection('Orders')
            .add({
                name: name,
                order: props.order,
                table: +table,
                total: props.total
            })
            .then(() =>{
                setName('')
                setTable('')
                props.setTotal(0)
                props.setOrder([])
            })
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