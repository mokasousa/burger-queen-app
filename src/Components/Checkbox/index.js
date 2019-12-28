import React from 'react';

const Checkbox = (props) => {
  
    const handleChangeOption = (event) => {
        console.log(event.target.checked)
        if(event.target.checked){
            props.setCheckedItems([...props.checkedItems, {option:event.target.name}]);
        } else {
            props.setCheckedItems(props.checkedItems.filter(elem => elem.option !== event.target.name))
        }
    }  

    const handleChangeExtra = (event) => {
        console.log(event.target.checked)
        if(event.target.checked){
            props.setCheckedItems([...props.checkedItems, {extra:event.target.name}]);
        } else {
            props.setCheckedItems(props.checkedItems.filter(elem => elem.extra !== event.target.name))
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
                        name={i}
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
                        name={i} 
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