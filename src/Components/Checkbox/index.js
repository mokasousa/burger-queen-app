import React from 'react';
import { Form, Checkbox, Radio, Header } from 'semantic-ui-react';
import './styles.css'

const CheckboxElement = (props) => {

    const handleChange = (e, {name, value, checked}) => {

        if(checked){
            return (name === 'extra')
                ? props.setCheckedItems({...props.checkedItems, extra:[...props.checkedItems.extra, value]})
                : (name === 'option')
                ? props.setCheckedItems({...props.checkedItems, option:value})
                : false
        } else {
            return (name === 'extra')
                ? props.setCheckedItems({...props.checkedItems, extra: props.checkedItems.extra.filter(elem => elem !== value)})
                : (name === 'option')
                ? props.setCheckedItems(props.checkedItems.filter(elem => elem.option !== value))
                : false
        }
    }  
  
    return (
        <>  
          <Form className='checkbox-form'>

            <Header size='small'>{props.item.name}</Header> 
            
            <Form.Group inline>
            <label>Tipo?</label> 
            {props.item.option.map((i, index) => (
                <>
                <Form.Field key={index}>
                    <Radio
                    label={i}
                    name='option'
                    value={i}
                    checked={props.checkedItems.option === i}
                    onChange={handleChange}
                    /> 
                </Form.Field>
                </>
            ))}
            </Form.Group>

            <Form.Group inline>
            <label>Extras?</label>
            {props.item.extra.map((i, index) => (
                <>
                <Form.Field key={index}>
                    <Checkbox
                    label={i}
                    name='extra'
                    value={i}
                    checked={props.checkedItems.extra.includes(i)}
                    onChange={handleChange}
                    /> 
                </Form.Field>
                </>
            ))}
            </Form.Group>
            
        </Form>
        </>
    );
}

export default CheckboxElement;