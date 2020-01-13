import React from 'react';
import { Grid } from 'semantic-ui-react';

const styleRowOrder = {
    fontWeight: 'bold',
    display: 'flex',
    flexWrap: 'wrap',
    maxWidth: '730px',
    justifyContent: 'space-between',
    margin: '0.7em 1.5em',
    padding: '1em',
    border: 'none',
    borderRadius: '2px',
    backgroundColor: 'rgba(192, 171, 149, 0.3)',
    minHeight: '-moz-fit-content'
}

const styleOrderInfo = {
    width: '65%',
    display: 'flex',
    flexDirection: 'column',
}

const styleUpdateStatus = {
    width: '30%',
    display:'flex',
    flexDirection:'column',
    margin:0
}

const styleItensOrder = {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    bottom: 0
}

const Card = (props) => {
    return(
        <>
        <Grid.Row key={props.index} className='order' style={styleRowOrder}>
        <div className='order-info' style={styleOrderInfo}>
            <p className='order-status' style={props.style}>
                {props.status}
                {props.time}
            </p>
            <div className='itens-order' style={styleItensOrder}>
                {props.itens}
                {props.price}
            </div>
        </div>
        <div className='order-info-updateStatus' style={styleUpdateStatus}>
            {props.statusTime}
            {props.client}
            {props.buttons}
        </div>
        </Grid.Row>
        </>
    )
}

export default Card;