import React from 'react';

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
            <form>
                <h3>Escolha o tipo:</h3>
                {props.item.option.map((i, index) => (
                    <label key={index}>
                        <input 
                        type='radio'
                        name='option'
                        value={i}
                        checked={props.checkedItems.option === i}
                        onChange={handleChange} 
                        /> 
                        {i}
                    </label>
                ))}
                <h3>Extras?</h3>
                {props.item.extra.map((i, index) => (
                    <label key={index}>
                        <input 
                        type='checkbox' 
                        name='extra'
                        value={i}
                        checked={props.checkedItems.extra.includes(i)}
                        onChange={handleChange} 
                        /> 
                        {i}
                    </label>
                ))}
            </form>
        </>
    );
}

export default Checkbox;