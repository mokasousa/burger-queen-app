import React, { useState } from 'react';

const Checkbox = (props) => {
    const [checkedItems, setCheckedItems] = useState({}); 
  
    const handleChange = (event) => {
        setCheckedItems({...checkedItems, [event.target.name] : event.target.checked });
        console.log("checkedItems: ", checkedItems);
    }
  
    // const checkboxes = [
    //     {
    //         name: 'check-box-1',
    //         key: 'checkBox1',
    //         label: 'Check Box 1',
    //     },
    //     {
    //         name: 'check-box-2',
    //         key: 'checkBox2',
    //         label: 'Check Box 2',
    //     }
    // ];
  
  
    return (
        <>
            <form>
                <h3>Tipo:</h3>
                {props.item.option.map((i, index) => (
                    <label key={index}>
                        <input 
                        type='checkbox' 
                        name={i} 
                        checked={checkedItems[i]} 
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
                        name={i} 
                        checked={checkedItems[i]} 
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