import React from 'react';

const Card = (props) => {
    return(
    <div className={props.class} onClick={props.onClick}><i class={props.icon}></i><p>{props.text}</p></div>
    )
}

export default Card;