import React, { useState } from 'react';
import firebase from '../../config/firebase.js';
import { Input, Button, Form, Confirm } from 'semantic-ui-react';
import './styles.css'

const formStyle = {
    fontSize: 'medium',
    padding: '1em 0.5em',
    flexGrow: 1,
    margin: '0 0.5em',
    maxWidth: '80%'
}

const buttonStyle = {
    backgroundColor: '#4EC475',
    border: '2px solid #545353',
    fontSize: 'medium',
    marginTop: '1em'
}

const inputStyle = {
    border: '2px solid #545353',
    borderRadius: '2px',
    maxWidth: '350px'
}

const OrderForm = (props) => {

    const [name, setName] = useState('');
    const [table, setTable] = useState('');
    const [alert, setAlert] = useState(false)

    function show() {setAlert(true)};
    function handleConfirm() {setAlert(false)};

    function onSubmit(e) {
        e.preventDefault();

        if(name.length > 0 && +table > 0 && props.total > 0) {

           return firebase
                .firestore()
                .collection('Orders')
                .add({
                    name: name,
                    table: +table,
                    total: props.total,
                    order: props.order,
                    timeOfOrder:firebase.firestore.FieldValue.serverTimestamp(),
                    status: 'Pedido pendente'
                })
                .then(() =>{
                    setName('')
                    setTable('')
                    props.setTotal(0)
                    props.setOrder([])
                })

        } else {

            show()

        //    return alert('Insira o nome, a mesa e o pedido do cliente!')
        }
    }

    return (
        <>
        <Form onSubmit={onSubmit} style={formStyle}>
            <Form.Field>
                <label>Cliente:</label>
                <Input
                style={inputStyle}
                value={name}
                placeholder='Nome' 
                onChange={ e => setName(e.currentTarget.value)}>
                </Input>
            </Form.Field>
            <Form.Field>
                <label>Mesa:</label>
                <Input
                style={inputStyle}
                value={table} 
                placeholder='Número' 
                onChange={ e => setTable(e.currentTarget.value)}>
                </Input>
            </Form.Field>
            <Button
            style={buttonStyle}
            type='submit'
            content='Enviar'
            />
        </Form>
        <Confirm
        open={alert}
        content='Insira o nome, a mesa e o pedido do cliente!'
        onConfirm={handleConfirm}
        cancelButton=''
        />
        </>
    )
} 

export default OrderForm;