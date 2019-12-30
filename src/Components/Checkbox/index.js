import React from 'react';

const Checkbox = (props) => {


  
    const handleChangeOption = (event) => {
        if(event.target.checked){
            props.setCheckedItems({...props.checkedItems, option:event.target.value});
        } else {
            props.setCheckedItems(props.checkedItems.filter(elem => elem.option !== event.target.value))
        }
    }  

    const handleChangeExtra = (event) => {
        console.log(event.target.checked)
        console.log(event.target.name)
        if(event.target.checked){
            props.setCheckedItems({...props.checkedItems, extra:[...props.checkedItems.extra, event.target.value]});
        } else {
            props.setCheckedItems({...props.checkedItems, extra: props.checkedItems.extra.filter(elem => elem !== event.target.value)})
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
                        onChange={handleChangeOption} 
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
                        onChange={handleChangeExtra} 
                        /> 
                        {i}
                    </label>
                ))}
            </form>
        </>
    );
}

export default Checkbox;