import React, { useEffect, useState } from 'react';
import firebase from '../../config/firebase.js';
import { Grid } from 'semantic-ui-react';
import Button from '../Button';
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
        const time = hour > 0 
            ? `${hour%60} horas e ${min%60} minutos`
            : `${min%60} minutos`;
        return time;

    }
    
    return (
        <>
        <div className='orders-prep'>
            <Grid padded>
            {(props.ordersToPrep.map((item, index) =>
                    <>
                            <Grid.Row key={index} className='order'>
                            <div className='order-info'>
                                <p className='order-status'>
                                    {item.status}
                                    {timeNow !== 0 ? ` (${timeElapsed(item.timeOfOrder.toDate())})` : ''}
                                    {/* {` (${timeElapsed(item.timeOfOrder.toDate())})`} */}
                                </p>
                                <div className='itens-order'>
                                {item.order.map((el, index) =>
                                    (el.option.length !== 0)
                                    ? (<p key={index}>
                                        {`${el.count} ${el.name} ${el.option} ${el.extra.join(' ')}`}
                                        </p>)
                                    : (<p key={index}>
                                        {`${el.count} ${el.name}`}
                                        </p>)
                                    )}
                                </div>
                            </div>
                            <div className='order-info-updateStatus'>
                                <p>Pedido às: {item.timeOfOrder.toDate().toLocaleString('pt-BR').substr(11, 19)}</p>
                                <p>Cliente: {item.name}</p>
                                <p>Mesa: {item.table}</p>
                                {item.status !== 'Em preparo...'
                                    ? <Button 
                                        class='btn-prepare ui basic button' 
                                        onClick={(e) => updateStatus(e, item)} 
                                        title= 'Em preparo'
                                        />
                                    : ''}
                                <Button 
                                class='btn-ready ui basic button' 
                                onClick={() => updateOrder(item)} 
                                title= 'Pronto'
                                />
                            </div>
                        </Grid.Row>
                        </>
                ))  
                                    }
            </Grid>
        </div>
        </>
    )
}

export default PrepOrders;