import React from 'react';
import { Grid } from 'semantic-ui-react';
import './styles.css';

const Card = (props) => {
    return(
        <>
        <Grid.Row key={props.index} className='order'>
        <div className='order-info'>
            <p className='order-status' style={props.style}>
                {props.status}
                {props.time}
            </p>
            <div className='itens-order'>
                {props.itens}
                {props.price}
            </div>
        </div>
        <div className='order-info-updateStatus'>
            {props.statusTime}
            {props.client}
            {props.buttons}
        </div>
        </Grid.Row>
        </>
    )
}

export default Card;