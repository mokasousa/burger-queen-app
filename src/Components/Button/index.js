import React from 'react';

const Button = (props) => {
    return(
    <button className={props.class} onClick={props.onClick}><i class={props.icon}></i>{props.title}</button>
    )
}

export default Button;