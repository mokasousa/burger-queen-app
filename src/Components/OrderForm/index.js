import React, { useState } from 'react';
import firebase from '../config/firebase.js'

const OrderForm = () => {
    const [name, setName] = useState('');
    const [table, setTable] = useState('');

    function onSubmit(e) {
        e.preventDefault();
        firebase
            .firestore()
            .colection('Orders')
            .add({
                name: name,
                order: '',
                table: +table,
                timeInitial: timestamps
            })
            .then(() =>{
                setName('')
                setTable('')
                //setOrderList('Total: R$')
            })
    }

    return (
        // setOrderList(e.currentTarget.value)
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