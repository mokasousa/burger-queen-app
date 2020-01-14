import React from 'react';
import firebase from '../../config/firebase.js';
import { Button, Grid } from 'semantic-ui-react';
import Card from '../../Components/OrdersCard';

const buttonStyle = {
    backgroundColor:'#ffffff',
    border: '2px solid #545353',
    fontSize: 'medium',
    marginTop: '0.5em'
}

const AllOrders = (props) => {

    const updateOrder = (item) => {

        firebase
            .firestore()
            .collection('Orders')
            .doc(item.id)
            .update({
                ordenate:3,
                status:'Finalizado'
            })

    }

    const timeElapsed = (timeOfOrder, timeOrderReady) => {

        const timediff = timeOrderReady - timeOfOrder;
        const sec = Math.floor(timediff/1000);
        const min = Math.floor(sec/60);
        const hour = Math.floor(min/60);
        const time = (hour >= 1)
            ? ` (Tempo de preparo: mais de 1h)`
            : ` (Tempo de preparo: ${min%60} minutos)`;
        return time;

    }
    
    return (
        <>
        <Grid padded style={{justifyContent: 'center'}}>
        {props.ordersHistory.map((item, index) =>
                <Card
                index={index}
                style={(item.status==='Finalizado')
                    ? {color: 'rgba(192, 171, 149)'}
                    : (item.status==='Pronto')
                    ? {color: '#4EC475'}
                    : {color: 'tomato'}
                }
                status={item.status}
                time={(item.timeOrderReady)
                    ? timeElapsed(item.timeOfOrder.toDate(), item.timeOrderReady.toDate())
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
                price={<p>Total: R$ {item.total}</p>}
                statusTime={
                    <>
                    <p>Pedido às: {item.timeOfOrder.toDate().toLocaleString('pt-BR').substr(11, 19)}
                    </p>
                    <p>{(item.timeOrderReady) 
                    ? `Pronto às: ${item.timeOrderReady.toDate().toLocaleString('pt-BR').substr(11, 19)}`
                    : ''}
                    </p>
                    </>
                }
                client={
                    <>
                    <p>Cliente: {item.name}</p>
                    <p>Mesa: {item.table}</p>
                    </>
                }
                buttons={(item.status==='Pronto')
                    ? <Button
                        style={buttonStyle} 
                        onClick={() => updateOrder(item)} 
                        content= 'Finalizar'
                        />
                    : ''
                }
                />
            )}
        </Grid>
        </>
    )
}

export default AllOrders;