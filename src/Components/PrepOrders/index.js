import React, { useEffect, useState } from 'react';
import firebase from '../../config/firebase.js';
import { Button, Grid } from 'semantic-ui-react';
// import Button from '../Button';
import Card from '../../Components/OrdersCard';
import './styles.css';

const PrepOrders = (props) => {

    const [timeNow, setTimeNow] = useState(0);

    useEffect(() => setInterval(() => setTimeNow(new Date()), 1000), [])

    // useEffect(() => {
    //     return (props.ordersToPrep.length > 0) 
    //     ? setInterval(() => setTimeNow(new Date()), 1000)
    //     : false
    // }, [])

    const updateStatus = (e, item) => {

        console.log('btn name' + e.target.name);
        console.log('btn value' + e.target.value);
        console.log('btn target' + e.target.title);

        firebase
            .firestore()
            .collection('Orders')
            .doc(item.id)
            .update({
                status:'Em preparo...'
            })

    }

    const updateOrder = (item) => {

        firebase
            .firestore()
            .collection('Orders')
            .doc(item.id)
            .update({
                status:'Pronto',
                timeOrderReady: firebase.firestore.FieldValue.serverTimestamp()
            })

    }

    const timeElapsed = (timeOfOrder) => {

        const timediff = timeNow - timeOfOrder;
        const sec = Math.floor(timediff/1000);
        const min = Math.floor(sec/60);
        const hour = Math.floor(min/60);
        const time = (hour >= 1)
            ? ` (Em espera a mais de 1h!!!)`
            : ` (${min%60} minutos)`;
        return time;

    }
    
    return (
        <>
        <Grid padded>
        {props.ordersToPrep.map((item, index) =>
            <Card
            index={index}
            style={{color: 'tomato'}}
            status={item.status}
            time={(timeNow !== 0)
                ? timeElapsed(item.timeOfOrder.toDate()) 
                : ''
            }
            itens={item.order.map((el, index) =>
                (el.option.length !== 0)
                ? (<p key={index}>
                    {`${el.count} ${el.name} ${el.option} ${el.extra.join(' ')}`}
                    </p>)
                : (<p key={index}>
                    {`${el.count} ${el.name}`}
                    </p>)
            )}
            statusTime={
                <p>Pedido às: {item.timeOfOrder.toDate().toLocaleString('pt-BR').substr(11, 19)}
                </p>
            }
            client={
                <>
                <p>Cliente: {item.name}</p>
                <p>Mesa: {item.table}</p>
                </>
            }
            buttons={(item.status !== 'Em preparo...')
                ? <>
                <Button basic
                // className='btn-prepare'
                style={{backgroundColor:'#ffffff'}}
                onClick={(e) => updateStatus(e, item)} 
                content= 'Em preparo'
                />
                <Button basic
                // className='btn-ready' 
                style={{backgroundColor:'#4EC475'}}
                onClick={() => updateOrder(item)} 
                content= 'Pronto'
                />
                </>
                : <Button basic
                // className='btn-ready' 
                style={{backgroundColor:'#4EC475'}}
                onClick={() => updateOrder(item)} 
                content= 'Pronto'
                />
            }
            />
            )}
        </Grid>
        </>
    )
}

export default PrepOrders;