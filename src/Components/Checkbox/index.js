import React from 'react';
import './styles.css'

const Checkbox = (props) => {

    const handleChange = (event) => {

        if(event.target.checked){
            return (event.target.name === 'extra')
                        ? props.setCheckedItems({...props.checkedItems, extra:[...props.checkedItems.extra, event.target.value]})
                        : (event.target.name === 'option')
                        ? props.setCheckedItems({...props.checkedItems, option:event.target.value})
                        : false
        } else {
            return (event.target.name === 'extra')
                        ? props.setCheckedItems({...props.checkedItems, extra: props.checkedItems.extra.filter(elem => elem !== event.target.value)})
                        : (event.target.name === 'option')
                        ? props.setCheckedItems(props.checkedItems.filter(elem => elem.option !== event.target.value))
                        : false
        }
    }  
  
    return (
        <>
            <div class='ui floating message'>
            <form>
                <div class='header'>Tipo de Hamburguer?</div>
                <div class="grouped fields">
                {props.item.option.map((i, index) => (
                    <>
                    <div class="field">
                    <input 
                    style={{margin: '1em 0.5em'}}
                    key={index}
                    type='radio'
                    name='option'
                    value={i}
                    checked={props.checkedItems.option === i}
                    onChange={handleChange} 
                    /> 
                    <label>{i}</label>
                    </div>
                    </>
                ))}
                </div>
                <div class='header'>Extras no Hamburguer?</div>
                {props.item.extra.map((i, index) => (
                    <>
                    <input 
                    style={{margin: '1em 0.5em'}}
                    key={index}
                    type='checkbox' 
                    name='extra'
                    value={i}
                    checked={props.checkedItems.extra.includes(i)}
                    onChange={handleChange}
                    /> 
                    <label>{i}</label>
                    </>
                ))}
            </form>
            </div>
        </>
    );
}

export default Checkbox;