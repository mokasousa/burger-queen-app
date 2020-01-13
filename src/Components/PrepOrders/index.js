import React, { useEffect, useState } from 'react';
import firebase from '../../config/firebase.js';
import { Button, Grid } from 'semantic-ui-react';
import Card from '../../Components/OrdersCard';

const buttonStyle1 = {
    backgroundColor:'#ffffff',
    border: '2px solid #545353',
    fontSize: 'medium',
    marginTop: '0.5em'
}

const buttonStyle2 = {
    backgroundColor:'#4EC475',
    border: '2px solid #545353',
    fontSize: 'medium',
    marginTop: '0.5em'
}

const PrepOrders = (props) => {

    const [timeNow, setTimeNow] = useState(0);

    useEffect(() => {
        const time = setInterval(() => setTimeNow(new Date()), 1000);
        return () => clearInterval(time); //return when react unmount
    }, [])

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
                ordenate:1,
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
        <Grid padded style={{justifyContent: 'center'}}>
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
                <Button
                style={buttonStyle1}
                onClick={(e) => updateStatus(e, item)} 
                content= 'Em preparo'
                />
                <Button
                style={buttonStyle2}
                onClick={() => updateOrder(item)} 
                content= 'Pronto'
                />
                </>
                : <Button
                style={buttonStyle2}
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