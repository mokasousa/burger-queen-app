import React from 'react';
import { Grid } from 'semantic-ui-react';
import Button from '../Button';

const PrepOrders = (props) => {
    //console.log(new Date().getTime())

    const updateStatus = (item) => {
        console.log(item);
    }

    const timeElapsed = (timeOrder) => {
        const timediff = new Date() - timeOrder;
        const sec = Math.floor(timediff/1000);
        const min = Math.floor(sec/60);
        const hour = Math.floor(min/60);
        const time = hour%60+'h:'+min%60+'m:'+sec%60+'s'
        return time;
    }

    //props.ordersToPrep.forEach(e => console.log(timeElapsed(e.timeOrder.toDate())));
    
    return (
        <>
        <div className='orders-prep'>
            <ul>
                <Grid padded>
                {(props.ordersToPrep.length > 0) 
                ? (props.ordersToPrep.map((item, index) =>
                    <Grid.Row key={index}>
                    <li key={index}>
                        <div className='order-info'>
                             <p>{item.timeOrder.toDate().toLocaleString('pt-BR').substr(11, 19)}</p>
                             {/* <p>{setInterval(() => timeElapsed(item.timeOrder.toDate()), 1000)}</p>  */}
                             <p>Cliente: {item.name}, Mesa: {item.table}</p>
                            <p>Pedido:</p>
                            <div className='selection-order'>
                                {item.order.map((el, index) => 
                                <div key={index}><p>{el.count + ' ' + el.name}</p></div>
                                )}
                            </div>
                        </div>
                        <Button 
                            class='btn-prepare ui basic button' 
                            onClick={() => (console.log(''))} 
                            title= 'Em preparo'
                        />
                        <Button 
                            class='btn-ready ui basic button' 
                            onClick={() => (console.log(''))} 
                            title= 'Pronto'
                        />
                    </li>
                    </Grid.Row>
                    ))
                : 'Não há pedidos para preparação...'}
                </Grid>
            </ul>
        </div>
        </>
    )
}

export default PrepOrders;